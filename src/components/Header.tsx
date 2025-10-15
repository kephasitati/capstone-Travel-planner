interface HeaderProps {
  itineraryCount: number;
  onToggleItinerary: () => void;
}

export function Header({ itineraryCount, onToggleItinerary }: HeaderProps) {
  return (
    <header className="border-b p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1>Safari Planner</h1>
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
