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
				qpf: '#27e85e',
				snowfall: '#3b8ddb',
				wind: Highcharts.getOptions().colors[5],
				temperature: Highcharts.getOptions().colors[3],
				snowlevel: '#00b774',
				cloudcover: 'black',
			},
			axisHeights : [120,120,120,30],
			axisTops : [105,255,405,560],
			chartBottomPadding: 80,
		};

		Highcharts.setOptions({global : { useUTC: false } });

	}
	initializeCharts() {
		const _this = this;

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
			height: this._chartProps.axisHeights[0],
			top: this._chartProps.axisTops[0],
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
			softMax: 14,
			softMin: 8,	
			lineWidth: 2,
			height: this._chartProps.axisHeights[0],
			top: this._chartProps.axisTops[0],
			plotLines: [{
				id : 'l-elevation-low',
				color: this._chartProps.wxColors.snowlevel,
				dashStyle: 'Dash',
				value: -20,
				zIndex: 5,
				label: {
					align: 'right',
					x: 12,
					y: 3,
					style: { 
						color: this._chartProps.wxColors.snowlevel,
						//fontWeight: 'bold',
						paintOrder: 'stroke',
						stroke:'#FFFFFF',
						strokeWidth:'5px'
					},
					formatter: function () { return (this.options.value); },
				}
			},{
				id : 'l-elevation-high',
				color: this._chartProps.wxColors.snowlevel,
				dashStyle: 'Dash',
				value: -20,
				zIndex: 5,			
				label: {
					align: 'right',
					x: 12,
					y: 3,
					style: { 
						color: this._chartProps.wxColors.snowlevel,
						//fontWeight: 'bold',
						paintOrder: 'stroke',
						stroke:'#FFFFFF',
						strokeWidth:'5px'
					},
					formatter: function () { return (this.options.value); },
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
			height: this._chartProps.axisHeights[1],
			top: this._chartProps.axisTops[1],		
		},{
			id: 'y-windgust',
			labels: {	enabled: false },
			title: { enabled: false },
			offset: 0,			
			opposite: true,
			linkedTo: 2,
			gridLineWidth: 0,			
			lineWidth: 2,
			height: this._chartProps.axisHeights[1],
			top: this._chartProps.axisTops[1],		
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
			height: this._chartProps.axisHeights[2],
			top: this._chartProps.axisTops[2],
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
			height: this._chartProps.axisHeights[2],
			top: this._chartProps.axisTops[2],
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
			height: this._chartProps.axisHeights[3],
			top: this._chartProps.axisTops[3],	
		},];

		
		const xAxis = [{
			id : 'x-main',
			crosshair: true,
			gridLineWidth: 0,
			type : 'datetime',
			minPadding: 0,
			maxPadding: 0,	
			tickInterval: 216e5,
			//tickLength: 10,
			labels: { 
				enabled: true,
				format: '{value: %a <br>%l%P }'
			},
			lineWidth: 2,
			crosshair: {
				width: 36,
				color: '#33333310'
			},
		},{
			type : 'datetime',
			linkedTo: 0,
			opposite: false,
			tickInterval: 864e5,
			labels: { 
				enabled: true,
				format: '{value:%A, %B %e}'
			},
			lineWidth: 2,	
			minPadding: 0,
			maxPadding: 0,	
			opposite: true,			
		}]

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
			type: 'areaspline',
			yAxis: 'y-snowlevel',
			xAxis : 0,			
			data: [],
			color: this._chartProps.wxColors.snowlevel,
			fillOpacity: 0.2,
		//pointInterval: 438e5, // three hours
			tooltip: { valueSuffix: ' kft' },
			zones: [{
				value: 25,
				fillColor: 'rgba(0,0,0,0)'
		}]				
		},{
			name: 'Wind Speed',
			id : 's-wind',
			type: 'spline',
			yAxis: 'y-wind',
			xAxis : 0,			
			data: [],
			color: this._chartProps.wxColors.wind,
			//pointInterval: 438e5, // three hours
			tooltip: { 
				valuePrefix: '{point.custom.directionS} ',
				valueSuffix: ' mph',
			}
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
			tooltip: { 
				valuePrefix: '{point.custom.directionS} ',				
				valueSuffix: ' mph' 
			}
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
			},
			grouping:false,
			groupPadding: 0,
			pointPadding: 0,
			borderWidth: 0,			
			opacity: 0.60,
			//Add in some lines at the top of the columns to make them stand out.
			dataLabels: {
				enabled: true,
				useHTML: true,
				align: 'left',
				padding: 0,
				verticalAlign:'bottom',
				allowOverlap: true,
				formatter: function() {
					let width = this.point.pointWidth + 1;
					if (this.y !== 0) {
						return `<div width="100%" style="width:${width}; border-bottom:2px solid ${_this._chartProps.wxColors.snowfall}"">&nbsp;</div>`; 
					}
				},
				y: 0
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
			tooltip: { 
				valueSuffix: ' in',
			},
			opacity: 0.60,
			grouping:false,
			groupPadding: 0,
			pointPadding: 0,			
			borderWidth: 0,
			//Add in some lines at the top of the columns to make them stand out.
			dataLabels: {
				enabled: true,
				useHTML: true,
				align: 'left',
				padding: 0,
				verticalAlign:'bottom',
				allowOverlap: true,
				formatter: function() {
					let width = this.point.pointWidth + 1;
					if (this.y !== 0) {
						return `<div width="100%" style="width:${width}; border-bottom:2px solid ${_this._chartProps.wxColors.qpf}"">&nbsp;</div>`; 
					}
				},
				y: 0
			}
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
			tooltip: { 
				pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.custom.pct}</b> %<br/>',
			}
			
		}]

		const chartConfig = {
			title: {
				text: '',
				align: 'left'
			},
			credits: { enabled: false },
			legend: {	enabled: false },
			subtitle: {
				text: '',
				align: 'left'
			},
			chart: {
				marginLeft: 100, // Keep all charts left aligned
				marginRight: 100,
				spacingTop: 20,
				spacingBottom: 20,
				height: this._chartProps.axisTops[this._chartProps.axisTops.length - 1] + this._chartProps.axisHeights[this._chartProps.axisHeights.length - 1] + this._chartProps.chartBottomPadding,
			},
			xAxis: xAxis,
			tooltip: {
				xDateFormat: '%A %m/%d %l%P',
				shared:true,
				followPointer: true,
				followTouchMove: true,
				useHTML: true,
				padding:0,
				//stickOnContact: true,
			},
			series : series,
			yAxis : yAxis,	
		}


		let chartDiv = document.getElementById('forecastChart');
		this._chart = Highcharts.chart(chartDiv,chartConfig);
		
	}

	buildChart(chartConfig){
		var chartDiv = document.createElement('div');
		chartDiv.className = 'forecastChart';
		document.getElementById('forecastGraphicalTabContent').appendChild(chartDiv);
		let chart = Highcharts.chart(chartDiv,chartConfig)
		this._charts.push(chart)
	}





	updateChartData(locationForecast,productTime){

		//Get list of all times for Temperatures
		let windSeries = this.createWindSeriesFromAvg(locationForecast.forecast['wind (mph)'],locationForecast.forecast['wind dir']);	
		let windGustSeries = this.createWindSeriesFromAvg(locationForecast.forecast['wind gust (mph)'],locationForecast.forecast['wind dir']);	
		let cloudCoverSeries = this.createCloudCoverSeriesFromAvg(locationForecast.forecast['cloud cover (%)']);	

		
		let snow12Series = this.createSeriesFromAvg(locationForecast.forecast['12 hour snow'],'float');	
		let qpf12Series = this.createSeriesFromAvg(locationForecast.forecast['12 hour qpf'],'float');	
		let tempSeries = this.createSeriesFromAvg(locationForecast.forecast['temperature'],'int');
		
		/*let dateSeries = this.createSeriesFromAvg(locationForecast.forecast['temperature'],'date');	

		let xAxisMin = dateSeries[0];
		let xAxisMax = dateSeries[dateSeries.length-1];*/
				
		this._chart.get('s-temperature').setData(tempSeries);
		this._chart.get('s-wind').setData(windSeries);
		this._chart.get('s-windgust').setData(windGustSeries);
		this._chart.get('s-snowfall12').setData(snow12Series);
		this._chart.get('s-qpf12').setData(qpf12Series);
		this._chart.get('s-cloudcover').setData(cloudCoverSeries);		

		


		let elevation = locationForecast.elevation;
		
		//If we have snow level in our product, edit some of the chart to include things like elevation or elevation ranges.
		if (locationForecast.forecast.hasOwnProperty('snow level (kft)')) { 
			let snowLevelSeries = this.createSeriesFromAvg(locationForecast.forecast['snow level (kft)'],'float');	
			this._chart.get('s-snowlevel').setData(snowLevelSeries);
		
			//Hide all the plot lines and zones first, and then turn them on if they have a value.
			//Set our plot line values.  Our chart is in KFT, so convert to KFT.
			let zoneLevelVal = 25;
			let plotLineHighVal = -20;
			let plotLineLowVal = -20;

			if (elevation.high) { 
				plotLineHighVal = elevation.high;
				zoneLevelVal = elevation.high;
			}
			if (elevation.low) {
				plotLineLowVal = elevation.low;
				zoneLevelVal = elevation.low;
			}
			
			//Change the values of our plot lines
			this._chart.get('y-snowlevel').plotLinesAndBands[0].options.value = plotLineHighVal;
			this._chart.get('y-snowlevel').plotLinesAndBands[1].options.value = plotLineLowVal;	
			//Update the color highlighting when snow level is over the elevation
			this._chart.get('s-snowlevel').zones[0].value = zoneLevelVal;
		}
		//Snow Level is optional in the AVG and ER doesn't do it.  Hide it if not available, but don't remove the Y axis as we want the border line still there.
		else { 
			this._chart.get('y-snowlevel').userOptions.title.text = '';
		}

		//Update the crosshair to match the actual width of the columns
		this._chart.get('x-main').crosshair.width = this._chart.get('s-snowfall12').barW;

		//Update the chart
		this._chart.get('y-snowlevel').update();			


	
		//Set our title text for the chart
		let elevationTitleText = (elevation.text !== '') ? `(${elevation.text})` : '';
		this._chart.setTitle({ text: `Forecast Guidance For ${locationForecast.name} ${elevationTitleText}` });
		
		//Update the subtitle
		this._chart.setTitle(null, { text: `Source: National Weather Service &nbsp;&nbsp;&nbsp;&nbsp; Issued: ${productTime}` });		

		
		this._chart.redraw();

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
			let svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 22 22" width="20" height="20" style="transform:rotate(${direction}deg)" fill="${color}">
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
		function cloudCoverToGrayscale(pct){ 
			let val = (255 - pct).toString(16)
			let hexString = '#'+[val,val,val].join('');
			return hexString;
		}	
		function cloudCoverToColor(pct){
			//let gradient = ['#009aff', '#4da4ff','#6fafff','#89baff','#a0c5ff','#b4d0ff','#c8dcff','#dbe7ff','#edf3ff','#ffffff','#ffffff','#eaeaea','#d6d6d6','#c2c2c2','#aeaeae','#9a9a9a','#888888','#757575','#636363','#525252','#414141']
			//let gradient = ['#5ca6ff', '#64a7fb', '#6ba8f8', '#72a8f4', '#78a9f1', '#7eaaed', '#83abe9', '#88ace6', '#8dace2', '#91addf', '#95aedb', '#99afd8', '#9db0d4', '#a1b1d0', '#a4b2cd', '#a8b2c9', '#abb3c6', '#aeb4c2', '#b1b5be', '#b4b6bb', '#b7b7b7'];
			let gradient = ['#ffffff', '#f5f5f5', '#ececec', '#e2e2e2', '#d8d8d8', '#cfcfcf', '#c5c5c5', '#bcbcbc', '#b3b3b3', '#aaaaaa', '#a1a1a1', '#989898', '#8f8f8f', '#868686', '#7e7e7e', '#757575', '#6d6d6d', '#646464', '#5c5c5c', '#545454', '#4c4c4c' ]
			let index = (pct / 5); 
			return gradient[index];
		}
		let retVal = cloudCoverData.map((l,i) => {

			let yVal = (isNaN(parseInt(l.val))) ? null : 1;
			return ({
				x: l.date.getTime(), 
				y: yVal,
				custom: {
					pct : l.val
				},
				color: cloudCoverToColor(l.val)
			})
		});
		return retVal;
	}
}
	