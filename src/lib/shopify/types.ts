export type ShopifyFetchParams = {
  query: string;
  variables?: Record<string, unknown>;
};

export type ShopifyFetchResult<T> = {
  status: number;
  body: T;
};

export type ShopifyError = {
  status: number;
  message: Error;
  query: string;
};

export interface Image {
  url: string;
  altText: string;
  width: number;
  height: number;
}

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface Product {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: ProductVariant[];
  featuredImage: Image;
  images: Image[];
  seo: SEO;
  tags: string[];
  updatedAt: string;
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
}

export interface SEO {
  title: string;
  description: string;
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  seo: SEO;
  updatedAt: string;
  path: string;
  products: {
    edges: {
      node: Product;
    }[];
  }
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: Line[];
  totalQuantity: number;
}

export interface Line {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: Product;
  };
}

export type ShopifyCart = Omit<Cart, 'lines'> & {
  lines: {
    edges: { node: Line }[];
  };
};

export type ShopifyCartOperation = {
  cart: ShopifyCart;
};

export type ShopifyCreateCartOperation = {
  cartCreate: ShopifyCartOperation;
};

export type ShopifyAddToCartOperation = {
  cartLinesAdd: ShopifyCartOperation;
};

export type ShopifyRemoveFromCartOperation = {
  cartLinesRemove: ShopifyCartOperation;
};

export type ShopifyUpdateCartOperation = {
  cartLinesUpdate: ShopifyCartOperation;
};

export type ShopifyCollectionProductsOperation = {
  collection: {
    products: {
      edges: { node: Product }[];
    };
  };
};
