import { createContext, useContext, useState } from "react";
import React from "react";
import { translations } from "../utils/translations/translations";
import { I18n } from "i18n-js/typings/I18n";

type Language = "es" | "en";

type LanguageContextType = {
    language: Language;
    changeLanguage: (lng: Language) => void;
    clearLanguage: () => void;

};

const i18n = new I18n (translations);
  
i18n.defaultLocale = "es";
i18n.enableFallback = true;


const LanguageContext = createContext<LanguageContextType | null>(null);
export const LanguageProvider = ({children}: {children: React.ReactNode}) =>{
    const [language, setLanguage] = useState<Language>("es");

    const changeLanguage = (lng: Language) =>{
        setLanguage(lng);
        i18n.locale = lng;
     }
    const clearLanguage = () =>{
        return '';
    }

    
    return (
        <LanguageContext.Provider value={{language, changeLanguage, clearLanguage}}>  
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if(!context) throw new Error("useLanguage debe ser utilizado dentro de LanguageProvider");
    return context;
}

