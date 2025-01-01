import React from "react";

interface RightPanelProps {
  selectedDate: string | null;
}

const RightPanel: React.FC<RightPanelProps> = ({ selectedDate }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Details</h2>
      {selectedDate ? (
        <div>
          <p className="text-lg">Selected Date: {selectedDate}</p>
          <p className="mt-2">Details about this date will appear here.</p>
        </div>
      ) : (
        <p>Please select a date from the calendar.</p>
      )}
    </div>
  );
};

export default RightPanel;
