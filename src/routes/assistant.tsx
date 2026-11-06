import { createFileRoute } from "@tanstack/react-router";
import { EmptySlot, PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/assistant")({
  head: () => ({
    meta: [
      { title: "AI Assistant — NIRF Insights" },
      { name: "description", content: "Ask questions about NIRF rankings in natural language." },
      { property: "og:title", content: "AI Assistant — NIRF Insights" },
      { property: "og:description", content: "Ask questions about NIRF rankings in natural language." },
    ],
  }),
  component: () => (
    <PlaceholderPage eyebrow="AI Assistant" title="Ask Our AI Assistant">
      <EmptySlot text="The NLP assistant interface will be integrated here." />
    </PlaceholderPage>
  ),
});
