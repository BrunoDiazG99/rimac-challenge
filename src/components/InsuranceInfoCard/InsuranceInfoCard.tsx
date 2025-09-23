import "./InsuranceInfoCard.scss";

interface InsuranceInfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

export const InsuranceInfoCard = ({
  title,
  description,
  icon,
  isSelected,
  onClick,
}: InsuranceInfoCardProps) => {
  return (
    <div
      className={`insurance-info-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="selection-indicator">
        {isSelected && (
          <div className="check-circle">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M10 3L4.5 8.5L2 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="card-content">
        <div className="icon-section">
          {icon || (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#E5E7EB" />
              <circle cx="20" cy="16" r="6" fill="#9CA3AF" />
              <path
                d="M8 32c0-6.627 5.373-12 12-12s12 5.373 12 12"
                fill="#9CA3AF"
              />
            </svg>
          )}
        </div>

        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};
