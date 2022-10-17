import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { product } from "./product";
import { ProductService } from "./product.service";

@Injectable({
    providedIn:'root'
})

export class ProductResolver implements Resolve<product[]>{

    constructor(private productService : ProductService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<product[]> {
        const id = Number(route.paramMap.get('id'))
        return this.productService.getProduct(id)
    }

}