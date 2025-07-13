"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

// Accordion Context
const AccordionContext = React.createContext<{ open: string | null; setOpen: (id: string | null) => void }>({ open: null, setOpen: () => {} });

export function Accordion({ children, type = "single", collapsible = false, className = "" }: {
  children: React.ReactNode;
  type?: "single";
  collapsible?: boolean;
  className?: string;
}) {
  const [open, setOpen] = React.useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ open, setOpen }}>
      <div className={twMerge("flex flex-col", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, children, className = "" }: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge(
      "bg-transparent shadow-xs rounded-lg border border-border px-4 last:border-b transition-all duration-300",
      className
    )} data-accordion-item>
      {React.Children.map(children, child =>
        React.isValidElement(child) ? React.cloneElement(child as any, { itemValue: value }) : child
      )}
    </div>
  );
}

export function AccordionTrigger({ children, itemValue, className = "" }: {
  children: React.ReactNode;
  itemValue?: string;
  className?: string;
}) {
  const { open, setOpen } = React.useContext(AccordionContext);
  const isOpen = open === itemValue;
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${itemValue}`}
      onClick={() => setOpen(isOpen ? null : itemValue!)}
      className={twMerge(
        "w-full flex justify-between items-center py-5 cursor-pointer hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all",
        className
      )}
    >
      <span className="flex-1 text-left flex items-center gap-3">{children}</span>
      <ChevronDown className={twMerge("ml-2 size-5 shrink-0 transition-transform duration-300", isOpen ? "rotate-180" : "rotate-0")}/>
    </button>
  );
}

export function AccordionContent({ children, itemValue, className = "" }: {
  children: React.ReactNode;
  itemValue?: string;
  className?: string;
}) {
  const { open } = React.useContext(AccordionContext);
  const isOpen = open === itemValue;
  return (
    <div
      id={`accordion-content-${itemValue}`}
      className={twMerge(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
        className
      )}
      aria-hidden={!isOpen}
    >
      {isOpen && <div>{children}</div>}
    </div>
  );
}
