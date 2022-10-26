import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action="">
        <div>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              data-testid="name-input"
              id="name"
            />
          </label>
        </div>
        <div>
          <label htmlFor="descricao">
            Descrição:
            <textarea
              name=""
              id="descricao"
              cols="30"
              rows="10"
              data-testid="description-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr01">
            Attr01
            <input
              type="number"
              id="attr01"
              data-testid="attr1-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr01">
            Attr02
            <input
              type="number"
              id="attr02"
              data-testid="attr2-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr01">
            Attr03
            <input
              type="number"
              id="attr03"
              data-testid="attr3-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="img">
            Imagem:
            <input
              type="text"
              data-testid="image-input"
              id="img"
            />
          </label>
        </div>
        <div>
          <label htmlFor="raridade">
            Raridade:
            <select name="" id="raridade" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>

            </select>
          </label>
        </div>
        <div>
          <label htmlFor="superTrunfo">
            Super Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="superTrunfo"
            />
          </label>
        </div>
        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default Form;
