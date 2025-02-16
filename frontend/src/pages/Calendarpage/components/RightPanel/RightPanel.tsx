import React, { memo, useMemo } from "react";
import { Entry, EntryType } from "../../../../types/Entry";

interface RightPanelProps {
  selectedDate: string | null;
  entryData: Entry[]; 
  loading: boolean;
}

const RightPanel: React.FC<RightPanelProps> = ({ selectedDate, entryData, loading }) => {
  const [type, setType] = React.useState<EntryType>(EntryType.Income);
  const [amount, setAmount] = React.useState<number>(0);
  const [description, setDescription] = React.useState("");

  const totalIncome = useMemo(() => {
    return entryData ? 
      entryData.filter(e => e.type === EntryType.Income).reduce((sum, e) => sum + e.amount, 0) 
      : 0
  },[entryData])

  const totalExpense = useMemo(() => {
    return entryData ? 
      entryData.filter(e => e.type === EntryType.Expense).reduce((sum, e) => sum + e.amount, 0) 
      : 0
  },[entryData])

  const balance = useMemo(() => {
    return totalIncome - totalExpense
  },[totalExpense, totalIncome])

  return (
    <div className="p-4 bg-blue-50 shadow-md h-full">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Financial Details</h2>

      {selectedDate ? (
        <div>
          <p className="text-lg font-semibold">Selected Date: {selectedDate}</p>
          <div className="mt-4 space-y-4">
            {/* Summary */}
            <div className="p-4 bg-white rounded shadow">
              <p className="text-green-600 font-semibold">Total Income: ฿{totalIncome.toFixed(2)}</p>
              <p className="text-red-600 font-semibold">Total Expense: ฿{totalExpense.toFixed(2)}</p>
              <p className={`font-bold ${balance >= 0 ? "text-blue-600" : "text-red-600"}`}>
                Balance: ฿{balance.toFixed(2)}
              </p>
            </div>

            {/* Add Entry */}
            <div>
              <h3 className="text-md font-bold text-blue-600">Add Entry:</h3>
              <div className="flex gap-2">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as EntryType)}
                  className="p-2 border rounded"
                >
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
                <input
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="p-2 border rounded w-1/3"
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="p-2 border rounded flex-grow"
                />
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                  disabled={!amount || !description}
                >
                  Add
                </button>
              </div>
            </div>

            {/* Entries */}
            <div>
              <h3 className="text-md font-bold text-blue-600">Entries:</h3>
              {loading  ? (
                <p className="text-gray-500">Loading entries...</p>
              ) : entryData && entryData.length ? (
                <ul className="space-y-2">
                  {entryData.map((entry, index) => (
                    <li
                      key={index}
                      className={`p-3 rounded shadow ${entry.type === "Income" ? "bg-green-50" : "bg-red-50"}`}
                    >
                      <p className="font-semibold">{entry.description}</p>
                      <p className="text-sm text-gray-600">
                        {entry.type}: ฿{entry.amount.toFixed(2)}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No entries for this date.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Please select a date from the calendar.</p>
      )}
    </div>
  );
};

export default memo(RightPanel);
