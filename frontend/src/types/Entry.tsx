export enum EntryType {
    Income = "Income",
    Expense = "Expense",
}
  
export interface Entry {
    type: EntryType;
    amount: number;
    description: string;
}
  