import { cart_api } from "../../api_url_resources/apiResource_cart/cart";
const request = require("request")

describe("Testing the payload of the cart", () => {
    it('Should retrieve a response to validate the resource present in the cart', () => {
        request.get(cart_api)
    })
})
