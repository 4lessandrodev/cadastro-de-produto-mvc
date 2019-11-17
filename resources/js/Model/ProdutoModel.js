export class ProdutoModel {
  constructor (produto) {
    this.produto = produto;
    this.produtos = [];
    this.initialize();
  }
  initialize() {
    this.obterProdutosSalvos();
  }
  armazenarProduto(produto) {
    this.produto = produto;
    this.produtos.push(produto);
    this.salvarProduto();
  }
  salvarProduto() {
    let list = this.produtos;
    list = JSON.stringify(list);
    localStorage.setItem('produtos', list);
  }
  obterProdutosSalvos() {
    try {
      let produtos = localStorage.getItem('produtos');
      if (produtos == null || produtos == '' || produtos == undefined) {
        console.log('Não há produtos salvos para obter');
        return;
      }
      produtos = JSON.parse(produtos);
      this.produtos = produtos;
    } catch (error) {
      console.log(error);
    }
  }
  listaDeProdutos() {
    return this.produtos;
  }
}