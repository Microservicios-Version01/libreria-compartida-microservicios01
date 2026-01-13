// SERVICIO PRODUCTOS

// Productos
export * from "./dto/Productos/products/Product.dto.js";
export * from "./dto/Productos/products/update-product.dto.js";

// Categorias
export * from "./dto/Productos/categories/Category.dto.js";
export * from "./dto/Productos/categories/update-category.dto.js";

// SERVICIO LOGISTICA

// Ordenes
export * from "./dto/Logistica/orders/create-order.dto.js";
export * from "./dto//Logistica/orders/status-order.dto.js";
export * from "./dto/Logistica/orders/change-order-status.dto.js";

// SERVICIO USUARIOS

// SERVICIO USUARIOS

/*
    Al poner "verbatimModuleSyntax": false, desabilito las extensiones de ".js",
    sin embargo, nodejs (de mis projectos), usa ESM(ECMAScript), que requiere explicitamente
    que se utilizen las extensiones al hacer los importes.
*/
