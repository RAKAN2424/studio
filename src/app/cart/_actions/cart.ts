
'use server';

// This file is temporarily modified to work with local state.
// The original Shopify logic is preserved in comments.

// import {
//   addToCart,
//   createCart,
//   getCart,
//   removeFromCart,
//   updateCart,
// } from '@/lib/shopify';
// import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function addItem(prevState: any, selectedVariantId: string) {
  // let cartId = cookies().get('cartId')?.value;
  // let cart;

  // if (cartId) {
  //   cart = await getCart(cartId);
  // }

  // if (!cartId || !cart) {
  //   cart = await createCart();
  //   cartId = cart.id;
  //   cookies().set('cartId', cartId);
  // }

  if (!selectedVariantId) {
    return 'Missing product variant ID';
  }

  try {
    // await addToCart(cartId, [{ merchandiseId: selectedVariantId, quantity: 1 }]);
    console.log(`Adding item ${selectedVariantId} to cart.`);
    revalidatePath('/');
  } catch (e) {
    return 'Error adding item to cart';
  }
}

export async function removeItem(prevState: any, lineId: string) {
  // const cartId = cookies().get('cartId')?.value;

  // if (!cartId) {
  //   return 'Missing cart ID';
  // }

  try {
    // await removeFromCart(cartId, [lineId]);
     console.log(`Removing item ${lineId} from cart.`);
    revalidatePath('/cart');
  } catch (e) {
    return 'Error removing item from cart';
  }
}

export async function updateItemQuantity(
  payload: {
    lineId: string;
    variantId: string;
    quantity: number;
  }
) {
  // const cartId = cookies().get('cartId')?.value;

  // if (!cartId) {
  //   return 'Missing cart ID';
  // }

  const { lineId, variantId, quantity } = payload;

  try {
    if (quantity === 0) {
      // await removeFromCart(cartId, [lineId]);
      console.log(`Removing item ${lineId} from cart.`);
      revalidatePath('/cart');
      return;
    }

    // await updateCart(cartId, [
    //   {
    //     id: lineId,
    //     merchandiseId: variantId,
    //     quantity,
    //   },
    // ]);
    console.log(`Updating item ${lineId} to quantity ${quantity}.`);
    revalidatePath('/cart');
  } catch (e) {
    return 'Error updating item quantity';
  }
}

    