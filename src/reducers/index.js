import {
  REQUEST_ARTICLES,
  REQUEST_ARTICLES_SUCCESS,
  REQUEST_ARTICLES_FAILURE,
  DISPLAY_ARTICLES,
  REMOVE_ARTICLES,
  APPLY_COUNTRY_FILTER,
  APPLY_CATEGORY_FILTER,
} from '../actions';

const initialState = {
  articles: [],
  isFetching: false,
  articlesFetched: false,
  articlesDisplayed: false,
  countryFilter: 'us',
  categoryFilter: 'general',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case REQUEST_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: !state.isFetching,
        articlesFetched: !state.articlesFetched,
      });
    case REQUEST_ARTICLES_FAILURE:
      return Object.assign({}, state, {
        isFetching: !state.isFetching,
        articlesFetched: !state.articlesFetched,
      });
    case DISPLAY_ARTICLES:
      return Object.assign({}, state, {
        articlesDisplayed: !state.articlesDisplayed,
        articles: action.articles.map((article, idx) => ({
          id: idx,
          title: article.title.split('-')[0],
          description: article.description,
          author: article.author,
          source: article.source.name || '',
          url: article.url,
        })),
      });
    case REMOVE_ARTICLES:
      return Object.assign({}, state, {
        articles: [],
      });
    case APPLY_COUNTRY_FILTER:
      return Object.assign({}, state, { countryFilter: action.filter });
    case APPLY_CATEGORY_FILTER:
      return Object.assign({}, state, { categoryFilter: action.filter });
    default:
      return state;
  }
};

export default rootReducer;