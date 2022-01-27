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
  
  })

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
      $app.appendChild(this.$imageBackground);
    
      this.$image.src= img_jpg ;

      this.render();
    }


    //   for(let i = 1; i <= target.length ; i++){
    //       array.push(i);  
    //   }
    //   backgroundAnimation(array, target);
    // }
    
    render() {
      
    }
    setState(nextState) {
      this.state = nextState;
      this.render();
    }
    
  }