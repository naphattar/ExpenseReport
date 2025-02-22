import { memo} from "react";
import { EntryType } from "../../../../../types/Entry"
import useCreateEntry from "../../../../../hooks/useCreateEntry";

interface CreateEntryPanelProps{
    selectedDate: string | null;
    type : EntryType;
    setType : (type: EntryType) => void;
    amount : number;
    setAmount : (amount: number) => void;
    description : string;
    setDescription : (description : string) => void;
}

const CreateEntryPanel : React.FC<CreateEntryPanelProps> = ({
    selectedDate,
    type,
    setType,
    amount,
    setAmount,
    description,
    setDescription
}) => {
    const createEntry = useCreateEntry()
    const handleCreateEntryClick = async() => {
      await createEntry(
        type,
        amount,
        description,
        selectedDate
      )
    }
    return(
        <div className="p-6 bg-white rounded-lg shadow-md border">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Add Entry</h3>
            <div className="flex gap-4">
              <select
                value={type}
                onChange={(e) => setType(e.target.value as EntryType)}
                className="p-2 border rounded bg-gray-100"
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="p-2 border rounded w-1/3 bg-gray-100"
              />
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 border rounded flex-grow bg-gray-100"
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 disabled:bg-gray-300"
                disabled={!amount || !description}
                onClick={handleCreateEntryClick}
              >
                Add
              </button>
            </div>
        </div>      
    )
}

export default memo(CreateEntryPanel);