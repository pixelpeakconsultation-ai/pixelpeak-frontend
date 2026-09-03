import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsApp.css";

function FloatingWhatsApp() {
  const phoneNumber = "923007339654";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20PixelPeak,%20I%20would%20like%20to%20discuss%20a%20project.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with PixelPeak on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsApp;