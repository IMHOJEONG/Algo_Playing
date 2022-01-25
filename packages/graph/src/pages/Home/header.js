
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
        console.log($app,HeaderState)
        this.state = HeaderState;
        this.$header = document.createElement('header');

        $app.appendChild(this.$header);
        this.render();
    }

    setState(nextState){
        this.state = nextState;
        this.render();
    }

    render() {
        console.log(this.state)
        this.$header.innerHTML = this.state.datas.map((data) => {
            const HeaderComp = new HeaderComponent(data).getData();
            return HeaderComp;
        }).join("");
    }
    
} 