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
        <div className="inline-flex border border-gray-300 rounded-md overflow-hidden bg-white">
            <button
                aria-label="Grid view"
                onClick={() => toggleView("grid")}
                className={`p-2 flex items-center justify-center border-r border-gray-300 ${view === "grid" ? "bg-black text-white" : "text-gray-600"
                    }`}
            >
                <Grid className="h-5 w-5" />
            </button>

            <button
                aria-label="List view"
                onClick={() => toggleView("list")}
                className={`p-2 flex items-center justify-center ${view === "list" ? "bg-black text-white" : "text-gray-600"
                    }`}
            >
                <List className="h-5 w-5" />
            </button>
        </div>
    );
};
