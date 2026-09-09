import { ExternalLink, Radar, Rocket, Snowflake } from "lucide-react";
import { Link } from "react-router-dom";
import { GlassCard } from "../components/GlassCard";

const HIGHLIGHTS = [
  {
    icon: Radar,
    title: "Live CPR / DOP classifier",
    desc: "Tune polarimetric thresholds and see strict vs relaxed ice-signature outcomes.",
  },
  {
    icon: Snowflake,
    title: "Terrain · path · volume",
    desc: "Landing criteria, rover cost function, and three-scenario ice-volume bars.",
  },
  {
    icon: Rocket,
    title: "30-hour hackathon pipeline",
    desc: "Phase timeline, module code tabs, judging rubric, and a persistent checklist.",
  },
];

/**
 * Embeds the original ISRO lunar-ice static site (from this repo) inside LunaMatch
 * so both projects ship as one product.
 */
export function HackathonPipelinePage() {
  return (
    <div className="page space-y-5 !pb-4">
      <GlassCard className="!p-5">
        <p className="kicker">Combined · ISRO Lunar Ice Pipeline Site</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Hackathon Pipeline</h1>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)] md:text-base">
              The original ISRO Chandrayaan-2 DFSAR pipeline briefing from this repository — radar
              thresholds, interactive classifier, terrain map, path metrics, volume scenarios, code
              tabs, rubric, and checklist — now lives alongside LunaMatch registration and LUNA/ICE.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/ice" className="btn btn-primary">
              Open LUNA/ICE planner
            </Link>
            <a
              className="btn btn-secondary inline-flex items-center gap-2"
              href="/isro-pipeline/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Open full page <ExternalLink size={14} />
            </a>
          </div>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--border)] bg-white/3 p-4">
              <item.icon className="mb-2 text-[var(--accent)]" size={18} />
              <h2 className="text-sm font-medium">{item.title}</h2>
              <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="overflow-hidden !p-0">
        <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
          <span>Embedded · /isro-pipeline</span>
          <span>Scroll inside the frame for interactive demos</span>
        </div>
        <iframe
          title="ISRO Lunar Ice Detection pipeline site"
          src="/isro-pipeline/index.html"
          className="block h-[min(78vh,900px)] w-full border-0 bg-[#03050a]"
        />
      </GlassCard>
    </div>
  );
}
