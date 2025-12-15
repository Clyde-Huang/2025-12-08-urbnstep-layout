import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCollectpage } from './product-collectpage';

describe('ProductCollectpage', () => {
  let component: ProductCollectpage;
  let fixture: ComponentFixture<ProductCollectpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCollectpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCollectpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
