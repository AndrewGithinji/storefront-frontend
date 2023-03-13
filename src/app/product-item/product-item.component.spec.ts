import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductitemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
  let fixture: ComponentFixture<ProductitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductitemComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductitemComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
