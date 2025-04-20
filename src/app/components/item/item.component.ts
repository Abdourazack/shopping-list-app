import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: any;

  @Output() onTogglePurchased = new EventEmitter<void>();
  @Output() onRemove = new EventEmitter<void>();

  togglePurchased() {
    this.onTogglePurchased.emit();
  }

  removeItem() {
    this.onRemove.emit();
  }
}
