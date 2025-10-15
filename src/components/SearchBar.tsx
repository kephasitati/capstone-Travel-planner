import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  return (
    <div className="my-8">
      <div className="flex gap-2 max-w-xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onSearch()}
            placeholder="Search destinations..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
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
