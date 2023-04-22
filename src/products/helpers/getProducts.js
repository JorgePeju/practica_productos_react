import { consultation } from '../../api/fetch';

export const getProducts = async (id, category ) => {

  const request = await consultation(id, category);
 
  if (id) {

    const product = {

      id: request.id,
      title: request.title,
      description: request.description,
      photo: request.thumbnail,
      price: request.price,
      rating: request.rating

    };

    return product

  } else {

    const product = request.products.map(item => ({

      id: item.id,
      title: item.title,
      description: item.description,
      photo: item.thumbnail,
      price: item.price,
      rating: item.rating

    }));

    return product;

  }

};