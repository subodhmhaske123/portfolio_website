import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles() {
    const pointsRef = useRef<THREE.Points>(null!);
    const particleCount = 500;

    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 20;
    }

    useFrame(({ mouse }) => {
        if (!pointsRef.current) return;
        const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
            positionsArray[i * 3 + 0] += (mouse.x * 5 - positionsArray[i * 3 + 0]) * 0.02;
            positionsArray[i * 3 + 1] += (mouse.y * 5 - positionsArray[i * 3 + 1]) * 0.02;
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]} // <- fixed: use args instead of array/count/itemSize
                />
            </bufferGeometry>
            <pointsMaterial color="#ffffff" size={0.1} />
        </points>
    );
}
