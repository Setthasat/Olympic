"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Olympiclogo from "../../public/Olympiclogo.svg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 flex">
                    <img src={Olympiclogo.src}/>
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  Olympic Games
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#History"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                History
              </a>
              <a
                href="#SummerVSWinter"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Summer vs Winter
              </a>
              <a
                href="#Ceremonies"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Ceremonies
              </a>
              <a
                href="#Timeline"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Timeline
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
              >
                History
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
              >
                Summer vs Winter
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
              >
                Ceremonies
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
              >
                Timeline
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
