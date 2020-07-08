import React, { useMemo } from 'react';
import Plot from 'react-plotly.js';

const createArrays = pointCount => {
    const x = [];
    const y = [];

    for (let i = 0; i < pointCount * 2; i++) {
        x.push(Math.random() * 5);
        y.push(Math.random() * 5);
    }

    return [x,y];
}

const RegularPlot = props => {
    const [x,y] = useMemo( () => {
        return createArrays(props.pointCount);
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

export default RegularPlot
