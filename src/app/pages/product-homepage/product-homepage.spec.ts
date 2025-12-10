import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHomepage } from './product-homepage';

describe('ProductHomepage', () => {
  let component: ProductHomepage;
  let fixture: ComponentFixture<ProductHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductHomepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHomepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
