import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshReflectorMaterial, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Stylized 3D Car using primitives - represents Ferrari silhouette
function StylizedFerrari({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  const carRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!carRef.current) return;
    
    // Smooth rotation based on time
    const t = state.clock.getElapsedTime();
    carRef.current.rotation.y = Math.sin(t * 0.3) * 0.3 + Math.PI / 6;
    
    // Subtle floating animation
    carRef.current.position.y = Math.sin(t * 0.5) * 0.1;

    // Mouse interaction
    const targetRotationX = (mouseY - 0.5) * 0.2;
    const targetRotationY = (mouseX - 0.5) * 0.3;
    carRef.current.rotation.x += (targetRotationX - carRef.current.rotation.x) * 0.05;
    carRef.current.rotation.y += (targetRotationY - carRef.current.rotation.y) * 0.05;
  });

  return (
    <group 
      ref={carRef} 
      position={[0, 0.5, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main body - elongated and sleek */}
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.6, 1.8]} />
        <meshStandardMaterial 
          color="#FF2800" 
          metalness={0.9}
          roughness={0.1}
          emissive="#FF2800"
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </mesh>

      {/* Cabin/Windshield */}
      <mesh position={[0.2, 0.8, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.7, 1.6]} />
        <meshStandardMaterial 
          color="#111111" 
          metalness={0.95}
          roughness={0.05}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Front spoiler */}
      <mesh position={[2.2, 0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.4, 0.15, 1.9]} />
        <meshStandardMaterial 
          color="#FF2800" 
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Rear wing */}
      <mesh position={[-1.8, 0.9, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.05, 1.8]} />
        <meshStandardMaterial 
          color="#FF2800" 
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Wheels */}
      {[
        [1.3, -0.1, 1],
        [1.3, -0.1, -1],
        [-1.3, -0.1, 1],
        [-1.3, -0.1, -1],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
            <meshStandardMaterial 
              color="#111111" 
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          {/* Rim detail */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.25, 0.25, 0.35, 32]} />
            <meshStandardMaterial 
              color="#FF2800" 
              metalness={0.95}
              roughness={0.05}
              emissive="#FF2800"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      ))}

      {/* Headlights */}
      {[[2, 0.35, 0.7], [2, 0.35, -0.7]].map((pos, i) => (
        <mesh key={`light-${i}`} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff"
            emissiveIntensity={hovered ? 2 : 1}
            metalness={0.9}
            roughness={0.1}
          />
          <pointLight 
            color="#ffffff" 
            intensity={hovered ? 3 : 1} 
            distance={5}
          />
        </mesh>
      ))}

      {/* Tail lights */}
      {[[-2, 0.35, 0.7], [-2, 0.35, -0.7]].map((pos, i) => (
        <mesh key={`tail-${i}`} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial 
            color="#FF0000" 
            emissive="#FF0000"
            emissiveIntensity={hovered ? 2 : 0.8}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}

      {/* Underglow effect */}
      <pointLight 
        position={[0, -0.3, 0]} 
        color="#FF2800" 
        intensity={hovered ? 3 : 1.5} 
        distance={4}
      />
    </group>
  );
}

// Reflective floor
function ReflectiveFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050505"
        metalness={0.5}
      />
    </mesh>
  );
}

// Main 3D Scene
export function Ferrari3DScene({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[6, 2, 8]} fov={50} />

      {/* Lighting setup for cinematic effect */}
      <ambientLight intensity={0.2} />
      
      {/* Key light - front right */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Fill light - front left */}
      <spotLight
        position={[-10, 8, 10]}
        angle={0.4}
        penumbra={1}
        intensity={1}
        color="#4466ff"
      />

      {/* Rim light - back */}
      <spotLight
        position={[0, 5, -10]}
        angle={0.5}
        penumbra={1}
        intensity={2.5}
        color="#FF2800"
      />

      {/* Red accent lights */}
      <pointLight position={[-5, 2, -5]} color="#FF2800" intensity={2} />
      <pointLight position={[5, 2, -5]} color="#FF2800" intensity={2} />

      {/* Environment for reflections */}
      <Environment preset="night" />

      {/* Car */}
      <StylizedFerrari mouseX={mouseX} mouseY={mouseY} />

      {/* Floor with reflection */}
      <ReflectiveFloor />

      {/* Fog for depth */}
      <fog attach="fog" args={['#000000', 5, 30]} />
    </>
  );
}
