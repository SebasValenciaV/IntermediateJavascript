// Datos de productos
const productos = [
    {
        id: 1,
        nombre: "Laptop Gamer",
        categoria: "Tecnología",
        precio: 1200,
        descripcion: "Laptop potente para videojuegos"
    },
    {
        id: 2,
        nombre: "Smartphone Pro",
        categoria: "Tecnología",
        precio: 800,
        descripcion: "Smartphone de alta gama para profesionales"
    },
    {
        id: 3,
        nombre: "Tablet Educativa",
        categoria: "Educación",
        precio: 300,
        descripcion: "Tablet diseñada para estudiantes"
    },
    {
        id: 4,
        nombre: "Laptop Oficina",
        categoria: "Tecnología",
        precio: 600,
        descripcion: "Laptop ideal para trabajo de oficina"
    },
    {
        id: 5,
        nombre: "Smartphone Básico",
        categoria: "Tecnología",
        precio: 200,
        descripcion: "Smartphone económico para uso básico"
    }
];

// Clase de Sistema de Recomendación
class SistemaRecomendacion {
    constructor(productos) {
        this.productos = productos;
    }

    // Recomendar por categoría
    recomendarPorCategoria(categoriaProducto) {
        return this.productos.filter(
            producto => producto.categoria === categoriaProducto
        );
    }

    // Recomendar por rango de precio
    recomendarPorPrecio(precioMinimo, precioMaximo) {
        return this.productos.filter(
            producto => producto.precio >= precioMinimo && 
                        producto.precio <= precioMaximo
        );
    }

    // Buscar producto por nombre
    buscarPorNombre(nombreProducto) {
        return this.productos.filter(
            producto => producto.nombre.toLowerCase().includes(nombreProducto.toLowerCase())
        );
    }

    // Recomendar productos similares
    recomendarSimilares(productoId) {
        const productoBase = this.productos.find(p => p.id === productoId);
        
        if (!productoBase) return [];

        return this.productos.filter(
            producto => 
                producto.id !== productoId && 
                producto.categoria === productoBase.categoria
        ).slice(0, 3);
    }
}

// Crear instancia del sistema de recomendación
const miSistemaRecomendacion = new SistemaRecomendacion(productos);

// Funciones de demostración
function mostrarRecomendaciones() {
    console.log("🔍 Recomendaciones por Categoría (Tecnología):");
    console.log(miSistemaRecomendacion.recomendarPorCategoria("Tecnología"));

    console.log("\n💰 Recomendaciones por Precio (500-1000):");
    console.log(miSistemaRecomendacion.recomendarPorPrecio(500, 1000));

    console.log("\n🔎 Búsqueda por Nombre (Laptop):");
    console.log(miSistemaRecomendacion.buscarPorNombre("Laptop"));

    console.log("\n🌟 Productos Similares a Laptop Gamer:");
    console.log(miSistemaRecomendacion.recomendarSimilares(1));
}

// Ejecutar demostraciones
mostrarRecomendaciones();