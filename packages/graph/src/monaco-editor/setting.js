import * as monaco from 'monaco-editor'
import DFS from './dfs';
const targetDOM = document.getElementById('container');
// const compileButton = document.getElementById('compile');

const apiAddress = "http://localhost:2000";

// compileButton.addEventListener('click', async ()=>{
//     const data = await fetch(apiAddress);

//     console.log(data);
// });

const setInitialState = () => monaco.editor.create(targetDOM,
{
    value: DFS,
    language: 'java'
});

export default setInitialState;