import { useState } from "react";
import { Grid, List } from "lucide-react";

interface GridListToggleProps {
    onToggle?: (view: "grid" | "list") => void;
    initialView?: "grid" | "list";
}

export const GridListToggle = ({
    onToggle,
    initialView = "grid",
}: GridListToggleProps) => {
    const [view, setView] = useState<"grid" | "list">(initialView);

    const toggleView = (newView: "grid" | "list") => {
        setView(newView);
        onToggle?.(newView);
    };

    return (
        <div className="inline-flex border border-[var(--border)] rounded-md overflow-hidden bg-white">
            <button
                aria-label="Grid view"
                onClick={() => toggleView("grid")}
                className={`p-2 flex items-center justify-center border-r border-[var(--border)] ${view === "grid" ? "bg-[var(--light-gray)] text-[var(--black)]" : "text-gray-600"
                    }`}
            >
                <Grid className="h-4 w-4" />
            </button>

            <button
                aria-label="List view"
                onClick={() => toggleView("list")}
                className={`p-2 flex items-center justify-center ${view === "list" ? "bg-[var(--light-gray)] text-[var(--black)]" : "text-gray-600"
                    }`}
            >
                <List className="h-4 w-4" />
            </button>
        </div>
    );
};
