import { forwardRef, type AnchorHTMLAttributes } from 'react';
/** Document navigation works without hydration or the hosted RSC transport.
 * Keep real hrefs for history, hash targets, new tabs and assistive technology. */
const SiteLink=forwardRef<HTMLAnchorElement,AnchorHTMLAttributes<HTMLAnchorElement>>(function SiteLink(props,ref){return <a ref={ref} {...props}/>});
export default SiteLink;
