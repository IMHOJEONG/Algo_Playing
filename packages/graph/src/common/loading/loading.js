import './Loading.scss';

export default class Loading {
    constructor({ $app, LoadingState }) {
        
        this.state = LoadingState;
        this.$target = document.createElement('div');

        this.$target.setAttribute('class','loadingBackground');

        this.$target.innerHTML = 
        `
            <div class="container">
                <div class="spinner">
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
                <div class="spinner-item"></div>
                </div>
            </div>
        `;
        $app.appendChild(this.$target);
    }
    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {
        
        // if(this.state){
        //     $app.innerHTML = 
        // }
        // else{

        // }

    }
}