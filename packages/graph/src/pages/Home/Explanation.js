import './explanation.scss';

const Title = ({ $target, data }) => {
    
    const title = document.createElement('h3');
    title.innerText = data;
    $target.appendChild(title);
}

const Contents = ({ $target, data }) => {
    const contents = document.createElement('div');
    const contentsInnerFigure = document.createElement('figure');
    contentsInnerFigure.setAttribute('role', 'code');
    contentsInnerFigure.setAttribute('aria-labelledby', 'code-brute-force');

    const innerPreTag = document.createElement('pre');
    const innerFigCaption = document.createElement('figcaption');
    innerFigCaption.setAttribute('id', 'code-brute-force');
    innerFigCaption.innerText = 'Test';
    


    contents.appendChild(contentsInnerFigure); 
    
    data;
    $target.appendChild(contents);
}

export default class Explanation {

    constructor({ explanation }) {
      
      this.$data = explanation;
      this.$target = document.createElement('div');
      this.$target.setAttribute('class', 'noExplanation');
      Title({
          $target: this.$target,
          data : this.$data.title,
      });
      Contents({
        $target: this.$target,
        data : this.$data.contents,
      });
    }
  
    render(){
      return this.$target;
    }
  
}