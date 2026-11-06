import { Link, useRouterState } from "@tanstack/react-router";
import { BarChart3, ChevronDown, LayoutGrid, Home, Bot, Check } from "lucide-react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CATEGORIES, YEARS, useFilters } from "./filters";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home", icon: Home, match: (p: string) => p === "/" },
  { to: "/tasks", label: "Explore Tasks", icon: LayoutGrid, match: (p: string) => p.startsWith("/tasks") },
  { to: "/assistant", label: "AI Assistant", icon: Bot, match: (p: string) => p.startsWith("/assistant") },
] as const;

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { year, category, setYear, setCategory } = useFilters();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            <BarChart3 className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">NIRF Insights</span>
        </Link>
        <span className="hidden h-6 w-px bg-border md:block" />
        <span className="hidden text-sm text-muted-foreground md:block">Data Handling and Visualization (DHV)</span>

        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm font-medium hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <LayoutGrid className="h-4 w-4 text-primary" /> Explore <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-52">
            {NAV.map((n) => {
              const active = n.match(path);
              return (
                <DropdownMenuItem key={n.to} asChild>
                  <Link to={n.to} className={cn("flex items-center gap-2", active && "bg-accent font-semibold text-accent-foreground")}>
                    <n.icon className="h-4 w-4" /> {n.label}
                    {active && <Check className="ml-auto h-4 w-4" />}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="ml-auto flex items-center gap-2">
          <Select value={String(year)} onValueChange={(v) => setYear(Number(v))}>
            <SelectTrigger className="h-9 w-[96px]" aria-label="Year"><SelectValue /></SelectTrigger>
            <SelectContent>{YEARS.map((y) => <SelectItem key={y} value={String(y)}>{y}</SelectItem>)}</SelectContent>
          </Select>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="h-9 w-[170px]" aria-label="Category"><SelectValue /></SelectTrigger>
            <SelectContent>{CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}
