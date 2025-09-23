import "./Plans.scss";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { InsuranceInfoCard } from "../../components/InsuranceInfoCard";
import { PlanCard } from "../../components/PlanCard";
import { useAppStore, type Plan } from "../../store/useAppStore";

type InsuranceType = "para-mi" | "para-alguien-mas" | null;

export function PlansPage() {
  const navigate = useNavigate();
  const {
    userData,
    plans,
    selectedInsuranceType,
    setSelectedInsuranceType,
    setSelectedPlan,
    resetStore,
  } = useAppStore();

  const [showPlans, setShowPlans] = useState(false);
  const [filteredPlans, setFilteredPlans] = useState<Plan[]>([]);

  const filterPlans = () => {
    const userAge = userData?.age || 100;
    console.log(userAge);
    const filteredPlans = plans.filter((plan) => plan.age >= userAge);
    setFilteredPlans(filteredPlans);
    setShowPlans(true);
  };

  const handleInsuranceTypeSelect = (type: InsuranceType) => {
    setSelectedInsuranceType(type);
    filterPlans();
  };

  const handlePlanSelect = (planName: string, planPrice: number) => {
    console.log("Selecting: ", planName, planPrice);
    setSelectedPlan(planName, planPrice);
    navigate({
      to: "/resume",
    });
  };

  const handleBackToHome = () => {
    resetStore();
    navigate({ to: "/" });
  };

  return (
    <div className="plans-page">
      <Header />

      {/* Steps Band */}
      <div className="steps-band">
        <div className="steps-container">
          <div className="step active">
            <div className="step-number">1</div>
            <span className="step-text">Planes y coberturas</span>
          </div>
          <div className="step-separator">- - -</div>
          <div className="step">
            <div className="step-number">2</div>
            <span className="step-text">Resumen</span>
          </div>
        </div>
      </div>

      <main className="main-content">
        <div className="plans-container">
          {/* Back Button */}
          <button
            type="button"
            className="back-button"
            onClick={handleBackToHome}
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

          {/* Title and Description */}
          <div className="plans-header">
            <h2 className="plans-title">
              {userData?.name || "Usuario"} ¿Para quién deseas cotizar?
            </h2>
            <h3 className="plans-description">
              Selecciona la opción que se ajuste más a tus necesidades.
            </h3>
          </div>

          {/* Insurance Type Cards */}
          <div className="insurance-cards">
            <InsuranceInfoCard
              title="Para mí"
              description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              isSelected={selectedInsuranceType === "para-mi"}
              onClick={() => handleInsuranceTypeSelect("para-mi")}
            />
            <InsuranceInfoCard
              title="Para alguien más"
              description="Realiza una cotización para uno de tus familiares o cualquier persona."
              isSelected={selectedInsuranceType === "para-alguien-mas"}
              onClick={() => handleInsuranceTypeSelect("para-alguien-mas")}
            />
          </div>

          {/* Plans Container */}
          {showPlans && selectedInsuranceType && (
            <div className="plans-list">
              {filteredPlans.map((plan, index) => (
                <PlanCard
                  key={index}
                  name={plan.name}
                  price={plan.price}
                  descriptions={plan.description}
                  onSelect={() => handlePlanSelect(plan.name, plan.price)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
