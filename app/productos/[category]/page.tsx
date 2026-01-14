import { notFound } from 'next/navigation';
import ProductGrid from '@/components/productos/ProductGrid';
import ProductFilters from '@/components/productos/ProductFilters';
import { Button } from '@/components/ui/button';
import { Grid2X2, LayoutList, Filter } from 'lucide-react';

// Valid categories
const validCategories = ['textiles', 'ceramica', 'retablos', 'tallados', 'joyeria'];

// Products data by category
const productsByCategory = {
  textiles: [
    {
      id: 2,
      name: 'Tapiz de Lana Natural',
      price: 180,
      image: 'https://i.pinimg.com/236x/64/4b/f1/644bf1323e73959b7803ed5c441bbee5.jpg',
      category: 'Textiles',
      artisan: 'María Quispe'
    },
    {
      id: 5,
      name: 'Manta Tradicional Ayacuchana',
      price: 220,
      image: 'https://d15yqn4xt8exgp.cloudfront.net/media/products/TTP000285/inka-products-tissu-traditionnel-du-cusco-tisse-main-motifs-ethniques-4-20210925021840.jpeg',
      category: 'Textiles',
      artisan: 'María Quispe'
    },
    {
      id: 6,
      name: 'Chal de Alpaca',
      price: 150,
      image: 'https://acdn-us.mitiendanube.com/stores/545/007/products/img_70571-48803bbcaebdc106af15920640719748-1024-1024.jpg',
      category: 'Textiles',
      artisan: 'Rosa Mendoza'
    }
  ],
  ceramica: [
    {
      id: 3,
      name: 'Cerámica Decorativa',
      price: 150,
      image: 'https://d20f60vzbd93dl.cloudfront.net/uploads/tienda_008087/tienda_008087_dbdca40f9861e76e713579c52eb0a3caa478a6f4_producto_large_90.png?not-from-cache-please',
      category: 'Cerámica',
      artisan: 'Ana López'
    },
    {
      id: 7,
      name: 'Vasija Ceremonial',
      price: 280,
      image: 'https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/51513613_845761779110651_5795160558873346048_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GE4SwcobafMQ7kNvwGOmB2H&_nc_oc=AdnYOwmiY8Q4HlTtwWcUekskB1IznPoTI8cB6MUzQBTWQin6Oin8lyNMe14JUvX4UaIar7eY0acaxvSwoj3LugDQ&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=qqPIAkZjQRvmimj4_8WOVw&oh=00_AfM4L1UIGnFbKiuIgxGcnKgaRv3im6Uq0ndiJRC2U8IwfA&oe=6882F1D5',
      category: 'Cerámica',
      artisan: 'Pedro Sánchez'
    },
    {
      id: 8,
      name: 'Plato Decorativo',
      price: 120,
      image: 'https://ayacuchoemprende.com/wp-content/uploads/2023/11/AYACUMANTA-piedra-de-huamanga-PLATO-artesania-AYACUCHANA.jpg',
      category: 'Cerámica',
      artisan: 'Ana López'
    }
  ],
  retablos: [
    {
      id: 1,
      name: 'Retablo Ayacuchano Tradicional',
      price: 250,
      image: 'https://www.huillcaexpedition.com/images/blog/retablo-ayacuchano-1743141563.jpg',
      category: 'Retablos',
      artisan: 'Manuel Huamán'
    },
    {
      id: 9,
      name: 'Retablo Navideño',
      price: 320,
      image: 'https://musuqwari.com/wp-content/uploads/2023/11/MW-RTRA7-2070-BA_1-600x600.jpg',
      category: 'Retablos',
      artisan: 'Manuel Huamán'
    },
    {
      id: 10,
      name: 'Retablo Costumbrista',
      price: 280,
      image: 'https://peru.info/archivos/publicacion/67-imagen-176429122017.jpg',
      category: 'Retablos',
      artisan: 'Carlos Flores'
    }
  ],
  tallados: [
    {
      id: 4,
      name: 'Escultura en Piedra de Huamanga',
      price: 320,
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Piedra_de_Huamanga.jpg  ',
      category: 'Tallados',
      artisan: 'José Cárdenas'
    },
    {
      id: 11,
      name: 'Figura Decorativa',
      price: 180,
      image: 'https://museopedrodeosma.org/wp-content/uploads/2021/03/Arcangel-Miguel_Sala-Piedra-de-Huamanga_003.jpg',
      category: 'Tallados',
      artisan: 'José Cárdenas'
    },
    {
      id: 12,
      name: 'Medallón Tallado',
      price: 150,
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDdhUN86Y5nmp1UQ6mRKWk9eEmV1FR5n8aFKxRjYDcJ_wNPYqI8DXHk8UU57UcEw2mgx3bEaMnZ-zbYa-lrhcph2wHqeLrG6OmYvhylFevGJwPzNVqRaKt78TzB54XJavelQxHhSc-oa0/s1600/Ayacucho+Arte+2.jpg',
      category: 'Tallados',
      artisan: 'Miguel Torres'
    }
  ]
};

export function generateStaticParams() {
  return validCategories.map((category) => ({
    category,
  }));
}

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Check if category is valid
  if (!validCategories.includes(params.category)) {
    notFound();
  }

  const categoryTitles = {
    textiles: 'Textiles Ayacuchanos',
    ceramica: 'Cerámica Tradicional',
    retablos: 'Retablos Artesanales',
    tallados: 'Tallados en Piedra',
    joyeria: 'Joyería Andina'
  };

  const categoryDescriptions = {
    textiles: 'Descubre nuestra colección de textiles tradicionales ayacuchanos, tejidos a mano con técnicas ancestrales y tintes naturales.',
    ceramica: 'Explora nuestras piezas de cerámica hechas a mano, cada una con diseños únicos que reflejan la rica tradición alfarera de Ayacucho.',
    retablos: 'Conoce nuestros retablos elaborados por maestros artesanos, verdaderas obras de arte que narran historias de la cultura andina.',
    tallados: 'Admira nuestras esculturas talladas en piedra de Huamanga, piezas únicas que combinan tradición y maestría artesanal.',
    joyeria: 'Joyas únicas inspiradas en la iconografía andina.'
  };

  return (
    <div className="min-h-screen pt-28 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-[0.03] dark:opacity-5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-bold uppercase tracking-wider mb-3">
              Colección Exclusiva
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 dark:text-white tracking-tight mb-4">
              {categoryTitles[params.category as keyof typeof categoryTitles] || params.category}
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed border-l-4 border-primary-500 pl-4 py-1">
              {categoryDescriptions[params.category as keyof typeof categoryDescriptions]}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white dark:bg-neutral-800 p-1 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center">
              <Button variant="ghost" size="icon" className="hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg text-neutral-600 dark:text-neutral-300">
                <Grid2X2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg text-neutral-400 dark:text-neutral-500">
                <LayoutList className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="outline" className="h-10 bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-xl px-4">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-32">
              <ProductFilters />
            </div>
          </div>
          <div className="lg:col-span-3">
            <ProductGrid products={productsByCategory[params.category as keyof typeof productsByCategory]} />
          </div>
        </div>
      </div>
    </div>
  );
}