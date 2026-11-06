import { Link } from "@tanstack/react-router";
import { ArrowRight, ChartColumnBig } from "lucide-react";

export function TaskCard({ id, name }: { id: string; name: string }) {
  return (
    <Link
      to="/tasks/$taskId"
      params={{ taskId: id }}
      className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lift"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-stat-blue text-primary">
        <ChartColumnBig className="h-5 w-5" />
      </span>
      <span className="font-semibold">{name}</span>
      <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
    </Link>
  );
}
