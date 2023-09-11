const getstorecart = () => {
    const storedcart = localStorage.getItem('cart');
    if (storedcart) {
        return JSON.parse(storedcart);
    } else {
        return []; // Return an empty array if 'cart' is not in localStorage
    }
}

const savetols = (cart) => {
    const carts = JSON.stringify(cart);
    localStorage.setItem('cart', carts);
}

const addtols = id => {
    const newcart = getstorecart();
    console.log(newcart, "wattt");
    console.log(id);
    newcart.push(id);
    savetols(newcart);
}

export { addtols, getstorecart };
