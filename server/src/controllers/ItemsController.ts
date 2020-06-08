import knex from '../database/connection'
import {Request, Response} from 'express'

class ItemsController {
  async index (request: Request, response: Response){
    const items = await knex('items').select('*');
    
    //Serializando os dados em um novo formato a quem requisitar
    const serializedItems = items.map(item =>{
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.104:3333/uploads/${item.image}`,
      };
    })
    
    return response.json(serializedItems)
    }
}

export default ItemsController;