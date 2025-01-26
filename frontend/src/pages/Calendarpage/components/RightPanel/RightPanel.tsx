import React, { memo, useMemo } from "react";
import { Entry, EntryType } from "../../../../types/Entry";
import SummarizePanel from "./SummarizePanel/SummarizePanel";
import CreateEntryPanel from "./CreateEntryPanel/CreateEntryPanel";
import EntryList from "./EntryList/EntryList";

interface RightPanelProps {
  selectedDate: string | null;
  entryData: Entry[];
  loading: boolean;
}

const RightPanel: React.FC<RightPanelProps> = ({ selectedDate, entryData, loading }) => {
  const [type, setType] = React.useState<EntryType>(EntryType.Income);
  const [amount, setAmount] = React.useState<number>(0);
  const [description, setDescription] = React.useState("");

  const totalIncome = useMemo(
    () =>
      entryData
        ? entryData.filter((e) => e.type === EntryType.Income).reduce((sum, e) => sum + e.amount, 0)
        : 0,
    [entryData]
  );

  const totalExpense = useMemo(
    () =>
      entryData
        ? entryData.filter((e) => e.type === EntryType.Expense).reduce((sum, e) => sum + e.amount, 0)
        : 0,
    [entryData]
  );

  return (
    <div className="p-6 bg-blue-50 shadow-md h-full flex flex-col space-y-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Financial Overview</h2>

      {selectedDate ? (
        <div className="flex-grow flex flex-col space-y-6">
          <p className="text-lg font-semibold text-gray-700">
            Selected Date: <span className="text-blue-600">{selectedDate}</span>
          </p>
          <SummarizePanel 
            totalIncome={totalIncome} 
            totalExpense={totalExpense}           
          />
          <CreateEntryPanel 
            type={type} 
            setType={setType} 
            amount={amount} 
            setAmount={setAmount} 
            description={description} 
            setDescription={setDescription}            
          />
          <EntryList
            loading={loading}
            entryData={entryData}
          />
        </div>
      ) : (
        <p className="text-gray-500">Please select a date from the calendar.</p>
      )}
    </div>
  );
};

export default memo(RightPanel);
