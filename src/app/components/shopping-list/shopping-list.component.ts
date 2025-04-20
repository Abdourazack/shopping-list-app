import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from '../item/item.component'; // Chemin correct
import { FilterPipe } from '../../filter.pipe'; // ou './filter.pipe' selon ton arbo

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemComponent, FilterPipe],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  items = [
    { id: 1, name: 'Pommes', purchased: false },
    { id: 2, name: 'Pain', purchased: false },
    { id: 3, name: 'Lait', purchased: false }
  ];

  searchTerm = '';
  newItemName = '';

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    const storedItems = localStorage.getItem('shoppingList');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  saveItems() {
    localStorage.setItem('shoppingList', JSON.stringify(this.items));
  }

  addItem() {
    const name = this.newItemName.trim();
    if (!name) return alert("Nom invalide");
    if (this.items.some(i => i.name.toLowerCase() === name.toLowerCase()))
      return alert("Déjà présent");

    this.items.push({ id: Date.now(), name, purchased: false });
    this.newItemName = '';
    this.saveItems();
  }

  togglePurchased(item: any) {
    item.purchased = !item.purchased;
    this.saveItems();
  }

  removeItem(itemToRemove: any) {
    this.items = this.items.filter(item => item.id !== itemToRemove.id);
    this.saveItems();
  }
}
