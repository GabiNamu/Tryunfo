import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import imglogo from './logo_tryunfo.png';
import BackCard from './components/BackCard';
import Filter from './components/Filter';
import Buttons from './components/Buttons';

const INIATIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: 'normal',
  filterRare: 'todas',
  filterst: false,
  cardTrunfo: false,
  isFilterDisabled: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  filterName: '',
  savedCard: [],
  randomCards: '',
  next: 0,
  dis: 'block',
  buttonDis: 'none',
  background: '',
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

  validateFilterInputs = () => {
    const { filterst } = this.state;
    const filterValidate = filterst === true;
    this.setState({ isFilterDisabled: filterValidate });
  };

  startRandomCards = () => {
    const { savedCard } = this.state;
    const number = 0.5;
    const listCards = savedCard.sort(() => Math.random() - number);
    console.log(listCards);

    this.setState({
      randomCards: listCards,
      dis: 'none',
      next: 0,
      background: 'ul form-card',
      buttonDis: 'flex',
    });
  };

  cardsFilter = () => {
    const { savedCard, filterName, filterRare, filterst } = this.state;
    return savedCard.filter((card) => {
      if (filterName === '' && filterRare === 'todas' && filterst === false) {
        return true;
      }
      if (filterName === '' && filterRare !== 'todas') {
        return card.cardRare === filterRare;
      }
      if (filterName !== '' && filterRare !== 'todas') {
        return card.cardName.includes(filterName) && card.cardRare === filterRare;
      }
      if (filterst === true) {
        return card.cardTrunfo === true;
      }
      return card.cardName.includes(filterName);
    });
  };

  deleteButton = (index, card) => {
    const { savedCard } = this.state;
    savedCard.splice(index, 1);
    if (card.cardTrunfo === true) {
      this.setState({ hasTrunfo: false });
    }
    this.setState({ savedCard });
  };

  nextButton = () => {
    this.setState((prevState) => ({
      next: prevState.next + 1,
    }));
  };

  endGameButton = () => {
    this.setState({
      dis: 'block',
      background: '',
      randomCards: '',
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.validateButton();
      this.validateFilterInputs();
    });
  };

  render() {
    const { savedCard, randomCards,
      next, dis, background } = this.state;
    const filterCards = this.cardsFilter();
    return (
      <div>
        <div className="logo">
          <img src={ imglogo } alt="tryunfo" />
        </div>
        <div className="form-card">
          <Form
            { ...this.state }
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.onInputChange }
          />
          <Card
            { ...this.state }
          />
        </div>
        <p className="filter-title">Todas as Cartas</p>
        <Filter { ...this.state } onInputChange={ this.onInputChange } />
        <ul className="ul">
          {
            savedCard !== []
              ? filterCards.map((card, index) => (
                <div key={ card.cardName } style={ { display: dis } }>
                  <li className="cards-all">
                    <Card
                      cardName={ card.cardName }
                      cardDescription={ card.cardDescription }
                      cardImage={ card.cardImage }
                      cardAttr1={ card.cardAttr1 }
                      cardAttr2={ card.cardAttr2 }
                      cardAttr3={ card.cardAttr3 }
                      cardTrunfo={ card.cardTrunfo }
                    />
                  </li>
                  <button
                    type="button"
                    className="card-button"
                    data-testid="delete-button"
                    onClick={ () => this.deleteButton(index, card) }
                  >
                    Excluir
                  </button>
                </div>
              ))
              : ''
          }
        </ul>
        <ul className={ background }>
          {randomCards !== ''
            ? (
              <div className="game-div">
                <li className="cards-all">
                  <Card
                    cardName={ randomCards[next].cardName }
                    cardDescription={ randomCards[next].cardDescription }
                    cardImage={ randomCards[next].cardImage }
                    cardAttr1={ randomCards[next].cardAttr1 }
                    cardAttr2={ randomCards[next].cardAttr2 }
                    cardAttr3={ randomCards[next].cardAttr3 }
                    cardTrunfo={ randomCards[next].cardTrunfo }
                  />
                </li>
                <li className="cards-all">
                  <BackCard />
                </li>
              </div>
            )
            : ''}
        </ul>
        <Buttons
          { ...this.state }
          nextButton={ this.nextButton }
          startRandomCards={ this.startRandomCards }
          endGameButton={ this.endGameButton }
          randomCards={ randomCards }
        />
      </div>
    );
  }
}

export default App;
