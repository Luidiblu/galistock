import React from 'react';
import { ConversionDisplay } from './components/ConversionDisplay';

function App() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url("https://i.imgur.com/W0O190M.png)'
      }}
    >
      <ConversionDisplay />
    </div>
  );
}

export default App;