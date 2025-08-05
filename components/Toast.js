'use client';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-fade-in-out z-50">
      <p>{message}</p>
      <button onClick={onClose} className="ml-4 text-white">✕</button>
    </div>
  );
}
