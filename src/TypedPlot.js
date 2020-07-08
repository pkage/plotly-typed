import React, { useMemo } from 'react';
import Plot from 'react-plotly.js';

const createArrayBuffer = pointCount => {
    // points * 4 (float32) * 2 features
    let buf = new ArrayBuffer(pointCount * 4 * 2);

    let view = new Float32Array(buf);
    for (let i = 0; i < pointCount * 2; i++) {
        view[i] = Math.random() * 5;
    }

    return buf;
}

const TypedPlot = props => {
    const [x,y] = useMemo( () => {
        const buf = createArrayBuffer(props.pointCount);
        return [
            new Float32Array(buf, 0, props.pointCount),
            new Float32Array(buf, props.pointCount * 4, props.pointCount)
        ];
    }, [props.pointCount])

    return (
        <Plot
            data={[
                {
                    x,
                    y,
                    type: props.webgl ? 'scattergl' : 'scatter',
                    mode: 'markers',
                    marker: {color: 'red'},
                },
            ]}
            layout={ {width: 640, height: 480, title: `${props.pointCount} random plot points`} }
        />

    )
}

export default TypedPlot
