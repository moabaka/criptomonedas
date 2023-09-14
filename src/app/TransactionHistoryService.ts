// transaction-history.service.ts
import { Injectable } from '@angular/core';
import { TransactionHistory } from './transaction-history.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionHistoryService {
  private transactionHistory: TransactionHistory[] = [];

  constructor() {}

  addTransaction(transaction: TransactionHistory) {
    this.transactionHistory.push(transaction);
  }

  getTransactionHistory(): TransactionHistory[] {
    return this.transactionHistory;
  }
}
