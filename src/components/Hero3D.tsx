import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Stars } from "@react-three/drei";
import FloatingShape from "./FloatingShapes";
import Particles from "./Particles";

export default function Hero3D() {
    return (
        <div className="w-full h-screen">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <Particles />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <Text position={[0, 0, 0]} fontSize={1.5} color="#00ffff" anchorX="center" anchorY="middle">
                    Subodh Mhaske
                </Text>

                {/* Multiple floating shapes */}
                <FloatingShape type="box" position={[-3, 1, -2]} color="#ff007f" />
                <FloatingShape type="sphere" position={[2, -1, 1]} color="#00ff7f" />
                <FloatingShape type="torus" position={[0, 2, -3]} color="#007fff" />
                <FloatingShape type="box" position={[3, -2, 2]} color="#ffbf00" />

                <OrbitControls enableZoom={true} enablePan={false} />
            </Canvas>
        </div>
    );
}
