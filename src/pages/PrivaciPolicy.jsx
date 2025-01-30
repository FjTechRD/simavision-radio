import React from "react";
import "../style/pages/PrivaciPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="container">
        <h1>Política de Privacidad</h1>
        <p>Última actualización: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Información que Recopilamos</h2>
          <p>Recopilamos información personal cuando los usuarios se registran, inician sesión o interactúan con nuestros servicios. Esto puede incluir nombre, correo electrónico y datos de uso.</p>
        </section>

        <section>
          <h2>2. Uso de la Información</h2>
          <p>La información recopilada se utiliza para mejorar nuestros servicios, personalizar la experiencia del usuario y garantizar la seguridad de la plataforma.</p>
        </section>

        <section>
          <h2>3. Compartición de Datos</h2>
          <p>No compartimos ni vendemos datos personales a terceros, salvo cuando sea necesario por razones legales o para mejorar el servicio (como integración con proveedores de streaming).</p>
        </section>

        <section>
          <h2>4. Seguridad</h2>
          <p>Tomamos medidas de seguridad para proteger la información personal de accesos no autorizados, pérdidas o alteraciones.</p>
        </section>

        <section>
          <h2>5. Derechos del Usuario</h2>
          <p>Los usuarios pueden solicitar acceso, corrección o eliminación de su información personal contactándonos en <a href="mailto:contacto@simavisionradio.com">contacto@simavisionradio.com</a>.</p>
        </section>

        <section>
          <h2>6. Cambios en la Política</h2>
          <p>Podemos actualizar esta política en cualquier momento. Se recomienda revisar esta página periódicamente para estar al tanto de los cambios.</p>
        </section>

        <p>Si tienes preguntas sobre nuestra política de privacidad, contáctanos a través de nuestro correo electrónico.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
