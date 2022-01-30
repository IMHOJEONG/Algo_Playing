'use strict';

/**
 * @jest-environment jsdom
 */
jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
jest.mock('../test_file/diffAlgorithm');

test('diff Algorithm Test', ()=>{

  const render = (state) => {
    const el = document.createElement('div');
    el.innerHTML = `
      <div id="app">
        <ul>
          ${ state.map(({ completed, content }) => `
            <li class="${completed ? 'completed' : ''}">
              <input type="checkbox" class="toggle" ${completed ? 'checked' : ''} />
              ${content}
              <button class="remove">삭제</button>
            </li>
          `).join('') }
        </ul>
        <form>
          <input type="text" />
          <button type="submit">추가</button>
        </form>
      </div>
    `.trim();
  
    return el.firstChild;
  }
    const oldState = [
        { id: 1, completed: false, content: 'todo list item 1' },
        { id: 2, completed: true, content: 'todo list item 2' },
      ];
      
    const newState = [
        { id: 1, completed: true, content: 'todo list item 1 update' },
        { id: 2, completed: true, content: 'todo list item 2' },
        { id: 3, completed: false, content: 'todo list item 3' },
    ];
    
    const diffAlgorithm = require('../test_file/diffAlgorithm');


    const oldNode = render(oldState);
    const newNode = render(newState);
    
    const $root = document.createElement('div');
    const testOldNode = oldNode.cloneNode(true);
    document.body.appendChild($root);
    diffAlgorithm($root, oldNode);
    //$root.appendChild(document.createElement('div'));
    setTimeout(() => {
      diffAlgorithm($root, newNode, oldNode)
      
    },
      1000
    ); 
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    expect(diffAlgorithm).toBeCalled();
    expect(
      testOldNode.children[0].children[0].childNodes[2].nodeValue.trim()
      ).toEqual('todo list item 1');
    expect(
      newNode.children[0].children[0].childNodes[2].nodeValue.trim()
      ).toEqual('todo list item 1 update');
    
  });
  
afterEach(()=>{

})
