import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { product } from '../products/product';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'pm-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  pageTitle ='Edit Product'
  product : product | undefined
  errorMessage = ''

  constructor( private router: Router, private route : ActivatedRoute, 
               private productServer: ProductService
               ) { }

  ngOnInit(): void {
  }

  getProduct(id : number){
    this.productServer.getProductById(id).subscribe({
      next: product => this.onProductRetrieved(product) ,
      error: err => this.errorMessage
    })
  }
  
  onProductRetrieved(product : product|undefined ):void{
    this.product = product

    if(!this.product){
      this.pageTitle = 'No product found'
    }else{
      if(this.product.productId === 0){
        this.pageTitle = 'Add Product'
      }else{
        this.pageTitle = `Edit Product : ${this.product.productName}`
      }
    }
  }

  saveProd(){}

}
