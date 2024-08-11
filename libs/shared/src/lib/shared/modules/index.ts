import { Provider } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

export const SHARED_MODULE: Provider[] = [
  TableModule,
  CardModule,
  ToolbarModule,
  ButtonModule,
  ToastModule,
];
