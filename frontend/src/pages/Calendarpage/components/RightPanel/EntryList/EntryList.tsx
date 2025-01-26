import { memo } from "react";
import { Entry } from "../../../../../types/Entry";

interface EntryListProps{
    loading : boolean;
    entryData : Entry[];
}
const EntryList : React.FC<EntryListProps>  = ({
    loading ,
    entryData
}) => {
    return(
        <div className="flex-grow p-6 bg-white rounded-lg shadow-md border">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Entries</h3>
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            ) : entryData && entryData.length ? (
              <ul className="space-y-4">
                {entryData.map((entry, index) => (
                  <li
                    key={index}
                    className={`p-4 flex items-center space-x-4 rounded-lg shadow-md ${
                      entry.type === "Income" ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        entry.type === "Income" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      <span className="text-white font-bold">
                        {entry.type === "Income" ? "+" : "-"}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold">{entry.description || "No Description"}</p>
                      <p className="text-sm text-gray-600">
                        {entry.type}: ฿{entry.amount.toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No entries for this date.</p>
            )}
          </div>
    );
}

export default memo(EntryList);