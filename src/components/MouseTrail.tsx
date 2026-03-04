"use client";

import { useEffect, useRef } from "react";

const TRAIL_COUNT = 14;

export function MouseTrail() {
    const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let rafId = 0;

        const points = Array.from({ length: TRAIL_COUNT }, () => ({
            x: mouseX,
            y: mouseY,
        }));

        const onPointerMove = (event: PointerEvent) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        };

        const animate = () => {
            points[0].x += (mouseX - points[0].x) * 0.35;
            points[0].y += (mouseY - points[0].y) * 0.35;

            for (let i = 1; i < points.length; i += 1) {
                points[i].x += (points[i - 1].x - points[i].x) * 0.35;
                points[i].y += (points[i - 1].y - points[i].y) * 0.35;
            }

            dotRefs.current.forEach((dot, index) => {
                if (!dot) return;

                const point = points[index];
                const scale = (TRAIL_COUNT - index) / TRAIL_COUNT;
                dot.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) scale(${scale})`;
                dot.style.opacity = `${0.08 + scale * 0.55}`;
            });

            rafId = window.requestAnimationFrame(animate);
        };

        window.addEventListener("pointermove", onPointerMove, { passive: true });
        rafId = window.requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div className="mouse-trail" aria-hidden="true">
            {Array.from({ length: TRAIL_COUNT }).map((_, index) => (
                <span
                    key={index}
                    className="mouse-trail-dot"
                    ref={(element) => {
                        dotRefs.current[index] = element;
                    }}
                />
            ))}
        </div>
    );
}
