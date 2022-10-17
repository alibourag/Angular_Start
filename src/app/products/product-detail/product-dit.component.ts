import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product, ProductResolved } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-dit',
  templateUrl: './product-dit.component.html',
  styleUrls: ['./product-dit.component.css']
})
export class ProductDitComponent implements OnInit {

  pageTitle='Product Detail'
  errorMessage= ''

  @Input() product : product|undefined

  constructor(private route : ActivatedRoute, private router : Router, private productService : ProductService) { }

  ngOnInit(): void {
    const id =  +this.route.snapshot.params['id']
    if(id){
      this.getProduct(id) 
    }

    const resolveData: ProductResolved = this.route.snapshot.data['resolvedData']
    this.errorMessage = resolveData.error
    this.onProductRetrieved(resolveData.product)

  }
  onBack(){
    this.router.navigate(['/products'],{queryParamsHandling:'preserve'})

  }
  Edit(){
    this.router.navigate(['/products', this.product?.productId, 'edit'])
  }

  getProduct(id : number){
    this.productService.getProductById(id).subscribe({
      next:prod => this.product = prod,
      error:err => this.errorMessage = err
    })
  }
  onProductRetrieved(product : product){
    this.product= product
    if(this.product){
      this.pageTitle =`Product Detail :${this.product.productName}`
    }
  }
}
