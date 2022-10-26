import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const INIATIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  savedCard: [],
};

class App extends React.Component {
  state = INIATIAL_STATE;

  validateButton = () => {
    const { cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const isValid = cardName.length === 0
    || cardDescription.length === 0
    || cardImage.length === 0
    || cardRare.length === 0;
    const total = 210;
    const points = 90;
    const attrTotal = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const pointsValidate = cardAttr1 > points || cardAttr2 > points || cardAttr3 > points;
    const negativeValidade = cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0;
    const attrValidate = attrTotal > total;
    const validate = attrValidate || isValid || pointsValidate || negativeValidade;
    this.setState({ isSaveButtonDisabled: validate });
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3, cardTrunfo } = this.state;
    const cardObj = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      savedCard: prevState.savedCard.concat([cardObj]),
    }), () => {
      if (cardTrunfo === true) {
        this.setState({ hasTrunfo: true });
      }
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      });
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.validateButton());
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, hasTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
