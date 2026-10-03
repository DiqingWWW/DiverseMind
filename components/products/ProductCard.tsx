"use client";
/* eslint-disable @next/next/no-img-element */
import type { Product } from '@/content/products';
import { useLanguage } from '../site/LanguageProvider';
import { ButtonLink } from '../ui/BrandButton';
export function ProductCard({product,index}:{product:Product;index:number}){const {t}=useLanguage();return <article className={`product-card product-card--${product.id}`} id={product.id}><img className="product-image" src={product.image} alt={t(`${product.name} website preview`,`${product.name} 网站预览`)} loading="lazy" width="1200" height="800"/><div className="product-card-copy"><p className="small-label">0{index} / {product.name}</p><h3>{t(product.headline[0],product.headline[1])}</h3><p>{t(product.description[0],product.description[1])}</p><p>{t(product.detail[0],product.detail[1])}</p><p className="product-motto">{t(product.motto[0],product.motto[1])}</p><ButtonLink href={product.url} variant="text" target="_blank" rel="noreferrer">{t(product.cta[0],product.cta[1])}<span className="sr-only">{t(' (opens in a new tab)','（在新标签页打开）')}</span></ButtonLink></div></article>}
