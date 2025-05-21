import type { ReactNode } from "react";

interface TextIconProps {
    icon: ReactNode;
    text: string;
    className?: string;
}

export const TextIcon = ({ icon, text, className = "" }: TextIconProps) => {
    return (
        <div className={`flex items-center gap-0.5 ${className} border border-[var(--border)] p-1.5 rounded-lg cursor-pointer`}>
            <span className="text-xs text-[var(--text-secondary)]">{text}</span>
            <span className="text-[var(--text-secondary)]">{icon}</span>
        </div>
    );
};
