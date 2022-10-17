import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';
import { product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-producls-list',
  templateUrl: './producls-list.component.html',
  styleUrls: ['./producls-list.component.css']
})
export class ProduclsListComponent implements OnInit, OnDestroy {

  namePage = 'Producls List'
  imageWidth = 50
  imageMargin = 2
  showImg = true
  errMessage=''
  private _filter : string = '' 
  sub !: Subscription

  constructor(private productService: ProductService, private route : ActivatedRoute){}

  get filter(){
    return this._filter
  }
  set filter(value : string){
    this._filter = value
    console.log('this is:', value)
    this.filterPoducts = this.preformProduct(value)
  }

   filterPoducts : product[] = []

  Pproduct :product[]=[]

  ngOnInit(): void { 
    this.filter = this.route.snapshot.queryParamMap.get('filterBy') || ''
    this.showImg = this.route.snapshot.queryParamMap.get('showImage') === 'true'

    this.sub = this.productService.getProducts().subscribe({
        next: prod => {this.Pproduct= prod,
          this.filterPoducts = this.Pproduct},
        error: err => this.errMessage = err
        
      })
    
  }
  ngOnDestroy(): void {
      this.sub.unsubscribe()
  }
  preformProduct(filterBy : string):product[]{
    filterBy = filterBy.toLocaleLowerCase()
    return this.Pproduct.filter((res:product)=>{
      return res.productName.toLocaleLowerCase().includes(filterBy)
  })
    
  }
  showImage(){
    this.showImg =!this.showImg 
  }
  onRatingClicked(message: string){
    this.namePage = 'Product  List :'+ message
  }

}
