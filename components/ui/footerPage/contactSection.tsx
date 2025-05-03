import { SocialLink } from "./socialLink";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Connect
          </span>{" "}
          With Us
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          <SocialLink
            href="https://twitter.com/SpiderSpaceHQ"
            icon={<FaXTwitter />}
            name="Twitter"
          />
          <SocialLink
            href="https://instagram.com/SpiderSpaceHQ"
            icon={<FaInstagram />}
            name="Instagram"
          />
          <SocialLink
            href="https://facebook.com/SpiderSpaceHQ"
            icon={<CiFacebook />}
            name="Facebook"
          />
          <SocialLink
            href="https://threads.net/SpiderSpaceHQ"
            icon={<FaThreads />}
            name="Threads"
          />
          <SocialLink
            href="https://wa.me/919831284491"
            icon={<FaWhatsapp />}
            name="WhatsApp"
          />
          <SocialLink
            href="https://t.me/+919831284491"
            icon={<RiTelegram2Line />}
            name="Telegram"
          />
          <SocialLink
            href="mailto:hitus@spider.space"
            icon={<MdOutlineEmail />}
            name="Email"
          />
        </div>
      </div>
    </section>
  );
}
