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
    image: 'https://images.pexels.com/photos/4498177/pexels-photo-4498177.jpeg',
    coverImage: 'https://images.pexels.com/photos/6045237/pexels-photo-6045237.jpeg',
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
    ]
  },
  '2': {
    id: 2,
    name: 'José Cárdenas',
    specialty: 'Tallados en Piedra',
    location: 'Huamanga, Ayacucho',
    rating: 4.9,
    reviews: 98,
    image: 'https://images.pexels.com/photos/8102319/pexels-photo-8102319.jpeg',
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
    ]
  },
  '3': {
    id: 3,
    name: 'Manuel Huamán',
    specialty: 'Retablos',
    location: 'San Juan Bautista, Ayacucho',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.pexels.com/photos/8101520/pexels-photo-8101520.jpeg',
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
    ]
  },
  '4': {
    id: 4,
    name: 'Ana López',
    specialty: 'Cerámica',
    location: 'Huanta, Ayacucho',
    rating: 4.6,
    reviews: 89,
    image: 'https://images.pexels.com/photos/4498177/pexels-photo-4498177.jpeg',
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
    ]
  },
  '5': {
    id: 5,
    name: 'Rosa Mendoza',
    specialty: 'Textiles',
    location: 'Santillana, Ayacucho',
    rating: 4.8,
    reviews: 112,
    image: 'https://images.pexels.com/photos/8102319/pexels-photo-8102319.jpeg',
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
    ]
  },
  '6': {
    id: 6,
    name: 'Carlos Flores',
    specialty: 'Retablos',
    location: 'Ayacucho Centro',
    rating: 4.9,
    reviews: 134,
    image: 'https://images.pexels.com/photos/8101520/pexels-photo-8101520.jpeg',
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
    ]
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
      <div className="min-h-screen pt-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-neutral-100  mb-4">Artesano no encontrado</h1>
            <p className="text-neutral-300">El artesano que buscas no existe.</p>
            <Link href="/artesanos" className="btn-primary inline-flex items-center mt-6">
              Volver a Artesanos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="absolute inset-0 bg-[url('/patterns/inca-pattern.svg')] opacity-5"></div>
      
      {/* Cover Image */}
      <div className="relative h-64 lg:h-96">
        <Image
          src={artisan.coverImage}
          alt={`${artisan.name} workspace`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="relative -mt-32 pb-8">
          <div className="card-dark p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="relative h-32 w-32 rounded-full overflow-hidden ring-4 ring-primary-500">
                  <Image
                    src={artisan.image}
                    alt={artisan.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 sm:mt-0 text-center sm:text-left">
                  <h1 className="text-white text-3xl font-bold text-neutral-100">{artisan.name}</h1>
                  <p className="text-lg text-neutral-300">{artisan.specialty}</p>
                  <div className="mt-2 flex items-center justify-center sm:justify-start">
                    <MapPin className="h-5 w-5 text-neutral-400" />
                    <span className="ml-2 text-neutral-300">{artisan.location}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Contactar
                </Button>
                <Button className="btn-secondary flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Llamar
                </Button>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-neutral-700 pt-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-2 font-medium text-neutral-100">{artisan.rating}</span>
                <span className="ml-1 text-neutral-400">({artisan.reviews} reseñas)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {artisan.techniques.slice(0, 2).map((technique, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-500/20 text-primary-300 border border-primary-500/30"
                  >
                    {technique}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <ArtisanTabs artisan={artisan} />
      </div>
    </div>
  );
}