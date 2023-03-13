import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import CartProduct from '../../models/CartProduct';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  @Input() product: CartProduct;
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() updateTotal = new EventEmitter<void>();

  productAmount = 1;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.product)
    this.productAmount = this.product.amount
  }

  removeProduct(): void {
    this.cartService.removeFromCart(this.product.id)
    this.deleteProduct.emit(this.product.id);
    this.updateTotal.emit()
  }

  updateAmount(amount: number): void {
    this.cartService.updateAmount(this.product.id, amount);
    this.updateTotal.emit()
  }

}
