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
    tallados: 'Tallados en Piedra'
  };

  const categoryDescriptions = {
    textiles: 'Descubre nuestra colección de textiles tradicionales ayacuchanos, tejidos a mano con técnicas ancestrales y tintes naturales.',
    ceramica: 'Explora nuestras piezas de cerámica hechas a mano, cada una con diseños únicos que reflejan la rica tradición alfarera de Ayacucho.',
    retablos: 'Conoce nuestros retablos elaborados por maestros artesanos, verdaderas obras de arte que narran historias de la cultura andina.',
    tallados: 'Admira nuestras esculturas talladas en piedra de Huamanga, piezas únicas que combinan tradición y maestría artesanal.'
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-100 ">
              {categoryTitles[params.category as keyof typeof categoryTitles]}
            </h1>
            <p className="mt-2 text-neutral-300 max-w-3xl">
              {categoryDescriptions[params.category as keyof typeof categoryDescriptions]}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-neutral-800/50 rounded-lg p-1 border border-neutral-700">
              <Button variant="ghost" size="sm" className="px-3 text-neutral-300 hover:text-primary-400 hover:bg-primary-500/20">
                <Grid2X2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="px-3 text-neutral-300 hover:text-primary-400 hover:bg-primary-500/20">
                <LayoutList className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" className="bg-neutral-800/50 border-neutral-700 text-neutral-300 hover:bg-neutral-700/50">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProductFilters />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid products={productsByCategory[params.category as keyof typeof productsByCategory]} />
          </div>
        </div>
      </div>
    </div>
  );
}