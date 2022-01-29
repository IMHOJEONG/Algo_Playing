import Component from "../../common/Component";

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

export default class Background extends Component{

    setup() {
      
    }
    
    template() {

      const { circles } = this.props;
      return `
        <picture>
          <source media="(max-width: 959px) and (max-height: 639px)" 
           type="image/webp" srcset="${img_webp}">
          <source media="(max-width: 1919px)" 
           type="image/webp" srcset="${img_webp_1920}">
          </source>
          <img src="${img_jpg}"/>
        </picture>
      `;
    }

    render() {
      
    }
    setState(nextState) {
      this.state = nextState;
      this.render();
    }
    
  }