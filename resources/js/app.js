import { tg } from './frameWork.js';
import { ProdutoView } from './View/ProdutoView.js';
import { ProdutoModel } from './Model/ProdutoModel.js';
import { ProdutoController } from './Controller/ProdutoController.js';



const produtoModel = new ProdutoModel();
const produtoView = new ProdutoView('.produtoView');
const produtoController = new ProdutoController(produtoModel, produtoView);




const btnNew = tg.$id('btn-novo-produto');
const dialogNovoProduto = tg.$id('dialog');
const btnCloseDialog = tg.$id('btn-close');
const btnFlutuante = tg.$id('btn-flutuante');




let exibeOuOcultaDialog = e => {
  dialogNovoProduto.classList.toggle('displayNone');
};

btnNew.addEventListener('click', exibeOuOcultaDialog);
btnCloseDialog.addEventListener('click', exibeOuOcultaDialog);
btnFlutuante.addEventListener('click', exibeOuOcultaDialog);

const propriedadeDoProdutoDialog = tg.$$('.form_cadastro .data');
const btnSalvar = tg.$('.btn-save');


let salvarProduto = e => {
  produtoController.criarProduto(propriedadeDoProdutoDialog);
};

btnSalvar.addEventListener('click', salvarProduto);

