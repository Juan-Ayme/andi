'use client';

import { cn } from '@/lib/utils';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="animate-fade-in-up">
            {children}
        </div>
    );
}
