"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Globe2, Menu, X, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
const links=[['/about','About','关于我们'],['/work','Work','产品'],['/resources','Resources','资源'],['/contact','Contact','联系我们']];
export function Header(){
 const {language,setLanguage,t}=useLanguage(),path=usePathname();
 const [menu,setMenu]=useState(false),[languages,setLanguages]=useState(false);
 const languageBox=useRef<HTMLDivElement>(null),languageButton=useRef<HTMLButtonElement>(null),menuButton=useRef<HTMLButtonElement>(null);
 useEffect(()=>{function outside(e:PointerEvent){if(!languageBox.current?.contains(e.target as Node))setLanguages(false)}document.addEventListener('pointerdown',outside);return()=>document.removeEventListener('pointerdown',outside)},[]);
 function close(){setMenu(false);setLanguages(false)}
 return <header className="site-header" onKeyDown={e=>{if(e.key==='Escape'){if(languages){setLanguages(false);languageButton.current?.focus()}else{setMenu(false);menuButton.current?.focus()}}}}>
 <div className="header-inner"><Link href="/" className="wordmark" aria-label={t('DiverseMind home','DiverseMind 首页')} onClick={close}>DiverseMind<span>.</span></Link>
 <nav className="desktop-nav" aria-label={t('Main navigation','主导航')}>{links.map(([href,en,zh])=><Link key={href} href={href} aria-current={path?.startsWith(href)?'page':undefined} onClick={close}>{t(en,zh)}</Link>)}</nav>
 <div className="header-actions"><div className="language-control" ref={languageBox}><button className="language-trigger" ref={languageButton} onClick={()=>setLanguages(!languages)} aria-expanded={languages} aria-controls="language-options" aria-label={t('Language: English','语言：中文')}><Globe2 size={17}/><span>{language==='en'?'EN':'中文'}</span><ChevronDown size={13}/></button>{languages&&<div id="language-options" className="language-options">{(['en','zh'] as const).map(l=><button key={l} lang={l==='en'?'en':'zh-CN'} onClick={()=>{setLanguage(l);setLanguages(false);languageButton.current?.focus()}} aria-pressed={l===language}>{l==='en'?'English':'简体中文'}{l===language&&<Check size={15}/>}</button>)}</div>}</div>
 <button className="mobile-menu-button" ref={menuButton} aria-expanded={menu} aria-controls="mobile-nav" aria-label={menu?t('Close menu','关闭菜单'):t('Open menu','打开菜单')} onClick={()=>{setMenu(!menu);setLanguages(false)}}>{menu?<X/>:<Menu/>}</button></div></div>
 {menu&&<nav id="mobile-nav" className="mobile-nav" aria-label={t('Mobile navigation','移动导航')}>{links.map(([href,en,zh])=><Link key={href} href={href} aria-current={path?.startsWith(href)?'page':undefined} onClick={close}>{t(en,zh)}</Link>)}</nav>}
 </header>;
}
