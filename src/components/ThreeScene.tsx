import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box() {
    return (
        <mesh rotation={[0.5, 0.5, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    );
}

export default function ThreeScene() {
    return (
        <div className="w-full h-screen">
            <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <Box />
                <OrbitControls />
            </Canvas>
        </div>
    );
}
