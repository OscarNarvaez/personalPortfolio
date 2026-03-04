"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function BodyClassManager() {
    const pathname = usePathname();

    useEffect(() => {
        const routeClasses = ["minimal", "about", "works", "contact"];
        const routeClass =
            pathname === "/"
                ? "minimal"
                : pathname === "/about"
                    ? "about"
                    : pathname === "/works"
                        ? "works"
                        : pathname === "/contact"
                            ? "contact"
                            : "";

        document.body.classList.remove(...routeClasses);
        if (routeClass) {
            document.body.classList.add(routeClass);
        }

        return () => {
            document.body.classList.remove(...routeClasses);
        };
    }, [pathname]);

    return null;
}
