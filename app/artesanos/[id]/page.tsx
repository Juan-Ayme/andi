import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArtisanTabs from '@/components/artesanos/ArtisanTabs';

// Generate static params for export
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

// This would normally come from an API
const artisans = {
  '1': {
    id: 1,
    name: 'María Quispe',
    specialty: 'Textiles',
    location: 'Quinua, Ayacucho',
    rating: 4.8,
    reviews: 124,
    image: 'https://acgnoticias.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-19-at-9.58.52-AM-3.jpeg',
    coverImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIg_f7OKPOmQdvcDYMP1wwMJngTxIqtTINS0v7BhW-1v0YgmZRQIaYNSFcOR8JxJeR5m3ClJaev_AZwHvV9F2RWDOcqROt-murJUUBYK3A4AgVi7wBaDOPgN9xPoVHVJEUbuJNwgTpLdfZ/s1600/dsc_0671.jpg',
    bio: 'Especialista en textiles tradicionales ayacuchanos con más de 25 años de experiencia. Aprendí este arte de mi abuela y he dedicado mi vida a preservar y evolucionar estas técnicas ancestrales.',
    story: 'Mi historia con los textiles comenzó cuando era niña, observando a mi abuela tejer en su antiguo telar. Cada pieza que creo lleva consigo no solo los patrones tradicionales de nuestra región, sino también las historias y el significado cultural que han pasado de generación en generación.',
    products: [
      {
        id: 1,
        name: 'Tapiz de Lana Natural',
        price: 180,
        image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg'
      },
      {
        id: 2,
        name: 'Manta Tradicional',
        price: 250,
        image: 'https://images.pexels.com/photos/6045240/pexels-photo-6045240.jpeg'
      }
    ],
    awards: [
      'Premio Nacional de Artesanía 2020',
      'Reconocimiento a la Excelencia Artesanal UNESCO 2019',
      'Medalla de Oro en Feria Artesanal de Ayacucho 2018'
    ],
    techniques: [
      'Tejido a telar de cintura',
      'Tintes naturales tradicionales',
      'Iconografía tradicional ayacuchana',
      'Técnicas de tejido fino'
    ],
    email: 'maria.quispe@email.com',
    phone: '999111222',
    workshops: [],
  },
  '2': {
    id: 2,
    name: 'José Cárdenas',
    specialty: 'Tallados en Piedra',
    location: 'Huamanga, Ayacucho',
    rating: 4.9,
    reviews: 98,
    image: 'https://cdn-3.expansion.mx/dims4/default/77e8e39/2147483647/strip/true/crop/1800x1197+0+0/resize/1800x1197!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fc7%2F4e%2F3253ac5b44de81dbc39617b69b1f%2Fsb-8658.JPG',
    coverImage: 'https://images.pexels.com/photos/11055526/pexels-photo-11055526.jpeg',
    bio: 'Maestro tallador de piedra de Huamanga, preservando técnicas ancestrales con más de 30 años de experiencia.',
    story: 'Desde pequeño me fascinó la piedra de Huamanga. Mi padre me enseñó los secretos de este arte milenario. Cada escultura que creo es un diálogo entre mis manos y la piedra, respetando su naturaleza mientras le doy vida.',
    products: [
      {
        id: 3,
        name: 'Escultura en Piedra de Huamanga',
        price: 320,
        image: 'https://images.pexels.com/photos/11055526/pexels-photo-11055526.jpeg'
      },
      {
        id: 4,
        name: 'Figura Decorativa',
        price: 180,
        image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg'
      }
    ],
    awards: [
      'Maestro Artesano Nacional 2021',
      'Premio Internacional de Escultura 2020',
      'Reconocimiento Cultural Ayacucho 2019'
    ],
    techniques: [
      'Tallado tradicional en piedra',
      'Técnicas de pulido ancestrales',
      'Diseños geométricos andinos',
      'Escultura figurativa'
    ],
    email: 'jose.cardenas@email.com',
    phone: '999222333',
    workshops: [],
  },
  '3': {
    id: 3,
    name: 'Manuel Huamán',
    specialty: 'Retablos',
    location: 'San Juan Bautista, Ayacucho',
    rating: 4.7,
    reviews: 156,
    image: 'https://i0.wp.com/criterionoticias.wordpress.com/wp-content/uploads/2018/03/profesionalizacic3b3n-artesanos-foto-portada.jpg?fit=1200%2C800&ssl=1',
    coverImage: 'https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg',
    bio: 'Artista reconocido por sus detallados retablos que narran historias andinas con más de 28 años de experiencia.',
    story: 'Los retablos son mi pasión. Cada caja cuenta una historia, cada figura tiene un significado. Aprendí de los grandes maestros y ahora transmito este conocimiento a las nuevas generaciones.',
    products: [
      {
        id: 5,
        name: 'Retablo Ayacuchano Tradicional',
        price: 250,
        image: 'https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg'
      },
      {
        id: 6,
        name: 'Retablo Navideño',
        price: 320,
        image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg'
      }
    ],
    awards: [
      'Gran Maestro del Retablo 2022',
      'Premio Nacional de Arte Popular 2021',
      'Medalla de Honor Artesanal 2020'
    ],
    techniques: [
      'Construcción de cajas tradicionales',
      'Modelado en pasta',
      'Pintura a mano alzada',
      'Narrativa visual andina'
    ],
    email: 'manuel.huaman@email.com',
    phone: '999333444',
    workshops: [],
  },
  '4': {
    id: 4,
    name: 'Ana López',
    specialty: 'Cerámica',
    location: 'Huanta, Ayacucho',
    rating: 4.6,
    reviews: 89,
    image: 'https://fahho.mx/wp-content/uploads/2021/02/artepopular_FAHHO_SAT.jpg',
    coverImage: 'https://images.pexels.com/photos/6046220/pexels-photo-6046220.jpeg',
    bio: 'Ceramista especializada en técnicas precolombinas y diseños contemporáneos.',
    story: 'La arcilla es mi lenguaje. Combino técnicas ancestrales con diseños modernos, creando piezas que honran el pasado mientras abrazan el presente.',
    products: [
      {
        id: 7,
        name: 'Cerámica Decorativa',
        price: 150,
        image: 'https://images.pexels.com/photos/6046220/pexels-photo-6046220.jpeg'
      },
      {
        id: 8,
        name: 'Vasija Ceremonial',
        price: 280,
        image: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg'
      }
    ],
    awards: [
      'Premio Innovación Cerámica 2021',
      'Reconocimiento Artesanal Regional 2020',
      'Medalla de Plata Feria Nacional 2019'
    ],
    techniques: [
      'Modelado a mano',
      'Técnicas de cocción ancestrales',
      'Decoración con engobes naturales',
      'Diseños geométricos tradicionales'
    ],
    email: 'ana.lopez@email.com',
    phone: '999444555',
    workshops: [],
  },
  '5': {
    id: 5,
    name: 'Rosa Mendoza',
    specialty: 'Textiles',
    location: 'Santillana, Ayacucho',
    rating: 4.8,
    reviews: 112,
    image: 'https://cdn.shopify.com/s/files/1/0861/3888/0286/files/Casa_Nochipa_27_480x480.png?v=1718660222',
    coverImage: 'https://images.pexels.com/photos/6045788/pexels-photo-6045788.jpeg',
    bio: 'Tejedora experta en alpaca y lana de oveja con diseños únicos.',
    story: 'Cada hilo que tejo lleva la esencia de nuestros antepasados. Trabajo con fibras naturales de la región, creando piezas que conectan el alma con la tradición.',
    products: [
      {
        id: 9,
        name: 'Chal de Alpaca',
        price: 150,
        image: 'https://images.pexels.com/photos/6045788/pexels-photo-6045788.jpeg'
      },
      {
        id: 10,
        name: 'Poncho Tradicional',
        price: 280,
        image: 'https://images.pexels.com/photos/6045240/pexels-photo-6045240.jpeg'
      }
    ],
    awards: [
      'Maestra Tejedora Nacional 2022',
      'Premio Fibras Naturales 2021',
      'Reconocimiento UNESCO 2020'
    ],
    techniques: [
      'Tejido en telar de pedal',
      'Hilado a rueca tradicional',
      'Tintes naturales de plantas',
      'Diseños iconográficos andinos'
    ],
    email: 'rosa.mendoza@email.com',
    phone: '999555666',
    workshops: [],
  },
  '6': {
    id: 6,
    name: 'Carlos Flores',
    specialty: 'Retablos',
    location: 'Ayacucho Centro',
    rating: 4.9,
    reviews: 134,
    image: 'https://cdn.shopify.com/s/files/1/0861/3888/0286/files/Casa_Nochipa_26_480x480.png?v=1718660089',
    coverImage: 'https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg',
    bio: 'Maestro retablista con reconocimientos nacionales e internacionales.',
    story: 'Mi arte trasciende fronteras. Cada retablo que creo es una ventana a nuestra cultura, una historia que viaja por el mundo llevando la esencia de Ayacucho.',
    products: [
      {
        id: 11,
        name: 'Retablo Costumbrista',
        price: 280,
        image: 'https://images.pexels.com/photos/6045240/pexels-photo-6045240.jpeg'
      },
      {
        id: 12,
        name: 'Retablo de la Pasión',
        price: 350,
        image: 'https://images.pexels.com/photos/12913358/pexels-photo-12913358.jpeg'
      }
    ],
    awards: [
      'Gran Maestro Internacional 2023',
      'Premio Excelencia Artesanal 2022',
      'Medalla de Oro UNESCO 2021'
    ],
    techniques: [
      'Retablo de dos pisos',
      'Figuras en pasta de papa',
      'Policromía tradicional',
      'Narrativa religiosa y costumbrista'
    ],
    email: 'carlos.flores@email.com',
    phone: '999666777',
    workshops: [],
  }
};

interface ArtisanProfilePageProps {
  params: {
    id: string;
  };
}

export default function ArtisanProfilePage({ params }: ArtisanProfilePageProps) {
  const artisan = artisans[params.id as keyof typeof artisans];

  if (!artisan) {
    return (
      <div className="min-h-screen pt-32 pb-12 bg-neutral-50 dark:bg-neutral-950 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-playfair font-bold text-neutral-900 dark:text-white mb-4">Artesano no encontrado</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">Lo sentimos, no pudimos encontrar el perfil del artesano que buscas.</p>
        <Link href="/artesanos" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-colors">
          Volver a Artesanos
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 animate-fade-in">

      {/* Hero Cover */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={artisan.coverImage}
          alt={`Taller de ${artisan.name}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />

        {/* Breadcrumb / Back Navigation */}
        <div className="absolute top-28 left-4 sm:left-8 z-10">
          <Link
            href="/artesanos"
            className="inline-flex items-center text-white/80 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-all text-sm font-medium"
          >
            ← Volver a Artesanos
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-32 pb-16">
        {/* Profile Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-100 dark:border-neutral-800 p-6 sm:p-10 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* Avatar */}
            <div className="relative shrink-0 mx-auto md:mx-0">
              <div className="w-40 h-40 rounded-full p-1 bg-white dark:bg-neutral-800 shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-700">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={artisan.image}
                    alt={artisan.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-primary-500 text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-neutral-900">
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left space-y-4 w-full">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h1 className="text-4xl md:text-5xl font-playfair font-bold text-neutral-900 dark:text-white mb-2">
                    {artisan.name}
                  </h1>
                  <p className="text-xl text-primary-600 dark:text-primary-400 font-medium font-playfair italic">
                    {artisan.specialty}
                  </p>
                </div>

                <div className="flex items-center justify-center md:justify-end gap-1 bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-xl self-center md:self-start">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-lg text-neutral-900 dark:text-white">{artisan.rating}</span>
                  <span className="text-sm text-neutral-500">({artisan.reviews} reseñas)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-neutral-600 dark:text-neutral-400">
                <span className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800/50 px-3 py-1.5 rounded-full text-sm">
                  <MapPin className="h-4 w-4 text-primary-500" />
                  {artisan.location}
                </span>
                {artisan.techniques.slice(0, 2).map((tech) => (
                  <span key={tech} className="text-sm px-3 py-1.5 border border-neutral-200 dark:border-neutral-700 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bio Quote */}
              <div className="bg-neutral-50 dark:bg-neutral-800/50 p-4 rounded-xl border border-neutral-100 dark:border-neutral-800/50 mt-4">
                <p className="text-neutral-600 dark:text-neutral-300 italic text-lg leading-relaxed">
                  "{artisan.bio}"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="flex-1 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-xl shadow-lg shadow-primary-900/20 text-base font-semibold" asChild>
                  <a href={`mailto:${artisan.email}`}>
                    <Mail className="h-5 w-5 mr-2" />
                    Contactar
                  </a>
                </Button>
                <Button variant="outline" className="flex-1 h-12 border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-base font-semibold rounded-xl" asChild>
                  <a href={`tel:${artisan.phone}`}>
                    <Phone className="h-5 w-5 mr-2" />
                    Llamar Taller
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
          <ArtisanTabs artisan={artisan} />
        </div>
      </div>
    </div>
  );
}