class ChartManager  {

	constructor() {
		this._chart = null;
		this._chartProps;
		this.configureHighcharts();
		this.initializeCharts();


	}

	configureHighcharts(){
		//Set up our configuration options;
		this._chartProps = {
			wxColors : {
				qpf: Highcharts.getOptions().colors[2],
				snowfall: Highcharts.getOptions().colors[0],
				wind: Highcharts.getOptions().colors[5],
				temperature: Highcharts.getOptions().colors[3],
				snowlevel: '#00b774',
				cloudcover: 'black',
			},
			axisHeight : 120,
			axisPadding : 40,
			axisTopPadding : 95,
		};

		// Add mouse overcursor functionality to Chart.js
		/*Chart.Tooltip.positioners.cursor = function(chartElements, coordinates) {
			return coordinates;
		}*/
		Highcharts.setOptions({global : { useUTC: false } });

/*		Highcharts.Pointer.prototype.getHoverData = function(
			existingHoverPoint,
			existingHoverSeries,
			series,
			isDirectTouch,
			shared,
			e
		) {
			var hoverPoint,
				hoverPoints = [],
				hoverSeries = existingHoverSeries,
				useExisting = !!(isDirectTouch && existingHoverPoint),
				notSticky = hoverSeries && !hoverSeries.stickyTracking,
				filter = function(s) {
					return (
						s.visible &&
						!(!shared && s.directTouch) && // #3821
						Highcharts.pick(s.options.enableMouseTracking, true)
					);
				},
				// Which series to look in for the hover point
				searchSeries = notSticky ?
				// Only search on hovered series if it has stickyTracking false
				[hoverSeries] :
				// Filter what series to look in.
				series.filter(function(s) {
					return filter(s) && s.stickyTracking;
				});
		
			// Use existing hovered point or find the one closest to coordinates.
			hoverPoint = useExisting || !e ?
				existingHoverPoint :
				this.findNearestKDPoint(searchSeries, shared, e);
		
			// Assign hover series
			hoverSeries = hoverPoint && hoverPoint.series;

			console.log(hoverPoint)
		
			// If we have a hoverPoint, assign hoverPoints.
			if (hoverPoint) {
				// When tooltip is shared, it displays more than one point
				if (shared && !hoverSeries.noSharedTooltip) {
					searchSeries = series.filter(function(
						s
					) {
						return filter(s) && !s.noSharedTooltip;
					});
		
					// Get all points with the same x value as the hoverPoint
					searchSeries.forEach(function(
						s
					) {
						var point = Highcharts.find(s.points, function(
							p
						) {
							return p.clientX === hoverPoint.clientX && !p.isNull;
						});
		
						if (Highcharts.isObject(point)) {
							
							//  Boost returns a minimal point. Convert it to a usable point for tooltip and states.
							 
							if (s.chart.isBoosting) {
								point = s.getPoint(point);
							}
							hoverPoints.push(point);
						}
					});
				} else {
					hoverPoints.push(hoverPoint);
				}
			}
			return {
				hoverPoint: hoverPoint,
				hoverSeries: hoverSeries,
				hoverPoints: hoverPoints
			};
		};		
*/
	}
	initializeCharts() {
		const _this = this;

/*		const defaultConfig = {
			chart: {
				marginLeft: 100, // Keep all charts left aligned
				marginRight: 100,
				spacingTop: 20,
				spacingBottom: 20
			},
			title: { text: '' },
			exporting: { enabled: false },
			credits: { enabled: false },
			legend: {	enabled: false },
			xAxis: {
				visible:true,
				crosshair: true,
				gridLineWidth: 0,
				type : 'datetime',
				minPadding: 0,
				maxPadding: 0,	
				//	min: xAxisMin,
				//	max: xAxisMax,
				tickLength: 10,
				events: {
				//setExtremes: syncExtremes
				},
				labels: { 
					enabled: true,
					format: '{value:%m/%d %l%P }'
				}
			},
			tooltip: {
				xDateFormat: '%A %m/%d %l%P',
        crosshairs: true,
				//shared:true,
				//snap: 10,
				followPointer: false,
				followTouchMove: false,
				stickOnContact: true,
			},
		};*/

		const yAxis = [{
			id: 'y-temperature',
			labels: {
				format: '{value}°F',
				style: { color: this._chartProps.wxColors.temperature },
			},
			title: {
				text: 'Temperature °F',
				style: { color: this._chartProps.wxColors.temperature },
			},
			offset: 0,
			gridLineWidth: 2,			
			softMax: 40,
			softMin: 0,
			lineWidth: 2,
			height: this._chartProps.axisHeight,
			top: this._chartProps.axisTopPadding + (this._chartProps.axisHeight + this._chartProps.axisPadding)*0,
		},{
			id: 'y-snowlevel',
			labels: {
				format: '{value} kft',
				style: { color: this._chartProps.wxColors.snowlevel },
			},
			title: {
				text: 'Snow Level kft',
				style: { color: this._chartProps.wxColors.snowlevel },
			},
			opposite: true,
			gridLineWidth: 2,			
			offset: 0,
			softMax: 15,
			softMin: 8,	
			lineWidth: 2,
			height: this._chartProps.axisHeight,
			top: this._chartProps.axisTopPadding + (this._chartProps.axisHeight + this._chartProps.axisPadding)*0,
			plotLines: [{
				id : 'l-elevation',
				color: this._chartProps.wxColors.snowlevel,
				dashStyle: 'Dot',
				value: 3,
				zIndex: 5,
				label: {
					align: 'right',
					y: -3,
					x: -5,
					style: { color: this._chartProps.wxColors.snowlevel },
					formatter: function () { return 'Elev: ' + (this.options.value) + ' kft'; } //	&#183;&#183;&#183; 
				}
			}]				
		},{
			id: 'y-wind',
			labels: {
				format: '{value} mph',
				style: { color: this._chartProps.wxColors.wind },
			},
			title: {
				text: 'Wind Speed mph',
				style: { color: this._chartProps.wxColors.wind },
			},
			gridLineWidth: 2,			
			offset: 0,
			softMax: 35,
			softMin: 0,
			lineWidth: 2,
			height: this._chartProps.axisHeight,
			top: this._chartProps.axisTopPadding + (this._chartProps.axisHeight + this._chartProps.axisPadding)*1,			
		},{
			id: 'y-windgust',
			labels: {	enabled: false },
			title: { enabled: false },
			offset: 0,			
			opposite: true,
			linkedTo: 2,
			gridLineWidth: 0,			
			lineWidth: 2,
			height: this._chartProps.axisHeight,
			top: this._chartProps.axisTopPadding + (this._chartProps.axisHeight + this._chartProps.axisPadding)*1,			
		},{ 
			id: 'y-snowfall',
			title: {
				text: 'Snowfall',
				style: {
					color: this._chartProps.wxColors.snowfall,
				}
			},
			labels: {
				format: '{value} in',
				style: {
					color: this._chartProps.wxColors.snowfall,
				}
			},
			gridLineWidth: 2,
			offset: 0,
			softMax: 6,
			min: 0,
			lineWidth: 2,
			height: this._chartProps.axisHeight,
			top: this._chartProps.axisTopPadding + (this._chartProps.axisHeight + this._chartProps.axisPadding)*2,	
		},{ // QPF
			id: 'y-qpf',
			title: {
				text: 'Liquid Precip',
				style: {
					color: this._chartProps.wxColors.qpf,
				}
			},
			labels: {
				format: '{value} in',
				style: {
					color: this._chartProps.wxColors.qpf,
				}
			},			
			opposite: true,
			offset: 0,
			softMax: 1,
			min: 0,	
			lineWidth: 2,
			height: this._chartProps.axisHeight,
			top: this._chartProps.axisTopPadding + (this._chartProps.axisHeight + this._chartProps.axisPadding)*2,		
		},{
			id: 'y-cloudcover',
			labels: {

				format: '',
				style: { color: this._chartProps.wxColors.cloudcover },
			},
			title: {
				text: 'Cloud Cover',
				style: { color: this._chartProps.wxColors.cloudcover },
			},
			showFirstLabel: false,
			showLastLabel: false,
			gridLineWidth: 0,
			endOnTick: false,
			offset: 0,
			max: 1.1,
			offset:3,
			min: 0,
			lineWidth: 2,
			height: 20,
			top: this._chartProps.axisTopPadding + (this._chartProps.axisHeight + this._chartProps.axisPadding)*3,			
		},];

		
		const xAxis = [{
			//visible:true,
			id : 'x-main',
			crosshair: true,
			gridLineWidth: 0,
			type : 'datetime',
			minPadding: 0,
			maxPadding: 0,	
			//	min: xAxisMin,
			//	max: xAxisMax,
			tickLength: 10,
			labels: { 
				enabled: true,
				format: '{value:%m/%d %l%P }'
			},
			lineWidth: 2,
			crosshair: {
				width: 20,
				color: '#33333310'
			},

		},{
			type : 'datetime',
			linkedTo: 0,
			opposite: false,
			//offset:  (this._chartProps.axisHeight + this._chartProps.axisPadding)*1,
			tickLength: 10,
			labels: { 
				enabled: true,
				format: '{value:%m/%d %l%P }'
			},
			lineWidth: 2,	
			minPadding: 0,
			maxPadding: 0,	
			opposite: true,			
		}/*,{
			type : 'datetime',
			//linkedTo: 0,
			opposite: false,
			offset:  (this._chartProps.axisHeight + this._chartProps.axisPadding)*2+10,
			tickLength: 10,
			labels: { 
				enabled: true,
				format: '{value:%m/%d %l%P }'
			},
			lineWidth: 2,	

		}*/]

		const series = [{
			name: 'Temperature',
			id : 's-temperature',
			type: 'spline',
			yAxis: 'y-temperature',
			xAxis : 0,
			data: [],
			color: this._chartProps.wxColors.temperature,
			//pointInterval: 438e5, // three hours
			tooltip: { valueSuffix: ' °F' },
		},{
			name: 'Snow Level',
			id: 's-snowlevel',
			type: 'spline',
			yAxis: 'y-snowlevel',
			xAxis : 0,			
			data: [],
			color: this._chartProps.wxColors.snowlevel,
		//pointInterval: 438e5, // three hours
			tooltip: { valueSuffix: ' kft' }		
		},{
			name: 'Wind Speed',
			id : 's-wind',
			type: 'spline',
			yAxis: 'y-wind',
			xAxis : 0,			
			data: [],
			color: this._chartProps.wxColors.wind,
			//pointInterval: 438e5, // three hours
			tooltip: { valueSuffix: ' mph' }
		},{
			name: 'Wind Gusts',
			id: 's-windgust',
			type: 'spline',
			yAxis: 'y-windgust',
			xAxis : 0,			
			data: [],
			lineWidth: 0,
			states: {
				hover: { lineWidthPlus: 0 }
			},
			color: this._chartProps.wxColors.wind,
			//pointInterval: 438e5, // three hours
			tooltip: { valueSuffix: ' mph' }
		},{
			name: '12 Hour Snowfall',
			id: 's-snowfall12',
			type: 'column',
			yAxis: 'y-snowfall',
			xAxis : 0,			
			data:  [],
			color: this._chartProps.wxColors.snowfall,
			//pointPlacement: .5,
			//pointRange: 60*60*3*1000,
			tooltip: { 
				valueSuffix: ' in',
				//xDateFormat: 'Starting %A %m/%d %l%P',
			},			

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

		},{
			name: '12 Hour Liquid Precip',
			id: 's-qpf12',
			type: 'column',
			yAxis: 'y-qpf',
			xAxis : 0,			
			data: [],
			color: this._chartProps.wxColors.qpf,				
			//pointPlacement: .5,
			//pointRange: 60*60*12*1000,
			color: this._chartProps.wxColors.qpf,
			opacity: 0.75,
			tooltip: { 
				valueSuffix: ' in',
			},
			//pointInterval : 432e6,	
			//pointPadding: 0,
			//groupPadding: 0.05,
			borderWidth: 3,
		},{
			name: 'Cloud Cover',
			id: 's-cloudcover',
			type: 'column',
			yAxis: 'y-cloudcover',
			xAxis : 0,
			data: [],
			states: { 
				hover: { brightness : 0 }
			},
			borderWidth: 1,
			borderColor: 'lightgray',
			groupPadding: 0,
			pointPadding: 0,
			//color: this._chartProps.wxColors.cloud,
			//pointInterval: 438e5, // three hours
			tooltip: { valueSuffix: ' %' }
		}]


		const chartConfig = {
			title: {
				text: '',
				align: 'left'
			},
			legend: {	enabled: false },
			subtitle: {
				text: 'Source: National Weather Service',
				align: 'left'
			},
			chart: {
				marginLeft: 100, // Keep all charts left aligned
				marginRight: 100,
				spacingTop: 20,
				spacingBottom: 20
			},
			xAxis: xAxis,
			tooltip: {
				xDateFormat: 'Starting %A %m/%d %l%P',
				shared:true,
				followPointer: true,
				followTouchMove: true,
				//stickOnContact: true,
			},
			series : series,
			yAxis : yAxis,	
		}


		let chartDiv = document.getElementById('forecastChart');
		this._chart = Highcharts.chart(chartDiv,chartConfig);


	/*	const windConfig = {
			series : [{
				name: 'Wind Speed',
				id : 's-wind',
				type: 'spline',
				yAxis: 'y-wind',
				data: [],
				color: this._chartProps.wxColors.wind,
				pointInterval: 438e5, // three hours
				tooltip: { valueSuffix: ' °F' }
			},{
				name: 'Wind Gusts',
				id: 's-windgust',
				type: 'spline',
				yAxis: 'y-wind',
				data: [],
				color: this._chartProps.wxColors.wind,
				pointInterval: 438e5, // three hours
				tooltip: { valueSuffix: ' kft' }
			}],
			yAxis: [{
				id: 'y-wind',
				labels: {
					format: '{value} mph',
					style: { color: this._chartProps.wxColors.wind },
				},
				title: {
					text: 'Wind Speed mph',
					style: { color: this._chartProps.wxColors.wind },
				},
				offset: 0,
				softMax: 40,
				softMin: 0,				
			}],	
		};
*/




	/*	let chartConfigs = [tempConfig,windConfig]//,tempConfig]

		//Merge in any of our config properties 
		chartConfigs.forEach(config => {
			let chartCombined = $.extend(true,{},defaultConfig,config);
			console.log(chartCombined)
			this.buildChart(chartCombined);
		})		*/

		
/*
		const yAxis = [{ 
				id: 'y-snowfall',
				title: {
					text: 'Snowfall',
					style: {
						color: this._chartProps.wxColors.snowfall,
					}
				},
				labels: {
					format: '{value} in',
					style: {
						color: this._chartProps.wxColors.snowfall,
					}
				},
				//gridLineWidth: 0,
				height: '23%',
				top: '75%',
				offset: 0,
				softMax: 6,
				min: 0,
				endOnTick: false,
        //maxPadding: 0.2
			},{ // QPF
				id: 'y-qpf',
				title: {
					text: 'Liquid Precip',
					style: {
						color: this._chartProps.wxColors.qpf,
					}
				},
				labels: {
					format: '{value} in',
					style: {
						color: this._chartProps.wxColors.qpf,
					}
				},
				//gridLineWidth: 0,
				height: '23%',
				top: '75%',				
				opposite: true,
				offset: 0,
				softMax: 3,
				min: 0,	
				endOnTick: false,
        //maxPadding: 0.2			
			},{ 
				id: 'y-snowlevel',
				labels: {
					format: '{value} ft',
					style: {
						color: this._chartProps.wxColors.snowlevel,
					},
				},
				title: {
					text: 'Snow Level',
					style: {
						color: this._chartProps.wxColors.snowlevel,
					},
				},
				height: '23%',
				top: '50%',
				offset: 0,
				softMax: 8,
				softMin: 5,				
			}, { 
				id: 'y-wind',
				title: {
					text: 'Wind Speed',
					style: {
						color: this._chartProps.wxColors.wind,
					}
				},
				labels: {
					format: '{value} mph',
					style: {
						color: this._chartProps.wxColors.wind,
					}
				},				
				//gridLineWidth: 1,
				height: '23%',
				top: '25%',
				offset: 0,
				softMax: 30,
				softMin: 10,
				min: 0,		
				endOnTick: false,
        //maxPadding: 0.2							
			},{ 
				id: 'y-temperature',
				labels: {
					format: '{value}°F',
					style: {
						color: this._chartProps.wxColors.temperature,
					},
				},
				title: {
					text: 'Temperature',
					style: {
						color: this._chartProps.wxColors.temperature,
					},
				},
				height: '25%',
				top: '0%',
				offset: 0,
				softMax: 40,
				softMin: 10,				
			},  
		]*/

		
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
		
		
			/*function createHighChartSeriesFromAvg(data,type){
		
				let retVal = [];
				console.log(data)
				console.log(type)
				if (type == 'int') { retVal = data.map(l => new Array(l.date.getTime(),parseInt(l.val)) ); }
				else if (type == 'float') { retVal = data.map(l => new Array(l.date.getTime(),parseFloat(l.val)) ); }		
				else { retVal = data.map(l => new Array(l.date.getTime(),l.val)); }
				return retVal;
			}*/
/*
		const series = [{
				name: 'Temperature',
				id: 's-temperature',
				type: 'spline',
				xAxis: 0,
				yAxis: 'y-temperature',			
				data: [],
				label: { enabled: false},
				color: this._chartProps.wxColors.temperature,
				pointInterval: 438e5, // three hours
				tooltip: { 
					valueSuffix: ' °F',
					valueDecimals: 3,
				}
			},{
				name: 'Snow Level',
				id: 's-snowlevel',
				type: 'spline',
				xAxis: 0,
				yAxis: 'y-snowlevel',			
				data: [],
				label: { enabled: false},
				color: this._chartProps.wxColors.snowlevel,
				pointInterval: 438e5, // three hours
				tooltip: { valueSuffix: ' ft' }
			},{
				name: 'Wind Speed',
				id: 's-wind',
				type: 'spline',
				xAxis: 0,
				yAxis: 'y-wind',
				data: [],
				label: { enabled: false},
				color: this._chartProps.wxColors.wind,
				marker: {	enabled: false },
				dashStyle: 'shortdot',
				pointInterval: 438e5, // three hours
				tooltip: { valueSuffix: ' mph'	}
			},{
				name: '12 Hour Snowfall',
				id: 's-snowfall12',
				type: 'column',
				xAxis: 0,
				yAxis: 'y-snowfall',
				data:  [],
				color: this._chartProps.wxColors.snowfall,
				//pointPlacement: .5,
				//pointRange: 60*60*3*1000,
				tooltip: { 
					valueSuffix: ' in',
					xDateFormat: 'Starting %A %m/%d %l%P',
				},			

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
	
			},{
				name: '12 Hour Liquid Precip',
				id: 's-qpf12',
				type: 'column',
				xAxis: 0,
				yAxis: 'y-qpf',
				data: [],
				color: this._chartProps.wxColors.qpf,				
				pointPlacement: .5,
				pointRange: 60*60*12*1000,
				color: this._chartProps.wxColors.qpf,
				opacity: 0.75,
				tooltip: { 
					valueSuffix: ' in',
					xDateFormat: 'Starting %A %m/%d %l%P',
				},
				pointInterval : 432e6,	
				pointPadding: 0,
				groupPadding: 0.05,
			}
		];*/
								/*elevation : location.elevation,
							name : location.name,
							forecast : forecast,
							raw : rawForecast*/
		
			//console.log(locationForecast)
			//Get list of all times for Temperatures
		//	let tempSeries = createHighChartSeriesFromAvg(locationForecast.forecast['temperature'],'int');
//			let windSeries = createHighChartSeriesFromAvg(locationForecast.forecast['wind (mph)'],'int');	
			//let snow12Series = createHighChartSeriesFromAvg(locationForecast.forecast['12 hour snow'],'float');	
			//let qpf12Series = createHighChartSeriesFromAvg(locationForecast.forecast['12 hour qpf'],'float');	
		//	xAxisMax = snow12Series.at(-2)[0];
	//		xAxisMin = snow12Series[1][0];	
		//	console.log(new Date(xAxisMin));
		//	console.log(new Date(xAxisMax));	
		
		
	}

	buildChart(chartConfig){
		var chartDiv = document.createElement('div');
		chartDiv.className = 'forecastChart';
		document.getElementById('forecastGraphicalTabContent').appendChild(chartDiv);
		let chart = Highcharts.chart(chartDiv,chartConfig)
		this._charts.push(chart)
	}





	updateChartData(locationForecast){

		//Get list of all times for Temperatures
		let windSeries = this.createWindSeriesFromAvg(locationForecast.forecast['wind (mph)'],locationForecast.forecast['wind dir']);	
		let windGustSeries = this.createWindSeriesFromAvg(locationForecast.forecast['wind gust (mph)'],locationForecast.forecast['wind dir']);	
		let cloudCoverSeries = this.createCloudCoverSeriesFromAvg(locationForecast.forecast['cloud cover (%)']);	

		let snow12Series = this.createSeriesFromAvg(locationForecast.forecast['12 hour snow'],'float');	
		let qpf12Series = this.createSeriesFromAvg(locationForecast.forecast['12 hour qpf'],'float');	
		let tempSeries = this.createSeriesFromAvg(locationForecast.forecast['temperature'],'int');
		let snowLevelSeries = this.createSeriesFromAvg(locationForecast.forecast['snow level (kft)'],'int');		
		let dateSeries = this.createSeriesFromAvg(locationForecast.forecast['temperature'],'date');	

		let xAxisMin = dateSeries[0];
		let xAxisMax = dateSeries[dateSeries.length-1];

		//let windScales = this._chartWind.options.scales; 
		//let windDatasets = this._chartWind.data.datasets;
		//windDatasets[0].data = windSeries 
		//windDatasets[1].data = windSeries		
				
		this._chart.setTitle({ text: 'Avalanche Weather Forecast Guidance For '+ locationForecast.name });


		
		this._chart.get('s-temperature').setData(tempSeries);
		this._chart.get('s-snowlevel').setData(snowLevelSeries);
		this._chart.get('s-wind').setData(windSeries);
		this._chart.get('s-windgust').setData(windGustSeries);
		this._chart.get('s-snowfall12').setData(snow12Series);
		this._chart.get('s-qpf12').setData(qpf12Series);
		this._chart.get('s-cloudcover').setData(cloudCoverSeries);		
		
		//Update the elevation plot line.  TODO -> Missing elevation error checking.
		this._chart.get('y-snowlevel').plotLinesAndBands[0].options.value = locationForecast.elevation;
		this._chart.get('y-snowlevel').update();

//		this._chart.get('s-temperature').setData(tempSeries);
//		this._chart.get('s-qpf12').setData(qpf12Series);
		//this._chart.get('s-snowlevel').setData(snowLevelSeries);
		//this._chart.get('s-snowfall12').setData(snow12Series);		
		//this._chart.get('s-wind').setData(windSeries);

		//this._chart.series[4].setData(qpf12Series);						
		//windScales.xAxisDayLabels.min = xAxisMin;
		//windScales.xAxisDayLabels.max = xAxisMax;
		//windScales.xAxis1.min = xAxisMin;
		//windScales.xAxis1.max = xAxisMax;
		this._chart.redraw();

		/*
		let tempScales = this._chartTemp.options.scales; 
		let tempDatasets = this._chartWind.data.datasets;
		tempDatasets[0].data = tempSeries 
		tempDatasets[1].data = snowLevelSeries
		tempScales.xAxisDayLabels.min = xAxisMin;
		tempScales.xAxisDayLabels.max = xAxisMax;
		tempScales.xAxis1.min = xAxisMin;
		tempScales.xAxis1.max = xAxisMax;		
		this._chartTemp.update();
  
		this._chartPrecip.data.datasets[0].data = windSeries;
    this._chartPrecip.data.datasets[1].data = windSeries;
		this._chartPrecip.data.datasets[2].data = snow12Series;
		
		this._chartPrecip.data.datasets[4].data = tempSeries;
		this._chartPrecip.data.datasets[5].data = snowLevelSeries;
		this._chartPrecip.options.scales.xAxisDayLabels.min = dateSeries[0];
		this._chartPrecip.options.scales.xAxisDayLabels.max = dateSeries[dateSeries.length-1]
		this._chartPrecip.options.scales.xAxis1.min = dateSeries[0];
		this._chartPrecip.options.scales.xAxis1.max = dateSeries[dateSeries.length-1]	
		this._chartPrecip.update();*/
		
	}


	createSeriesFromAvg(forecastData,type){
		let retVal = [];
		if (type == 'int') { retVal = forecastData.map(l => ({x: l.date.getTime(), y: parseInt(l.val)})); }
		else if (type == 'float') { retVal = forecastData.map(l => ({x: l.date.getTime(), y: parseFloat(l.val)}) ); }		
		else if (type == 'date') { retVal = forecastData.map(l => l.date.getTime()); }		
		else { retVal = forecastData.map(l => ({x: l.date.getTime(),y: l.val})); }
		return retVal;
	}

	createWindSeriesFromAvg(windSpeedData,windDirData){
		function stringDirectionToDegrees(winddir){
			let possibleVals = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
			let index = possibleVals.findIndex(l => l === winddir);
			let degrees = null;
			if (index !== -1) { degrees = index * 22.5; }
			return degrees;
		}	
		function createSvgWindArrow(direction = 0,color = 'red'){
			//let img = new Image();
			//let svg = `<svg xmlns="http://www.w3.org/2000/svg"  transform="rotate(${direction})" height="30" width="30"><text x="50%" y="50%" text-anchor="middle"  fill="${color}">&#10137;</text></svg>`;
			let svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 22 22" width="20" height="20" transform="rotate(${direction})" fill="${color}">
									<circle width="100%" height="100%" fill="#F2F5FF"/>		
									<path d="M 10.996369,21 C 7.665697,17.681044 4.330672,14.363847 1,11.044011 c 2.127567,-0.0018 4.256584,9.09e-4 6.38415,-9.09e-4 0.0044,-3.347113 0.0015,-6.694226 0.0015,-10.041338 2.409113,-0.0026 4.816776,-0.0018 7.225889,-9.09e-4 0.0029,3.347112 0,6.695105 0.0015,10.042218 2.128926,9.09e-4 4.257943,-9.09e-4 6.386961,9.09e-4 C 17.664975,14.362087 14.335754,17.683684 10.996375,21 Z" style="stroke-width:2;stroke:#FFFFFF;stroke-opacity:1;stroke-miterlimit:4;stroke-linejoin:round" />
								</svg>`
			//img.src = "data:image/svg+xml;base64,"+btoa(svg);
			let uri = 'url(data:image/svg+xml;base64,'+btoa(svg)+')';
			return uri
		}		

		let retVal = windSpeedData.map((l,i) => {

			let directionDeg = stringDirectionToDegrees(windDirData[i].val);
			let svgArrow =  createSvgWindArrow(directionDeg,this._chartProps.wxColors.wind);
			return ({
				x: l.date.getTime(), 
				y: parseInt(l.val),
				marker: {
					symbol: svgArrow
				},
				custom: {
					directionS : windDirData[i].val, 
					direction : directionDeg
				}
			})
		});
		return retVal;
	}
	createCloudCoverSeriesFromAvg(cloudCoverData){
		function cloudCoverToColor(pct){ 
			let adjustment = 1.2 //Added an adjustment to force a bit a color;
			let val = (255 - pct).toString(16);
			let hexString = '#'+[val,val,val].join('');
			return hexString;
		}	
		let retVal = cloudCoverData.map((l,i) => {
			return ({
				x: l.date.getTime(), 
				y: 1,
				color: cloudCoverToColor(l.val)
			})
		});
		return retVal;
	}
}
	

/*
		this._chart = Highcharts.chart('forecastChart', {
			chart: { 
				zoomType: 'xy',
				marginBottom: 100,
			},
			plotOptions: {
				//grouping : false
			},		
			title: {
				text: `Avalanche Weather Guidance `, //For `//${locationForecast.name}`,
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
			//	min: xAxisMin,
			//	max: xAxisMax,
				labels: { 
					format: '{value:%m/%d %l%P }'
				}
			}],
			yAxis: yAxis,
			tooltip: {
				shared: true,
				snap: 10,
				xDateFormat: '%A %m/%d %l%P',
			},
			legend: {
				layout: 'horizontal',
				align: 'center',
				//x: -40,
				verticalAlign: 'bottom',
				//y: 0,
				floating: true,
				backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'rgba(255,255,255,0.25)'
			},
			series: series,
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
*/

	/*

		const windData = { 
			datasets: [{
				label: 'Wind (mph)',
				data: [],
				xAxisID : 'xAxis1',
				yAxisID : 'yAxisWind',
				borderColor: '#b06bff',
				backgroundColor: '#b06bff',
				type: 'line',
				fill: false,
				borderWidth : 2,
				pointStyle : function(ctx) {
					return _this.createSvgArrow(ctx.dataset.data[ctx.dataIndex]?.dir,'#b06bff')
				},
			},{
				label: 'Wind Gusts (mph)', // We want this label hidden
				data: [],
				xAxisID : 'xAxis1',
				yAxisID : 'yAxisWind',
				borderColor: '#b06bff',
				backgroundColor: '#b06bff',
				type: 'scatter',
				parsing: {
					yAxisKey: 'gust'
				},
				pointStyle : function(ctx) {
					return _this.createSvgArrow(ctx.dataset.data[ctx.dataIndex]?.dir,'#b06bff')
				},
			}],
		};
		const windScales = {
			xAxis1: {
				axis: 'x',
				grid : { offset: false },
				offset : false,
				ticks: {display:false },

				type: 'timeseries',
				time: {
					unit: 'hour',
					stepSize: 3,
					tooltipFormat: 'ddd, MMM D hA',
				},
			},
			xAxisDayLabels: {
				axis: 'x',
				grid : { 
					offset: false,
					lineWidth : 5,
					borderWidth: 0,
				},
				offset : false,				
				ticks: {display:false },
				type: 'timeseries',
				time: {
					unit: 'day',
					stepSize: 1,
					displayFormats: {
						day: 'dddd, MMM D'
					}
				},
			},
			yAxisWind: {
				axis: 'y',
				text: 'Wind (mph)',
				suggestedMin: 5,
				suggestedMax: 30,
				color: '#b06bff',
				display:true,	
				type: 'linear',
			},								
		};

		const windConfig = {
				type: 'line',
				data: windData,
				options: {	
					plugins: {
						//tooltip : tooltip,
						legend : {
							display : false,
							position: 'top',
						//	legend,
						}
					},
					maintainAspectRatio: false,
					responsive:true,
					scales : windScales
				},
			}
	

		const data = {
			datasets: [{
					label: 'Wind (mph)',
					data: [],
					xAxisID : 'xAxis1',
					borderColor: '#b06bff',
					backgroundColor: '#b06bff',
					type: 'line',
					fill: false,
					borderWidth : 2,
					pointStyle : function(ctx) {
						return _this.createSvgArrow(ctx.dataset.data[ctx.dataIndex]?.dir,'#b06bff')
					},
				},{
					label: 'Wind Gusts (mph)', // We want this label hidden
					data: [],
					xAxisID : 'xAxis1',
					yAxisID : 'yAxisWind',
					borderColor: '#b06bff',
					backgroundColor: '#b06bff',
					type: 'scatter',
					parsing: {
						yAxisKey: 'gust'
					},
					pointStyle : function(ctx) {
						return _this.createSvgArrow(ctx.dataset.data[ctx.dataIndex]?.dir,'#b06bff')
					},
				},{
					label: '12 Hour Snow Amt (in)',
					data : [],
					xAxisID : 'xAxis1',
					yAxisID : 'yAxisSnow',
					borderColor: '#72b8ff',
					backgroundColor: '#72b8ff99',
					fill:true,
					type: 'bar',
					stack: true,
					barPercentage: 1.0,
					categoryPercentage: 1,
					borderWidth: {
						top : 2,
						bottom : 1
					},
					order: 1,					
				},{
					label: '12 Hour Liquid Precip (in)',
					data : [],
					xAxisID : 'xAxis1',
					yAxisID : 'yAxisQPF',
					borderColor: '#8fff87',
					backgroundColor: '#8fff8799',
					type: 'bar',
					stack: true,
					fill: true,
					barPercentage: 1.0,
					categoryPercentage: 1,
					borderWidth: {
						top : 2,
						bottom : 1
					},
				},{
					label: 'Temperature (°F)',
					data: [],
					xAxisID : 'xAxis1',
					yAxisID : 'yAxisTemp',
					borderColor: '#ffd15e',
					backgroundColor: '#ffd15e',
					type: 'line',
					pointStyle : 'circle',
					radius: 4,
				},{
					label: 'Snow Level (kft)',
					data: [],
					xAxisID : 'xAxis1',
					yAxisID : 'yAxisSnowLevel',
					borderColor: '#ff606e',
					backgroundColor: '#ff606e',
					type: 'line',
					pointStyle : 'circle',
					radius: 4,
				}
			]};

		const scales = {
			xAxis1: {
				axis: 'x',
				grid : { offset: false },
				offset : false,				
				type: 'timeseries',
				time: {
					unit: 'hour',
					stepSize: 3,
					tooltipFormat: 'ddd, MMM D hA',
				},
			},
			xAxisDayLabels: {
				axis: 'x',
				grid : { 
					offset: false,
					lineWidth : 5,
					borderWidth: 0,
				},
				offset : false,				
				type: 'timeseries',
				time: {
					unit: 'day',
					stepSize: 1,
					displayFormats: {
						day: 'dddd, MMM D'
					}
				},
			},		
			yAxisWind: {
				axis: 'y',
				text: 'Wind (mph)',
				suggestedMin: -5,
				suggestedMax: 25,
				color: '#b06bff',
				display:false,				
				type: 'linear',
			},
			yAxisSnow: {
				axis: 'y',
				text: 'Snow (in)',
				min: 0,
				suggestedMax: 4,
				display:false,
				color: '#b06bff',	
				type: 'linear',
			},
			yAxisQPF: {
				axis: 'y',
				text: '12 Hour Liquid Precip (in)',
				min: 0,
				suggestedMax: 1,
				display:false,
				color: '#b06bff',	
				type: 'linear',
			},
			yAxisTemp: {
				axis: 'y',
				text: 'Temperature',
				suggestedMin: 0,
				suggestedMax: 30,
				color: '#b06bff',
				display:false,		
				type: 'linear',
			},
			yAxisSnowLevel: {
				axis: 'y',
				text: 'Snow Level (kft)',
				suggestedMin: -5,
				suggestedMax: 4,
				color: '#ff606e',
				display:false,
				type: 'linear',
			},						
		}

		const tooltip = {
			mode: 'index',
			position:'cursor',
			intersect: false,
			filter: function (tooltipItem) {
				return (tooltipItem.parsed.y !== null); 
			},
			callbacks : {
				label : function(context) {
					let label = context.dataset.label || '';
					let retLabel = label + `: `;
					if (label == 'Wind (mph)'){
						if (context.raw.dirS) { retLabel += `${context.raw.dirS}` }
						retLabel+= ` ${context.parsed.y}`
						if (context.raw.gust) { retLabel += ` Gust ${context.raw.gust}`; }
					}
					else if (label == 'Wind Gusts (mph)') { return false; }
					else {
						retLabel += `${context.parsed.y}`;
					}					
					return retLabel; 
				}	
			}
		};

		const legend = {
		
		}

		const config = {
			type: 'line',
			data: data,
			options: {	
				plugins: {
					tooltip : tooltip,
					legend : legend,
				},
				scales : scales,
			},
		};	
		
		//const config2 = Object.assign({},config);	
		config2.data.datasets =  [{
				label: 'Wind (mph)',
				data: [],
				xAxisID : 'xAxis1',
				yAxisID : 'yAxisWind',
				borderColor: '#b06bff',
				backgroundColor: '#b06bff',
				type: 'line',
				fill: false,
				borderWidth : 2,
				pointStyle : function(ctx) {
					return _this.createSvgArrow(ctx.dataset.data[ctx.dataIndex]?.dir,'#b06bff')
				},
			},{
				label: 'Wind Gusts (mph)', // We want this label hidden
				data: [],
				xAxisID : 'xAxis1',
				yAxisID : 'yAxisWind',
				borderColor: '#b06bff',
				backgroundColor: '#b06bff',
				type: 'scatter',
				parsing: {
					yAxisKey: 'gust'
				},
				pointStyle : function(ctx) {
					return _this.createSvgArrow(ctx.dataset.data[ctx.dataIndex]?.dir,'#b06bff')
				},
			}]*/

		/*config2.data.datasets = [{
			label: 'Wind (mph)',
			data: [],
			xAxisID : 'xAxis1',
			xAxisID : 'yAxisWind',
			borderColor: '#b06bff',
			backgroundColor: '#b06bff',
			type: 'line',
			fill: false,
			borderWidth : 2,
			pointStyle : function(ctx) {
				return _this.createSvgArrow(ctx.dataset.data[ctx.dataIndex]?.dir,'#b06bff')
			},
		},{
			label: 'Wind Gusts (mph)', // We want this label hidden
			data: [],
			xAxisID : 'xAxis1',
			yAxisID : 'yAxisWind',
			borderColor: '#b06bff',
			backgroundColor: '#b06bff',
			type: 'scatter',
			parsing: { yAxisKey: 'gust'	},
			pointStyle : function(ctx) {
				return _this.createSvgArrow(ctx.dataset.data[ctx.dataIndex]?.dir,'#b06bff')
			},
		}]
		//config2.data = windData;

		let ctxPrecip = document.getElementById('chartPrecip').getContext('2d');
		this._chartPrecip = new Chart(ctxPrecip, config);

		let ctxWind = document.getElementById('chartWind').getContext('2d');
		this._chartWind = new Chart(ctxWind, windConfig);
		*/		

