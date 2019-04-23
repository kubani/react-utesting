import { SAVE_COMMENT, GET_COMMENT } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];

    case GET_COMMENT:
      const comment = action.payload.data.map(comment => {
        return comment.name;
      });
      return [...state, ...comment];

    default:
      return state;
  }
}