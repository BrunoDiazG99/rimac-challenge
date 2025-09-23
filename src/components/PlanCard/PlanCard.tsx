import "./PlanCard.scss";

interface PlanCardProps {
  name: string;
  price: number;
  descriptions: string[];
  onSelect: () => void;
}

export const PlanCard = ({
  name,
  price,
  descriptions,
  onSelect,
}: PlanCardProps) => {
  return (
    <div className="plan-card">
      <div className="plan-header">
        <div className="plan-info">
          <h3 className="plan-name">{name}</h3>
          <div className="cost-label">COSTO DEL PLAN</div>
          <div className="plan-price">${price} al mes</div>
        </div>
        <div className="plan-icon">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M8 32h24l-2-16H10l-2 16z"
              fill="#6B7280"
              stroke="#6B7280"
              strokeWidth="2"
            />
            <path
              d="M10 16V12c0-4.418 3.582-8 8-8h4c4.418 0 8 3.582 8 8v4"
              stroke="#6B7280"
              strokeWidth="2"
              fill="none"
            />
            <rect x="16" y="20" width="8" height="4" fill="#ffffff" />
          </svg>
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
