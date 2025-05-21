import { Search } from "lucide-react";
import { useState } from "react";

export const SearchBar = () => {
    const [query, setQuery] = useState("");

    return (
        <main className="relative max-w-md">
            <input
                type="text"
                placeholder="Search Colleges or Universities..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-1 border border-[var(--border)] rounded-lg bg-white text-black placeholder-[var(--gray)] focus:outline-none focus:ring-1 focus:ring-[var(--gray)] focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--text-secondary)]" />
        </main>
    );
};
