"use client";
import { products } from '@/content/products';
import { useLanguage } from '../site/LanguageProvider';
import { ButtonLink } from '../ui/BrandButton';
import { ReadingPreview } from './ReadingPreview';
import { ProductCard } from './ProductCard';
import { FlowLines } from '../brand/FlowLines';
export function ProductCollection(){const {t}=useLanguage();const reading=products[0],pause=products[1];return <div className="product-collection">
<article className="featured-product" id="reading"><div className="featured-top"><span className="small-label">01 / DiverseMind Reading</span><span className="pill">{t('In the spotlight','主打产品')}</span></div><div className="featured-grid"><div className="featured-copy"><h2>{t(reading.headline[0],reading.headline[1])}</h2><p className="product-lede">{t(reading.description[0],reading.description[1])}</p><p>{t(reading.detail[0],reading.detail[1])}</p><p className="product-motto">{t(reading.motto[0],reading.motto[1])}</p><ButtonLink href={reading.url} target="_blank" rel="noreferrer">{t(reading.cta[0],reading.cta[1])}</ButtonLink></div><div className="featured-reader"><ReadingPreview/></div></div></article>
<article className="pause-product" id="pause"><div className="pause-message"><span className="small-label">02 / Pause Lab</span><h2>{t('Give yourself','给自己')}<br/>{t('a moment','一点时间')}</h2><FlowLines variant="wave"/></div><div className="pause-copy"><span className="pill">{t('Early preview','早期体验版')}</span><h3>Pause Lab</h3><p>{t(pause.description[0],pause.description[1])}</p><p>{t(pause.detail[0],pause.detail[1])}</p><p className="product-motto">{t(pause.motto[0],pause.motto[1])}</p><ButtonLink href={pause.url} target="_blank" rel="noreferrer">{t(pause.cta[0],pause.cta[1])}</ButtonLink></div></article>
<div className="more-products" id="more-products"><div className="section-title-row"><h2>{t('More ways forward','更多前进的方式')}</h2><span className="small-label">03 — 05</span></div><div className="product-grid">{products.slice(2).map((p,i)=><ProductCard key={p.id} product={p} index={i+3}/>)}</div></div></div>}
