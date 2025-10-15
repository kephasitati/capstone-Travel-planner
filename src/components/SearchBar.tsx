interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  return (
    <div className="my-8">
      <div className="flex gap-2 max-w-xl mx-auto">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSearch()}
          placeholder="Search destinations..."
          className="flex-1 px-4 py-2 border rounded-lg"
        />
        <button 
          onClick={onSearch} 
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
}
