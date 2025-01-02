import { useState, useEffect } from "react";
import { Entry, EntryType } from "../types/Entry";

const mockData: { [key: string]: Entry[] } = {
  "2025-01-01": [
    { type: EntryType.Income, amount: 5000, description: "Salary" },
    { type: EntryType.Expense, amount: 1500, description: "Groceries" },
  ],
  "2025-01-02": [
    { type: EntryType.Expense, amount: 1000, description: "Shopping" },
    { type: EntryType.Expense, amount: 200, description: "Coffee" },
  ],
  "2025-01-03": [
    { type: EntryType.Income, amount: 2000, description: "Freelance Work" },
    { type: EntryType.Expense, amount: 500, description: "Dining Out" },
  ],
  "2025-01-04": [
    { type: EntryType.Income, amount: 1200, description: "Part-time Job" },
    { type: EntryType.Expense, amount: 300, description: "Bus Fare" },
  ],
  "2025-01-05": [
    { type: EntryType.Income, amount: 800, description: "Online Sales" },
    { type: EntryType.Expense, amount: 350, description: "Movie Tickets" },
    { type: EntryType.Expense, amount: 600, description: "Dinner" },
  ],
  "2025-01-06": [
    { type: EntryType.Income, amount: 4000, description: "Salary" },
    { type: EntryType.Expense, amount: 1200, description: "Rent" },
    { type: EntryType.Expense, amount: 800, description: "Utilities" },
  ],
  "2025-01-07": [
    { type: EntryType.Income, amount: 1500, description: "Freelance Work" },
    { type: EntryType.Expense, amount: 300, description: "Groceries" },
    { type: EntryType.Expense, amount: 100, description: "Snacks" },
  ],
  "2025-01-08": [
    { type: EntryType.Income, amount: 2500, description: "Project Payment" },
    { type: EntryType.Expense, amount: 1000, description: "Shopping" },
    { type: EntryType.Expense, amount: 400, description: "Transport" },
  ],
  "2025-01-09": [
    { type: EntryType.Income, amount: 500, description: "Online Course" },
    { type: EntryType.Expense, amount: 200, description: "Coffee" },
    { type: EntryType.Expense, amount: 600, description: "Dinner Out" },
  ],
  "2025-01-10": [
    { type: EntryType.Income, amount: 2200, description: "Freelance Work" },
    { type: EntryType.Expense, amount: 150, description: "Parking" },
    { type: EntryType.Expense, amount: 350, description: "Lunch" },
  ],
};

const useMockEntries = () => {
  const [data, setData] = useState<{ [key: string]: Entry[] }>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setData(mockData);
        setLoading(false);
      }, 1000); 
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default useMockEntries;
