import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Product } from '../../model/model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productDetails: Array<Product> = [];
  isCreateProduct: boolean = false;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getProductDetails().subscribe({
      next: (res) => {
        this.productDetails = res.data;
        // console.log(this.productDetails);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }

  //for open create product component
  openProductModal() {
    this.isCreateProduct = true;
  }
  //for delete product
  onClickDelete(id: string) {
    this.api.deleteProductDetails(id).subscribe({
      next: (res) => {
        // console.log(res);
      },
    });
  }
}
