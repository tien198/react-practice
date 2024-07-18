import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart({ dataPoints }) {
    return (
        <div className='chart'>
            {dataPoints.map(d => {
                <ChartBar key={dataPoints.label} value={dataPoints.value} maxValue={null} label={dataPoints.label} />
            })}
        </div>
    );
}

export default Chart;