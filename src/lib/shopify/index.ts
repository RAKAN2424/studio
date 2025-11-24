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

const domain = SHOPIFY_STORE_DOMAIN;
const endpoint = `https://${domain}/api/2023-10/graphql.json`;
const key = SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<T> {
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

    return body.data;
  } catch (e) {
    console.error(e);
    throw {
      status: 500,
      message: 'Error receiving data from Shopify',
    };
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

  return res.products.edges.map((edge) => edge.node);
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  const res = await shopifyFetch<{ product: Product }>({
    query: getProductQuery,
    variables: {
      handle,
    },
  });

  return res.product;
}

export async function getCollection(handle: string): Promise<Collection | undefined> {
  const res = await shopifyFetch<{ collection: Collection }>({
    query: getCollectionQuery,
    variables: {
      handle,
    },
  });

  return res.collection;
}

export async function getCollections(): Promise<Collection[]> {
  const res = await shopifyFetch<{ collections: { edges: { node: Collection }[] } }>({
    query: getCollectionsQuery,
  });

  return res.collections.edges.map((edge) => edge.node);
}

export async function getProductsFromCollection(handle: string): Promise<Product[]> {
    const res = await shopifyFetch<{ collection: { products: { edges: { node: Product }[] } } }>({
        query: getProductsFromCollectionQuery,
        variables: {
            handle,
        },
    });

    return res.collection.products.edges.map((edge) => edge.node);
}

export async function createCart(): Promise<Cart> {
  const res = await shopifyFetch<ShopifyCreateCartOperation>({
    query: createCartMutation,
  });

  return res.cartCreate.cart;
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
  return res.cartLinesAdd.cart;
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

  return res.cartLinesRemove.cart;
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyUpdateCartOperation>({
    query: updateCartMutation,
    variables: {
      cartId,
      lines,
    },
  });

  return res.cartLinesUpdate.cart;
}

export async function getCart(cartId: string): Promise<Cart | undefined> {
  const res = await shopifyFetch<ShopifyCartOperation>({
    query: getCartQuery,
    variables: { cartId },
  });

  return res.cart;
}
