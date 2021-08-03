import { Environment, Html, useProgress } from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import DockModel from "../Model/Duck";
import ErrorBoundary from "../Utility/ErrorBoundary";
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
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();

  const LoaderDiv = () => {
    const { progress } = useProgress()
    return <Html center>
      <span style={{ color: 'white' }}>{progress} % loaded</span>
    </Html>
  }

  return (

    <div className="Scene" style={size}>
      <ErrorBoundary>
        <Canvas>
          <Suspense fallback={<LoaderDiv/>}>
              <Environment preset={'studio'} />
              <DockModel/>
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}

export default Scene;