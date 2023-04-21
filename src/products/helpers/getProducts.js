import { consultation } from '../../api/fetch';

export const getProducts = async (category) => {

    const { products } = await consultation(category);

    const product = products.map(product => ({

        id: product.id,
        title: product.title,
        description: product.description,
        photo: product.thumbnail,
        price: product.price,
        rating: product.rating
        
    }));

  return product;

};