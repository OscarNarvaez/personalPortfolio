"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const navbarTheme = pathname === "/" ? "navbar-inverse" : "navbar-default";

    return (
        <header>
            <nav className={`navbar navbar-fixed-top ${navbarTheme}`} aria-label="Main navigation">
                <div className="container">
                    <div className="navbar-collapse centered-navbar" id="navbar-collapse">
                        <ul className="nav navbar-nav">
                            {links.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={isActive ? "active" : ""}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {link.href === "/" && "01 : "}
                                            {link.href === "/works" && "02 : "}
                                            {link.href === "/about" && "03 : "}
                                            {link.href === "/contact" && "04 : "}
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
