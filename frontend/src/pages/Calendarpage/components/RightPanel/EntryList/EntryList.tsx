import { memo } from "react";
import { Entry } from "../../../../../types/Entry";
import EntrySpan from "./EntrySpan/EntrySpan";

interface EntryListProps {
  loading: boolean;
  entryData: Entry[];
}

const EntryList: React.FC<EntryListProps> = ({ loading, entryData }) => {
  return (
    <div className="flex-grow p-6 bg-white rounded-lg shadow-md border">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Entries</h3>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      ) : entryData && entryData.length ? (
        <ul className="space-y-4 max-h-96 overflow-y-auto">
          {entryData.map((entry, index) => (
           <EntrySpan
            index={index}
            entry={entry}
          />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No entries for this date.</p>
      )}
    </div>
  );
};

export default memo(EntryList);
