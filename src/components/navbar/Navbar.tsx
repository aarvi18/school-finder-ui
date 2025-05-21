import { BellDot } from "lucide-react";
import { UserAvatar } from "./UserAvatar";

export const Navbar = () => {
  return (
    <header className="bg-[var(--light-gray)]">
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <main className="flex justify-between items-center h-16">
          <div className="text-xl font-semibold">School Finder</div>

          <div className="flex items-center gap-6">
            <button
              aria-label="Notifications"
              className="hover:text-[var(--light-surface)] transition-colors cursor-pointer"
            >
              <BellDot className="w-6 h-6" />
            </button>

            <UserAvatar />
          </div>
        </main>
      </nav>
    </header>
  );
};
