
export interface TransactionHistory {
  id?: number;
  date: Date;
  type: string;
  amount: number;
  description?: string;
}
