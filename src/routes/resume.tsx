import { createFileRoute } from "@tanstack/react-router";
import { ResumePage } from "../pages/Resume";

type ResumeSearch = {
  plan?: "basico" | "premium" | "elite";
};

export const Route = createFileRoute("/resume")({
  component: Resume,
  validateSearch: (search: Record<string, unknown>): ResumeSearch => ({
    plan: search.plan as ResumeSearch["plan"],
  }),
});

function Resume() {
  return <ResumePage />;
}
