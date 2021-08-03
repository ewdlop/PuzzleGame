import React, { useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import Box from '../Mesh/Box';
import './Scene.css';

interface IWindowSize {
    width: number;
    height: number;
}

const Scene: React.FC = () => {

    const useWindowSize = () => {
        const [windowSize, setWindowSize] = useState<IWindowSize>({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        useEffect(() => {

            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    const size = useWindowSize();

    return (
        <div className="Scene" style={size}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 50, 0]} />
            </Canvas>
            <div className="overlay-top-left">
                <div className="detail">
                    <h1>I am Overlay</h1>
                        I overlay details
                    </div>
            </div>
            <div className="overlay-bottom-right">
                <div className="detail">
                    <h1>I am Overlay</h1>
                        I overlay details
                    </div>
            </div>
        </div>

    );
}

export default Scene;