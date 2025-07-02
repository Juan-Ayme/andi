import {
  Palette, Shapes, Gem, Type, Upload, Shirt, Home, Ruler, Brush, Mountain, Popcorn, Users, Box, Frame, Scissors, Sparkle, Wand2
} from 'lucide-react';

// --- Interfaces para definir la estructura de nuestros datos ---

// Define una opción individual (ej. un color, una figura)
export interface CustomizationValue {
  value: string;
  label?: string;
  image?: string;
}

// Define un grupo de opciones (ej. la paleta de colores de las puertas)
export interface CustomizationOption {
  id: string; // ej: 'doorColor'
  label: string;
  type: 'color' | 'swatch' | 'select' | 'slider' | 'textarea' | 'file';
  values: CustomizationValue[];
}

// Define una pestaña en el panel de personalización (ej. la pestaña 'Colores')
export interface CustomizationTab {
  id: string; // ej: 'colors'
  label: string;
  icon: React.ComponentType<any>;
  options: CustomizationOption[];
}

// Define el objeto completo de opciones para todas las categorías
export interface CategoryOptions {
  [key: string]: CustomizationTab[];
}


// --- EL CEREBRO DE LA PERSONALIZACIÓN ---
// Este objeto contiene todas las opciones detalladas para cada categoría.
// Cualquier cambio aquí se reflejará automáticamente en la interfaz de React.

export const optionsData: CategoryOptions = {
  textiles: [
    {
      id: 'productType', label: 'Producto', icon: Shirt, options: [
        { id: 'garmentType', label: 'Tipo de Prenda/Producto', type: 'select', values: [
          { value: 'camiseta', label: 'Camiseta de Algodón Pima' }, 
          { value: 'poncho', label: 'Poncho de Alpaca' }, 
          { value: 'manta', label: 'Manta Decorativa' }, 
          { value: 'cojin', label: 'Funda de Cojín' }, 
          { value: 'tapiz', label: 'Tapiz de Pared' }
        ]},
        { id: 'size', label: 'Talla o Dimensiones', type: 'select', values: [
          { value: 's', label: 'S' }, { value: 'm', label: 'M' }, { value: 'l', label: 'L' }, { value: 'xl', label: 'XL' }, { value: 'custom_dims', label: 'Medidas Personalizadas (cm)' }
        ]},
      ]
    },
    { 
      id: 'material', label: 'Material', icon: Upload, options: [
        { id: 'fiber', label: 'Material Principal', type: 'swatch', values: [
          { value: 'algodon_pima', label: 'Algodón Pima', image: 'https://cdn.shopify.com/s/files/1/0466/4492/0476/files/Algodon_pima-09.jpg?v=1623253624' }, 
          { value: 'lana_alpaca', label: 'Lana de Alpaca', image: 'https://www.barubaru.pe/cdn/shop/products/20220801_150438.jpg?v=1659389834' }, 
          { value: 'lana_oveja', label: 'Lana de Oveja', image: 'https://dcdn-us.mitiendanube.com/stores/001/152/166/products/20220528_125226-30e59a88e0f823a75316547164972290-640-0.jpg' }
        ]},
        { id: 'baseColor', label: 'Color Base', type: 'color', values: [
          { value: '#FFFFFF', label: 'Blanco Natural' }, { value: '#F5F5DC', label: 'Beige Crudo' }, { value: '#A7D8A5', label: 'Verde Eucalipto' }, { value: '#EC5800', label: 'Rojo Cochinilla' }, { value: '#343B53', label: 'Azul Añil' }
        ]},
      ]
    },
    { 
      id: 'design', label: 'Diseño', icon: Brush, options: [
        { id: 'embroidery_motif', label: 'Motivos de Bordado', type: 'select', values: [
          { value: 'ninguno', label: 'Sin Bordado (Color Sólido)' },
          { value: 'qenti', label: "Picaflor Andino (Q'enti)" }, 
          { value: 'cantuta', label: 'Flor de Cantuta' }, 
          { value: 'geometrico_inca', label: 'Geométrico Inca' },
          { value: 'personalizado', label: 'Diseño Propio' },
        ]},
        { id: 'customText', label: 'Añadir Texto Bordado (opcional)', type: 'textarea', values: [{ value: '', label: 'Ej: Ayacucho 2025, tus iniciales...' }]},
        { id: 'uploadDesign', label: 'Sube tu propio diseño para bordar', type: 'file', values: []},
      ]
    },
  ],
  ceramica: [
    { 
      id: 'piece', label: 'Pieza', icon: Shapes, options: [
       { id: 'pieceType', label: 'Tipo de Pieza', type: 'select', values: [
          { value: 'taza', label: 'Taza' }, { value: 'plato_hondo', label: 'Plato Hondo' }, { value: 'plato_piso', label: 'Plato de Piso' }, { value: 'jarron', label: 'Jarrón' }, { value: 'maceta', label: 'Maceta' }, { value: 'azulejo', label: 'Azulejo Decorativo' }
        ]},
       { id: 'size', label: 'Tamaño', type: 'select', values: [
          { value: 'pequeno', label: 'Pequeño' }, { value: 'mediano', label: 'Mediano' }, { value: 'grande', label: 'Grande' }
        ]},
    ]},
    {
      id: 'style', label: 'Estilo', icon: Wand2, options: [
        { id: 'glazeColor', label: 'Color del Esmalte', type: 'color', values: [
          { value: '#003366', label: 'Azul Cobalto' }, { value: '#3A5F0B', label: 'Verde Andino' }, { value: '#FDF5E6', label: 'Blanco Hueso' }, { value: '#B7410E', label: 'Terracota' }, { value: '#FFBF00', label: 'Amarillo Ocre' }
        ]},
        { id: 'finish', label: 'Acabado de Superficie', type: 'select', values: [
          { value: 'brillante', label: 'Esmalte Brillante' }, { value: 'mate', label: 'Acabado Mate' }, { value: 'esgrafiado', label: 'Con Esgrafiado (Incisiones)' }, { value: 'craquelado', label: 'Efecto Craquelado' }
        ]},
      ]
    },
    {
      id: 'artwork', label: 'Arte', icon: Brush, options: [
        { id: 'handPainting', label: 'Diseño Pintado a Mano', type: 'select', values: [
          { value: 'ninguno', label: 'Sin diseño (color sólido)' }, { value: 'floral_retama', label: 'Flores de Retama' }, { value: 'toro_pucara', label: 'Torito de Pucará' }, { value: 'lineas_nazca', label: 'Líneas de Nazca' }
        ]},
        { id: 'customPaintingText', label: 'Añadir texto pintado (opcional)', type: 'textarea', values: [{ value: '', label: 'Ej: "Familia Quispe", "Mi Cocina"' }]},
        { id: 'uploadPainting', label: 'Sube una foto o dibujo para pintar', type: 'file', values: []},
      ]
    }
  ],
  retablos: [
    { 
      id: 'structure', label: 'Estructura', icon: Box, options: [
        { id: 'size', label: 'Tamaño de la Caja', type: 'select', values: [
          { value: 'pequeno', label: 'Pequeño (15cm)' }, { value: 'mediano', label: 'Mediano (30cm)' }, { value: 'grande', label: 'Grande (50cm)' }
        ]},
        { id: 'levels', label: 'Niveles', type: 'select', values: [{ value: '1', label: 'Un Nivel' }, { value: '2', label: 'Dos Niveles' }]},
        { id: 'doorColor', label: 'Color de Puertas', type: 'color', values: [
            { value: '#C0392B', label: 'Rojo' }, { value: '#2980B9', label: 'Azul' }, { value: '#27AE60', label: 'Verde' }, { value: '#F1C40F', label: 'Amarillo' }
        ]},
      ]
    },
    { 
      id: 'scene', label: 'Escena', icon: Users, options: [
        { id: 'mainTheme', label: 'Temática Principal', type: 'select', values: [
          { value: 'nacimiento_andino', label: 'Religiosa: Nacimiento Andino' }, 
          { value: 'danza_tijeras', label: 'Costumbrista: Danza de Tijeras' }, 
          { value: 'cosecha_papa', label: 'Costumbrista: Cosecha de Papa' },
          { value: 'taller_artesano', label: 'Costumbrista: Taller de Artesano' },
          { value: 'personalizada', label: 'Escena Personalizada' }
        ]},
        { id: 'customSceneDesc', label: 'Describe tu Escena Personalizada', type: 'textarea', values: [{ value: '', label: 'Ej: "Quiero una escena de mi familia en la playa. Somos 2 adultos, 1 niño y un perro." ' }]},
        { id: 'uploadFigures', label: 'Sube fotos de referencia para las figuras', type: 'file', values: []},
      ]
    },
  ],
  tallados: [
    {
      id: 'object', label: 'Objeto', icon: Frame, options: [
        { id: 'objectType', label: 'Tipo de Objeto', type: 'select', values: [
          { value: 'mascara', label: 'Máscara Decorativa' }, { value: 'cruz', label: 'Cruz de Camino' }, { value: 'escultura_condor', label: 'Escultura de Cóndor' }, { value: 'caja_joyero', label: 'Caja / Joyero' }, { value: 'portaretrato', label: 'Portarretrato' }
        ]},
        { id: 'woodType', label: 'Tipo de Madera', type: 'swatch', values: [
          { value: 'cedro', label: 'Cedro', image: 'https://www.wood-database.com/wp-content/uploads/spanish-cedar.jpg' },
          { value: 'nogal', label: 'Nogal', image: 'https://www.wood-database.com/wp-content/uploads/peruvian-walnut.jpg' },
          { value: 'pino', label: 'Pino', image: 'https://www.wood-database.com/wp-content/uploads/ponderosa-pine.jpg' }
        ]},
      ]
    },
    {
      id: 'carving', label: 'Tallado', icon: Scissors, options: [
        { id: 'carvingDesign', label: 'Diseño a Tallar', type: 'select', values: [
          { value: 'puma_andino', label: 'Puma Andino' }, { value: 'chacana', label: 'Símbolo: Chacana (Cruz del Sur)' }, { value: 'personalizado', label: 'A partir de un logo o imagen' }
        ]},
        { id: 'carvingTechnique', label: 'Técnica de Tallado', type: 'select', values: [
          { value: 'alto_relieve', label: 'Alto Relieve' }, { value: 'bajo_relieve', label: 'Bajo Relieve' }, { value: 'grabado_laser', label: 'Grabado Láser (para texto/logos)' }
        ]},
        { id: 'finish', label: 'Acabado de la Madera', type: 'select', values: [
            { value: 'natural', label: 'Natural (solo lijado y encerado)'}, { value: 'barniz_brillante', label: 'Barnizado Brillante'}, { value: 'barniz_mate', label: 'Barnizado Mate'}, { value: 'policromado', label: 'Pintado (Policromado)'}
        ]},
        { id: 'uploadCarving', label: 'Sube tu logo o imagen para tallar', type: 'file', values: []},
      ]
    }
  ],
  joyeria: [
    { 
      id: 'jewel', label: 'Joya', icon: Sparkle, options: [
      { id: 'jewelType', label: 'Tipo de Joya', type: 'select', values: [
        { value: 'collar', label: 'Collar' }, { value: 'pulsera', label: 'Pulsera' }, { value: 'aretes', label: 'Aretes' }, { value: 'anillo', label: 'Anillo' }, { value: 'dije', label: 'Dije (sin cadena)'}
      ]},
      { id: 'metal', label: 'Material Principal', type: 'swatch', values: [
        { value: 'plata_950', label: 'Plata 950', image: 'https://i.etsystatic.com/12039407/r/il/9f00b5/1024059439/il_fullxfull.1024059439_41lj.jpg' }, 
        { value: 'plata_quemada', label: 'Plata Quemada', image: 'https://www.belyfashion.com/Content/img/Articulos/25HSJ_19000101000000..jpg'},
        { value: 'bano_oro', label: 'Baño de Oro 18k', image: 'https://saharajoyas.cl/cdn/shop/articles/Banner_bano_de_oro.webp?v=1743085242&width=2000' }
      ]},
    ]},
    { 
      id: 'personalization', label: 'Personalización', icon: Type, options: [
        { id: 'technique', label: 'Técnica de Personalización', type: 'select', values: [
            { value: 'grabado', label: 'Grabado Láser' }, { value: 'calado', label: 'Calado (Recortado)' }
        ]},
        { id: 'engraving', label: 'Texto (Nombres, Fechas, Frases)', type: 'textarea', values: [{ value: '', label: 'Ej: Amor Eterno 20.10.25' }]},
        { id: 'font', label: 'Estilo de Tipografía', type: 'select', values: [
          { value: 'script', label: 'Cursiva Elegante' }, { value: 'serif', label: 'Serif Clásica' }, { value: 'sans', label: 'Sans Serif Moderna' }
        ]},
    ]},
    {
      id: 'gems', label: 'Gemas', icon: Gem, options: [
        { id: 'gemstone', label: 'Añadir Piedra (opcional)', type: 'swatch', values: [
          { value: 'ninguna', label: 'Sin Piedra', image: 'https://www.transparenttextures.com/patterns/clean-gray-paper.png' },
          { value: 'opalo_andino', label: 'Ópalo Andino', image: 'https://start-up.pe/wp-content/uploads/2024/12/Opalo-Andino-Peruano.jpg' }, 
          { value: 'turquesa', label: 'Turquesa Peruana', image: 'https://i.etsystatic.com/38905706/r/il/59115f/4950957195/il_570xN.4950957195_l3ph.jpg' },
          { value: 'obsidiana', label: 'Obsidiana', image: 'https://vivescortadaimport.com/diccionario-minerales/minerales/obsidiana-negra/obsidiana-negra.jpg' }
        ]},
      ]
    }
  ],
};