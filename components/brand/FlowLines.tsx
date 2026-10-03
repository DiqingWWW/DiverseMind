"use client";
import { useCallback, useEffect, useRef } from 'react';

const convergePaths=[
 'M0 20 C72 16 84 88 156 64 S244 8 316 76 S404 166 540 130',
 'M0 52 C86 70 112 10 186 44 S270 170 340 116 S430 96 540 130',
 'M0 84 C64 46 124 148 198 100 S282 42 352 108 S440 142 540 130',
 'M0 116 C92 154 118 62 216 132 S302 202 382 126 S454 122 540 130',
 'M0 148 C80 112 132 212 210 156 S286 76 370 146 S448 132 540 130',
 'M0 180 C68 218 126 126 194 192 S278 236 354 160 S442 118 540 130',
 'M0 212 C96 190 106 250 190 218 S288 118 368 178 S454 140 540 130',
 'M0 244 C78 250 138 174 214 226 S318 188 396 158 S472 132 540 130'
];
const wavePaths=[
 'M0 34 C70 24 84 116 150 86 S242 18 308 94 S414 156 540 130',
 'M0 66 C68 114 118 20 184 70 S260 166 336 112 S434 104 540 130',
 'M0 98 C78 48 122 174 202 116 S282 54 356 116 S450 142 540 130',
 'M0 130 C82 176 134 82 214 142 S300 192 378 132 S458 122 540 130',
 'M0 162 C80 106 134 224 206 164 S286 82 362 150 S452 132 540 130',
 'M0 194 C66 230 126 142 196 202 S288 224 364 164 S448 126 540 130',
 'M0 226 C80 210 132 250 206 220 S310 154 386 174 S464 138 540 130'
];

/** A finite draw reveals irregular paths settling into one shared direction. */
export function FlowLines({variant='converge',className=''}:{variant?:'converge'|'wave';className?:string}){
 const svg=useRef<SVGSVGElement>(null),animations=useRef<Animation[]>([]);
 const cancel=useCallback(()=>{animations.current.forEach(animation=>animation.cancel());animations.current=[]},[]);
 const play=useCallback(()=>{cancel();if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;svg.current?.querySelectorAll('path').forEach((path,index)=>{const length=path.getTotalLength();animations.current.push(path.animate([{strokeDasharray:`${length} ${length}`,strokeDashoffset:length},{strokeDasharray:`${length} ${length}`,strokeDashoffset:0}],{duration:900,delay:index*45,easing:'cubic-bezier(.215,.61,.355,1)',fill:'backwards'}))})},[cancel]);
 useEffect(()=>{const el=svg.current;if(!el)return;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){play();observer.disconnect()}},{threshold:.3});observer.observe(el);const onPreference=()=>{if(reduced.matches)cancel()};reduced.addEventListener('change',onPreference);return()=>{observer.disconnect();cancel();reduced.removeEventListener('change',onPreference)}},[play,cancel]);
 const paths=variant==='wave'?wavePaths:convergePaths;
 return <div className={`flow-lines ${className}`}><svg ref={svg} viewBox="0 0 640 260" aria-hidden="true" focusable="false">{paths.map((path,index)=><path key={index} d={path} vectorEffect="non-scaling-stroke"/>)}<path className="flow-tail" d="M540 130 H628" vectorEffect="non-scaling-stroke"/></svg></div>
}
