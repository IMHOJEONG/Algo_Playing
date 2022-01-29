import './index.scss';
import Loading from '../../common/loading/loading.js';
import Background from './Background.js';
import Header from './header.js';
import Main from './Main.js';
import Component from '../../common/Component';

class Index extends Component{

  setup(){
    this.state = {
      initialState: {
        circles: ["Brute Force", "Graph", "Binary Search", "Sorting", 'DP']  
      },
      HeaderState: {
        datas: ["Info", "Algorithms", "made by"]
      },
      SectionState: {
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
    }
  }

  template(){
    return `
      <header></header>
      <main></main>
      <footer></footer>
    `;
  }

  mounted() {

    // new Loading({
    //   $app, LoadingState
    // });

    const backGround = this.target.querySelector('header');
    const main = this.target.querySelector('main');
    const footer = this.target.querySelector('footer');

    new Background(backGround, 
        this.state.initialState
      );
    new Header(main, 
        this.state.HeaderState
      );
    new Main(main,
        this.state.SectionState       
      )
  }
}

new Index(document.querySelector('#app'));