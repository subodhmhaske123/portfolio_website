import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { a, useSpring } from "@react-spring/three";

interface ShapeProps {
    type: "box" | "sphere" | "torus";
    position: [number, number, number];
    color: string;
}

export default function FloatingShape({ type, position, color }: ShapeProps) {
    const ref = useRef<Mesh>(null!);

    const { scale } = useSpring({
        from: { scale: 0 },
        to: { scale: 1 },
        config: { mass: 1, tension: 170, friction: 26 },
    });

    useFrame(({ clock }) => {
        ref.current.rotation.x = clock.getElapsedTime() * 0.3;
        ref.current.rotation.y = clock.getElapsedTime() * 0.5;
        ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[0]) * 0.5;
    });

    return (
        <a.mesh ref={ref} position={position} scale={scale}>
            {type === "box" && <boxGeometry args={[1, 1, 1]} />}
            {type === "sphere" && <sphereGeometry args={[0.7, 32, 32]} />}
            {type === "torus" && <torusGeometry args={[0.6, 0.2, 16, 100]} />}
            <meshStandardMaterial color={color} />
        </a.mesh>
    );
}
