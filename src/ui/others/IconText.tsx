import type { ReactNode } from "react";

interface IconTextProps {
    icon: ReactNode;
    text: string;
    className?: string;
}

export const IconText = ({ icon, text, className = "" }: IconTextProps) => {
    return (
        <div className={`flex items-center gap-1 ${className} border border-[var(--border)] p-1.5 rounded-lg cursor-pointer`}>
            <span className="text-[var(--text-secondary)]">{icon}</span>
            <span className="text-xs text-[var(--text-secondary)]">{text}</span>
        </div>
    );
};
