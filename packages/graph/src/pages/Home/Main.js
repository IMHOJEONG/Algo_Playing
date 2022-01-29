import './Main.scss';
import Explanation from './Explanation.js';
import Component from '../../common/Component';


const registerPointAnimationCallBack = (event, parentDivNode = null)=>{
  const pointButton = event.target;
  
  if(parentDivNode === null && pointButton.tagName === 'BUTTON' && pointButton.getAttribute('class') === "point"){
    
    parentDivNode = pointButton.parentNode;
    parentDivNode.setAttribute('data-clicked','true');
    
  }
  else if(parentDivNode) {
    parentDivNode.removeAttribute('data-clicked');
    console.log(parentDivNode);
    parentDivNode.lastChild.removeAttribute('class');
    parentDivNode.lastChild.setAttribute('class', 'noExplanation');

    parentDivNode = null;
  }
  
}

const showBoxAnimationCallBack = (event) => {
  const pointButton = event.target;
  if(pointButton.tagName === 'BUTTON' && pointButton.getAttribute('class') === "point"){
    
    const explanationNode = pointButton.nextSibling;
    // 클릭했을 때 이동 시작 
    if(pointButton.parentNode.getAttribute('data-clicked') === "true"){

      //pointButton.parentNode.style.justifyContent = 'center';
      explanationNode.setAttribute('class', 'explanation');
    }
  }
}
export default class Main extends Component{
  
    template(){

      const { circles, explanations } = this.props;

      return `
      
        <section>
        ${
          circles.map((data, index) => {

            return `

              <div class="box box-${index}">
                <button class="point">
                  ${data}
                </button>
              </div>

              ${new Explanation(explanations[index]).template()}
              
            `;
          }).join("")
        }
        </section>
      
      `;
    } 

    mounted() {

      const section = document.querySelector('section');
      
      const { explanation } = this.props;

      explanation.forEach((sentense, index)=>{

        new Explanation(section, sentense);
        
      });


      

      


    }

    setEvent(){
      this.addEvent('click', 'section', registerPointAnimationCallBack);
      this.addEvent('click', 'transitionend', showBoxAnimationCallBack);
    }

}