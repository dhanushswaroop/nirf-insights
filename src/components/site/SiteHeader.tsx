import { Link } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr] items-center gap-x-4 gap-y-1 px-4 py-3 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link to="/" className="flex items-center gap-2 justify-self-start">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            <BarChart3 className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">NIRF Insights</span>
        </Link>
        <span className="hidden text-center text-sm text-muted-foreground md:block">
          Data Handling and Visualization (DHV)
        </span>
        <span className="justify-self-end text-right text-sm text-muted-foreground">
          Instructor: Dr. Siddharth R
        </span>
      </div>
    </header>
  );
}
