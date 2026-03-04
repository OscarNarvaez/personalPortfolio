"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { BASE_PATH } from "@/lib/base-path";

function normalizePath(pathname: string): string {
    let normalized = pathname || "/";

    if (BASE_PATH && normalized.startsWith(BASE_PATH)) {
        normalized = normalized.slice(BASE_PATH.length) || "/";
    }

    if (!normalized.startsWith("/")) {
        normalized = `/${normalized}`;
    }

    if (normalized.length > 1 && normalized.endsWith("/")) {
        normalized = normalized.slice(0, -1);
    }

    return normalized;
}

export function BodyClassManager() {
    const pathname = usePathname();

    useEffect(() => {
        const currentPath = normalizePath(pathname);
        const routeClasses = ["minimal", "about", "works", "contact"];
        const routeClass =
            currentPath === "/"
                ? "minimal"
                : currentPath === "/about"
                    ? "about"
                    : currentPath === "/works"
                        ? "works"
                        : currentPath === "/contact"
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
