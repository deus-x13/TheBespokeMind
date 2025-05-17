import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Schema.org markup for AI discoverability
const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "The Bespoke Mind",
  "description": "Leadership and team development through design thinking and human-centered approaches.",
  "url": "https://thebespokemind.com",
  "serviceType": ["Leadership Training", "Team Development", "Design Thinking Workshop"],
  "areaServed": "Global",
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://thebespokemind.com/contact"
    },
    "result": {
      "@type": "Reservation",
      "name": "Discovery Call Booking"
    }
  }
};

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
    <App />
  </HelmetProvider>
);
