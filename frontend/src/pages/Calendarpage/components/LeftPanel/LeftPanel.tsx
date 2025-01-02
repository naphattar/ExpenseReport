import React, { useEffect, useMemo, useRef } from "react";
import MonthView from "./MonthView/MonthView";

interface LeftPanelProps {
  onDateSelect: (date: string) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ onDateSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null); 

  const generateMonths = () => {
    const months: { year: number; month: number; id: string }[] = [];
    const currentDate = new Date();

    const startYear = currentDate.getFullYear() - 1;
    const startMonth = 0; 

    for (let i = 0; i < 24; i++) {
      const year = startYear + Math.floor((startMonth + i) / 12);
      const month = (startMonth + i) % 12;
      const id = `${year}-${month}`;
      months.push({ year, month, id });
    }

    return months;
  };

  const months = useMemo(() => {
    return generateMonths();
  },[])

  useEffect(() => {
    if (containerRef.current) {
      const currentDate = new Date();
      const currentMonthIndex = months.findIndex(
        (m) => m.year === currentDate.getFullYear() && m.month === currentDate.getMonth()
      );

      if (currentMonthIndex !== -1) {
        const currentMonthElement = containerRef.current.children[currentMonthIndex] as HTMLElement;
        currentMonthElement?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [months]);

  return (
    <div ref={containerRef} className="p-4 h-full overflow-y-auto">
      {months.map(({ year, month, id }) => (
        <MonthView
          key={id}
          onDateSelect={onDateSelect}
          year={year}
          month={month}
        />
      ))}
    </div>
  );
};

export default LeftPanel;
