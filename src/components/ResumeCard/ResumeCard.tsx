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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm9 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-2.5 3h11l1.5 6H4l1.5-6z"
              fill="currentColor"
            />
          </svg>
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
