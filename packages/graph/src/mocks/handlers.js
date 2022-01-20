// Rest

import { rest } from 'msw';


const algoData = (req, res, ctx) => {

    return res(
        ctx.status(200)
    )
    
}


export const handlers = [

    rest.post('/data', algoData);

];