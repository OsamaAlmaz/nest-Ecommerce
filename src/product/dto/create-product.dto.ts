export class CreateProductDTO{
    title:string;
    description: string;
    image: string;
    price: number;
    category: string;
    isNewProduct: boolean;
    oldPrice: number;
    newPrice: number;
}
