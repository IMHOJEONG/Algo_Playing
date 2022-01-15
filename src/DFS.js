import cytoscape from 'cytoscape';


class Graph  {
    constructor({ $app, initialState }){

        this.state = initialState
    
        this.$target = document.createElement('div');
        
        $app.appendChild(this.$target);
        this.render();
       
    }


    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {
        this.$target.innerHTML = this.state.datas.map(data=> 
            `<li>${data}</li>`)
    }
}
const $app = document.querySelector("#app");

const initialState = {
    datas:[]
};



class DFS extends Graph{
    constructor({$app, initialState}){

        super({$app, initialState});
        // console.log(this.$target)
        let cy = cytoscape({
            container: $app
        });
        $app.appendChild(document.createTextNode('a'));
        
        this.makePoint(cy);

    }

    makePoint(cy){
        cy.add({
            group: 'nodes',
            data: { weight: 75 },
            position: { x: 200, y: 200 }
        });
    }
}

const graphs = new DFS({
    $app,
    initialState
})

