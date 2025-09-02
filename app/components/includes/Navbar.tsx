"use client";

import { ThemeSwitcher } from "../ui/theme-switcher";

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-blue-700">
      <ThemeSwitcher />
    </header>
  );
}
