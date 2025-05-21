import { ChevronRight } from "lucide-react";

export const Breadcrumb = () => {
    return (
        <nav className="text-sm py-2" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1">
                <li className="flex items-center text-xs text-[var(--text-secondary)]">
                    Home
                    <ChevronRight className="mx-1 h-3 w-3 text-[var(--text-secondary)]" />
                </li>
                <li className="text-xs font-medium">School finder</li>
            </ol>
        </nav>
    );
};
