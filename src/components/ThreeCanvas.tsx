import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all rotating objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Outer Wireframe Icosahedron (Electric Cyan)
    const outerGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // 2. Middle Geodesic Polyhedron (Cyber Violet)
    const midGeo = new THREE.IcosahedronGeometry(1.5, 2);
    const midMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const midMesh = new THREE.Mesh(midGeo, midMat);
    mainGroup.add(midMesh);

    // 3. Inner Glowing Core (Octahedron with subtle glass shine)
    const coreGeo = new THREE.OctahedronGeometry(0.85, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 4. Orbital Ring 1
    const ringGeo1 = new THREE.TorusGeometry(2.7, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    // 5. Orbital Ring 2
    const ringGeo2 = new THREE.TorusGeometry(3.0, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    mainGroup.add(ring2);

    // 6. Particle Cloud around the core
    const particlesCount = 200;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const purpleColor = new THREE.Color(0xa855f7);

    for (let i = 0; i < particlesCount; i++) {
      const radius = 2.4 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = cyanColor.clone().lerp(purpleColor, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 3, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 3, 50);
    pointLight2.position.set(-5, -5, -2);
    scene.add(pointLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;
    };

    const handlePointerDown = (event: PointerEvent) => {
      isDragging = true;
      previousPointerX = event.clientX;
      previousPointerY = event.clientY;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = event.clientX - previousPointerX;
      const deltaY = event.clientY - previousPointerY;
      mainGroup.rotation.y += deltaX * 0.01;
      mainGroup.rotation.x += deltaY * 0.01;
      previousPointerX = event.clientX;
      previousPointerY = event.clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow interpolation
      targetX = mouseX * 0.4;
      targetY = mouseY * 0.4;

      if (!isDragging) {
        mainGroup.rotation.y += (targetX - mainGroup.rotation.y) * 0.05 + 0.003;
        mainGroup.rotation.x += (-targetY - mainGroup.rotation.x) * 0.05 + 0.0015;
      }

      // Internal component rotations
      outerMesh.rotation.y -= 0.002;
      outerMesh.rotation.z += 0.001;

      midMesh.rotation.x += 0.003;
      midMesh.rotation.y += 0.002;

      coreMesh.rotation.x = elapsedTime * 0.6;
      coreMesh.rotation.y = elapsedTime * 0.8;

      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.15;

      particleSystem.rotation.y = elapsedTime * 0.05;

      // Pulse core scale slightly
      const scale = 1 + Math.sin(elapsedTime * 2.5) * 0.05;
      coreMesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);

      // Clean up geometries and materials
      [outerGeo, midGeo, coreGeo, ringGeo1, ringGeo2, particleGeo].forEach((geo) =>
        geo.dispose()
      );
      [outerMat, midMat, coreMat, ringMat1, ringMat2, particleMat].forEach((mat) =>
        mat.dispose()
      );
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[550px] flex items-center justify-center">
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none select-none"
      />

      {/* Futuristic HUD overlay cues around the 3D element */}
      <div className="absolute bottom-4 right-4 pointer-events-none flex items-center gap-2 text-[11px] font-mono text-cyan-400/70 glass-pill px-3 py-1.5 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>INTERACTIVE 3D // DRAG TO ROTATE</span>
      </div>

      <div className="absolute top-4 left-4 pointer-events-none hidden sm:flex items-center gap-2 text-[10px] font-mono text-slate-400/60 glass-pill px-2.5 py-1 rounded-full">
        <span>CORE: ACTIVE</span>
        <span className="text-slate-600">|</span>
        <span>FPS: 60</span>
      </div>
    </div>
  );
};
