import { createFileRoute } from "@tanstack/react-router";
import { TASKS } from "@/components/site/data";
import { TaskCard } from "@/components/site/TaskCard";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/tasks/")({
  head: () => ({
    meta: [
      { title: "Explore Tasks — NIRF Insights" },
      { name: "description", content: "Eight analytical tasks built on NIRF ranking data." },
      { property: "og:title", content: "Explore Tasks — NIRF Insights" },
      { property: "og:description", content: "Eight analytical tasks built on NIRF ranking data." },
    ],
  }),
  component: () => (
    <PlaceholderPage eyebrow="Explore" title="Analytical Tasks">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TASKS.map((t) => <TaskCard key={t.id} id={t.id} name={t.name} />)}
      </div>
    </PlaceholderPage>
  ),
});
