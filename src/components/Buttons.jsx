import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Buttons extends Component {
  render() {
    const { nextButton, startRandomCards, buttonDis,
      endGameButton, dis, randomCards, next } = this.props;
    return (
      <div className="game-div">
        { next < randomCards.length - 1
          ? (
            <button
              type="button"
              onClick={ nextButton }
              className="button-embaralhar"
            >
              Próxima carta
            </button>)
          : (
            <button
              type="button"
              onClick={ startRandomCards }
              style={ { display: buttonDis } }
              className="button-embaralhar"
            >
              Embaralhar cartas
            </button>)}
        {next < randomCards.length - 1 && randomCards !== ''
          ? (
            <button
              type="button"
              onClick={ endGameButton }
              className="button-embaralhar"
            >
              finalizar jogada
            </button>)
          : ''}
        <button
          type="button"
          style={ { display: dis } }
          onClick={ startRandomCards }
          className="button-embaralhar"
        >
          Jogar
        </button>
      </div>
    );
  }
}

Buttons.propTypes = {
  nextButton: PropTypes.func.isRequired,
  startRandomCards: PropTypes.func.isRequired,
  buttonDis: PropTypes.string.isRequired,
  endGameButton: PropTypes.func.isRequired,
  dis: PropTypes.string.isRequired,
  randomCards: PropTypes.arrayOf(PropTypes.shape({
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardName: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
  next: PropTypes.number.isRequired,
};

export default Buttons;
