import "./Resume.scss";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function ResumePage() {
  return (
    <div className="resume-page">
      <Header />
      <main className="main-content">
        <div className="resume-container">
          <h1>Resumen de tu Selección</h1>
          <div className="resume-card">
            <h2>Tu Plan Seleccionado</h2>
            <div className="plan-details">
              <p>Aquí se mostrará el resumen de tu plan seleccionado</p>
              <div className="summary-items">
                <div className="summary-item">
                  <span className="label">Plan:</span>
                  <span className="value">Por seleccionar</span>
                </div>
                <div className="summary-item">
                  <span className="label">Precio:</span>
                  <span className="value">-</span>
                </div>
                <div className="summary-item">
                  <span className="label">Cobertura:</span>
                  <span className="value">-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
