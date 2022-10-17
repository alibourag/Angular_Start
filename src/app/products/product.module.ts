import { NgModule } from '@angular/core';
import { ProduclsListComponent } from './producls-list/producls-list.component';
import { ProductDitComponent } from './product-detail/product-dit.component';
import { converToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ProductResolver } from './product-resolver.service';

@NgModule({
  declarations: [
    ProduclsListComponent,
    ProductDitComponent,
    converToSpacesPipe,
    EditProductComponent
  ],
  imports: [
    RouterModule.forChild([
      { path:'products', component:ProduclsListComponent},
      {path:'products/:id', canActivate:[ProductDetailGuard],
       component : ProductDitComponent, resolve:{product : ProductResolver}
      },
      {path:'products/:id/edit', component:EditProductComponent, 
      resolve:{product : ProductResolver}
    }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
