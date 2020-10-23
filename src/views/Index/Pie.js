import React from 'react'
import {
    Chart,
    Interval,
    Coordinate,
    Interaction
  } from 'bizcharts';

function Pie() {
    const data = [
        { item: '事例一', count: 40, percent: 0.4 },
        { item: '事例二', count: 21, percent: 0.21 },
        { item: '事例三', count: 17, percent: 0.17 },
        { item: '事例四', count: 13, percent: 0.13 },
        { item: '事例五', count: 9, percent: 0.09 },
    ];

    const cols = {
        percent: {
            formatter: val => {
                val = val * 100 + '%';
                return val;
            },
        },
    };
    return (
        <Chart height={300} data={data} scale={cols} autoFit>
            <Coordinate type="theta" radius={0.75} />
            <Interval
                position="percent"
                adjust="stack"
                color="item"
                label={['count', {
                    content: (data) => {
                        return `${data.item}: ${data.percent * 100}%`;
                    },
                }]}
            />
            <Interaction type='element-single-selected' />
        </Chart>
    )
}

export default Pie
