import type { ReactNode } from "react";

export function PlaceholderPage({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-primary">{eyebrow}</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <div className="mt-8">{children}</div>
    </main>
  );
}

export function EmptySlot({ text }: { text: string }) {
  return (
    <div className="grid min-h-[420px] place-items-center rounded-2xl border border-dashed border-input bg-soft p-8 text-center text-muted-foreground">
      {text}
    </div>
  );
}
