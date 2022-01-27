import './section.scss';

class Box{
    constructor({data, index}) {
        this.state = data;
        this.$target = document.createElement('div');
        this.$target.setAttribute('class', `box box-${index}`);
        this.$button = document.createElement("button");
        this.$button.setAttribute('class', 'point');
        this.$button.innerHTML = this.state;
        this.$explanation = document.createElement('div');

        this.$target.appendChild(this.$button);
        this.$target.appendChild(this.$explanation);
    }

    render() {
        return this.$target.outerHTML;
    }
} 

export default class Section {
    constructor({$app, SectionState}){
              
        this.state = SectionState;
                
        this.$target = document.createElement('section');

        $app.appendChild(this.$target);

        this.playAnimation();
        this.render();
    }

    playAnimation(){
        const target = document.querySelectorAll('.box');
        const sectionNode = document.querySelector('section');
        
        let parentDivNode = null;
        sectionNode.addEventListener('click', (event)=>{
          const pointButton = event.target;
          
          if(parentDivNode === null && pointButton.tagName === 'BUTTON' && pointButton.getAttribute('class') === "point"){
            
            parentDivNode = pointButton.parentNode;
            parentDivNode.setAttribute('data-clicked','true');
            
          }
          else if(parentDivNode) {
            parentDivNode.removeAttribute('data-clicked');
            console.log(parentDivNode);
            parentDivNode.lastChild.removeAttribute('class');
            parentDivNode = null;
          }
          
        });
  
        sectionNode.addEventListener('transitionend', (event) => {
          const pointButton = event.target;
          if(pointButton.tagName === 'BUTTON' && pointButton.getAttribute('class') === "point"){
            
            const explanationNode = pointButton.nextSibling;
            // 클릭했을 때 이동 시작 
            if(pointButton.parentNode.getAttribute('data-clicked') === "true"){
  
              //pointButton.parentNode.style.justifyContent = 'center';
              explanationNode.setAttribute('class', 'explanation');
            }
          }
        });

    }

    render() {
        this.$target.innerHTML = this.state.circles.map(
            (data, index) =>{
              return new Box({data, index}).render();
          }).join("");
    }

}