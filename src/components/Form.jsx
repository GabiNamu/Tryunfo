import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <form action="" className="form-background">
        <h3 className="form-title">ADICIONE NOVA CARTA:</h3>
        <div>
          <label htmlFor="name" className="form-input">
            Nome:
            <input
              className="form-input form-only-input"
              type="text"
              value={ cardName }
              data-testid="name-input"
              name="cardName"
              id="name"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="descricao" className="form-input">
            Descrição:
            <textarea
              className="form-input form-only-input"
              name="cardDescription"
              id="descricao"
              value={ cardDescription }
              cols="30"
              rows="10"
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr01">
            Attr01
            <input
              className="form-only-input form-input-inline"
              type="number"
              value={ cardAttr1 }
              name="cardAttr1"
              id="attr01"
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr02">
            Attr02
            <input
              className="form-only-input form-input-inline"
              type="number"
              value={ cardAttr2 }
              name="cardAttr2"
              id="attr02"
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr03">
            Attr03
            <input
              className="form-only-input form-input-inline"
              type="number"
              name="cardAttr3"
              value={ cardAttr3 }
              id="attr03"
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="img">
            Imagem:
            <input
              className="form-only-input form-input-inline form-img"
              type="text"
              name="cardImage"
              value={ cardImage }
              data-testid="image-input"
              id="img"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="raridade" className="form-input">
            Raridade:
            <select
              className="form-input form-only-input"
              name="cardRare"
              value={ cardRare }
              id="raridade"
              data-testid="rare-input"
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>

            </select>
          </label>
        </div>
        <div>
          <div className="form-button-checkbox">
            {
              hasTrunfo
                ? <p>Você já tem um Super Trunfo em seu baralho</p>
                : (
                  <label htmlFor="superTrunfo" className="form-button-checkbox">
                    Super Trunfo
                    <input
                      className="form-button-checkbox"
                      type="checkbox"
                      name="cardTrunfo"
                      checked={ cardTrunfo }
                      data-testid="trunfo-input"
                      id="superTrunfo"
                      onChange={ onInputChange }
                    />
                  </label>)
            }
          </div>
          <button
            className="form-button-checkbox form-button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            type="button"
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
