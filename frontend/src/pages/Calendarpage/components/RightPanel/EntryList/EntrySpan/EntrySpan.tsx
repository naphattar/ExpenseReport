import { useMemo } from "react";
import { Entry, EntryType } from "../../../../../../types/Entry";

interface EntrySpanProps{
    index : number;
    entry : Entry
}

const EntrySpan : React.FC<EntrySpanProps> = ({
    index,
    entry
}) => {

    const isIncome = useMemo(() => {
        return entry.type === EntryType.Income
    },[entry.type])
    
    return(
        <li
            key={index}
            className={`p-4 flex items-center space-x-4 rounded-lg shadow-md ${
            isIncome ?  "bg-green-100" : "bg-red-100"
            }`}
        >
            <div
            className={`p-2 rounded-full ${
                isIncome ?  "bg-green-500" : "bg-red-500"
            }`}
            >
            <span className="text-white font-bold">
                {isIncome ?  "+" : "-"}
            </span>
            </div>
            <div className="flex-grow">
            <p className="font-semibold">{entry.description || "No Description"}</p>
            <p className="text-sm text-gray-600">
                {entry.type}: ฿{entry.amount.toFixed(2)}
            </p>
            </div>
        </li>
    );
};

export default EntrySpan;