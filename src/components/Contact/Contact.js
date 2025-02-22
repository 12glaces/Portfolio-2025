import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import "./Contact.styles.scss";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null); 
  const captchaRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setErrorMessage("Please complete the CAPTCHA.");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent successfully");
          setIsSent(true);
          setErrorMessage("");
          form.current.reset();
          setCaptchaToken(null);
          captchaRef.current.resetCaptcha();
        },
        (error) => {
          console.error("Email sending error:", error.text);
          setErrorMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-form-wrapper">
        <h2>Contactez Moi</h2>
        <p>Envoyez moi un message et je vous réponds au plus vite.</p>

        {isSent && <p className="success-message">Message sent successfully!</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="user_name" required />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="user_email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />

          <div className="captcha-container">
            <HCaptcha
              sitekey={process.env.REACT_APP_HCAPTCHA_SITE_KEY}
              onVerify={(token) => setCaptchaToken(token)}
              ref={captchaRef}
            />
          </div>

          <input type="submit" value="Envoyer" disabled={!captchaToken} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
