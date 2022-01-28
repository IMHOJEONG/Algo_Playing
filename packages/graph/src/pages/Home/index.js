import './index.scss';
import Loading from '../../common/loading/loading.js';
import Background from './Background.js';
import Header from './header.js';
import Section from './Section.js';

class Index {
  constructor({ $app,
    LoadingState,
    initialState,
    HeaderState,
    SectionState
  
  }) {

      new Loading({
        $app, LoadingState
      });
      new Background({ $app,
        initialState });
      new Header({ $app,
        HeaderState});
      new Section({
        $app, SectionState       
      })
      
  }

  setState(nextState) {

  }

  render(){
    
  }
}
const $app = document.querySelector('body');
const LoadingState = true;
const initialState = {
  circles: ["Brute Force", "Graph", "Binary Search", "Sorting", 'DP']  
};
const HeaderState = {
  datas: ["Info", "Algorithms", "made by"]
};
const SectionState = {
  circles: ["Brute Force", "Graph", "Binary Search", "Sorting", 'DP'],
  explanataions: [
    {
      title: "Brute Force",
      contents: {
        name: "Brute Force",
        code: ``,
        codeCaption: 'codeCaption',
      }
    }, 
    {
      title: "Graph",
      contents: {
        name: "Graph",
        code: ``,
      }
    }, 
    {
      title: "Binary Search",
      contents: {
        name: "Binary Search",
        code: ``,
      }
    },
    {
      title: "Sorting",
      contents: {
        name: "Sorting",
        code: ``,
      }
    },
    {
      title: 'DP',
      contents: {
        name: "DP",
        code: ``,
      }
    }
  ]
}
new Index({
  $app,
  initialState,
  HeaderState,
  SectionState
});