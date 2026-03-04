"use client";

import { useEffect } from "react";

const STRINGS = ["I'm Oscar Narvaez", "Colombian Designer", "Working as a Freelance"];

export function HomeHeroEffects() {
    useEffect(() => {
        const typedElement = document.getElementById("typed");
        const hero = document.querySelector(".hero-full-container") as HTMLElement | null;

        if (!typedElement || !hero) {
            return;
        }

        let stringIndex = 0;
        let charIndex = 0;
        let deleting = false;
        let timeoutId: ReturnType<typeof setTimeout> | undefined;
        let frameId: number | null = null;
        let pendingX = 0;
        let pendingY = 0;

        const tick = () => {
            const current = STRINGS[stringIndex];

            if (!deleting) {
                charIndex += 1;
                typedElement.textContent = current.slice(0, charIndex);
                if (charIndex === current.length) {
                    deleting = true;
                    timeoutId = setTimeout(tick, 1200);
                    return;
                }
                timeoutId = setTimeout(tick, 85);
                return;
            }

            charIndex -= 1;
            typedElement.textContent = current.slice(0, Math.max(0, charIndex));
            if (charIndex <= 0) {
                deleting = false;
                stringIndex = (stringIndex + 1) % STRINGS.length;
            }
            timeoutId = setTimeout(tick, 40);
        };

        timeoutId = setTimeout(tick, 450);

        const applyParallax = () => {
            frameId = null;
            hero.style.transform = `translate3d(-${pendingX * 1.5}px, -${pendingY * 1.5}px, 0)`;
        };

        const handleMouseMove = (event: MouseEvent) => {
            const xFactor = window.innerWidth / 5;
            const yFactor = window.innerHeight / 5;
            pendingX = event.clientX / xFactor;
            pendingY = event.clientY / yFactor;

            if (frameId === null) {
                frameId = window.requestAnimationFrame(applyParallax);
            }
        };

        hero.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }
            hero.removeEventListener("mousemove", handleMouseMove);
            hero.style.transform = "";
        };
    }, []);

    return null;
}
