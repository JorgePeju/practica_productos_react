import { consultation } from '../../api/fetch';

export const getProducts = async (category, id) => {

    const { products } = await consultation(category);

    const product = products.map(item => ({

        id: item.id,
        title: item.title,
        description: item.description,
        photo: item.thumbnail,
        price: item.price,
        rating: item.rating,
        category
        
    }));

  return product;

};