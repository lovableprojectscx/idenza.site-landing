import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/portafolio")({
  beforeLoad: ({ search }) => {
    throw redirect({
      to: "/proyectos",
      search: (prev) => ({
        ...prev,
        ...search,
      }),
    });
  },
});
