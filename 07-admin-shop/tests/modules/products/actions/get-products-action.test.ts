import { getProductsAction } from '@/modules/products/actions';
import { number, string } from 'yup';

describe('getProductsAction', async () => {
  const products = await getProductsAction(1, 10);

  test('should return expected', async () => {
    expect(products.length).toBe(10);
    expect(products.at(0)).toEqual(
      expect.objectContaining({
        id: expect.any(string),
        title: expect.any(string),
        price: expect.any(number),
        description: expect.any(string),
        slug: expect.any(string),
        stock: expect.any(number),
        sizes: expect.any(Array),
        gender: expect.any(string),
        tags: expect.any(Array),
        images: expect.any(Array),
        user: expect.anything(),
      }),
    );
  });

  test('products should have a full image url', () => {
    products.forEach((product) => {
      product.images.forEach((image) => {
        expect(image).toContain(`${import.meta.env.VITE_TESLO_API_URL}/files/product`);
      });
    });
  });
});
