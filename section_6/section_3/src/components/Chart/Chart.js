import React from "react";

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    //calicurate the maximum amount
    //Array of dataPointValues changes from objects to numbers
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    //Math.max wants a list of arguments, not array. 
    //so '...' pulls out all the array elements and adds them as standalone arguments
    const totalMaximum = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoints.map(dataPoint => (
            <ChartBar 
            value={dataPoint.value} 
            maxValue={totalMaximum} 
            label={dataPoint.label}/>
            ))}
    </div>
}

export default Chart;

//Line 8, maxValue: all chart values need to be in relation with max value 