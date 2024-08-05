import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@nxit/products';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [TableModule],
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
