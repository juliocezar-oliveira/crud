import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 1. Importe o HttpClient
import { Observable } from 'rxjs'; // 2. Importe o Observable

// Importe sua interface (modelo)
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // 3. Defina a URL da sua API Spring Boot
  private apiUrl = 'http://localhost:8080/api/produtos';

  // 4. Injete o HttpClient no construtor
  constructor(private http: HttpClient) { }

  // 5. Adicione os métodos do CRUD
  
  // READ (Todos)
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  // CREATE
  addProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  // UPDATE
  updateProduto(id: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto);
  }

  // DELETE
  deleteProduto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}