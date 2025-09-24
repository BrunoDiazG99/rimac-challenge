import "./PlanCard.scss";

interface PlanCardProps {
  name: string;
  price: number;
  descriptions: string[];
  onSelect: () => void;
  planType?: "basic" | "clinic";
}

export const PlanCard = ({
  name,
  price,
  descriptions,
  onSelect,
  planType,
}: PlanCardProps) => {
  const getPlanIcon = () => {
    if (planType === "basic") {
      return `${import.meta.env.BASE_URL}insurance-plan-logo-1.svg`;
    } else if (planType === "clinic") {
      return `${import.meta.env.BASE_URL}insurance-plan-logo-2.svg`;
    }
    return null;
  };
  return (
    <div className="plan-card">
      <div className="plan-header">
        <div className="plan-info">
          <h3 className="plan-name">{name}</h3>
          <div className="cost-label">COSTO DEL PLAN</div>
          <div className="plan-price">${price.toFixed(2)} al mes</div>
        </div>
        <div className="plan-icon">
          <img
            src={getPlanIcon()!}
            alt={`${name} plan icon`}
            className="plan-icon-img"
            width="48"
            height="48"
          />
        </div>
      </div>

      <div className="plan-divider"></div>

      <div className="plan-features">
        <ul>
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>

      <button className="select-button" onClick={onSelect}>
        Seleccionar Plan
      </button>
    </div>
  );
};
