import "./Header.scss";
import { useState } from "react";

interface HeaderProps {
  transparent?: boolean;
}

export const Header = ({ transparent = false }: HeaderProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleCompraClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <header className={`header ${transparent ? "transparent" : ""}`}>
        <div className="header-content container">
          <div className="logo">
            <img
              width="73"
              className="select-none"
              alt="logo rimac"
              src={`${import.meta.env.BASE_URL}rimac-logo-red.svg`}
            />
          </div>
          <div className="contact">
            <a href="#" onClick={handleCompraClick} className="compra-link">
              ¡Compra por este medio!
            </a>
            <a href="#" className="phone-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  fill="currentColor"
                />
              </svg>
              <span>(01) 411 6001</span>
            </a>
          </div>
        </div>
      </header>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <header className="modal-header">
              <button className="modal-close" onClick={closeModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <h2 className="modal-title">Compra por este medio</h2>
            </header>
            <p className="modal-text">
              Esta opción te permite comprar de manera segura y conveniente en
              línea. Descubre las ventajas y comienza tu experiencia de compra
              en nuestra plataforma.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
