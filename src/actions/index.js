import axios from 'axios';
import { SAVE_COMMENT, GET_COMMENT } from 'actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function getComment() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments')
  return {
    type: GET_COMMENT,
    payload: response
  };
}