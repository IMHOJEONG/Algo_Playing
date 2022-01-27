
const img_jpg = `https://i.ibb.co/Lxm6x2T/architecture-ga223faef9-1920.jpg`;
const img_webp = `https://i.ibb.co/WFCFwL6/back.webp`;
const img_webp_1920 = "https://i.ibb.co/th6zRkp/back-1920.webp";

const backgroundAnimation = (array, target) => {

  const moveRightOne = (arr) => {
    array.unshift(array.pop());
    return array;
  }

  array = moveRightOne(array);

  target.forEach((data, index) => {

    // data.animate([
    //   // { order: array[index]},
    //   { transform: 'translateY(-2vw)' }
    // ],{
    //   duration: 4000,
    //   iterations: Infinity,
    //   direction: 'alternate',
    // });

    // if(index == 0){
      
    //   const parentNode = data.closest('div');

    //   parentNode.style.gridColumn = '1 / 10';


    // }
  
    
  })

}

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



export default class Background{
    constructor({ $app, initialState }) {
      
      this.state = initialState;
      this.$image = new Image();
      this.$source = document.createElement('source');
      this.$source.setAttribute('media', "(max-width: 959px)");
      this.$source.setAttribute('srcset', img_webp);
      this.$source.setAttribute('type','image/webp');
      this.$source2 = document.createElement('source');
      this.$source2.setAttribute('media', "(max-width: 1919px)");
      this.$source2.setAttribute('srcset', img_webp_1920);
      this.$source2.setAttribute('type','image/webp');

      this.$imageBackground = document.createElement('picture');

      this.$imageBackground.appendChild(this.$source);
      this.$imageBackground.appendChild(this.$image);
      this.$imageBackground.setAttribute('class', 'background');
      this.$target = document.createElement('section');
      $app.appendChild(this.$imageBackground);
    
      this.$image.src= img_jpg ;

      $app.appendChild(this.$target);
      this.playAnimation();
      this.render();
    }
    

    playAnimation(){
      let array = [];
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

      // sectionNode.addEventListener('transitionstart', (event)=>{
      //   const pointButton = event.target;
      //   if(pointButton.tagName === 'BUTTON' && pointButton.getAttribute('class') === "point"){
          
      //     const explanationNode = pointButton.nextSibling;
      //     // 원래대로 돌아오는 작업 

      //       console.log('start');

      //       explanationNode.removeAttribute('class');
  
      //   }
      // });

      for(let i = 1; i <= target.length ; i++){
          array.push(i);  
      }
      backgroundAnimation(array, target);
    }
    
    render() {
      this.$target.innerHTML = this.state.circles.map(
        (data, index) =>{
          return new Box({data, index}).render();
      }).join("");
      // this.playAnimation();
    }
    setState(nextState) {
      this.state = nextState;
      this.render();
    }
    
  }