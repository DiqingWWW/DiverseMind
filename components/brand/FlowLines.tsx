"use client";
import { useCallback, useEffect, useRef } from 'react';
import { RotateCcw } from 'lucide-react';
import { useLanguage } from '../site/LanguageProvider';
/** Ease-study line family: 900 ms drawing, 45 ms stagger; no endless loop. */
export function FlowLines({variant='converge',className=''}:{variant?:'converge'|'wave';className?:string}){
 const {t}=useLanguage();const svg=useRef<SVGSVGElement>(null),animations=useRef<Animation[]>([]);
 const cancel=useCallback(()=>{animations.current.forEach(a=>a.cancel());animations.current=[]},[]);
 const play=useCallback(()=>{cancel();if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;svg.current?.querySelectorAll('path').forEach((path,i)=>{const length=path.getTotalLength();animations.current.push(path.animate([{strokeDasharray:`${length} ${length}`,strokeDashoffset:length},{strokeDasharray:`${length} ${length}`,strokeDashoffset:0}],{duration:900,delay:i*45,easing:'ease-out',fill:'backwards'}))})},[cancel]);
 useEffect(()=>{const el=svg.current;if(!el)return;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){play();observer.disconnect()}},{threshold:.3});observer.observe(el);const onPreference=()=>{if(reduced.matches)cancel()};reduced.addEventListener('change',onPreference);return()=>{observer.disconnect();cancel();reduced.removeEventListener('change',onPreference)}},[play,cancel]);
 return <div className={`flow-lines ${className}`}><svg ref={svg} viewBox="0 0 640 260" aria-hidden="true" focusable="false">{[22,58,94,130,166,202,238].map(y=><path key={y} d={variant==='converge'?`M 0 ${y} H 120 C 300 ${y} 285 130 500 130 H 603`:`M 0 ${y} C 145 ${y} 130 ${260-y} 280 ${260-y} S 450 ${y} 603 130`} vectorEffect="non-scaling-stroke"/>)}<circle cx="609" cy="130" r="10" className="flow-destination"/></svg><button type="button" className="flow-replay" onClick={play} aria-label={t('Replay connecting lines','重播汇流线条')}><RotateCcw size={16}/><span>{t('Again','再来一次')}</span></button></div>
}
