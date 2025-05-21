import { ChevronDown, Plus } from "lucide-react";
import { IconText } from "../../ui/others/IconText";
import { SearchBar } from "../searchbar/SearchBar";
import { GridListToggle } from "./GridListToggle";
import { TextIcon } from "../../ui/others/TextIcon";

export const SearchPanel = () => {
    return (
        <main className="flex flex-wrap gap-1 justify-around">
            <section className="flex-1">
                <SearchBar />
            </section>

            <section className="flex flex-wrap gap-1">
                <GridListToggle />
                <IconText icon={<Plus className="w-4 h-4" />} text="Manage Attributes" />
                <TextIcon icon={<ChevronDown className="w-4 h-4" />} text="Filter" />
                <TextIcon icon={<ChevronDown className="w-4 h-4" />} text="Sort" />
            </section>
        </main>
    );
};

