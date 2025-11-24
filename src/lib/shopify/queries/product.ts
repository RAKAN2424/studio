import { productFragment } from '../fragments/product';

export const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${productFragment}
`;

export const getProductsQuery = /* GraphQL */ `
  query getProducts(
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
  ) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`;

export const getProductsFromCollectionQuery = /* GraphQL */ `
    query getProductsFromCollection($handle: String!){
        collection(handle: $handle) {
            products(first: 20){
                edges {
                    node {
                        ...product
                    }
                }
            }
        }
    }
    ${productFragment}
`;
