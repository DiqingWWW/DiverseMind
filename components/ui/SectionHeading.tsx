import { BrandDot } from '../brand/BrandDot';
export function SectionHeading({eyebrow,title,children}:{eyebrow?:string;title:string;children?:React.ReactNode}){return <div className="section-heading">{eyebrow&&<p className="eyebrow">{eyebrow}</p>}<h2>{title.replace(/[.。]$/,'')}<BrandDot/></h2>{children&&<div className="section-description">{children}</div>}</div>}
