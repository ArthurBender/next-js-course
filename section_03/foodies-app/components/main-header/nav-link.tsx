'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";

import classes from "./nav-link.module.css"

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link href={href} className={classes.link + ' ' + (path.startsWith(href) ? classes.active : undefined)} >{children}</Link>
  )
}

export default NavLink