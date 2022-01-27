import './header.scss';
class HeaderComponent {
    constructor(state) {
        console.log(state);
        this.state = state;
        this.answer = `<div class="headerComponent">}${this.state}</div>`;
        this.render();
    }

    setState(nextState){
        this.state = nextState;
        this.render();
    }

    render(){
        this.answer = `<div class="headerComponent">${this.state}</div>`;
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
        sourceTag.setAttribute("srcset", "../../logo/logo.svg");
        logoPictureTag.appendChild(sourceTag);
        this.$leftSubHeader.appendChild(logoPictureTag);
    }

    render() {
        console.log(this.state)
        
        this.$rightSubHeader.innerHTML = this.state.datas.map((data) => {
            const HeaderComp = new HeaderComponent(data).getData();
            return HeaderComp;
        }).join("");

    }
    
} 