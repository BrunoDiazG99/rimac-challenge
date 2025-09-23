import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">RIMAC</div>
      <div className="contact">
        <p>¡Compra por este medio!</p>
        <button className="contact-button" type="button">
          Contactar
        </button>
      </div>
    </header>
  );
};
