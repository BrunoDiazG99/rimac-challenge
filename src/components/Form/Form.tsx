import "./Form.scss";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { validateUser } from "../../utils/allowedUsers";
import { useAppStore } from "../../store/useAppStore";
import { calculateAge } from "../../utils/utils.ts";

interface FormData {
  docType: "DNI" | "RUC";
  docNumber: string;
  phoneNumber: string;
}

interface FormErrors {
  docNumber: string;
  phoneNumber: string;
  privacyPolicy: boolean;
  commercialPolicy: boolean;
}

export const Form = () => {
  const navigate = useNavigate();
  const { setUserData, setPlans } = useAppStore();

  const [formData, setFormData] = useState<FormData>({
    docType: "DNI",
    docNumber: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    docNumber: "",
    phoneNumber: "",
    privacyPolicy: false,
    commercialPolicy: false,
  });

  const [checkboxes, setCheckboxes] = useState({
    privacyPolicy: false,
    commercialPolicy: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateDocNumber = (value: string, docType: string): string => {
    if (!value.trim()) {
      return "* El documento ingresado no es válido";
    }

    if (!/^\d+$/.test(value)) {
      return "* El documento ingresado no es válido";
    }

    const requiredLength = docType === "DNI" ? 8 : 11;
    if (value.length !== requiredLength) {
      return `* El documento debe tener ${requiredLength} dígitos`;
    }

    return "";
  };

  const validatePhoneNumber = (value: string): string => {
    if (!value.trim()) {
      return "* El celular ingresado no es válido";
    }

    if (!/^\d+$/.test(value)) {
      return "* El celular ingresado no es válido";
    }

    if (value.length !== 9) {
      return "* El celular debe tener 9 dígitos";
    }

    return "";
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear errors when user starts typing
    if (field === "docNumber") {
      setErrors((prev) => ({ ...prev, docNumber: "" }));
    } else if (field === "phoneNumber") {
      setErrors((prev) => ({ ...prev, phoneNumber: "" }));
    }
  };

  const handleCheckboxChange = (field: keyof typeof checkboxes) => {
    setCheckboxes((prev) => ({ ...prev, [field]: !prev[field] }));

    // Clear checkbox errors
    if (field === "privacyPolicy") {
      setErrors((prev) => ({ ...prev, privacyPolicy: false }));
    } else if (field === "commercialPolicy") {
      setErrors((prev) => ({ ...prev, commercialPolicy: false }));
    }
  };

  const fetchUserData = async () => {
    try {
      const userResponse = await fetch(
        "https://rimac-front-end-challenge.netlify.app/api/user.json"
      );
      const userData = await userResponse.json();

      const plansResponse = await fetch(
        "https://rimac-front-end-challenge.netlify.app/api/plans.json"
      );
      const plansData = await plansResponse.json();

      console.log("User Data:", userData);
      console.log("Plans Data:", plansData);

      const userAge = calculateAge(userData.birthDay);

      setUserData({
        name: userData.name,
        lastName: userData.lastName,
        birthday: userData.birthDay,
        docType: formData.docType,
        docNumber: formData.docNumber,
        phoneNumber: formData.phoneNumber,
        age: userAge,
      });
      setPlans(plansData.list || []);

      return { userData, plansData };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // // Validate form
    // const newErrors: FormErrors = {
    //   docNumber: validateDocNumber(formData.docNumber, formData.docType),
    //   phoneNumber: validatePhoneNumber(formData.phoneNumber),
    //   privacyPolicy: !checkboxes.privacyPolicy,
    //   commercialPolicy: !checkboxes.commercialPolicy,
    // };

    // setErrors(newErrors);

    // // Check if there are any errors
    // const hasErrors = Object.entries(newErrors).some(([key, value]) => {
    //   if (key === "docNumber" || key === "phoneNumber") {
    //     return value !== "";
    //   }
    //   return value === true; // For boolean checkbox errors
    // });
    // if (hasErrors) {
    //   setIsSubmitting(false);
    //   return;
    // }

    // // Validate user against allowed users
    // const isValidUser = validateUser(
    //   formData.docType,
    //   formData.docNumber,
    //   formData.phoneNumber
    // );

    // if (!isValidUser) {
    //   setErrors((prev) => ({
    //     ...prev,
    //     docNumber: "* Usuario no encontrado",
    //     phoneNumber: "* Usuario no encontrado",
    //   }));
    //   setIsSubmitting(false);
    //   return;
    // }

    try {
      await fetchUserData();
      navigate({ to: "/plans" });
    } catch (error) {
      console.error("Error during submission:", error);
      // Handle error (could show a toast or error message)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="form-container">
      <div className="form-content">
        <div className="hero-image">
          <div className="image-placeholder">Imagen Hero</div>
        </div>
        <div className="form-section">
          <div className="form-area">
            <div className="badge">Seguro Salud Flexible</div>
            <h1>Creado para ti y tu familia</h1>
            <h2>
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </h2>

            <form className="insurance-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <select
                  className="doc-type-select"
                  value={formData.docType}
                  onChange={(e) =>
                    handleInputChange(
                      "docType",
                      e.target.value as "DNI" | "RUC"
                    )
                  }
                  disabled={isSubmitting}
                >
                  <option value="DNI">DNI</option>
                  <option value="RUC">RUC</option>
                </select>
                <div className="input-with-label">
                  <label htmlFor="docNumber">Nro. de documento</label>
                  <input
                    type="text"
                    id="docNumber"
                    value={formData.docNumber}
                    onChange={(e) =>
                      handleInputChange("docNumber", e.target.value)
                    }
                    className={errors.docNumber ? "error" : ""}
                    placeholder={
                      formData.docType === "DNI" ? "12345678" : "12345678901"
                    }
                    maxLength={formData.docType === "DNI" ? 8 : 11}
                    disabled={isSubmitting}
                  />
                  {errors.docNumber && (
                    <span className="error-message">{errors.docNumber}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Celular</label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  className={errors.phoneNumber ? "error" : ""}
                  placeholder="987654321"
                  maxLength={9}
                  disabled={isSubmitting}
                />
                {errors.phoneNumber && (
                  <span className="error-message">{errors.phoneNumber}</span>
                )}
              </div>

              <div className="checkboxes-section">
                <div
                  className={`checkbox-group ${errors.privacyPolicy ? "error" : ""}`}
                >
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    checked={checkboxes.privacyPolicy}
                    onChange={() => handleCheckboxChange("privacyPolicy")}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="privacyPolicy">
                    Acepto la Política de Privacidad
                  </label>
                </div>

                <div
                  className={`checkbox-group ${errors.commercialPolicy ? "error" : ""}`}
                >
                  <input
                    type="checkbox"
                    id="commercialPolicy"
                    checked={checkboxes.commercialPolicy}
                    onChange={() => handleCheckboxChange("commercialPolicy")}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="commercialPolicy">
                    Acepto la Política Comunicaciones Comerciales
                  </label>
                </div>
              </div>

              <button
                type="button"
                className="terms-button"
                disabled={isSubmitting}
                onClick={() => setShowModal(true)}
              >
                Aplican Términos y Condiciones
              </button>

              <button
                type="submit"
                className={`submit-button ${isSubmitting ? "loading" : ""}`}
                // onClick={handleSubmit}
              >
                {isSubmitting && <div className="spinner"></div>}
                {isSubmitting ? "Cotizando..." : "Cotiza aquí"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Aplican Términos y Condiciones</h3>
              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
                aria-label="Cerrar modal"
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>
                Encontrarás información importante sobre tus derechos y
                obligaciones al utilizar nuestros servicios. Cubren aspectos
                clave como la privacidad, la seguridad y la conducta esperada.
                Te recomendamos encarecidamente familiarizarte con estos
                términos para estar bien informado.
              </p>
              <p>
                Si tienes preguntas o inquietudes sobre los 'Términos y
                Condiciones', no dudes en ponerte en contacto con nuestro equipo
                de soporte. Estamos aquí para ayudarte y garantizar que tu
                experiencia sea transparente y segura.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
