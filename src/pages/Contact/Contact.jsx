import React from "react";
import { Globe, Building2, Mail, ExternalLink } from "lucide-react";
import {
  FaSquareInstagram,
  FaLinkedin,
  FaSquareFacebook,
  FaTiktok,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import Logo from "./../../assets/vite.svg";
import Icon from "./../../assets/KadrX_Icon_Main.svg";
const Contact = () => {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#212832] flex flex-col items-center justify-center py-12 px-4 font-sans"
    >
      <div className="w-full max-w-md space-y-6">
        {/* قسم المواقع الإلكترونية (Cards) */}
        <img src={Logo} alt="Logo" className="w-full h-full " />
        <div>
          <h2 className="text-lg  font-semibold text-slate-700 my-6 ">
            صفحات التواصل الإجتماعي الخاصة بنا
          </h2>

          <div className="grid my-5 grid-cols-5 gap-3">
            <SocialButton
              icon={<FaSquareFacebook size={22} />}
              href="https://www.facebook.com/kadrx.sy"
              label="Facebook"
              color="hover:bg-blue-600 hover:text-white"
            />
            <SocialButton
              icon={<FaLinkedin size={22} />}
              href="https://www.linkedin.com/showcase/kadrx/"
              label="LinkedIn"
              color="hover:bg-blue-600 hover:text-white"
            />
            <SocialButton
              icon={<FaTiktok />}
              href="https://www.tiktok.com/@kadrx.sy?_r=1&_t=ZG-97t0FZgsOpM"
              label="Twitter"
              color="hover:bg-slate-900 hover:text-white"
            />
            <SocialButton
              icon={<FaInstagram size={22} />}
              href="https://www.instagram.com/kadrx.sy?igsh=MXA4M3hwNTdpNGl2bA%3D%3D&utm_source=qr"
              label="Instagram"
              color="hover:bg-pink-600 hover:text-white"
            />
            <SocialButton
              icon={<Mail size={22} />}
              href="mailto:info@kadrx.com"
              label="Email"
              color="hover:bg-red-500 hover:text-white"
            />
          </div>
        </div>
        <hr className="border-slate-200 my-8" />

        {/* قسم منصات التواصل الاجتماعي */}
        <div className="space-y-4">
          <a
            href="https://kadrx.com/"
            className="group flex items-center justify-between p-4 bg-[#EF530B] border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-black transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white text-[#EF530B] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <img src={Icon} className=" h-full p-1" />{" "}
              </div>
              <div>
                <h3 className="font-bold text-white">KadrX</h3>
                <p className="text-sm text-white">الموقع الرسمي للشركة</p>
              </div>
            </div>
            <ExternalLink
              size={20}
              className="text-white group-hover:text-white transition-colors"
            />
          </a>
          <a
            href="https://wa.me/+963997602953"
            className="group flex items-center justify-between p-4 bg-[#208747] border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-black transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white text-[#208747] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <FaWhatsapp size={38} />
              </div>
              <div>
                <h3 className="font-bold text-white">واتساب</h3>
                <p className="text-sm text-white">التواصل المباشر مع الشركة</p>
              </div>
            </div>
            <ExternalLink
              size={20}
              className="text-white group-hover:text-white transition-colors"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

// مكون فرعي لأزرار التواصل الاجتماعي لتنظيف الكود
const SocialButton = ({ icon, href, label, color }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className={`flex items-center justify-center h-14 bg-white border border-slate-200 rounded-2xl text-slate-600 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md ${color}`}
    >
      {icon}
    </a>
  );
};

export default Contact;
