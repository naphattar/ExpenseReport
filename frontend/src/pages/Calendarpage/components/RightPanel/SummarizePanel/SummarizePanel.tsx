import { memo, useMemo } from "react";

interface SummarizePanelProps{
    totalIncome : number;
    totalExpense : number;
}

const SummarizePanel : React.FC<SummarizePanelProps> = ({
    totalIncome ,
    totalExpense,
}) => {
    const balance = useMemo(() => 
        totalIncome - totalExpense
    , [totalExpense, totalIncome]);
    
    return(
        <div className="p-6 bg-white rounded-lg shadow-md border">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Summary</h3>
        <p className="text-green-600 font-semibold">Total Income: ฿{totalIncome.toFixed(2)}</p>
        <p className="text-red-600 font-semibold">Total Expense: ฿{totalExpense.toFixed(2)}</p>
        <p
          className={`font-bold mt-2 ${
            balance >= 0 ? "text-blue-600" : "text-red-600"
          }`}
        >
          Balance: ฿{balance.toFixed(2)}
        </p>
      </div>
    );
}

export default memo(SummarizePanel);