import React from "react";
import { useTranslation, initReactI18next } from 'react-i18next'; 
import i18n from 'i18next';
import { createRoot } from 'react-dom/client';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import '../modules/i18n';
import { reactI18nextModule } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  
//    // passes i18n down to react-i18next
  .init({
      supportedLngs:['en','fa'],
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    
 // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection :{ 
         order: ['htmlTag', 'cookie', 'localStorage',  'path', 'subdomain']},
    cache :['cookie'],
    backend: {
        loadPath: '/locale/{{lng}}.json',
    },
    react :{useSuspense :false}
  });



// append app to dom
