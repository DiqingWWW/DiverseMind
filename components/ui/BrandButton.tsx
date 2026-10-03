import Link from '@/components/ui/SiteLink';
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
type Variant='primary'|'secondary'|'text';
export const Button=forwardRef<HTMLButtonElement,ButtonHTMLAttributes<HTMLButtonElement>&{variant?:Variant}>(function Button({variant='primary',className='',type='button',...props},ref){return <button ref={ref} type={type} className={`button button--${variant} ${className}`} {...props}/>});
export function ButtonLink({href,variant='primary',className='',children,...props}:AnchorHTMLAttributes<HTMLAnchorElement>&{href:string;variant?:Variant}) {
 return <Link href={href} className={`button button--${variant} ${className}`} {...props}>{children}</Link>;
}
