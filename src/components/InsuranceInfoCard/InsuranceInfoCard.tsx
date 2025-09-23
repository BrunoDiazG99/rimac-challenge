import "./InsuranceInfoCard.scss";

interface InsuranceInfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconType?: "self" | "others";
  isSelected: boolean;
  onClick: () => void;
}

export const InsuranceInfoCard = ({
  title,
  description,
  icon,
  iconType,
  isSelected,
  onClick,
}: InsuranceInfoCardProps) => {
  const getIconSrc = () => {
    if (iconType === "self") {
      return `${import.meta.env.BASE_URL}insurance-logo-1.svg`;
    } else if (iconType === "others") {
      return `${import.meta.env.BASE_URL}insurance-logo-2.svg`;
    }
    return null;
  };

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
          {icon ? (
            icon
          ) : getIconSrc() ? (
            <img
              src={getIconSrc()!}
              alt={`Insurance icon for ${title}`}
              className="insurance-icon"
              width="48"
              height="48"
            />
          ) : (
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

        <div className="card-title">{title}</div>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};
