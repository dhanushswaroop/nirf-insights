import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { TASKS } from "@/components/site/data";
import { EmptySlot, PlaceholderPage } from "@/components/site/PlaceholderPage";
import { useFilters } from "@/components/site/filters";

export const Route = createFileRoute("/tasks/$taskId")({
  loader: ({ params }) => {
    const task = TASKS.find((t) => t.id === params.taskId);
    if (!task) throw notFound();
    return task;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Task"} — NIRF Insights` },
      { name: "description", content: "NIRF analytical task visualizations." },
      { property: "og:title", content: `${loaderData?.name ?? "Task"} — NIRF Insights` },
      { property: "og:description", content: "NIRF analytical task visualizations." },
    ],
  }),
  component: TaskPage,
});

function TaskPage() {
  const task = Route.useLoaderData();
  const { year, category } = useFilters();
  return (
    <PlaceholderPage eyebrow={`${year} · ${category}`} title={task.name}>
      <Link to="/tasks" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> All tasks
      </Link>
      {task.tableauUrl ? (
        <iframe src={task.tableauUrl} title={task.name} className="h-[720px] w-full rounded-2xl border border-border" />
      ) : (
        <EmptySlot text="Tableau Public dashboard will be embedded here." />
      )}
    </PlaceholderPage>
  );
}
