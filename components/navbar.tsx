"use client"

import * as React from "react";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
    return (
        <nav className="flex items-center justify-between py-4 px-8">
            <div className="flex items-center space-x-4">
                <a href="/" className="text-lg font-semibold">Home</a>
                <a href="/about" className="text-lg font-semibold">About</a>
            </div>
            <ModeToggle />
        </nav>
    );
}