import { tg } from '../frameWork.js';

export class View {
  constructor (seletor) {
    this.$seletor = tg.$(seletor);
  }

  getTemplate() {
    throw new Error('Método getTemplate deve ser implementado apenas pelas classes que herdam a view');
  }
}