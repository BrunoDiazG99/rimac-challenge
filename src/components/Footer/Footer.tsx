import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="logo">
          <img
            width="73"
            className="select-none"
            alt="logo rimac"
            src={`${import.meta.env.BASE_URL}rimac-logo-white.svg`}
          />
        </div>
        <div className="trademark">© 2025 RIMAC Seguros y Reaseguros</div>
      </div>
    </footer>
  );
};
