"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SectionEntranceEffects() {
    const pathname = usePathname();

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>(".hero-full-container, .section-container");

        if (!sections.length) {
            return;
        }

        sections.forEach((section, index) => {
            section.classList.remove("is-visible");
            section.classList.add("section-entrance");
            section.style.setProperty("--entrance-delay", `${index * 90}ms`);
        });

        if (!("IntersectionObserver" in window)) {
            sections.forEach((section) => section.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.18,
                rootMargin: "0px 0px -8% 0px",
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, [pathname]);

    return null;
}
