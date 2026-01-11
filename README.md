# MyLibrary - Librería Compartida

Librería de tipos, DTOs y enums compartidos entre los microservicios.

## Estructura

```
MyLibrary/
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── update-library.sh
└── src/
    ├── index.ts          # Exportaciones principales
    ├── dto/
    │   ├── orders/
    │   └── products/
    └── enum/
        └── order.enum.ts
```

## Actualizar Dependencias

```bash
bash update-library.sh
```

El script:

- Actualiza todas las dependencias a las últimas versiones
- Regenera `pnpm-lock.yaml`
- Valida la integridad del proyecto

```bash
pnpm install
```

## Build

Este script:

- Actualiza la dependencia `@renzosanchez1357/libreria-compartida-microservicios01` en cada microservicio (Products, Logistics, Users, etc.)
- Navega automáticamente por cada carpeta y ejecuta `pnpm update <librería>`
- Muestra si la actualización fue exitosa o hubo error en cada servicio

> Ejecuta el script desde la carpeta `MyLibrary`. Si agregas más microservicios, edítalo y añádelos al array `SERVICES`.

Si quieres actualizar la propia librería, usa los comandos manuales:

```bash
pnpm build
```

## Publicación

Después de actualizar y hacer cambios:

```bash
pnpm publish
```

## Uso en otros proyectos

Importa desde la librería en tus microservicios:

```typescript
// En GateWay, Products, Logistics, Users
import { MyCustomDTO } from "@myproject/library";
```

Asegúrate de que el `package.json` de MyLibrary esté correctamente configurado como paquete exportable.
