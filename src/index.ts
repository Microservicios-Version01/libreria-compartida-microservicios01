// Productos
export * from "./dto/products/Product.dto.js";
export * from "./dto/products/update-product.dto.js";

// Ordenes
export * from "./dto/orders/create-order.dto.js";
export * from "./dto/orders/status-order.dto.js";
export * from "./dto/orders/change-order-status.dto.js";

/*
    Al poner "verbatimModuleSyntax": false, desabilito las extensiones de ".js",
    sin embargo, nodejs (de mis projectos), usa ESM(ECMAScript), que requiere explicitamente
    que se utilizen las extensiones al hacer los importes.
*/
