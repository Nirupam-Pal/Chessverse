import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function ChessPiece({ position, type, color = 'white' }: { position: [number, number, number]; type: string; color?: string }) {
  const meshRef = useRef<THREE.Group>(null)
  const isWhite = color === 'white'

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.1
    }
  })

  const pieceColor = isWhite ? '#e8e8e8' : '#1a1a2e'
  const emissiveColor = isWhite ? '#4CC9F0' : '#7209B7'

  return (
    <group ref={meshRef} position={position}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
        {type === 'king' && (
          <group>
            <mesh castShadow>
              <cylinderGeometry args={[0.35, 0.45, 1.6, 32]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.15} />
            </mesh>
            <mesh position={[0, 0.9, 0]} castShadow>
              <boxGeometry args={[0.5, 0.15, 0.15]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.2} />
            </mesh>
            <mesh position={[0, 0.9, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
              <boxGeometry args={[0.5, 0.15, 0.15]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.2} />
            </mesh>
            <mesh position={[0, 0.6, 0]} castShadow>
              <torusGeometry args={[0.3, 0.06, 16, 32]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.15} />
            </mesh>
          </group>
        )}
        {type === 'queen' && (
          <group>
            <mesh castShadow>
              <cylinderGeometry args={[0.35, 0.4, 1.5, 32]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.15} />
            </mesh>
            <mesh position={[0, 0.8, 0]} castShadow>
              <sphereGeometry args={[0.25, 32, 32]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.2} />
            </mesh>
            <mesh position={[0, 0.55, 0]} castShadow>
              <torusGeometry args={[0.28, 0.05, 16, 32]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.15} />
            </mesh>
          </group>
        )}
        {type === 'rook' && (
          <group>
            <mesh castShadow>
              <cylinderGeometry args={[0.3, 0.35, 1.2, 32]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.15} />
            </mesh>
            <mesh position={[0, 0.65, 0]} castShadow>
              <boxGeometry args={[0.6, 0.2, 0.6]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.2} />
            </mesh>
          </group>
        )}
        {type === 'bishop' && (
 <group>
            <mesh castShadow>
              <coneGeometry args={[0.3, 1.3, 32]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.15} />
            </mesh>
            <mesh position={[0, 0.05, 0]} castShadow>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.3} />
            </mesh>
          </group>
        )}
        {type === 'knight' && (
          <group>
            <mesh castShadow rotation={[0, 0, 0.2]}>
              <boxGeometry args={[0.35, 0.9, 0.5]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.15} />
            </mesh>
            <mesh position={[0.15, 0.55, 0]} castShadow>
              <sphereGeometry args={[0.18, 32, 32]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.2} />
            </mesh>
          </group>
        )}
        {type === 'pawn' && (
          <group>
            <mesh castShadow>
              <sphereGeometry args={[0.25, 32, 32]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.15} />
            </mesh>
            <mesh position={[0, -0.3, 0]} castShadow>
              <cylinderGeometry args={[0.2, 0.25, 0.4, 32]} />
              <meshStandardMaterial color={pieceColor} metalness={0.6} roughness={0.2} emissive={emissiveColor} emissiveIntensity={0.15} />
            </mesh>
          </group>
        )}
      </Float>
    </group>
  )
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 300
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10 + 2
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#4CC9F0"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} color="#4CC9F0" />
      <spotLight
        position={[10, 15, 5]}
        angle={Math.PI / 6}
        penumbra={0.5}
        intensity={20}
        color="#F5F3F0"
        castShadow
      />
      <spotLight
        position={[-8, 10, -5]}
        angle={Math.PI / 5}
        penumbra={0.5}
        intensity={15}
        color="#7209B7"
      />
      <pointLight position={[0, 3, 0]} intensity={5} color="#4CC9F0" distance={10} decay={2} />

      {/* Chess Board */}
      <group position={[0, -1.5, 0]} rotation={[0, Math.PI / 6, 0]}>
        {/* Base */}
        <mesh receiveShadow position={[0, -0.25, 0]}>
          <boxGeometry args={[9, 0.5, 9]} />
          <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.1} />
        </mesh>
        {/* Squares */}
        {Array.from({ length: 64 }).map((_, i) => {
          const x = (i % 8) - 3.5
          const z = Math.floor(i / 8) - 3.5
          const isWhite = (i % 8 + Math.floor(i / 8)) % 2 === 0
          return (
            <mesh key={i} position={[x * 1.0, 0.01, z * 1.0]} receiveShadow>
              <boxGeometry args={[0.95, 0.05, 0.95]} />
              <meshStandardMaterial
                color={isWhite ? '#2a2a3e' : '#0a0a18'}
                roughness={0.2}
                metalness={0.1}
              />
            </mesh>
          )
        })}

        {/* Pieces */}
        <ChessPiece position={[-3.5, 0.5, -3.5]} type="rook" color="white" />
        <ChessPiece position={[-2.5, 0.5, -3.5]} type="knight" color="white" />
        <ChessPiece position={[-1.5, 0.5, -3.5]} type="bishop" color="white" />
        <ChessPiece position={[-0.5, 0.5, -3.5]} type="queen" color="white" />
        <ChessPiece position={[0.5, 0.5, -3.5]} type="king" color="white" />
        <ChessPiece position={[1.5, 0.5, -3.5]} type="bishop" color="white" />
        <ChessPiece position={[2.5, 0.5, -3.5]} type="knight" color="white" />
        <ChessPiece position={[3.5, 0.5, -3.5]} type="rook" color="white" />
        {Array.from({ length: 8 }).map((_, i) => (
          <ChessPiece key={`wp${i}`} position={[i - 3.5, 0.3, -2.5]} type="pawn" color="white" />
        ))}

        <ChessPiece position={[-3.5, 0.5, 3.5]} type="rook" color="black" />
        <ChessPiece position={[-2.5, 0.5, 3.5]} type="knight" color="black" />
        <ChessPiece position={[-1.5, 0.5, 3.5]} type="bishop" color="black" />
        <ChessPiece position={[-0.5, 0.5, 3.5]} type="queen" color="black" />
        <ChessPiece position={[0.5, 0.5, 3.5]} type="king" color="black" />
        <ChessPiece position={[1.5, 0.5, 3.5]} type="bishop" color="black" />
        <ChessPiece position={[2.5, 0.5, 3.5]} type="knight" color="black" />
        <ChessPiece position={[3.5, 0.5, 3.5]} type="rook" color="black" />
        {Array.from({ length: 8 }).map((_, i) => (
          <ChessPiece key={`bp${i}`} position={[i - 3.5, 0.3, 2.5]} type="pawn" color="black" />
        ))}
      </group>

      {/* Floating Pieces */}
      <ChessPiece position={[-5, 3, -4]} type="queen" color="white" />
      <ChessPiece position={[6, 4, -3]} type="knight" color="black" />
      <ChessPiece position={[-3, 5, 2]} type="bishop" color="white" />
      <ChessPiece position={[4, 3.5, 4]} type="rook" color="black" />
      <ChessPiece position={[0, 6, -6]} type="king" color="white" />

      <FloatingParticles />
      <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={20} blur={2} far={4} />
      <Environment preset="city" />
    </>
  )
}

export default function Hero() {
  const scrollToBooking = () => {
    const el = document.querySelector('#booking')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-void">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          shadows
          camera={{ position: [0, 6, 14], fov: 50, near: 0.1, far: 100 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-void/60 via-transparent to-void pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-void/80 via-transparent to-void/60 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[72px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-icy text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-icy animate-pulse" />
              World's Premier Chess Academy
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-ivory leading-[0.95] tracking-tight">
              MASTER
              <br />
              <span className="text-gradient">THE BOARD</span>
            </h1>

            <p className="text-lg sm:text-xl text-ghost max-w-lg leading-relaxed">
              Where intellect meets intuition. Join the world's premier online chess academy and elevate your game with world-class coaching.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToBooking}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-icy to-violet text-twilight font-semibold text-base hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
              >
                Start Learning
              </button>
              <button
                onClick={() => {
                  const el = document.querySelector('#services')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 rounded-full liquid-glass text-ivory font-semibold text-base hover:border-icy/50 transition-all duration-300"
              >
                Explore Courses
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="font-display font-bold text-3xl text-icy">2800+</p>
                <p className="text-sm text-ghost">Grandmaster Rating</p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-icy">12,000+</p>
                <p className="text-sm text-ghost">Active Students</p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-icy">50+</p>
                <p className="text-sm text-ghost">Expert Coaches</p>
              </div>
            </div>
          </div>

          {/* Right - Floating Stats Cards */}
          <div className="hidden lg:flex flex-col items-end gap-4">
            <div className="liquid-glass rounded-2xl p-5 animate-float" style={{ animationDelay: '0s' }}>
              <p className="text-ghost text-sm">Grandmaster Rating</p>
              <p className="font-display font-bold text-2xl text-icy">2800+</p>
            </div>
            <div className="liquid-glass rounded-2xl p-5 animate-float mr-12" style={{ animationDelay: '1s' }}>
              <p className="text-ghost text-sm">Active Students</p>
              <p className="font-display font-bold text-2xl text-icy">12,000+</p>
            </div>
            <div className="liquid-glass rounded-2xl p-5 animate-float" style={{ animationDelay: '2s' }}>
              <p className="text-ghost text-sm">Tournament Wins</p>
              <p className="font-display font-bold text-2xl text-icy">150+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-xs text-ghost uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-ghost/40 flex justify-center pt-1">
          <div className="w-1 h-2 rounded-full bg-icy animate-bounce" />
        </div>
      </div>
    </section>
  )
}
