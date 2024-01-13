export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  user: {
    id: number;
  };
}
