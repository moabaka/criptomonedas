import { TransactionHistoryService } from './../TransactionHistoryService';
// transaction-history.component.ts
import { Component, OnInit } from '@angular/core';

import { TransactionHistory } from './../transaction-history.model';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css'],
})
export class TransactionHistoryComponent implements OnInit {
  transactionHistory: TransactionHistory[] = [];

  constructor(private transactionHistoryService: TransactionHistoryService) {}

  ngOnInit(): void {
    this.transactionHistory = this.transactionHistoryService.getTransactionHistory();
  }
}
