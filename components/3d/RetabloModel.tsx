'use client';

import { useRef } from 'react';
import { useGLTF } from '@react-three/drei'; // <-- ¡ESTA ES LA LÍNEA QUE FALTABA!
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

// Asegúrate de que esta ruta coincida con la ubicación de tu modelo en la carpeta `public`
const modelPath = '/models/ceramica.glb'; 

export default function RetabloModel(props) {
  // `useGLTF` es un hook de Drei que carga tu modelo y sus materiales
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef();

  // Opcional: Esto hace que el modelo rote lentamente sobre sí mismo. Puedes quitarlo si no lo quieres.
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.1; 
    }
  });

  return (
    // `<primitive>` es un componente especial que renderiza una escena 3D ya creada.
    // Es perfecto para mostrar modelos importados sin tener que descomponerlos en mallas y materiales.
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={1.5}  // Ajusta la escala si tu modelo es muy grande o pequeño
      position={[0, -1, 0]} // Ajusta la posición (x, y, z) para centrarlo
      {...props} 
    />
  );
}

// Esto precarga el modelo para que la primera vez que se renderice sea instantáneo
useGLTF.preload(modelPath);