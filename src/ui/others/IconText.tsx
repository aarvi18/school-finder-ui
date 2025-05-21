import type { ReactNode } from "react";

interface IconTextProps {
    icon: ReactNode;
    text: string;
    className?: string;
}

export const IconText = ({ icon, text, className = "" }: IconTextProps) => {
    return (
        <div className={`flex items-center gap-2 ${className} border border-[var(--light-gray)] px-3 rounded-lg cursor-pointer`}>
            <span>{icon}</span>
            <span className="text-sm text-black">{text}</span>
        </div>
    );
};
