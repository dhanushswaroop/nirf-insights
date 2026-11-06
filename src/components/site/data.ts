// Placeholder figures — replace with real dataset statistics later.
export const STATS = [
  { value: "7,432", label: "Total Institutions", tone: "blue" },
  { value: "17", label: "Ranking Categories", tone: "purple" },
  { value: "9", label: "Years of Data", tone: "green", sub: "2017–2025" },
  { value: "28", label: "States & UTs", tone: "orange" },
] as const;

// Tableau Public embed URLs can be added per task later.
export const TASKS = Array.from({ length: 8 }, (_, i) => ({
  id: String(i + 1),
  name: `Task ${i + 1}`,
  tableauUrl: undefined as string | undefined,
}));
