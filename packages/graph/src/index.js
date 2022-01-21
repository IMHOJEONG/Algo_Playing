import './index.scss';
const mdc_button = 'mdc-button';

class Index {
    constructor({ $app, initialState }) {
        
        this.state = initialState;
        
        this.$navs = document.createElement('nav');
        this.$sections = document.createElement('section');
        $app.append(this.$navs);
        $app.append(this.$sections);
        this.render();
    }

    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {
        this.$navs.innerHTML = this.state.icons.map(icon=>{
          return `<div class="icons">${icon}</div>`  
        });
        this.$sections.innerHTML = this.state.algos.map(
            algo => `<li>${algo}</li>`
        );
    }
}

const $app = document.querySelector('body');

const initialState = {
    icons: ['Algo Play'],
    algos: ['DFS', 'intro']
};


const algos = new Index({
    $app, 
    initialState
})

