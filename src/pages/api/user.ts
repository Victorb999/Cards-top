/* eslint-disable import/no-anonymous-default-export */

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default
  async (_req: NextApiRequest, res: NextApiResponse<Data>)=> {
  
    await fetch('https://pokeapi.co/api/v2/pokemon/2',)
    .then(T =>
     T.json())
    .then(data => {
      console.log(data)
      res.status(200).json(data)
    })
}