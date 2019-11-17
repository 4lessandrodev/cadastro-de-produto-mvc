import { tg } from '../frameWork.js';
import { View } from './View.js';

export class ProdutoView extends View {
  constructor (seletor) {
    super(seletor);
  }
  listarProdutos(produtos) {
    const tabela = tg.$('tbody');
    let lista = document.createElement('tbody');
    for (let i = 0; i < produtos.length; i++) {
      let tr = document.createElement('tr');
      for (let propriedade in produtos[i]) {
        let td = document.createElement('td');
        td.textContent = produtos[i][propriedade];
        tr.appendChild(td);
      }
      lista.appendChild(tr);
      tabela.innerHTML = lista.innerHTML;
    }
  }
}