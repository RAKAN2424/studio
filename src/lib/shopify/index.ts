
import {
  SHOPIFY_STORE_DOMAIN,
  SHOPIFY_STOREFRONT_ACCESS_TOKEN,
} from '@/lib/constants';
import {
  Cart,
  Collection,
  Product,
  ShopifyAddToCartOperation,
  ShopifyCartOperation,
  ShopifyCreateCartOperation,
  ShopifyRemoveFromCartOperation,
  ShopifyUpdateCartOperation,
} from './types';
import {
  getProductsQuery,
  getProductQuery,
  getProductsFromCollectionQuery,
} from './queries/product';
import { getCollectionQuery, getCollectionsQuery } from './queries/collection';
import {
  createCartMutation,
  addToCartMutation,
  removeFromCartMutation,
  updateCartMutation,
} from './mutations/cart';
import { getCartQuery } from './queries/cart';

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<{ status: number; body: T }> {
  if (!domain || !key) {
    throw new Error(
      'Missing Shopify credentials. Please check your .env file for SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_ACCESS_TOKEN.'
    );
  }
  
  const endpoint = `https://${domain}/api/2024-04/graphql.json`;

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
      },
      body: JSON.stringify({ query, variables }),
      cache: 'no-store',
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body: body.data,
    };
  } catch (e: unknown) {
    const error = e as Error & { status: number };
    throw new Error(`Error receiving data from Shopify: ${error.message}`);
  }
}

export async function getProducts({
  query,
  reverse,
  sortKey,
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  const res = await shopifyFetch<{ products: { edges: { node: Product }[] } }>({
    query: getProductsQuery,
    variables: {
      query,
      reverse,
      sortKey,
    },
  });

  return res.body.products.edges.map((edge) => edge.node);
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  const res = await shopifyFetch<{ product: Product }>({
    query: getProductQuery,
    variables: {
      handle,
    },
  });

  return res.body.product;
}

export async function getCollection(handle: string): Promise<Collection | undefined> {
  const res = await shopifyFetch<{ collection: Collection }>({
    query: getCollectionQuery,
    variables: {
      handle,
    },
  });

  return res.body.collection;
}

export async function getCollections(): Promise<Collection[]> {
  const res = await shopifyFetch<{ collections: { edges: { node: Collection }[] } }>({
    query: getCollectionsQuery,
  });

  return res.body.collections.edges.map((edge) => edge.node);
}

export async function getProductsFromCollection(handle: string): Promise<Product[]> {
    const res = await shopifyFetch<{ collection: { products: { edges: { node: Product }[] } } }>({
        query: getProductsFromCollectionQuery,
        variables: {
            handle,
        },
    });
    
    if (!res.body.collection) {
      console.warn(`Collection with handle "${handle}" not found.`);
      return [];
    }

    return res.body.collection.products.edges.map((edge) => edge.node);
}

export async function createCart(): Promise<Cart> {
  const res = await shopifyFetch<ShopifyCreateCartOperation>({
    query: createCartMutation,
  });

  return res.body.cartCreate.cart;
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyAddToCartOperation>({
    query: addToCartMutation,
    variables: {
      cartId,
      lines,
    },
  });
  return res.body.cartLinesAdd.cart;
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[]
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
    query: removeFromCartMutation,
    variables: {
      cartId,
      lineIds,
    },
  });

  return res.body.cartLinesRemove.cart;
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId?: string; quantity: number }[]
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyUpdateCartOperation>({
    query: updateCartMutation,
    variables: {
      cartId,
      lines,
    },
  });

  return res.body.cartLinesUpdate.cart;
}

export async function getCart(cartId: string): Promise<Cart | undefined> {
  const res = await shopifyFetch<ShopifyCartOperation>({
    query: getCartQuery,
    variables: { cartId },
  });

  // If the cart is not found, Shopify returns a null body.
  // We can check for this and return undefined.
  if (!res.body.cart) {
    return undefined;
  }

  return res.body.cart;
}
