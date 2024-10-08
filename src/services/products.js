import api from "./api";

const route = "products/";

export function getProducts() {
    return api.get(`${route}all`);
}

export function createProduct([product]) {
    return api.post(`${route}`, { product });
}