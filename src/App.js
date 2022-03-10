import { Anim } from './Anim';
import './App.scss';
import { Canvas } from '@react-three/fiber';

function AnimationCanvas() {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 75 }}>
      <ambientLight />
      <Anim />
    </Canvas>
  );
}

function App() {
  return (
    <div className="app">
      <div className="anim">
        <AnimationCanvas />
      </div>
    </div>
  );
}

export default App;
