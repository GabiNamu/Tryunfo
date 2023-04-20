import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { isFilterDisabled, filterName, onInputChange,
      filterRare, filterst } = this.props;
    return (
      <div className="filter-background">
        <p className="filter-input-title">Filtros de busca:</p>
        <input
          type="text"
          id="name"
          className="filter-input"
          disabled={ isFilterDisabled }
          data-testid="name-filter"
          placeholder="Nome da carta"
          name="filterName"
          value={ filterName }
          onChange={ onInputChange }
        />
        <select
          name="filterRare"
          className="filter-input"
          disabled={ isFilterDisabled }
          value={ filterRare }
          id="filterRare"
          data-testid="rare-filter"
          onChange={ onInputChange }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="filterst" className="filter-container-checkbox">
          <p className="filter-input-title">Super trunfo</p>
          <input
            type="checkbox"
            name="filterst"
            className="filter-checkbox"
            value={ filterst }
            data-testid="trunfo-filter"
            id="filterst"
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  isFilterDisabled: PropTypes.bool.isRequired,
  filterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterst: PropTypes.bool.isRequired,
};

export default Filter;
