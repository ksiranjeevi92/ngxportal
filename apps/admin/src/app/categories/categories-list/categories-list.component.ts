import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@nxit/products';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'admin-categories-list',
  standalone: true,
  imports: [TableModule, CardModule, ToolbarModule, ButtonModule, RouterModule],
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = [...res];
    });
  }
}
