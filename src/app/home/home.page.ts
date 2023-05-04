import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
 produtos = [
  {'id': 0, 'nome':'PS4', 'preco':2000}
  {'id': 1, 'nome':'PS5', 'preco':5000}
  {'id': 2, 'nome':'PS3', 'preco':1000}
  {'id': 3, 'nome':'PS2', 'preco':500}
  {'id': 4, 'nome':'PS1', 'preco':100}
 ]
}
