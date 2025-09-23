import "./Home.scss";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";

export function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <Form />
      </main>
      <Footer />
    </div>
  );
}
