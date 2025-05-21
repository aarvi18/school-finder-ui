import { ChevronRight } from "lucide-react";

export const Breadcrumb = () => {
    return (
        <nav className="text-sm py-2" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1">
                <li className="flex items-center text-gray-600">
                    Home
                    <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
                </li>
                <li className="font-medium">School finder</li>
            </ol>
        </nav>
    );
};
