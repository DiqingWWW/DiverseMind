"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useLanguage } from './LanguageProvider';
export function SiteShell({children}:{children:React.ReactNode}){const {t}=useLanguage();const path=usePathname(),previous=useRef(path),main=useRef<HTMLElement>(null);useEffect(()=>{if(previous.current!==path){main.current?.focus({preventScroll:true});previous.current=path}},[path]);return <><a className="skip-link" href="#main">{t('Skip to content','跳至正文')}</a><Header/><main id="main" ref={main} tabIndex={-1}>{children}</main><Footer/></>}
