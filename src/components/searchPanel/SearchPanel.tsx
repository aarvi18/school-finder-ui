import { Plus } from "lucide-react";
import { IconText } from "../../ui/others/IconText";
import { SearchBar } from "../searchbar/SearchBar";
import { GridListToggle } from "./GridListToggle";

export const SearchPanel = () => {

    return (
        <main className="flex items-center justify-around p-4 gap-4 bg-white border-b border-gray-200">
            <section className="flex-1">
                <SearchBar />
            </section>

            <section className="flex gap-2">
                <GridListToggle />
                <IconText icon={<Plus className="w-5 h-5" />} text="Manage Attributes" />
            </section>
        </main>

    );
};
