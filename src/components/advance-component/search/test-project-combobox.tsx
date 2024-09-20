"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { cn, isMacOs } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "./icons";
import { Kbd } from "./kbd";

interface Project {
  id: string;
  name: string;
  categories: string[];
}

const sampleProjects: Project[] = [
  {
    id: "1",
    name: "E-commerce Platform",
    categories: ["Web Development", "React"],
  },
  {
    id: "2",
    name: "Mobile Banking App",
    categories: ["Mobile Development", "Flutter"],
  },
  {
    id: "3",
    name: "AI Chatbot",
    categories: ["Artificial Intelligence", "Python"],
  },
  {
    id: "4",
    name: "Inventory Management System",
    categories: ["Web Development", "Node.js"],
  },
  {
    id: "5",
    name: "Fitness Tracking App",
    categories: ["Mobile Development", "React Native"],
  },
  {
    id: "6",
    name: "Data Visualization Dashboard",
    categories: ["Web Development", "D3.js"],
  },
  {
    id: "7",
    name: "Social Media Analytics Tool",
    categories: ["Data Analysis", "Python"],
  },
  {
    id: "8",
    name: "Virtual Reality Game",
    categories: ["Game Development", "Unity"],
  },
  {
    id: "9",
    name: "Smart Home IoT System",
    categories: ["Internet of Things", "Embedded Systems"],
  },
  {
    id: "10",
    name: "Online Learning Platform",
    categories: ["Web Development", "React", "Node.js"],
  },
];

interface ProjectGroup {
  name: string;
  projects: Project[];
}

export function ProjectsCombobox() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [data, setData] = React.useState<ProjectGroup[] | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (debouncedQuery.length <= 0) {
      setData(null);
      return;
    }

    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const filteredProjects = sampleProjects.filter((project) =>
        project.name.toLowerCase().includes(debouncedQuery.toLowerCase())
      );

      const groupedProjects = filteredProjects.reduce((acc, project) => {
        project.categories.forEach((category) => {
          const existingGroup = acc.find((group) => group.name === category);
          if (existingGroup) {
            existingGroup.projects.push(project);
          } else {
            acc.push({ name: category, projects: [project] });
          }
        });
        return acc;
      }, [] as ProjectGroup[]);

      setData(groupedProjects);
      setLoading(false);
    }, 300); // Simulate network delay
  }, [debouncedQuery]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const onSelect = React.useCallback((callback: () => unknown) => {
    setOpen(false);
    callback();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="relative size-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <MagnifyingGlassIcon className="size-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search projects...</span>
        <span className="sr-only">Search projects</span>
        <Kbd
          title={isMacOs() ? "Command" : "Control"}
          className="pointer-events-none absolute right-1.5 top-1.5 hidden xl:block"
        >
          {isMacOs() ? "⌘" : "Ctrl"} K
        </Kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          if (!open) {
            setQuery("");
          }
        }}
      >
        <CommandInput
          placeholder="Search projects..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty
            className={cn(loading ? "hidden" : "py-6 text-center text-sm")}
          >
            No projects found.
          </CommandEmpty>
          {loading ? (
            <div className="space-y-1 overflow-hidden px-1 py-2">
              <Skeleton className="h-4 w-10 rounded" />
              <Skeleton className="h-8 rounded-sm" />
              <Skeleton className="h-8 rounded-sm" />
            </div>
          ) : (
            data?.map((group) => (
              <CommandGroup
                key={group.name}
                className="capitalize"
                heading={group.name}
              >
                {group.projects.map((item) => (
                  <CommandItem
                    key={item.id}
                    className="h-9"
                    value={item.name}
                    onSelect={() =>
                      onSelect(() => router.push(`/project/${item.id}`))
                    }
                  >
                    <Icons.product
                      className="mr-2.5 size-3 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <span className="truncate">{item.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
