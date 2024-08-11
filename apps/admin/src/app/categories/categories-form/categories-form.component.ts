import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoriesService, Category } from '@nxit/products';
import { Location } from '@angular/common';

@Component({
  selector: 'admin-categories-form',
  standalone: true,
  imports: [
    TableModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './categories-form.component.html',
})
export class CategoriesFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private catetgoryService: CategoriesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      icon: [''],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const category: Category = {
      name: this.form.controls['name'].value,
      icon: this.form.controls['icon'].value,
    };
    this.catetgoryService.createCategory(category).subscribe((res) => {
      this.location.back();
    });
  }

  get categoryForm() {
    return this.form.controls;
  }
}
