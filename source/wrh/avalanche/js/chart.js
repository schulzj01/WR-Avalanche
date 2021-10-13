function createHighChart(locationForecast) { 
	let config = {

	tempAxis: { 
			labels: {
				format: '{value}°F',
				style: {
					color: Highcharts.getOptions().colors[3]
				},
			},
			title: {
				text: 'Temperature',
				style: {
					color: Highcharts.getOptions().colors[3]
				},
			},
			height: '45%',
			top: '50%',
			opposite: true,
			offset: 0,
		}, 
		windAxis: { 
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
			height: '45%',
			top: '50%',
			offset: 0,
		}, 
		snowAxis: { 
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
			},
			height: '45%',
			offset: 0,
		},
		qpfAxis : { // QPF
			gridLineWidth: 0,
			title: {
				text: 'Liquid Precip',
				style: {
					color: Highcharts.getOptions().colors[2]
				}
			},
			labels: {
				format: '{value} in',
				style: {
					color: Highcharts.getOptions().colors[2]
				}
			},
			height: '45%',
			opposite: true,
			offset: 0,
		}


	}

	/*$("#forecastGraphicalTabContent").bind("mousemove mouseleave", function(e) {
		for (let i = 0; i < Highcharts.charts.length; ++i) {
			let chart = Highcharts.charts[i];
			let event = chart.pointer.normalize(e.originalEvent); // Find coordinates within the chart
			let point;
			for (let j = 0; j < chart.series.length && !point; ++j) {
				point = chart.series[j].searchPoint(event, true);
			}
			if (!point) return;
		
			if (e.type === "mousemove") {
				point.onMouseOver();
				chart.xAxis[0].drawCrosshair(event, point);
			} else {
				point.onMouseOut();
				chart.tooltip.hide(point);
				chart.xAxis[0].hideCrosshair();
			}
		}
	});
	
	 //Override the reset function, we don't need to hide the tooltips and crosshairs.
	
	Highcharts.Pointer.prototype.reset = function() {
		return undefined;
	};*/


	function createHighChartSeriesFromAvg(data,type){

		let retVal = [];
		console.log(data)
		console.log(type)
		if (type == 'int') { retVal = data.map(l => new Array(l.date.getTime(),parseInt(l.val)) ); }
		else if (type == 'float') { retVal = data.map(l => new Array(l.date.getTime(),parseFloat(l.val)) ); }		
		else { retVal = data.map(l => new Array(l.date.getTime(),l.val)); }
		return retVal;
	}
						/*elevation : location.elevation,
					name : location.name,
					forecast : forecast,
					raw : rawForecast*/

	console.log(locationForecast)
	//Get list of all times for Temperatures
	let tempSeries = createHighChartSeriesFromAvg(locationForecast.forecast['temperature'],'int');
	let windSeries = createHighChartSeriesFromAvg(locationForecast.forecast['wind (mph)'],'int');	
	let snow12Series = createHighChartSeriesFromAvg(locationForecast.forecast['12 hour snow'],'float');	
	let qpf12Series = createHighChartSeriesFromAvg(locationForecast.forecast['12 hour qpf'],'float');	
	
	console.log(tempSeries)
	snow12Series = [
			[
				1639486800000,
				null
			],
			[
				1639497600000,
				null
			],
			[
				1639508400000,
				2
			],
			[
				1639519200000,
				2
			],
			[
				1639530000000,
				2
			],
			[
				1639540800000,
				2
			],
			[
				1639551600000,
				4
			],
			[
				1639562400000,
				4
			],
			[
				1639573200000,
				4
			],
			[
				1639584000000,
				4
			],
			[
				1639594800000,
				6
			],
			[
				1639605600000,
				6
			],
			[
				1639616400000,
				6
			],
			[
				1639627200000,
				6
			],
			[
				1639638000000,
				null
			],
			[
				1639648800000,
				null
			],
			[
				1639659600000,
				null
			]
		]
	
	xAxisMax = tempSeries.at(-2)[0];
	xAxisMin = tempSeries[1][0];	
	console.log(new Date(xAxisMin));
	console.log(new Date(xAxisMax));	

	Highcharts.setOptions({global : { useUTC: false } });
	Highcharts.chart('forecastGraphicalTabContent', {
		chart: { zoomType: 'xy' },
		plotOptions: {
			//grouping : false
		},		
		title: {
			text: `Avalanche Weather Guidance For ${locationForecast.name}`,
			align: 'left'
		},
		subtitle: {
			text: 'Source: National Weather Service',
			align: 'left'
		},
		credits: { enabled: false },
		xAxis: [{  //3 hourly axis
			crosshair: true,
			type : 'datetime',
			minPadding: 0,
			maxPadding: 0,	
			min: xAxisMin,
			max: xAxisMax,
			labels: { 
				format: '{value:%m/%d %l%P }'
			}
		}],
		yAxis: [config.tempAxis,config.windAxis,config.snowAxis,config.qpfAxis],
		tooltip: {
			shared: true,
			snap: 10,
			xDateFormat: '%A %m/%d %l%P',
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
		series: [/*{
			name: 'Temperature',
			type: 'spline',
			xAxis: 0,
			yAxis: 0,			
			data: tempSeries,
			label: { enabled: false},
			color: Highcharts.getOptions().colors[3],
			pointInterval: 438e5, // three hours
			tooltip: { valueSuffix: ' °F' }
		},{
			name: 'Wind Speed',
			type: 'spline',
			xAxis: 0,
			yAxis: 1,
			data: windSeries,
			label: { enabled: false},
			color: Highcharts.getOptions().colors[1],
			marker: {	enabled: false },
			dashStyle: 'shortdot',
			pointInterval: 438e5, // three hours
			tooltip: { valueSuffix: ' mph'	}
		},*/ {
			name: '12 Hour Snowfall',
			type: 'spline',
			xAxis: 0,
			yAxis: 2,
			data: snow12Series,
			//pointPlacement: .5,
			//pointRange: 60*60*3*1000,
			tooltip: { 
				valueSuffix: ' in',
				xDateFormat: 'Starting %A %m/%d %l%P',
			},			
			color: Highcharts.getOptions().colors[0],
//			opacity: 0.75,	
			//pointInterval : 432e6,	
			//pointPadding: 0,
			//groupPadding: 0,
			dataGrouping: {
				units: [
						['month', [1]]
				],
				enabled: true,
				forced: true
		}

			},/* {
				name: '12 Hour Liquid Precip',
				type: 'column',
				xAxis: 0,
				yAxis: 3,
				data: qpf12Series,
				pointPlacement: .5,
				pointRange: 60*60*12*1000,
				color: Highcharts.getOptions().colors[2],
				opacity: 0.75,
				tooltip: { 
					valueSuffix: ' in',
					xDateFormat: 'Starting %A %m/%d %l%P',
				},
				pointInterval : 432e6,	

				pointPadding: 0,
				groupPadding: 0.05,
				}*/],
		responsive: {
			rules: [{
				condition: { maxWidth: 800 },
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
						visible: true
					}, {
						visible: true
					}]
				}
			}]
		}
	});

}