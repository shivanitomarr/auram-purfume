import { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  PresentationControls,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

function Flacon({ oilColor }: { oilColor: string }) {
  const geoms = useMemo(() => {
    // Sharp Octagonal Body
    const body = new THREE.CylinderGeometry(0.8, 1.05, 1.9, 8, 1, false);
    const base = new THREE.CylinderGeometry(1.05, 0.9, 0.15, 8, 1, false);
    const neck = new THREE.CylinderGeometry(0.3, 0.38, 0.4, 32);
    
    // Elegant Multi-faceted Cap
    const capBase = new THREE.CylinderGeometry(0.35, 0.4, 0.15, 8);
    const capMid = new THREE.CylinderGeometry(0.48, 0.35, 0.4, 8);
    const capTop = new THREE.CylinderGeometry(0, 0.48, 0.5, 8);
    
    const liquid = new THREE.CylinderGeometry(0.72, 0.98, 1.3, 8);

    return { body, base, neck, capBase, capMid, capTop, liquid };
  }, []);

  return (
    <group>
      {/* Crystal - Ultra Clear Material */}
      <mesh geometry={geoms.body}>
        <meshPhysicalMaterial
          transmission={1}
          thickness={2.2}
          roughness={0.01}
          ior={1.72}
          color="#ffffff"
          attenuationColor={oilColor}
          attenuationDistance={1.4}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={2.5}
        />
      </mesh>
      <mesh geometry={geoms.base} position={[0, -1.02, 0]}>
         <meshPhysicalMaterial transmission={1} thickness={2.5} roughness={0} ior={1.8} color="#ffffff" envMapIntensity={2} />
      </mesh>
      
      {/* Oil Volume */}
      <mesh geometry={geoms.liquid} position={[0, -0.25, 0]}>
        <meshStandardMaterial
          color={oilColor}
          emissive={oilColor}
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.1}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Hardware - Imperial Gold */}
      <group position={[0, 1.15, 0]}>
        <mesh geometry={geoms.neck}>
          <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.05} envMapIntensity={4} />
        </mesh>
        <group position={[0, 0.45, 0]}>
           <mesh geometry={geoms.capBase}>
             <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.05} envMapIntensity={3} />
           </mesh>
           <mesh geometry={geoms.capMid} position={[0, 0.25, 0]}>
             <meshStandardMaterial color="#f1d27b" metalness={1} roughness={0.03} envMapIntensity={4} />
           </mesh>
           <mesh geometry={geoms.capTop} position={[0, 0.7, 0]}>
             <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.01} envMapIntensity={5} />
           </mesh>
        </group>
      </group>
    </group>
  );
}

function Scene({ oilColor }: { oilColor: string }) {
  return (
    <>
      <ambientLight intensity={0.15} />
      
      {/* Gilded Key Light */}
      <spotLight 
        position={[8, 12, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={4} 
        color="#f1d27b" 
        castShadow
      />
      
      {/* Emerald Fill Light */}
      <spotLight 
        position={[-12, 6, 8]} 
        angle={0.2} 
        penumbra={1} 
        intensity={2} 
        color="#062c1e" 
      />
      
      {/* Rim Light for Gold Brilliance */}
      <pointLight position={[0, 5, -10]} intensity={3} color="#d4af37" />

      <PresentationControls
        snap
        speed={1.2}
        zoom={1}
        polar={[-0.1, 0.35]}
        azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
        damping={0.8}
        cursor={false}
      >
        <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.8}>
          <group position={[0, -0.2, 0]} scale={1.15}>
            <Flacon oilColor={oilColor} />
          </group>
        </Float>
      </PresentationControls>

      <Sparkles
        count={50}
        scale={[5, 5, 5]}
        size={2.5}
        speed={0.4}
        color="#f1d27b"
        opacity={0.4}
      />
      
      <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={8} blur={3} far={4} color="#041d14" />

      <Environment resolution={512}>
        <group rotation={[0, 0, 0]}>
          {/* Top Softbox */}
          <Lightformer form="rect" intensity={10} position={[0, 10, 0]} scale={[10, 10, 1]} target={[0, 0, 0]} color="#f1d27b" />
          {/* Side Reflectors */}
          <Lightformer form="rect" intensity={3} position={[10, 2, 5]} scale={[2, 10, 1]} color="#ffffff" />
          <Lightformer form="rect" intensity={4} position={[-10, 2, 5]} scale={[2, 10, 1]} color="#062c1e" />
        </group>
      </Environment>
    </>
  );
}

function supportsWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const c = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (c.getContext("webgl2") || c.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

export default function BottleScene({ 
  className, 
  oilColor = "#c8a24e" 
}: { 
  className?: string;
  oilColor?: string;
}) {
  const [failed, setFailed] = useState(false);
  const ok = useMemo(supportsWebGL, []);

  if (!ok || failed) {
    return (
      <div className={className} aria-label="AURUM Attar crystal flacon">
        <div className="absolute inset-0 flex items-center justify-center bg-ink/20 backdrop-blur-3xl">
           <div className="h-64 w-64 rounded-full" style={{ background: `radial-gradient(circle, ${oilColor}33 0%, transparent 70%)` }} />
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 8], fov: 35 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ touchAction: "pan-y" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", () => setFailed(true));
        }}
      >
        <Suspense fallback={null}>
          <Scene oilColor={oilColor} />
        </Suspense>
      </Canvas>
    </div>
  );
}
