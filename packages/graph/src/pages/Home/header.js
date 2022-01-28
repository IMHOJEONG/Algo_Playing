import './header.scss';
import logo from '../../logo/logo_75px.svg';
import logoWebp from '../../logo/logo_75px.webp';
class HeaderComponent {
    constructor(state) {
        console.log(state);
        this.state = state;
        this.render();
    }

    setState(nextState){
        this.state = nextState;
        this.render();
    }

    render(){
        this.answer = `<span>${this.state}</span>`;
    }

    getData(){
        return this.answer;
    }
}

export default class Header{
    constructor({ $app, HeaderState }) {
        this.state = HeaderState;
        this.$header = document.createElement('header');
        this.$leftSubHeader = document.createElement('div');
        this.$leftSubHeader.setAttribute('class', 'leftSubHeader');
        this.$rightSubHeader = document.createElement('div');
        this.$rightSubHeader.setAttribute('class', 'rightSubHeader');
        this.$header.appendChild(this.$leftSubHeader);
        this.$header.appendChild(this.$rightSubHeader);
        $app.appendChild(this.$header);
        this.render();
    }

    setState(nextState){
        this.state = nextState;
        this.render();
    }

    makeLeftSubHeader() {
        const logoPictureTag = document.createElement("picture");
        const sourceTag = document.createElement('source');
        sourceTag.setAttribute("srcset", `${logo}`);
        sourceTag.setAttribute("type", `type="image/svg+xml"`);
        logoPictureTag.appendChild(sourceTag);

        const image = new Image();
        image.src = logoWebp;
        image.onload = () =>{
            logoPictureTag.appendChild(image);
        }

        const nameTag = document.createElement('span');

        nameTag.innerText = 'Best A'
        
        this.$leftSubHeader.appendChild(logoPictureTag);
        this.$leftSubHeader.appendChild(nameTag);
    }

    render() {
        this.makeLeftSubHeader();
        
        this.$rightSubHeader.innerHTML = this.state.datas.map((data) => {
            const HeaderComp = new HeaderComponent(data).getData();
            return HeaderComp;
        }).join("");

    }
    
} 