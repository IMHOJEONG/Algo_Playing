
const backgroundAnimation = (array, target) => {

  const moveRightOne = (arr) => {
    array.unshift(array.pop());
    return array;
  }

  array = moveRightOne(array);

  target.forEach((data, index) => {
    data.animate([
      { order: array[index]},
      { transform: 'translateY(-5vw)' }
    ],{
      duration: 10000,
      iterations: Infinity,
      direction: 'alternate',
    });
  })

}


export default class Background{
    constructor({ $app, initialState }) {
      
      this.state = initialState;
      this.$image = new Image();
      this.$imageBackground = document.createElement('div');
      this.$imageBackground.appendChild(this.$image);
      this.$imageBackground.setAttribute('class', 'background');
      this.$target = document.createElement('section');
      this.$image.onload = () => {
        $app.appendChild(this.$imageBackground);
      }
      this.$image.src= "https://i.ibb.co/Lxm6x2T/architecture-ga223faef9-1920.jpg";
      this.$raf = null;
      $app.appendChild(this.$target);
      this.render();
    }
    

    playAnimation(){
      let array = [];
      const target = document.querySelectorAll('.box');
      for(let i = 0; i < target.length ; i++){
          array.push(i);  
      }
      backgroundAnimation(array, target);
    }
    
    render() {
      this.$target.innerHTML = this.state.circles.map(circle => `<div class="box"><button class="point">${circle}</button></div>
      `).join("");
      this.playAnimation();
    }
    setState(nextState) {
      this.state = nextState;
      this.render();
    }
    
  }