import { createContext, useContext, useState, type ReactNode } from "react";

export const YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017];
export const CATEGORIES = [
  "All Categories", "Overall", "University", "College", "Research", "Engineering",
  "Management", "Pharmacy", "Medical", "Dental", "Law", "Architecture",
  "Agriculture", "Innovation", "Open University", "Skill University", "State Public University",
];

type Filters = { year: number; category: string; setYear: (y: number) => void; setCategory: (c: string) => void };
const Ctx = createContext<Filters | null>(null);

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [year, setYear] = useState(2025);
  const [category, setCategory] = useState("All Categories");
  return <Ctx.Provider value={{ year, category, setYear, setCategory }}>{children}</Ctx.Provider>;
}

export function useFilters() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useFilters must be used within FiltersProvider");
  return c;
}
