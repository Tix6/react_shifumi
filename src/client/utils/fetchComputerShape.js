import 'whatwg-fetch';
import { computerShapeUrl } from '../../../config/';

const checkStatus = (result) => {
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result;
};

const fetchComputerShape = () => {
  const params = { headers: { 'Content-Type': 'application/json' }, method: 'GET' };
  return fetch(computerShapeUrl, params)
          .then(checkStatus)
          .then(result => result.json())
          .then(result => result.icon);
};

export default fetchComputerShape;
