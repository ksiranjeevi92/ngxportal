import { Component } from '@angular/core';
import { SHARED } from '@nxit/shared';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'admin-products-list',
  standalone: true,
  imports: [SHARED],
  providers: [MessageService],
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent {
  products = [];

  constructor(private messageService: MessageService) {}

  editProduct(productId: string): void {}

  deleteProduct(productID: string): void {}

  notify(): void {
    this.messageService.add({
      severity: 'warn',
      summary: 'message summary',
      detail: 'message details',
    });
  }
}
