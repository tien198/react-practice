import React from 'react';
import './ChartBar.css';

function ChartBar({ label, value, maxValue }) {
    let barHeight = '0%';
    if (value > 0) {
        barHeight = Math.round((value / maxValue) * 100) + '%';
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className="chart-bar__fill" style={{ height: barHeight }}></div>
            </div>
            <div className='chart-bar__label'>{label}</div>
        </div>
    );
}

export default ChartBar;