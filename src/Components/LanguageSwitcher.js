// import React from "react";
// import { useTranslation } from "react-i18next";

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//     localStorage.setItem("lang", lang); // Save preference
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       <select
//         className="p-2  rounded-full bg-white text-black shadow-lg"
//         onChange={(e) => changeLanguage(e.target.value)}
//         value={i18n.language}
//       >
//         <option value="en">🇬🇧</option>
//         <option value="de">🇩🇪</option>
//         <option value="ar">🇸🇦 </option>
//         <option value="tur">🇹🇷</option>
//       </select>
//     </div>
//   );
// };

// export default LanguageSwitcher;


// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//     localStorage.setItem("lang", lang); // Save preference
//     setMenuOpen(false); // Close menu after selection
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {/* Language Icon */}
//       <button onClick={() => setMenuOpen(!menuOpen)} className="relative">
//         <img
//           src="/Assets/language-icon.png" // Ensure the correct path to your image
//           alt="Language"
//           className="w-12 h-12 cursor-pointer transition-transform duration-200 hover:scale-110"
//         />
//       </button>

//       {/* Language Menu */}
//       {menuOpen && (
//         <div className="absolute bottom-full right-0 mb-2 bg-white shadow-lg rounded-lg p-2 flex flex-col">
//           <button className="p-2 hover:bg-gray-100 rounded" onClick={() => changeLanguage("en")}>
//             🇬🇧 English
//           </button>
//           <button className="p-2 hover:bg-gray-100 rounded" onClick={() => changeLanguage("de")}>
//             🇩🇪 Deutsch
//           </button>
//           <button className="p-2 hover:bg-gray-100 rounded" onClick={() => changeLanguage("ar")}>
//             🇸🇦 العربية
//           </button>
//           <button className="p-2 hover:bg-gray-100 rounded" onClick={() => changeLanguage("tur")}>
//             🇹🇷 Türkçe
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LanguageSwitcher;


import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Define language options with images & labels
  const languages = [
    { code: "en", label: "EN", flag: "/Assets/en.png" },
    { code: "de", label: "DE", flag: "/Assets/de.png" },
    { code: "ar", label: "AR", flag: "/Assets/pala.jpg" },
    { code: "tur", label: "TR", flag: "/Assets/tr.png" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setMenuOpen(false); // Close menu after selection
  };

  // Get the currently selected language
  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Language Switcher Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center gap-2 px-3 py-1 bg-transparent rounded-full border border-white shadow-md cursor-pointer hover:bg-white transition"
      >
        <img src={currentLang.flag} alt={currentLang.label} className="w-6 h-6 rounded-full" />
        <span className="font-semibold">{currentLang.label}</span>
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute bottom-full right-0 mb-2 bg-transparent shadow-lg rounded-lg p-2 flex flex-col border border-gray-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded transition"
              onClick={() => changeLanguage(lang.code)}
            >
              <img src={lang.flag} alt={lang.label} className="w-6 h-6 rounded-full" />
              <span className="font-semibold">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
