import React, { useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { BoxGeometry, EdgesGeometry, MathUtils } from 'three';

const CYAN = '#53F2FF';
const BLUE = '#167DFF';
const LEVEL_HEIGHT = 2.15;
const FLOOR_COUNT = 3;

function BoxOutline({ size, color = CYAN, opacity = 0.9 }) {
  const edges = useMemo(() => new EdgesGeometry(new BoxGeometry(...size)), [size[0], size[1], size[2]]);

  return (
    <lineSegments geometry={edges}>
      <lineBasicMaterial color={color} transparent opacity={opacity} toneMapped={false} />
    </lineSegments>
  );
}

function Wall({ position, size, rotation = [0, 0, 0] }) {
  const edges = useMemo(() => new EdgesGeometry(new BoxGeometry(...size)), [size[0], size[1], size[2]]);

  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <boxGeometry args={size} />
        <meshBasicMaterial color="#06344B" transparent opacity={0.62} depthWrite={false} />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={CYAN} transparent opacity={0.82} toneMapped={false} />
      </lineSegments>
    </group>
  );
}

function RoomPin({ position, title, selected, onSelect }) {
  return (
    <Html position={position} center distanceFactor={9} zIndexRange={[10, 0]}>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onSelect(title);
        }}
        className="group flex max-w-[160px] items-center gap-2 whitespace-nowrap rounded-sm border border-cyan-300/60 bg-[#00131c]/90 px-2 py-1.5 text-left font-mono-tech text-[9px] tracking-wide text-cyan-100 shadow-[0_0_16px_rgba(0,220,255,.16)] backdrop-blur-sm transition hover:border-cyan-200 hover:bg-[#002331] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200"
        aria-label={`Show ${title} annotation`}
      >
        <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[11px] leading-none ${selected ? 'border-cyan-200 bg-cyan-300 text-[#00131c]' : 'border-cyan-300/70 text-cyan-200'}`}>
          {selected ? '−' : '+'}
        </span>
        {selected && <span>{title}</span>}
      </button>
    </Html>
  );
}

function RoomAnnotations({ level, selectedRoom, onSelect }) {
  const roomsByLevel = [
    [
      { title: 'Living Area', position: [-1.15, 0.25, 0.58] },
      { title: 'Master Bedroom', position: [1.2, 0.25, 0.55] },
      { title: 'Kitchen', position: [-1.2, 0.25, -1.05] },
      { title: 'Courtyard', position: [1.22, 0.25, -1.05] },
    ],
    [
      { title: 'Level 02 · Bedroom 02', position: [-1.35, 0.25, 0.65] },
      { title: 'Level 02 · Bedroom 03', position: [1.25, 0.25, 0.65] },
      { title: 'Level 02 · Family Lounge', position: [-1.2, 0.25, -1.05] },
      { title: 'Level 02 · Bath', position: [1.25, 0.25, -1.05] },
    ],
    [
      { title: 'Level 03 · Studio', position: [-1.35, 0.25, 0.65] },
      { title: 'Level 03 · Terrace', position: [1.25, 0.25, 0.65] },
      { title: 'Level 03 · Gym', position: [-1.2, 0.25, -1.05] },
      { title: 'Level 03 · Bath', position: [1.25, 0.25, -1.05] },
    ],
  ];

  return roomsByLevel[level].map((room) => (
    <RoomPin
      key={room.title}
      {...room}
      selected={selectedRoom === room.title}
      onSelect={onSelect}
    />
  ));
}

function FloorLevel({ level, activeLevel, selectedRoom, onSelect }) {
  const group = React.useRef(null);
  const lastProgress = React.useRef(-1);
  const lastActiveLevel = React.useRef(undefined);

  useFrame((_, delta) => {
    if (!group.current) return;
    const scrollProgress = MathUtils.clamp(window.scrollY / Math.max(1, window.innerHeight * 0.62), 0, 1);
    const revealStart = [0, 0.14, 0.45][level];
    const reveal = MathUtils.clamp((scrollProgress - revealStart) / 0.42, 0, 1);
    const explodedY = level === 0 ? 0 : reveal * 0.68;
    group.current.visible = true;
    group.current.position.y = MathUtils.damp(group.current.position.y, level * LEVEL_HEIGHT + explodedY, 4, delta);
    group.current.scale.setScalar(1);

    if (Math.abs(lastProgress.current - reveal) > 0.003 || lastActiveLevel.current !== activeLevel) {
      const revealFactor = level === 0 || activeLevel === level ? 1 : 0.16 + reveal * 0.84;
      const selectionFactor = activeLevel === null || activeLevel === level ? 1 : 0.12;
      const materialFactor = revealFactor * selectionFactor;
      group.current.traverse((object) => {
        if (!object.material) return;
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => {
          if (material.userData.blueprintBaseOpacity === undefined) {
            material.userData.blueprintBaseOpacity = material.opacity;
          }
          material.opacity = material.userData.blueprintBaseOpacity * materialFactor;
        });
      });
      lastProgress.current = reveal;
      lastActiveLevel.current = activeLevel;
    }
  });

  return (
    <group ref={group}>
      {/* Each floor plate and its partition walls form a compact BIM layer. */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5.1, 0.075, 4.1]} />
        <meshBasicMaterial color={BLUE} transparent opacity={0.38} depthWrite={false} />
      </mesh>
      <group position={[0, 0, 0]}><BoxOutline size={[5.1, 0.075, 4.1]} /></group>

      {/* Perimeter walls leave broad openings so the floor plan reads clearly. */}
      <Wall position={[0, 0.72, -1.98]} size={[5.1, 1.42, 0.09]} />
      <Wall position={[-2.5, 0.72, 0]} size={[0.09, 1.42, 4.05]} />
      <Wall position={[2.5, 0.72, -1.15]} size={[0.09, 1.42, 1.75]} />
      <Wall position={[2.5, 0.72, 1.35]} size={[0.09, 1.42, 1.3]} />
      <Wall position={[-0.48, 0.72, 2.02]} size={[3.9, 1.42, 0.09]} />

      {/* Distinct partitions keep each level legible when it is isolated. */}
      {[
        [
          [[0.48, 0.48, 0], [0.07, 0.96, 3.9]],
          [[-1.48, 0.48, -0.62], [2.02, 0.96, 0.07]],
          [[1.48, 0.48, -0.5], [2.02, 0.96, 0.07]],
          [[-0.5, 0.48, -1.24], [0.08, 0.96, 1.5]],
        ],
        [
          [[0, 0.48, 0], [0.07, 0.96, 3.9]],
          [[-1.25, 0.48, -0.68], [2.45, 0.96, 0.07]],
          [[1.28, 0.48, -0.68], [2.35, 0.96, 0.07]],
          [[-1.15, 0.48, -1.3], [0.07, 0.96, 1.3]],
          [[1.18, 0.48, 1.15], [0.07, 0.96, 1.4]],
        ],
        [
          [[-0.7, 0.48, 0], [0.07, 0.96, 3.7]],
          [[-1.6, 0.48, -0.72], [1.8, 0.96, 0.07]],
          [[1.25, 0.48, -1.22], [2.3, 0.96, 0.07]],
          [[1.5, 0.48, -0.58], [0.07, 0.96, 1.2]],
        ],
      ][level].map(([[x, y, z], size], index) => (
        <Wall key={`partition-${level}-${index}`} position={[x, y, z]} size={size} />
      ))}

      {/* Cyan glazing and a light balcony rail sharpen the villa silhouette. */}
      {[-1.35, -0.2, 0.95].map((x) => (
        <mesh key={`glazing-${x}`} position={[x, 0.78, 2.055]}>
          <boxGeometry args={[0.72, 0.82, 0.025]} />
          <meshBasicMaterial color="#1CAEFF" transparent opacity={0.24} depthWrite={false} />
        </mesh>
      ))}
      {level < 2 && (
        <group position={[1.45, 0, 2.52]}>
          <mesh position={[0, 0.06, 0]}>
            <boxGeometry args={[1.85, 0.065, 1.05]} />
            <meshBasicMaterial color={BLUE} transparent opacity={0.3} depthWrite={false} />
          </mesh>
          <BoxOutline size={[1.85, 0.065, 1.05]} opacity={0.62} />
          {[-0.82, 0, 0.82].map((x) => <Wall key={`balcony-post-${x}`} position={[x, 0.48, 0.48]} size={[0.035, 0.88, 0.035]} />)}
          <Wall position={[0, 0.83, 0.48]} size={[1.68, 0.035, 0.035]} />
        </group>
      )}

      {/* Light structural columns and a thin, floating roof reveal the massing. */}
      {[[-2.38, -1.85], [2.38, -1.85], [-2.38, 1.85], [2.38, 1.85]].map(([x, z]) => (
        <mesh key={`${x}-${z}`} position={[x, 0.83, z]}>
          <boxGeometry args={[0.075, 1.65, 0.075]} />
          <meshBasicMaterial color={CYAN} transparent opacity={0.65} wireframe />
        </mesh>
      ))}

      {level === FLOOR_COUNT - 1 && (
        <group position={[0, 1.55, 0]}>
          <mesh>
            <boxGeometry args={[5.5, 0.06, 4.45]} />
            <meshBasicMaterial color={BLUE} transparent opacity={0.34} depthWrite={false} />
          </mesh>
          <BoxOutline size={[5.5, 0.06, 4.45]} />
          <Wall position={[0, 0.28, -1.6]} size={[2.1, 0.5, 0.08]} />
        </group>
      )}

      <RoomAnnotations level={level} selectedRoom={selectedRoom} onSelect={onSelect} />
    </group>
  );
}

function Villa({ activeLevel, selectedRoom, onSelect }) {
  return (
    <group rotation={[0, -0.3, 0]}>
      {Array.from({ length: FLOOR_COUNT }, (_, level) => (
        <FloorLevel
          key={level}
          level={level}
          activeLevel={activeLevel}
          selectedRoom={selectedRoom}
          onSelect={onSelect}
        />
      ))}

      {/* Site datum */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <ringGeometry args={[3.35, 3.38, 64]} />
        <meshBasicMaterial color={BLUE} transparent opacity={0.38} side={2} />
      </mesh>
      <gridHelper args={[7.5, 20, '#0B6D91', '#07374B']} position={[0, -0.16, 0]} />
    </group>
  );
}

function BlueprintCanvas({ activeLevel, selectedRoom, onSelect }) {
  const touchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  return (
    <Canvas
      dpr={touchDevice ? [1, 1.25] : [1, 1.5]}
      gl={{ antialias: !touchDevice, alpha: false, powerPreference: 'low-power' }}
      fallback={<div className="flex h-full items-center justify-center bg-black p-6 text-center font-mono-tech text-xs text-cyan-200">Interactive 3D preview is unavailable in this browser.</div>}
    >
      <color attach="background" args={['#02070B']} />
      <PerspectiveCamera makeDefault position={[9, 7.1, 10]} fov={36} />
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 8, 6]} color={CYAN} intensity={16} distance={20} />
      <pointLight position={[-5, 3, -4]} color={BLUE} intensity={12} distance={18} />
      <Villa activeLevel={activeLevel} selectedRoom={selectedRoom} onSelect={onSelect} />
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.3}
        enableDamping
        dampingFactor={0.08}
        enablePan
        enableZoom
        minDistance={7}
        maxDistance={18}
        minPolarAngle={0.3}
        maxPolarAngle={1.45}
        target={[0, 2.45, 0]}
        touches={{ ONE: 0, TWO: 2 }}
      />
    </Canvas>
  );
}

export default function BuildingBlueprint() {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [activeLevel, setActiveLevel] = useState(null);

  return (
    <div className="about-blueprint-panel relative isolate overflow-hidden border border-cyan-300/30 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_52%_45%,rgba(0,168,255,0.12),transparent_65%)]" />
      <div className="relative z-20 flex items-center justify-between border-b border-cyan-200/15 bg-[#02070B]/75 px-4 py-3 sm:px-5">
        <div>
          <p className="font-mono-tech text-[9px] tracking-[0.2em] text-cyan-200">PAVANA / BIM STUDY 01</p>
          <p className="mt-1 text-[10px] font-medium tracking-[0.12em] text-slate-300">CONTEMPORARY VILLA · 03 LEVELS</p>
        </div>
        <div className="flex items-center gap-2 font-mono-tech text-[8px] uppercase tracking-[0.15em] text-cyan-100/75">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_#53F2FF]" />
          LIVE MODEL
        </div>
      </div>

      <div className="relative h-[340px] bg-black sm:h-[390px] lg:h-[420px]">
        <BlueprintCanvas activeLevel={activeLevel} selectedRoom={selectedRoom} onSelect={setSelectedRoom} />
        <div className="pointer-events-none absolute left-3 top-3 z-10 font-mono-tech text-[8px] leading-relaxed tracking-[0.12em] text-cyan-100/55 sm:left-4 sm:top-4">
          <p>SECTION / AXONOMETRIC</p>
          <p className="mt-1 text-cyan-300/70">SCROLL TO EXPLODE FLOORS</p>
        </div>
        <div className="pointer-events-none absolute bottom-3 right-3 z-10 font-mono-tech text-[8px] tracking-[0.12em] text-cyan-100/45 sm:bottom-4 sm:right-4">
          DRAG TO ORBIT · PINCH TO ZOOM · CLICK + ROOM
        </div>
      </div>

      <div className="relative z-20 flex flex-col gap-2 border-t border-cyan-200/15 bg-[#02070B]/90 px-4 py-3 font-mono-tech text-[8px] tracking-[0.12em] text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="flex items-center gap-2">
          <span className="mr-1 text-cyan-100/55">FLOOR</span>
          {[
            { label: '01', value: 0 },
            { label: '02', value: 1 },
            { label: '03', value: 2 },
          ].map((floor) => (
            <button
              key={floor.label}
              type="button"
              onClick={() => setActiveLevel((current) => current === floor.value ? null : floor.value)}
              className={`min-w-8 border px-2 py-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200 ${activeLevel === floor.value ? 'border-cyan-200/70 bg-cyan-300/10 text-cyan-100' : 'border-cyan-200/15 text-slate-400 hover:border-cyan-200/45 hover:text-cyan-100'}`}
              aria-pressed={activeLevel === floor.value}
              aria-label={`${activeLevel === floor.value ? 'Clear highlight from' : 'Highlight'} floor ${floor.label}`}
            >
              {floor.label}
            </button>
          ))}
          <span className="ml-1 hidden text-slate-500 sm:inline">HIGHLIGHT LEVEL</span>
        </div>
        <span className="text-cyan-200/80">BENGALURU · INDIA</span>
      </div>
    </div>
  );
}
