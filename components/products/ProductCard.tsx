"use client";
/* Product screenshots are reused as content assets, not as the site’s visual direction. */
/* eslint-disable @next/next/no-img-element */
import { products } from '@/content/products';
import { useLanguage } from '../site/LanguageProvider';
import { ButtonLink } from '../ui/BrandButton';
export function ProductCard({product,index}:{product:typeof products[number];index:number}){const {t}=useLanguage();return <article className={`product-card product-card--${product.id}`}><div className="product-image"><img src={product.image} alt={t(`${product.name} website preview`,`${product.name} 网站预览`)} loading="lazy" width="1200" height="800"/></div><div className="product-card-copy"><p className="small-label">0{index} / {t(product.category[0],product.category[1])}</p><h3>{product.name}</h3><p>{t(product.description[0],product.description[1])}</p><ButtonLink href={product.url} variant="text" target="_blank" rel="noreferrer">{t('Explore product','了解产品')}<span className="sr-only">{t(' (opens in a new tab)','（在新标签页打开）')}</span></ButtonLink></div></article>}
