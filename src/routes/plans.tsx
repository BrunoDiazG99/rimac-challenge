import { createFileRoute } from "@tanstack/react-router";
import { PlansPage } from "../pages/Plans.tsx";

export const Route = createFileRoute("/plans")({
  component: Plans,
});

function Plans() {
  return <PlansPage />;
}
