interface CalendarCellProps{
    onDateSelect : (date : string) => void;
    day : number;
    month : number;
    year : number;
}

const CalendarCell : React.FC<CalendarCellProps> = ({
    onDateSelect,
    day,
    month,
    year
}) => {
    return(
        <div
            key={`${year}-${month}-${day}`}
            onClick={() =>
                onDateSelect(`${year}-${(month + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`)
            }
            className="p-4 border rounded hover:bg-gray-200 text-center"
        >
            {day}
        </div>
    )
}

export default CalendarCell