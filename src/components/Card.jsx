import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo_tryunfo.png';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.props;
    return (
      <div className="card">
        <div className="container-card">
          {
            cardTrunfo
              && <img
                src={ logo }
                alt="logo"
                data-testid="trunfo-card"
                className="img-card-st"
              />
          }
          <h2 data-testid="name-card" className="card-title">{ cardName }</h2>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="card-img"
          />

          <p
            data-testid="description-card"
            className="card-description"
          >
            { cardDescription }
          </p>
          <div className="div-attr-card">
            <div>
              <h3 className="card-attr">Attr01....................................</h3>
              <h3 data-testid="attr1-card" className="card-attr-number">{ cardAttr1 }</h3>
            </div>
            <div>
              <h3 className="card-attr">Attr02....................................</h3>
              <h3 data-testid="attr2-card" className="card-attr-number">{ cardAttr2 }</h3>
            </div>
            <div>
              <h3 className="card-attr">Attr03....................................</h3>
              <h3 data-testid="attr3-card" className="card-attr-number">{ cardAttr3 }</h3>
            </div>
            <p data-testid="rare-card" className="color">{ cardRare }</p>

          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
