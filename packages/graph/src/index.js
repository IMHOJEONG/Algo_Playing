import './index.scss';
const mdc_button = 'mdc-button';

class Index {
    constructor({ $app, initialState }) {
        
        this.state = initialState;
        
        this.$navs = document.createElement('nav');
        this.$sections = document.createElement('section');
        this.$canvas = document.createElement('canvas');
        this.$sections.append(this.$canvas);
        $app.append(this.$navs);
        $app.append(this.$sections);
        this.render();
    }

    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    isSupportedCanvas() {
        
        return this.$canvas.getContext;
    }

    render() {
        this.$navs.innerHTML = this.state.icons.map(icon=>{
          return `<div class="icons">${icon}</div>`  
        });
        
        if(this.isSupportedCanvas()){
            
            const indexCanvas = this.$canvas.getContext('2d');

            this.$canvas.innerHTML = this.state.algos.map(
                algo => `<button class="index_button">${algo}</button>`
            );

        }
    }
}

const $app = document.querySelector('body');

const initialState = {
    icons: ['Code Algorithm'],
    algos: ['DFS', 'intro']
};


const algos = new Index({
    $app, 
    initialState
})

