import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { RouterOutlet } from '@angular/router';

// 1. Importe seu serviço e modelo

import { Produto } from './models/produto';
import { ProdutoService } from './services/produto.service.spec';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Adicione CommonModule aos imports (para usar *ngFor)
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit { // 3. Implemente OnInit
  title = 'crud-frontend';
  
  // 4. Crie uma variável para guardar a lista
  produtos: Produto[] = [];

  // 5. Injete o serviço no construtor
  constructor(private produtoService: ProdutoService) { }

  // 6. Use o ngOnInit para carregar os dados
  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getProdutos().subscribe(dados => {
      this.produtos = dados;
    });
  }
}