import "./StepsHeader.scss";

interface StepsHeaderProps {
  currentStep: 1 | 2;
}

export const StepsHeader = ({ currentStep }: StepsHeaderProps) => {
  return (
    <div className="steps-band">
      <div className="steps-container">
        <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
          <div className="step-number">1</div>
          <span className="step-text">Planes y coberturas</span>
        </div>
        <div className="step-separator">- - -</div>
        <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
          <div className="step-number">2</div>
          <span className="step-text">Resumen</span>
        </div>
      </div>
    </div>
  );
};
