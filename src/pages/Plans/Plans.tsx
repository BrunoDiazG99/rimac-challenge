import "./Plans.scss";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function PlansPage() {
  return (
    <div className="plans-page">
      <Header />
      <main className="main-content">
        <div className="plans-container">
          <h1>Planes de Seguro</h1>
          <p>Aquí verás los planes disponibles</p>
          <div className="plans-grid">
            <div className="plan-card">Plan Básico</div>
            <div className="plan-card">Plan Premium</div>
            <div className="plan-card">Plan Elite</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
