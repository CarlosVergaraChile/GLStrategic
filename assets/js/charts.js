// charts.js - Gráficos con Chart.js

document.addEventListener('DOMContentLoaded', function() {
    // Gráfico PIB para flipcard de ADN
    const chartElement = document.getElementById('pibChart');
    if (chartElement) {
        const ctx = chartElement.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                datasets: [
                    { 
                        label: 'Mercado', 
                        data: [5.8, 6.0, 5.5, 5.0, 4.8, 4.5, 4.6, 4.7], 
                        borderColor: '#ef4444', 
                        borderWidth: 2, 
                        pointRadius: 0 
                    },
                    { 
                        label: 'Realidad', 
                        data: [5.8, 6.1, 5.3, 4.0, 1.9, 2.3, 1.7, 1.4], 
                        borderColor: '#9ca3af', 
                        borderWidth: 2, 
                        borderDash: [5,5] 
                    },
                    { 
                        label: 'PPCI', 
                        data: [5.8, 5.0, 4.0, 3.0, 2.0, 2.1, 2.0, 2.2], 
                        borderColor: '#00A3E0', 
                        borderWidth: 3, 
                        backgroundColor: 'white', 
                        pointRadius: 4 
                    }
                ]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false, 
                scales: { 
                    y: { 
                        grid: { color: '#f0f0f0' } 
                    }, 
                    x: { 
                        grid: { display: false } 
                    } 
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            font: { size: 10 },
                            padding: 8
                        }
                    }
                }
            }
        });
    } else {
        console.warn('Elemento #pibChart no encontrado en el DOM');
    }
});
