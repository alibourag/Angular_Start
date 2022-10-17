import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduclsListComponent } from './producls-list.component';

describe('ProduclsListComponent', () => {
  let component: ProduclsListComponent;
  let fixture: ComponentFixture<ProduclsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduclsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduclsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
