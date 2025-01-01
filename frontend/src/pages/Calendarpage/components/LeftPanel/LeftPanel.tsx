import React from "react";
import MonthView from "./MonthView/MonthView";

interface LeftPanelProps {
  onDateSelect: (date: string) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ onDateSelect }) => {

  const generateMonths = () => {
    const months: { year: number; month: number }[] = [];
    const currentDate = new Date();

    for (let i = 0; i < 12; i++) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + i;
      months.push({
        year: year + Math.floor(month / 12),
        month: month % 12,
      });
    }

    return months;
  };

  const months = generateMonths();

  return (
    <div className="p-4 h-full overflow-y-auto">
      {months.map(({ year, month }) => (
        <MonthView
          onDateSelect={onDateSelect}
          year={year}
          month={month}
        />
      ))}
    </div>
  );
};

export default LeftPanel;
