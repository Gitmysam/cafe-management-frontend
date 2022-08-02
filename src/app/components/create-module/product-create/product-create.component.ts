import { Component, OnInit } from '@angular/core';
import { Product, Category } from '../../../model/model';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  productCreate: Product = {
    _id: '',
    id: '',
    name: '',
    categoryId: '62e9809ae47376767331ef49',
    price: 0,
    description: '',
    status: false,
  };
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  onCreateProduct() {
    this.api.createProduct(this.productCreate).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        // this.router.navigate(['/product']);
      },
    });
  }
}
