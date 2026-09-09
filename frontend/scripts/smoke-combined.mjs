import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.SMOKE_BASE || "http://127.0.0.1:5173";
const OUT = process.env.SMOKE_OUT || "/opt/cursor/artifacts/screenshots";

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
  });

  const checks = [];

  async function visit(pathName, assertFn, shotName) {
    await page.goto(`${BASE}${pathName}`, { waitUntil: "networkidle", timeout: 60000 });
    await assertFn();
    if (shotName) {
      await page.screenshot({ path: path.join(OUT, shotName), fullPage: false });
    }
    checks.push(`OK ${pathName}`);
  }

  await visit("/", async () => {
    await page.getByRole("heading", { name: "LunaMatch" }).waitFor();
    await page.getByText("Hackathon Pipeline").first().waitFor();
    await page.getByRole("link", { name: "Pipeline" }).waitFor();
  }, "combine-landing.png");

  await visit("/pipeline", async () => {
    await page.locator("h1", { hasText: "Hackathon Pipeline" }).waitFor();
    const frame = page.frameLocator('iframe[title*="ISRO"]');
    await frame.getByText(/Detecting Subsurface|Lunar Ice/i).first().waitFor({ timeout: 30000 });
    await frame.getByText(/CPR Threshold|Live Ice Classifier|Interactive Demo/i).first().waitFor();
  }, "combine-pipeline.png");

  await visit("/isro-pipeline/index.html", async () => {
    await page.getByText(/Detecting Subsurface|Lunar Ice/i).first().waitFor();
    await page.locator("#cpr-slider").waitFor();
  }, "combine-static-pipeline.png");

  await visit("/ice", async () => {
    await page.getByText(/LUNA\/ICE|Ice|optical|Stage/i).first().waitFor({ timeout: 30000 });
  }, "combine-ice.png");

  await visit("/briefing", async () => {
    await page.getByText(/Briefing|Chandrayaan|Mission/i).first().waitFor();
    await page.getByText(/Combined repo|ISRO pipeline|Hackathon Pipeline/i).first().waitFor();
  }, "combine-briefing.png");

  await visit("/register", async () => {
    await page.getByText(/Registration|Wizard|Upload|demo/i).first().waitFor();
  }, "combine-register.png");

  await browser.close();

  const filtered = errors.filter(
    (e) =>
      !/favicon/i.test(e) &&
      !/Failed to load resource/i.test(e) &&
      !/net::ERR_/i.test(e),
  );

  console.log(checks.join("\n"));
  if (filtered.length) {
    console.error("UI errors:\n" + filtered.join("\n"));
    process.exitCode = 1;
  } else {
    console.log("Smoke passed" + (errors.length ? " (ignored network noise)" : ""));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
