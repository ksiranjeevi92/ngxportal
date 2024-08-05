import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@nxit/products';
import { TableModule } from 'primeng/table';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'admin-categories-list',
  standalone: true,
  imports: [TableModule],
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.categoryService
      .getCategories()
      .pipe(takeUntilDestroyed())
      .subscribe((res) => {
        this.categories = [...res];
      });
  }
}
