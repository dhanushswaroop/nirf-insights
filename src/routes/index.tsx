import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Building2, CalendarRange, LayoutGrid, Layers, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-institution.jpg";
import { STATS, TASKS } from "@/components/site/data";
import { TaskCard } from "@/components/site/TaskCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NIRF Insights — Explore India's Higher Education Rankings" },
      { name: "description", content: "Interactive visualizations and AI-powered analysis of NIRF rankings from 2017 to 2025." },
      { property: "og:title", content: "NIRF Insights — Explore India's Higher Education Rankings" },
      { property: "og:description", content: "Interactive visualizations and AI-powered analysis of NIRF rankings from 2017 to 2025." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TONE = {
  blue: { bg: "bg-stat-blue", fg: "text-stat-blue-fg", icon: Building2 },
  purple: { bg: "bg-stat-purple", fg: "text-stat-purple-fg", icon: Layers },
  green: { bg: "bg-stat-green", fg: "text-stat-green-fg", icon: CalendarRange },
  orange: { bg: "bg-stat-orange", fg: "text-stat-orange-fg", icon: MapPin },
};

function Index() {
  return (
    <main className="pb-16">
      <section className="bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 pt-10 pb-12 sm:px-6 lg:grid-cols-[46fr_54fr] lg:gap-4 lg:px-8 lg:pt-2 lg:pb-10">
          <div className="py-2 lg:py-0">
            <span className="inline-flex rounded-full border border-primary/20 bg-background px-3 py-1 text-xs font-semibold text-primary">
              NIRF Rankings • 2017–2025
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Explore, Analyse and Understand India's Higher Education Rankings
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Interactive visualizations, statistical insights and AI-powered analysis of NIRF rankings across institutions, categories and years.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/tasks" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-lift transition-colors hover:bg-primary/90">
                <LayoutGrid className="h-4 w-4" /> Explore Tasks
              </Link>
              <Link to="/assistant" className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-background px-5 py-3 font-semibold text-primary transition-colors hover:bg-accent">
                <Bot className="h-4 w-4" /> AI Assistant <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <img
            src={heroImg}
            alt="Grand Indian institution building with classical columns and NIRF on the facade"
            width={1280}
            height={960}
            className="mx-auto h-auto w-full max-w-2xl object-contain mix-blend-multiply lg:-mt-16 lg:h-[560px] lg:max-w-none lg:scale-110 lg:origin-center [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_78%)]"
          />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="-mt-8 relative grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => {
            const t = TONE[s.tone];
            return (
              <div key={s.label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-xl", t.bg, t.fg)}>
                  <t.icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-2xl font-extrabold tracking-tight sm:text-3xl">{s.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {s.label}
                    {"sub" in s && <span className={cn("ml-1 font-medium", t.fg)}>· {s.sub}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Explore Analytical Tasks</h2>
          <p className="mt-2 text-muted-foreground">Eight comprehensive analyses with five visualizations each, built on NIRF data.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 content-start">
              {TASKS.map((t) => <TaskCard key={t.id} id={t.id} name={t.name} />)}
            </div>
            <aside className="relative overflow-hidden rounded-2xl bg-hero p-6">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10" />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Bot className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 text-xl font-bold">Ask Our AI Assistant</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">
                Get instant answers, trend analysis and visualizations using natural language.
              </p>
              <Link to="/assistant" className="relative mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Open AI Assistant <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
