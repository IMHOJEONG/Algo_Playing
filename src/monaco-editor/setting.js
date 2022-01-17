import * as monaco from 'monaco-editor'
import DFS from './dfs';
const targetDOM = document.getElementById('container');

const setInitialState = () => monaco.editor.create(targetDOM,
{
    value: DFS,
    language: 'java'
});

export default setInitialState;