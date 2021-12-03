class apiResource_cart{
    constructor(cart){
        this.cart = getCartURL()
    }
    getCartURL(){
        cart_items = 'https://www.demoblaze.com/cart.html'
    }
}
function cart_api(){
    return apiResource_cart.getCartURL
}
export function cart_api()
