'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // Delay in ms
    animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'scale-in';
}

export default function RevealOnScroll({
    children,
    className,
    delay = 0,
    animation = 'fade-up'
}: RevealOnScrollProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% visible
                rootMargin: '50px', // Trigger slightly before it enters viewport
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getAnimationClass = () => {
        switch (animation) {
            case 'fade-up':
                return isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10';
            case 'fade-in':
                return isVisible ? 'animate-fade-in opacity-100' : 'opacity-0';
            case 'slide-in-right':
                return isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-10';
            case 'scale-in':
                return isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95';
            default:
                return isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10';
        }
    };

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all duration-1000 ease-out",
                getAnimationClass(),
                className
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
