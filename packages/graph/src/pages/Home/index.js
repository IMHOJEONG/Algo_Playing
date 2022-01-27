import '../../common/reset.scss';
import './index.scss';
import Background from './Background.js';
import Header from './header.js';
import Section from './Section.js';

class Index {
  constructor({ $app,
    initialState,
    HeaderState,
    SectionState
  
  }) {
      new Background({ $app,
        initialState });
      new Header({ $app,
        HeaderState});
      new Section({
        $app, SectionState       
      })
      
      
  }
}
const $app = document.querySelector('body');
const initialState = {
  circles: ["Brute Force", "Graph", "Binary Search", "Sorting", 'DP']  
};
const HeaderState = {
  datas: ["Info", "Algorithms", "made by"]
};
const SectionState = {
  circles: ["Brute Force", "Graph", "Binary Search", "Sorting", 'DP']  
}
new Index({
  $app,
  initialState,
  HeaderState,
  SectionState
});