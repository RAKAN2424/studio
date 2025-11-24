'use server';

import {
  addToCart,
  createCart,
  getCart,
  removeFromCart,
  updateCart,
} from '@/lib/shopify';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function addItem(selectedVariantId: string) {
  let cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    cartId = cart.id;
    cookies().set('cartId', cartId);
  }

  if (!selectedVariantId) {
    return 'Missing product variant ID';
  }

  try {
    await addToCart(cartId, [{ merchandiseId: selectedVariantId, quantity: 1 }]);
    revalidatePath('/cart');
  } catch (e) {
    return 'Error adding item to cart';
  }
}

export async function removeItem(lineId: string) {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  try {
    await removeFromCart(cartId, [lineId]);
    revalidatePath('/cart');
  } catch (e) {
    return 'Error removing item from cart';
  }
}

export async function updateItemQuantity(lineId: string, quantity: number) {
    const cartId = cookies().get('cartId')?.value;

    if (!cartId) {
        return 'Missing cart ID';
    }
    
    try {
        await updateCart(cartId, [
        {
            id: lineId,
            quantity,
        },
        ]);
        revalidatePath('/cart');
    } catch (e) {
        return 'Error updating item quantity';
    }
}
