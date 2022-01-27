import '../../common/reset.scss';
import './index.scss';
import Background from './Background.js';
import Header from './header.js';

class Index {
  constructor({ $app,
    initialState,
    HeaderState}) {
      new Header({ $app,
        HeaderState});
      new Background({ $app,
        initialState });
      
  }
}
const $app = document.querySelector('body');
const initialState = {
  circles: ["Brute Force", "Graph", "Binary Search", "Sorting", 'DP']  
};
const HeaderState = {
  datas: ["Info", "Algorithms", "made by"]
};
new Index({
  $app,
  initialState,
  HeaderState
});