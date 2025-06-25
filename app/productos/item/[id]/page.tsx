// ---- PRIMER ARCHIVO: `app/productos/[id]/page.tsx` ----

// Importa el componente que se encargará de renderizar los detalles visuales del producto.
import ProductDetails from '@/components/productos/ProductDetails';

// Datos de ejemplo para los productos. En una aplicación real, esto vendría de una API o una base de datos.
const products = [
  {
    id: 1,
    name: 'Retablo Ayacuchano Tradicional',
    description: 'Hermoso retablo ayacuchano hecho a mano con escenas tradicionales que representan la rica cultura de nuestra región. Cada pieza es única y está elaborada con técnicas ancestrales transmitidas de generación en generación.',
    price: 250,
    rating: 4.8,
    reviews: 124,
    stock: 5,
    artisan: {
      name: 'Manuel Huamán',
      id: 3,
      location: 'San Juan Bautista, Ayacucho',
      rating: 4.9
    },
    images: [
      'https://musuqwari.com/wp-content/uploads/2023/11/MW-RTRA5-2575-CL_1.jpg',
      'https://musuqwari.com/wp-content/uploads/2023/11/MW-RTRA5-2575-CL_5.jpg',
      'https://musuqwari.com/wp-content/uploads/2023/11/MW-RTRA5-2575-CL_2.jpg',
      'https://musuqwari.com/wp-content/uploads/2023/11/MW-RTRA5-2575-CL_3.jpg'
    ],
    details: [
      'Dimensiones: 40cm x 60cm',
      'Material: Madera de cedro',
      'Pintado a mano',
      'Incluye certificado de autenticidad',
      'Empaque especial para envío seguro'
    ]
  },
  {
    id: 2,
    name: 'Tapiz de Lana Natural',
    description: 'Tapiz tejido a mano con tintes naturales y diseños ancestrales que representan la cosmovisión andina.',
    price: 180,
    rating: 4.7,
    reviews: 98,
    stock: 3,
    artisan: {
      name: 'María Quispe',
      id: 1,
      location: 'Quinua, Ayacucho',
      rating: 4.8
    },
    images: [
      'https://images1.novica.net/pictures/4/p250393_2_800.jpg',
      'https://images1.novica.net/pictures/4/p250393_2_800.jpg',
      'https://images1.novica.net/pictures/4/p250393_2b_800.jpg'
    ],
    details: [
      'Dimensiones: 100cm x 150cm',
      'Material: Lana de oveja',
      'Tintes naturales',
      'Tejido a mano',
      'Diseños tradicionales'
    ]
  },
  {
    id: 'retablos',
    name: 'Colección de Retablos',
    description: 'Explora nuestra colección de retablos ayacuchanos tradicionales.',
    price: 0,
    rating: 0,
    reviews: 0,
    stock: 0,
    artisan: {
      name: 'Varios Artesanos',
      id: 0,
      location: 'Ayacucho',
      rating: 0
    },
    images: [
      'https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg'
    ],
    details: []
  }
];

/**
 * Función de Next.js (App Router) para generar rutas estáticas en tiempo de compilación (build time).
 * Crea una página HTML pre-renderizada para cada producto basándose en su 'id'.
 * Esto mejora el rendimiento y el SEO.
 * @returns Un array de objetos, donde cada objeto tiene una propiedad 'id' que es el identificador del producto.
 */
export function generateStaticParams() {
  // Mapea el array de productos para crear los parámetros de las rutas.
  return products.map((product) => ({
    id: product.id.toString() // El id debe ser un string para la URL.
  }));
}

/**
 * Componente de página para mostrar un producto individual.
 * Next.js lo renderizará cuando un usuario visite una URL como "/productos/1".
 * @param params - Objeto que contiene los parámetros de la ruta dinámica, en este caso { id: string }.
 * @returns El JSX de la página del producto o una página de "no encontrado".
 */
export default function ProductPage({ params }: { params: { id: string } }) {
  // Busca el producto en el array `products` cuyo id coincida con el de los parámetros de la URL.
  const product = products.find(p => p.id.toString() === params.id);

  // Si no se encuentra el producto (por ejemplo, una URL con un ID que no existe), muestra un mensaje de error.
  if (!product) {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
        {/* Patrón de fondo para decorar */}
        <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-neutral-100  mb-4">Producto no encontrado</h1>
            <p className="text-neutral-300">El producto que buscas no existe o ha sido removido.</p>
          </div>
        </div>
      </div>
    );
  }

  // Si se encuentra el producto, renderiza el componente `ProductDetails` y le pasa todos los datos del producto encontrado.
  return <ProductDetails product={product} />;
}