import { useState } from "react";
import { searchLocations } from "../lib/amadeusService";
import { X } from "lucide-react";

export function ApiStatus() {
  const [testing, setTesting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [minimized, setMinimized] = useState(false);

  const testConnection = async () => {
    setTesting(true);
    setStatus('idle');
    setMessage('');

    try {
      const result = await searchLocations('Nairobi');
      
      if (result?.data && result.data.length > 0) {
        setStatus('success');
        setMessage(`✓ API Connected! Found ${result.data.length} locations for "Nairobi"`);
      } else {
        setStatus('error');
        setMessage('API returned no data');
      }
    } catch (error) {
      setStatus('error');
      setMessage(`✗ API Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setTesting(false);
    }
  };

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-4 right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
        title="Show API Status"
      >
        API
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-card border rounded-lg p-4 shadow-lg max-w-sm z-40">
      <div className="flex justify-between items-start mb-2">
        <h3>Amadeus API</h3>
        <button onClick={() => setMinimized(true)} className="hover:bg-secondary rounded p-1">
          <X size={16} />
        </button>
      </div>
      
      <button
        onClick={testConnection}
        disabled={testing}
        className="w-full py-2 px-4 rounded-lg bg-primary text-primary-foreground disabled:opacity-50 mb-3"
      >
        {testing ? 'Testing...' : 'Test Connection'}
      </button>
      
      {status !== 'idle' && (
        <div className={`mb-3 p-2 rounded text-sm ${
          status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {message}
        </div>
      )}
      
      <div className="text-xs text-muted-foreground space-y-1">
        <p>✓ Flights: Real-time from API</p>
        <p>✓ Hotels: Real-time from API</p>
        <p>• Attractions: Mock data</p>
      </div>
    </div>
  );
}
