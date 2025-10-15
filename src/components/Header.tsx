import React from 'react';

interface HeaderProps {
  itineraryCount: number;
  onToggleItinerary: () => void;
}

export const Header = ({ itineraryCount, onToggleItinerary }: HeaderProps) => {
  return (
    <header className="bg-primary p-4 text-white">
      <h1>Travel Planner</h1>
      <button onClick={onToggleItinerary}>Itinerary ({itineraryCount})</button>
    </header>
  );
};