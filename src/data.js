
const nodes = [
    {
        group: 'nodes',
            data: { 
                id: 'node1',
                weight: 75,
                shape: 'triangle'
                
            },
            position: { x: 500, y: 500 },
            label: 'node1',
    },
    {
        group: 'nodes',
            data: { 
                id: 'node2',
                weight: 150,
                
            },
            position: { x: 300, y: 300 }
    },
    {
        group: 'nodes',
            data: { 
                id: 'node3',
                weight: 200,
                
            },
            position: { x: 300, y: 100 }
    },
    {
        group: 'nodes',
            data: { 
                id: 'node4',
                weight: 150,
                
            },
            position: { x: 250, y: 450 }
    },
    {
        group: 'nodes',
            data: { 
                id: 'node5',
                weight: 150,
                
            },
            position: { x: 500, y: 700 }
        },
        {
            group: 'nodes',
                data: { 
                    id: 'node6',
                    weight: 150,
                    
                },
                position: { x: 500, y: 200 }
        },
        {
            group: 'nodes',
                data: { 
                    id: 'node7',
                    weight: 200,
                    
                },
                position: { x: 650, y: 100 }
        },
        {
            group: 'nodes',
                data: { 
                    id: 'node8',
                    weight: 200,
                    
                },
                position: { x: 700, y: 300 }
        },
        {
            group: 'nodes',
                data: { 
                    id: 'node9',
                    weight: 200,
                    
                },
                position: { x: 700, y: 500 }
        },
        {
            group: 'nodes',
                data: { 
                    id: 'node10',
                    weight: 200,
                    
                },
                position: { x: 250, y: 700 }
        },
        {
            group: 'nodes',
                data: { 
                    id: 'node11',
                    weight: 200,
                    
                },
                position: { x: 700, y: 700 }
        },
    ];

const edges = [
    {
        group: 'edges',
            data: { 
                id: 'edge1',
                source: 'node1',
                target: 'node2'
                
            },
    },
    {
        group: 'edges',
            data: { 
                id: 'edge2',
                source: 'node1',
                target: 'node3'
                
            },
    },
    {
        group: 'edges',
            data: { 
                id: 'edge3',
                source: 'node1',
                target: 'node4'
                
            },
    },
    {
        group: 'edges',
            data: { 
                id: 'edge4',
                source: 'node1',
                target: 'node5'
                
            },
    },
    {
        group: 'edges',
            data: { 
                id: 'edge5',
                source: 'node1',
                target: 'node6'
                
            },
    },
    {
        group: 'edges',
            data: { 
                id: 'edge6',
                source: 'node1',
                target: 'node7'
                
            },
    },
    {
        group: 'edges',
            data: { 
                id: 'edge7',
                source: 'node1',
                target: 'node8'
                
            },
    },
    {
        group: 'edges',
            data: { 
                id: 'edge8',
                source: 'node8',
                target: 'node9'
                
            },
    },
    {
        group: 'edges',
            data: { 
                id: 'edge9',
                source: 'node4',
                target: 'node10'
                
            },
    },
    {
        group: 'edges',
            data: { 
                id: 'edge10',
                source: 'node9',
                target: 'node11'
                 
            },
    },
    {
        group: 'edges',
            data: { 
                id: 'edge8',
                source: 'node1',
                target: 'node9'
                
            },
    },
];
export default [
    ...nodes,
    ...edges,
    
];