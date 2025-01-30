
import React from "react";
import { Link } from "react-router-dom";
import "../style/pages/Terms.css";

const TermnsAndConditions = () => {
  return (
    <div className="terms-page">
      <h1>Términos y Condiciones</h1>
      <p>Última actualización: 29 de enero de 2025</p>

      <section>
        <h2>1. Introducción</h2>
        <p>
          Bienvenido a nuestra radio online. Al acceder a nuestro sitio web y utilizar nuestros servicios, aceptas cumplir estos términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor, no utilices nuestros servicios.
        </p>
      </section>

      <section>
        <h2>2. Uso del Sitio Web</h2>
        <p>
          Nuestro sitio web y los servicios proporcionados están destinados exclusivamente para uso personal y no comercial. No debes copiar, modificar, distribuir o utilizar nuestro contenido sin autorización.
        </p>
      </section>

      <section>
        <h2>3. Registro y Cuentas</h2>
        <p>
          Para acceder a ciertas funciones, puedes necesitar crear una cuenta. Eres responsable de mantener la confidencialidad de tu cuenta y de todas las actividades realizadas bajo tu acceso.
        </p>
      </section>

      <section>
        <h2>4. Propiedad Intelectual</h2>
        <p>
          Todo el contenido de nuestra radio online, incluidos textos, imágenes, logotipos y música, está protegido por derechos de autor y otras leyes de propiedad intelectual. No puedes reproducir ni distribuir nuestro contenido sin permiso.
        </p>
      </section>

      <section>
        <h2>5. Contenido de Terceros</h2>
        <p>
          Nuestro sitio puede incluir enlaces a sitios web de terceros. No tenemos control sobre su contenido y no nos hacemos responsables por su uso o disponibilidad.
        </p>
      </section>

      <section>
        <h2>6. Uso Aceptable</h2>
        <p>
          No debes usar nuestro sitio para actividades ilegales, fraudulentas o que infrinjan derechos de terceros. Nos reservamos el derecho de suspender cuentas que violen estas normas.
        </p>
      </section>

      <section>
        <h2>7. Limitación de Responsabilidad</h2>
        <p>
          No garantizamos que el sitio esté libre de errores o que funcione sin interrupciones. No seremos responsables de daños directos o indirectos derivados del uso del sitio.
        </p>
      </section>

      <section>
        <h2>8. Modificaciones</h2>
        <p>
          Podemos actualizar estos términos en cualquier momento. Te notificaremos sobre cambios importantes mediante el sitio web o correo electrónico.
        </p>
      </section>

      <section>
        <h2>9. Contacto</h2>
        <p>
          Si tienes dudas sobre estos términos, contáctanos a través de nuestra <Link to="/contact">página de contacto</Link>.
        </p>
      </section>

      <div className="terms-footer">
        <p>
          Al utilizar nuestro sitio, aceptas estos términos y condiciones. Si no estás de acuerdo, por favor deja de utilizar nuestros servicios.
        </p>
      </div>
    </div>
  );
};

export default TermnsAndConditions;
