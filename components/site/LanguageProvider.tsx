"use client";
import { createContext, useContext, useEffect, useSyncExternalStore } from 'react';
type Language = 'en' | 'zh';
const Context = createContext<{language:Language;setLanguage:(v:Language)=>void;t:(en:string,zh:string)=>string}>({language:'en',setLanguage:()=>{},t:en=>en});
let memory:Language='en';
function subscribe(callback:()=>void){window.addEventListener('diversemind-language',callback);window.addEventListener('storage',callback);return()=>{window.removeEventListener('diversemind-language',callback);window.removeEventListener('storage',callback)}}
function snapshot():Language{try{return localStorage.getItem('diversemind-language')==='zh'?'zh':'en'}catch{return memory}}
const serverSnapshot=():Language=>'en';
export function LanguageProvider({children}:{children:React.ReactNode}) {
 const language=useSyncExternalStore(subscribe,snapshot,serverSnapshot);
 useEffect(()=>{document.documentElement.lang=language==='en'?'en':'zh-CN'},[language]);
 function setLanguage(v:Language){memory=v;try{localStorage.setItem('diversemind-language',v)}catch{}window.dispatchEvent(new Event('diversemind-language'))}
 return <Context.Provider value={{language,setLanguage,t:(en,zh)=>language==='en'?en:zh}}>{children}</Context.Provider>;
}
export const useLanguage=()=>useContext(Context);
