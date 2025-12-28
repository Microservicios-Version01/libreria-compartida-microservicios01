// Products
export * from "./dto/products/Product.dto.js";
export * from "./dto/products/update-product.dto.js";

// Orders
export * from "./dto/orders/create-order.dto.js";

/*
    Al poner "verbatimModuleSyntax": false, desabilito las extensiones de ".js",
    sin embargo, nodejs (de mis projectos), usa ESM(ECMAScript), que requiere explicitamente
    que se utilizen las extensiones al hacer los importes
*/
