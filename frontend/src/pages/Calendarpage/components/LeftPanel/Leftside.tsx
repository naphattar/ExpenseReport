import React from "react";

interface LeftPanelProps {
  onDateSelect: (date: string) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ onDateSelect }) => {
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // Example data
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Calendar</h2>
      <div className="grid grid-cols-7 gap-2">
        {daysInMonth.map((day) => (
          <button
            key={day}
            onClick={() => onDateSelect(`2024-12-${day.toString().padStart(2, "0")}`)}
            className="p-4 border rounded hover:bg-gray-200 text-center"
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
