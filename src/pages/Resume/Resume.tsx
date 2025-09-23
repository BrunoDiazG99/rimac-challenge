import "./Resume.scss";
import { useNavigate } from "@tanstack/react-router";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StepsHeader } from "../../components/StepsHeader";
import { ResumeCard } from "../../components/ResumeCard";
import { useAppStore } from "../../store/useAppStore";

export function ResumePage() {
  const navigate = useNavigate();
  const { userData, plans, selectedPlan } = useAppStore();

  // Find the selected plan details
  const selectedPlanDetails = plans.find(
    (plan) => plan.name.toLowerCase() === selectedPlan?.toLowerCase()
  );

  const handleBackToPlans = () => {
    navigate({ to: "/plans" });
  };

  // If no user data or selected plan, redirect to home
  if (!userData || !selectedPlanDetails) {
    return (
      <div className="resume-page">
        <Header />
        <StepsHeader currentStep={2} />
        <main className="main-content">
          <div className="resume-container container">
            <div className="error-message">
              <h2>Información no encontrada</h2>
              <p>Por favor, complete el proceso desde el inicio.</p>
              <button
                onClick={() => navigate({ to: "/" })}
                className="back-button"
              >
                Volver al inicio
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="resume-page">
      <Header />
      <StepsHeader currentStep={2} />

      <main className="main-content">
        <div className="resume-container container">
          {/* Back Button */}
          <button
            type="button"
            className="back-button"
            onClick={handleBackToPlans}
          >
            <div className="back-icon">
              <svg
                aria-hidden="true"
                focusable="false"
                width="12"
                height="12"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                />
              </svg>
            </div>
            <div className="back-text">Volver</div>
          </button>

          {/* Title */}
          <h2 className="resume-title">Resumen del seguro</h2>

          {/* Resume Card */}
          <ResumeCard userData={userData} selectedPlan={selectedPlanDetails} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
