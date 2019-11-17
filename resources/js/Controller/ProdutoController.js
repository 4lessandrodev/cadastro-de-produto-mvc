import { tg } from '../frameWork.js';
export class ProdutoController {
  constructor (model, view) {
    this.model = model;
    this.view = view;
    this.initialize();
  }
  initialize() {
    let produtos = this.model.listaDeProdutos();
    this.view.listarProdutos(produtos);
  }
  criarProduto(form) {
    try {
      let produto = new Object(null);
      for (let propriedade of form) {
        produto[propriedade.name] = propriedade.value;
      }
      console.log(produto);
      this.model.armazenarProduto(produto);
      let produtos = this.model.listaDeProdutos();
      this.view.listarProdutos(produtos);
    } catch (error) {
      console.log(error);
    }
  }
}