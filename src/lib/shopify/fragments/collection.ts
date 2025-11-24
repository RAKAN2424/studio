export const collectionFragment = /* GraphQL */ `
  fragment collection on Collection {
    id
    handle
    title
    description
    seo {
      title
      description
    }
    updatedAt
  }
`;
