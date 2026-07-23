import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ayacucho")({
  beforeLoad: () => {
    throw redirect({
      to: "/diseno-web-ayacucho",
    });
  },
});
