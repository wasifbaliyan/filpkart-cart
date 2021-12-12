export function addToCart(state, payload) {
  const index = state.cart.findIndex((item) => item.id === payload.id);
  if (index !== -1) {
    const updatedCart = [...state.cart];
    updatedCart[index].count = updatedCart[index].count + 1;
    return { ...state, cart: updatedCart };
  } else {
    const updatedCart = [...state.cart];
    updatedCart.push(payload);
    return { ...state, cart: updatedCart };
  }
}

export function removeFromCart(state, payload) {
  const index = state.cart.findIndex((item) => item.id === payload.id);
  if (index !== -1) {
    const updatedCart = [...state.cart];
    updatedCart.splice(index, 1);
    return { ...state, cart: updatedCart };
  }
}

export function incrementItemCount(state, payload) {
  const index = state.cart.findIndex((item) => item.id === payload.id);
  if (index !== -1) {
    const updatedCart = [...state.cart];
    updatedCart[index].count = updatedCart[index].count + 1;
    return { ...state, cart: updatedCart };
  }
}

export function decrementItemCount(state, payload) {
  const index = state.cart.findIndex((item) => item.id === payload.id);
  if (index !== -1) {
    const updatedCart = [...state.cart];
    updatedCart[index].count = updatedCart[index].count - 1;
    return { ...state, cart: updatedCart };
  }
}

export function addToSaved(state, payload) {
  const index = state.cart.findIndex((item) => item.id === payload.id);
  const indexSaved = state.saved.findIndex((item) => item.id === payload.id);
  if (index !== -1) {
    const updatedCart = [...state.cart];
    const updatedSave = [...state.saved];
    if (indexSaved === -1) {
      updatedSave.push(payload);
    }

    updatedCart.splice(index, 1);
    return { ...state, cart: updatedCart, saved: updatedSave };
  } else {
    const updatedCart = [...state.cart];
    updatedCart.push(payload);
    return { ...state, cart: updatedCart };
  }
}

export function removeFromSaved(state, payload) {
  const index = state.saved.findIndex((item) => item.id === payload.id);
  if (index !== -1) {
    const updatedSaved = [...state.saved];
    updatedSaved.splice(index, 1);
    return { ...state, saved: updatedSaved };
  }
}
