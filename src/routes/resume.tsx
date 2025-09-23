import { createFileRoute } from "@tanstack/react-router";
import { ResumePage } from "../pages/Resume.tsx";

export const Route = createFileRoute("/resume")({
  component: Resume,
});

function Resume() {
  return <ResumePage />;
}
