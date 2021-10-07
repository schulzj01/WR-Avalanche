


function createHighChart(locationForecast) { 

						/*elevation : location.elevation,
					name : location.name,
					forecast : forecast,
					raw : rawForecast*/

	console.log(locationForecast)
	//Get list of all times for Temperatures
	let temperatureDates = locationForecast.forecast['temperature'].map(l => l.date.getTime() );
	let temperatureVals = locationForecast.forecast['temperature'].map(l => parseInt(l.val) );
	let windVals = locationForecast.forecast['wind (mph)'].map(l => parseInt(l.val) );	
	console.log(temperatureVals)
	
	Highcharts.chart('forecastGraphicalTabContent', {
		chart: { zoomType: 'xy' },
		title: {
			text: `Avalanche Weather Guidance For ${locationForecast.name}`,
			align: 'left'
		},
		subtitle: {
			text: 'Source: National Weather Service',
			align: 'left'
		},
		credits: { enabled: false },
		xAxis: [{
			categories: temperatureDates,
			crosshair: true,
			type : 'datetime',
			labels: { 
				format: '{value:%m/%d %l%P }'
			}
		}],
		yAxis: [{ // Primary yAxis
			labels: {
				format: '{value}°F',
				style: {
					color: Highcharts.getOptions().colors[2]
				}
			},
			title: {
				text: 'Temperature',
				style: {
					color: Highcharts.getOptions().colors[2]
				}
			},
			opposite: true
		}, { // Secondary yAxis
			gridLineWidth: 0,
			title: {
				text: 'Snowfall',
				style: {
					color: Highcharts.getOptions().colors[0]
				}
			},
			labels: {
				format: '{value} in',
				style: {
					color: Highcharts.getOptions().colors[0]
				}
			}

		}, { // Tertiary yAxis
			gridLineWidth: 0,
			title: {
				text: 'Wind Speed',
				style: {
					color: Highcharts.getOptions().colors[1]
				}
			},
			labels: {
				format: '{value} mph',
				style: {
					color: Highcharts.getOptions().colors[1]
				}
			},
			opposite: true
		}],
		tooltip: {
			shared: true
		},
		legend: {
			layout: 'horizontal',
			align: 'right',
			x: -40,
			verticalAlign: 'top',
			y: 0,
			floating: true,
			backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'rgba(255,255,255,0.25)'
		},
		series: [{
			name: 'Snowfall',
			type: 'column',
			yAxis: 1,
			data: [null, NaN, null, 4.9, 7.5, 10.4, 12.2, 14.0, 17.0, 13.6, 14.5, 21.4, 19.1, 9.6, 5.4],
			tooltip: { valueSuffix: ' in'	}
		}, {
			name: 'Wind Speed',
			type: 'spline',
			yAxis: 2,
			data: windVals,
			marker: {	enabled: false },
			dashStyle: 'shortdot',
			tooltip: { valueSuffix: ' mph'	}
		}, {
			name: 'Temperature',
			type: 'spline',
			data: temperatureVals,
			tooltip: { valueSuffix: ' °F' }
		}],
		responsive: {
			rules: [{
				condition: { maxWidth: 500 },
				chartOptions: {
					legend: {
						floating: false,
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom',
						x: 0,
						y: 0
					},
					yAxis: [{
						labels: {
							align: 'right',
							x: 0,
							y: -6
						},
						showLastLabel: false
					}, {
						labels: {
							align: 'left',
							x: 0,
							y: -6
						},
						showLastLabel: false
					}, {
						visible: false
					}]
				}
			}]
		}
	});

}