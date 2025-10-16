import React from "react";

interface HeaderProps {
  itineraryCount: number;
  onToggleItinerary: () => void;
}

export function Header({ itineraryCount, onToggleItinerary }: HeaderProps) {
  return (
    <header className="border-b p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="Safari Planner Logo" 
            width={40} 
            height={40} 
            className="rounded-md"
          />
          <h1 className="text-xl font-semibold">Safari Planner</h1>
        </div>
        <button 
          onClick={onToggleItinerary} 
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          My Safari ({itineraryCount})
        </button>
      </div>
    </header>
  );
}
