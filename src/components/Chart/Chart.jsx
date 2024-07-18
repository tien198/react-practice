import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart({ dataPoints }) {
    const valueArr = dataPoints.map(e => e.value);
    const maxVal = Math.max(...valueArr);

    return (
        <div className='chart'>
            {dataPoints.map(d =>
                <ChartBar key={d.label} value={d.value} maxValue={maxVal} label={d.label} />
            )}
        </div>
    );
}

export default Chart;