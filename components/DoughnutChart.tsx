'use client'

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend }
from 'chart.js';
import 'chart.js/auto';

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets:[
        {
            label: 'Banks',
            data: [1254.49, 1198.12, 732.24],
            backgroundColor:['#0747b6', '#2265d8', '#2f91fa']
        }
    ],
    labels: ['BankOne', 'BankTwo', 'BankThree']
  }
  return  <Doughnut 
    data={data} 
    options={{
        cutout: '70%',
        plugins:{
            legend:{
                display: false
            }
        }
    }}
/>
}

export default DoughnutChart