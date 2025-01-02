import React from 'react';
import { ConversionDisplay } from './components/ConversionDisplay';

function App() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url("https://i.imgur.com/63tNuCG.png")'
      }}
    >
      <ConversionDisplay />
    </div>
  );
}

export default App;