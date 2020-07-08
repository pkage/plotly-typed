import React, { useState } from 'react';
import TypedPlot from './TypedPlot';
import RegularPlot from './RegularPlot';
import FPSStats from 'react-fps-stats';
import './App.css';

function App() {
    const [pointCount, setPointCount] = useState(100);
    const [useTyped, setUseTyped]     = useState(true);
    const [useWebGL, setUseWebGL]     = useState(true);

    const estMem = count => useTyped ? '~' + ((count * 4 * 2) / 1024).toFixed(2) : '?'

    return (
        <div className="App">
            <div className="row">
                <input
                    type="range"
                    min={10}
                    max={100000}
                    value={pointCount}
                    onChange={e => setPointCount(e.target.value)}/>
                <span>{pointCount} points ({estMem(pointCount)} KB)</span>
            </div>
            { useTyped ?
                    <TypedPlot
                        pointCount={pointCount}
                        webgl={useWebGL}/> :
                    <RegularPlot
                        pointCount={pointCount}
                        webgl={useWebGL}/>
            }
            <div className="row">
                <button
                    type="button"
                    onClick={ () => setUseTyped(!useTyped) }>
                    switch to { useTyped ? 'regular' : 'typed' } array
                </button>
                <button
                    type="button"
                    onClick={ () => setUseWebGL(!useWebGL) }>
                    switch to { useWebGL ? 'svg' : 'webgl' } render { useWebGL && (pointCount > 1000) && '(!)' }
                </button>
            </div>

            <FPSStats />
        </div>
    );
}

export default App;
