const TEXT_NODE = Node.TEXT_NODE;

const onlyNewNodeOrOldNode = (oldNode, newNode) => {

    if(!oldNode && !newNode){
        return "notBothNode";
    }

    if(!newNode && oldNode){
        return "onlyOldNode";
    }
    
    if(!oldNode && newNode){
        return "onlyNewNode";
    }

    if(oldNode.nodeType === TEXT_NODE && newNode.nodeType === TEXT_NODE){
        return "BothTextNode";
    }

    if(oldNode.nodeName !== newNode.nodeName) {
        return "BothDiffTagNameNode";
    }

    if(oldNode.nodeName === newNode.nodeName) {
        return "BothSameTagNameNode";
    }

    return "BothNode";

} 

const updateAttributes = (oldNode, newNode) => {

    const oldNodeProps = [ ...oldNode.attributes ]; 
    const newNodeProps = [ ...newNode.attributes ];

    for (const {name, value} of newNodeProps) {
    
        if(value === oldNode.getAttribute(name)){
            continue;
        }
        oldNode.setAttribute(name, value);
    
    }

    for (const {name} of oldNodeProps) {
        
        if(newNode.getAttribute(name) !== undefined) {
            continue;
        }
        oldNode.removeAttribute(name);

    }

}


export default diffAlgorithm = (parent, oldNode, newNode) => {
    
    switch(onlyNewNodeOrOldNode(oldNode, newNode)){

        case 'notBothNode':
            break;
        case 'onlyNewNode':
            parent.appendChild(newNode);
            break;
        case 'onlyOldNode':
            oldNode.remove();
            break;
        case 'BothTextNode': 
            oldNode.nodeValue === newNode.nodeValue ? '' : oldNode.nodeValue =  newNode.nodeValue; 
            break;

        case "BothDiffTagNameNode": 

            const index = [ ...parent.childNodes ].indexOf(oldNode);
			oldNode.remove(),
	        parent.appendChild(newNode, index);  

            break;

        case "BothSameTagNameNode": 

            updateAttributes(
                oldNode,
                newNode    
            );

            const newChildren = [ ...newNode.childNodes ];
            const oldChildren = [ ...newNode.childNodes ];
            const maxLength = Math.max(newChildren.length, oldChildren.length);
            for(let i = 0; i < maxLength ; i++){
                diffAlgorithm(oldNode, oldChildren[i], newChildren[i]);
            }

            break;

        case 'BothNode':
            
            break;

    }    
}