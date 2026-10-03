"use client";
import { useLanguage } from '../site/LanguageProvider';
import { ProductCollection } from '../products/ProductCollection';
import { BrandDot } from '../brand/BrandDot';
export function WorkPage(){const {t}=useLanguage();return <div className="container work-page"><header className="page-intro"><p className="eyebrow">{t('OUR WORK','我们的产品')}</p><h1>{t('Different needs.','不同的需要。')}<br/>{t('Different ways forward','不同的前进方式')}<BrandDot/></h1><p>{t('Tools for reading, emotional self-management, social learning, focus, and community — each designed around a different part of everyday life.','阅读、情绪自我管理、社交学习、专注与社区——每一个工具，都围绕日常生活中的不同需要而设计。')}</p></header><ProductCollection/></div>}
