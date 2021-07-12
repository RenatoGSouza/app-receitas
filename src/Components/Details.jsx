/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import ClipboardJS from 'clipboard';
import { saveFavorite, isFavoriteIcon } from '../services/services';
import Share from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';

export default function Details(props) {
  const { id, item, type } = props;
  const clipboard = new ClipboardJS('.share');
  const tipo = type === 'Meal' ? 'comida' : 'bebida';

  const [isCopy, setIsCopy] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(isFavoriteIcon(id));

  function copyLink() {
    console.log(clipboard.info);
    setIsCopy(true);
  }
  console.log(item);
  return (
    <div className="tela-details">
      <img
        className="img-principal"
        data-testid="recipe-photo"
        src={ item[`str${type}Thumb`] }
        alt="some"
      />
      <button
        type="button"
        data-testid="share-btn"
        className="btn-img"
        data-clipboard-text={ window.location.href }
        onClick={ copyLink }
      >
        {isCopy ? 'Link copiado!' : <img alt="share-btn" src={ Share } />}
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
        className="btn-img"
        onClick={ () => saveFavorite(id, item, tipo, setIsFavorite) }
        src={ isFavorite ? blackHeart : whiteHeart }
      >
        <img alt="favorite-btn" src={ isFavorite ? blackHeart : whiteHeart } />
      </button>
      <div className="receita-details">
        <h3 data-testid="recipe-title">{item[`str${type}`]}</h3>
        <h6 data-testid="recipe-category">
          {type === 'Meal'
            ? item.strCategory : item.strAlcoholic}

        </h6>
        <ul>
          {
            Object.entries(item).filter((entrie) => {
              const [key, value] = entrie;
              return key.startsWith('strIngredient') && value;
            }).map((el, i) => (
              <li
                key={ el[0] }
                data-testid={ `${i}-ingredient-name-and-measure` }
              >
                {`${el[1]} ${item[`strMeasure${i + 1}`]}`}
              </li>))
          }
        </ul>
        <p data-testid="instructions">{item.strInstructions}</p>
      </div>
      <span data-testid="video">video</span>

      {/* <embed
              width="560"
              height="315"
              src={ item.strVideo }
              title={ item.strMeal }
              frameBorder="0"
              allow="accelerometer; autoplay;
              clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
    </div>
  );
}

Details.propTypes = PropTypes.shape({}).isRequired;