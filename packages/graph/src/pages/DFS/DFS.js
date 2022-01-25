import cytoscape from 'cytoscape';
import Data from './data';
import Style from '../../style/style';
import Animation from './animation';
import dfsinnerSection from './dfsinnerSection';
import MonacoEditor from '../../monaco-editor/setting';
import '../../common/reset.scss';
import './DFS.scss';

const $app = document.getElementById("app");
const initialState = {
    datas:[]
};
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


class DFS extends Graph{
    constructor({$app, initialState}){

        super({$app, initialState});
        // console.log(this.$target)
        let cy = cytoscape({
            container: $app,
            style: Style
        });
        // $app.appendChild(document.createTextNode('a'));
        
        this.makePoint(cy);
        this.playDfs(cy);
        // this.playAnimation(cy);
        this.setEditor();
    }

    setEditor(){
        MonacoEditor();
    }

    makePoint(cy){
        cy.add(
            Data
           );
    }

    playDfs(cy){
        const dfs = cy.elements().dfs(
            dfsinnerSection
        )
        const path = dfs.path;
        // path.select();
        path.forEach((p)=>{
            console.log(p.id())
        }); 
        let i = 0;
        const delayfunc = function(){
            // for(let i = 0; i < path.length ; i++){

            //     // console.log('test')
            //     path[i].addClass('visited');
            //     setTimeout(delayfunc, 2000);
            // }
            if( i < path.length){
                
                path[i].addClass('visited');
                
                i++;
                setTimeout(delayfunc, 2000);

            }
        }
        delayfunc();
    }

    clickButton() {
        
    }

    // playAnimation(cy) {
    //     const animate = cy.$("#node1").animation(Animation);
    //     animate.play();
    // }
}

const graphs = new DFS({
    $app,
    initialState
})

