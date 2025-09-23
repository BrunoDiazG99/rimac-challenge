import "./ResumeCard.scss";
import type { UserData, Plan } from "../../store/useAppStore";

interface ResumeCardProps {
  userData: UserData;
  selectedPlan: Plan;
}

export const ResumeCard = ({ userData, selectedPlan }: ResumeCardProps) => {
  const fullName = `${userData.name} ${userData.lastName}`;

  return (
    <div className="resume-card">
      {/* Header */}
      <div className="calculated-prices">PRECIOS CALCULADOS PARA:</div>

      {/* User Info */}
      <div className="user-info">
        <div className="family-icon">
          <img
            src={`${import.meta.env.BASE_URL}family-icon.svg`}
            alt="Family icon"
            width="24"
            height="24"
          />
        </div>
        <span className="user-name">{fullName}</span>
      </div>

      {/* Divider */}
      <div className="resume-divider"></div>

      {/* Payment Responsible Section */}
      <div className="info-section">
        <h4 className="section-title">Responsable de pago</h4>
        <p className="doc-info">
          {userData.docType}: {userData.docNumber}
        </p>
        <p className="phone-info">Celular: {userData.phoneNumber}</p>
      </div>

      {/* Selected Plan Section */}
      <div className="info-section">
        <h4 className="section-title">Plan elegido</h4>
        <p className="plan-name">{selectedPlan.name}</p>
        <p className="plan-cost">
          Costo del Plan: S/ {selectedPlan.price} al mes
        </p>
      </div>
    </div>
  );
};
