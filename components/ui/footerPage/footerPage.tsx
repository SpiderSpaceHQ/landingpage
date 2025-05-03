import { Footer } from "../footer";
import { CTA_Section } from "./CTA-Section";
import { ContactSection } from "./contactSection";

export function FooterPage() {
  return (
    <>
      {/* CTA Section */}
      <CTA_Section />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
