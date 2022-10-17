import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDitComponent } from './product-dit.component';

describe('ProductDitComponent', () => {
  let component: ProductDitComponent;
  let fixture: ComponentFixture<ProductDitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
