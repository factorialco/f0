import { IconType } from '../../components/F0Icon';
import * as React from "react";
/**
 * Card component Root
 */
declare const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
/**
 * Card Header
 */
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
/**
 * Card Title
 */
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
/**
 * Card Subtitle
 */
declare const CardSubtitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
/**
 * Card Info
 */
declare const CardInfo: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
/**
 * Card Link
 *
 * When an `href` is provided, renders as a `Link` for navigation.
 * When only `onClick` is provided (no `href`), renders as a native `<button>`
 * for correct accessibility semantics and keyboard support.
 */
declare const CardLink: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    icon?: IconType;
} & React.RefAttributes<HTMLElement>>;
/**
 * Card Content
 */
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
/**
 * Card Footer
 */
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
/**
 * Card Comment
 */
declare const CardComment: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { Card, CardComment, CardContent, CardFooter, CardHeader, CardInfo, CardLink, CardSubtitle, CardTitle, };
