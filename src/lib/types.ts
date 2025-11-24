export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  tags?: string[];
};

export type CartItem = Product & {
  quantity: number;
};
