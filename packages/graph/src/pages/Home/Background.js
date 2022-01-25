export default class Background {
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
      
      $app.appendChild(this.$target);
      this.render();
    }
    render() {
      this.$target.innerHTML = this.state.circles.map(circle => `<div class="point"><div>${circle}</div></div>
      `).join("");
    }
    setState(nextState) {
      this.state = nextState;
      this.render();
    }
    
  }