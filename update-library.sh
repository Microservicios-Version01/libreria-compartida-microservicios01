#!/bin/bash

# Script para actualizar la librería externa en todos los microservicios
# Ubicación: /GateWay/MyLibrary/update-library.sh
# Uso: bash update-library.sh

LIBRARY_NAME="@renzosanchez1357/libreria-compartida-microservicios01"
SERVICES=("Products" "Logistics" "Users (Construccion)")

echo "📚 Actualizando $LIBRARY_NAME en todos los microservicios..."
echo ""

# Actualizar en cada microservicio
for service in "${SERVICES[@]}"; do
    echo "📦 Actualizando en: $service"
    cd "../../MicroServicios/$service"
    pnpm update "$LIBRARY_NAME"
    
    # Si se ejecuto el comando anterior correctamente (~?)
    if [ $? -eq 0 ]; then
        echo "✅ $service actualizado"
    else
        echo "❌ Error en $service"
    fi
    echo ""
done

