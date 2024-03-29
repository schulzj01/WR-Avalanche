class ChartManager  {

	constructor(timePeriod) {
		this._chart = null;
		this._timePeriod = timePeriod;
		this._chartProps;
		this.configureHighcharts();
		this.initializeCharts();


	}

	configureHighcharts(){
		//Set up our configuration options;
		this._chartProps = {
			wxColors : {
				qpf: '#27e85e',
				snowfall: '#2e6ca5',
				snowfallhigh: '#3b8ddb',
				snowfalllow: '#74afe8',
				wind: Highcharts.getOptions().colors[5],
				temperature: Highcharts.getOptions().colors[3],
				snowlevel: '#00b774',
				cloudcover: 'black',
			},
			axisHeights : [120,120,120,120,30],
			axisTops : [105,255,405,555,710],
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
			softMax: 45,
			softMin: 0,
			lineWidth: 2,
			height: this._chartProps.axisHeights[0],
			top: this._chartProps.axisTops[0],
			plotLines: [{
				id : 'l-temperature-low',
				color: this._chartProps.wxColors.temperature,
				dashStyle: 'Dash',
				value: 32,
				zIndex: 5,
				label: {
					align: 'left',
					x: -7,
					y: 3,
					style: {
						color: this._chartProps.wxColors.temperature,
						//fontWeight: 'bold',
						paintOrder: 'stroke',
						stroke:'#FFFFFF',
						strokeWidth:'5px'
					},
					formatter: function () { return (this.options.value); },
				}
			}]
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
			offset: 0,
			softMax: 1,
			min: 0,
			lineWidth: 2,
			height: this._chartProps.axisHeights[3],
			top: this._chartProps.axisTops[3],
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
			max: 2,
			offset:0,
			min: 0,
			lineWidth: 0,
			height: this._chartProps.axisHeights[4],
			top: this._chartProps.axisTops[4],
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
				format: '{value:%A, %b %e}'
			},
			lineWidth: 2,
			minPadding: 0,
			maxPadding: 0,
			opposite: true,
		}]

		const series = [{
			name: 'Temperature',
			id : 's-temperature',
			type: 'areaspline',
			yAxis: 'y-temperature',
			xAxis : 0,
			data: [],
			color: this._chartProps.wxColors.temperature,
			//pointInterval: 438e5, // three hours
			tooltip: { valueSuffix: ' °F' },
			fillOpacity: 0.15,
			zones: [{
				value: 32,
				fillColor: 'rgba(0,0,0,0)'
			}]
		},{
			name: 'Snow Level',
			id: 's-snowlevel',
			type: 'areaspline',
			yAxis: 'y-snowlevel',
			xAxis : 0,
			data: [],
			color: this._chartProps.wxColors.snowlevel,
			fillOpacity: 0.15,
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
			yAxis: 'y-wind',
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
			name: '12 Hour Snowfall Amount',
			id: 's-snowfallmulti',
			type: 'line',
			yAxis: 'y-snowfall',
			xAxis : 0,
			data:  [],
			color: this._chartProps.wxColors.snowfall,
			tooltip: {
				valueSuffix: ' in',
			},
			lineWidth: 0,
			connectNulls: true,
			//stacking: 'normal',
			marker: {
				enabled: false,
				states: {
					hover: { enabled: false }
				}
			},
			states: {
				hover: { enabled: false }
			},
		},{
			name: '12 Hour Snowfall - High End',
			id: 's-snowfallhigh12',
			type: 'line',
			yAxis: 'y-snowfall',
			xAxis : 0,
			data:  [],
			color: this._chartProps.wxColors.snowfall,
			tooltip: {
				valueSuffix: ' in',
			},
			lineWidth: 0,
			connectNulls: true,
			//stacking: 'normal',
			marker: {
				enabled: false,
				states: {
					hover: { enabled: false }
				}
			},
			states: {
				hover: { enabled: false }
			},
		},{
			name: '12 Hour Snowfall - High End',
			id: 's-snowfallhigh12',
			type: 'line',
			yAxis: 'y-snowfall',
			xAxis : 0,
			data:  [],
			color: this._chartProps.wxColors.snowfall,
			tooltip: {
				valueSuffix: ' in',
			},
			lineWidth: 0,
			connectNulls: true,
			//stacking: 'normal',
			marker: {
				enabled: false,
				states: {
					hover: { enabled: false }
				}
			},
			states: {
				hover: { enabled: false }
			},
		},{
			name: 'Snow Accum Forecast',
			id: 's-snowaccumfcst',
			type: 'line',
			yAxis: 'y-snowfall',
			xAxis : 0,
			data:  [],
			color: this._chartProps.wxColors.snowfall,
			tooltip: {
				valueSuffix: ' in',
			},
			lineWidth: 3,
			connectNulls: true,
			//We use a huge enabled threshold rather than disabling markers otherwise HC will hide our datalabels on mouseover
			marker: { enabledThreshold: 20 },
			/*marker: {
				enabled: false,
				states: {
					hover: { enabled: false }
				}
			},*/
			states: {
				hover: { enabled: false }
			},
			dataLabels: {
				enabled: true,
				padding:0,
				allowOverlap: true,
				useHTML: true,
				crop: false,
				color: '#666666',
				overflow: 'allow',
				verticalAlign: 'top',
			//	formatter: function(){
			//		console.log(this.point)
			//		let pct = parseInt(this.point.options.custom.pct);
/*					let icon = 'missing'
					if (pct < 20) { icon = 'sunny'; }
					else if (pct < 40) { icon = 'partly'; }
					else if (pct < 70) { icon = 'mostly'; }
					else if (pct <= 100) { icon = 'cloudy'; }
					return `<div><img width="30" height="30" src="/images/wrh/avalanche/${icon}.png"></img></div>`*/
			//	},
				//y: 0
			},
		},{
			name: 'Snowfall Accum - High End',
			id: 's-snowaccumhighranges',
			type: 'arearange',
			yAxis: 'y-snowfall',
			xAxis : 0,
			data:  [],
			color: this._chartProps.wxColors.snowfallhigh,
			tooltip: {
				valueSuffix: ' in',
			},
			fillOpacity: 0.5,
			lineWidth: 2,
			connectNulls: true,
			marker: {
				enabled: false,
				states: {
					hover: { enabled: false }
				}
			},
			tooltip: {
				//valuePrefix: '{point.low} ',
				//valueSuffix: ' mph',
				//pointFormat:
				pointFormatter: function (point) {
					let high = this.options.high;
					let low = this.series.chart.get('s-snowaccumlowranges').data[this.index].options.low;
					return `<span style="color:${this.color}">●</span> Snow Accum Range: <b>${low} - ${high}</b> in<br/>`;
				}

				/*formatter: function (tooltip) {
					console.log(this.point)
					if (this.point.isNull) {
							return 'Null';
					}
					// If not null, use the default formatter
					return tooltip.defaultFormatter.call(this, tooltip);
			}*/
			}
	},{
			name: 'Snowfall Accum - Low End',
			id: 's-snowaccumlowranges',
			type: 'arearange',
			yAxis: 'y-snowfall',
			xAxis : 0,
			data:  [],
			color: this._chartProps.wxColors.snowfallhigh,
			tooltip: {
				valueSuffix: ' in',
			},
			fillOpacity: 0.2,
			lineWidth: 2,
			connectNulls: true,
			marker: {
				enabled: false,
				states: {
					hover: { enabled: false }
				}
			},
			tooltip: {
				pointFormat: ''
			}
	},{
		name: '12 Hour Liquid Precip Total',
		id: 's-qpfmulti',
		type: 'line',
		yAxis: 'y-qpf',
		xAxis : 0,
		data: [],
		color: this._chartProps.wxColors.qpf,
		tooltip: {
			valueSuffix: ' in',
		},
		lineWidth: 0,
		connectNulls: true,
		marker: {
			enabled: false,
			states: {
				hover: { enabled: false }
			}
		},
		states: {
			hover: { enabled: false }
		},
		fillOpacity: 0.30,
	},{
			name: 'Liquid Precip Accum',
			id: 's-qpfaccummulti',
			type: 'area',
			yAxis: 'y-qpf',
			xAxis : 0,
			data: [],
			color: this._chartProps.wxColors.qpf,
			tooltip: {
				valueSuffix: ' in',
			},
			lineWidth: 3,
			connectNulls: true,
			//We use a huge enabled threshold rather than disabling markers otherwise HC will hide our datalabels on mouseover
			marker: { enabledThreshold: 20 },
			/*marker: {
				enabled: false,
				states: {
					//hover: { enabled: false }
				}
			},*/
			states: {
				hover: { enabled: false }
			},
			fillOpacity: 0.30,
			dataLabels: {
				enabled: true,
				padding:0,
				allowOverlap: true,
				useHTML: true,
				crop: false,
				color: '#666666',
				overflow: 'allow',
				verticalAlign: 'top',
			//	formatter: function(){
			//		console.log(this.point)
			//		let pct = parseInt(this.point.options.custom.pct);
/*					let icon = 'missing'
					if (pct < 20) { icon = 'sunny'; }
					else if (pct < 40) { icon = 'partly'; }
					else if (pct < 70) { icon = 'mostly'; }
					else if (pct <= 100) { icon = 'cloudy'; }
					return `<div><img width="30" height="30" src="/images/wrh/avalanche/${icon}.png"></img></div>`*/
			//	},
				//y: 0
			},
		},{
			name: 'Cloud Cover',
			id: 's-cloudcover',
			type: 'line',
			yAxis: 'y-cloudcover',
			xAxis : 0,
			data: [],
			states: {
				hover: { enabled: false }
			},
			lineWidth: 0,
			borderWidth: 0,
			borderColor: 'lightgray',
			groupPadding: 0,
			pointPadding: 0,
			dataLabels: {
				enabled: true,
				padding:0,
				allowOverlap: true,
				useHTML: true,
				crop: false,
				overflow: 'allow',
				verticalAlign: 'middle',
				formatter: function(){
					let pct = parseInt(this.point.options.custom.pct);
					let icon = 'missing'
					if (pct < 20) { icon = 'sunny'; }
					else if (pct < 40) { icon = 'partly'; }
					else if (pct < 70) { icon = 'mostly'; }
					else if (pct <= 100) { icon = 'cloudy'; }
					return `<div><img width="30" height="30" src="/images/wrh/avalanche/${icon}.png"></img></div>`
				},
				//y: 0
			},
			/*marker: {
				enabled: false,
				states: {
					hover: {
						enabled: false,
					}
				}
			},*/
			tooltip: {
				pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.custom.pct}</b> %<br/>',
			}
		}]

		const chartConfig = {
			/*time: { TODO : Set the timezone of the office in here once we switch to the API. https://api.highcharts.com/class-reference/Highcharts.Time#dateFormat
        timezone: 'Europe/London'
    	}*/
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
				backgroundColor: '#FFFFFF'
				//stickOnContact: true,
			},
			series : series,
			yAxis : yAxis,
		}


		let chartDiv = document.getElementById(`forecastChart${this._timePeriod}`);
		this._chart = Highcharts.chart(chartDiv,chartConfig);

	}

	buildChart(chartConfig){
		var chartDiv = document.createElement('div');
		chartDiv.className = `forecastChart${this._timePeriod}`;
		document.getElementById('forecastGraphicalTabContent').appendChild(chartDiv);
		let chart = Highcharts.chart(chartDiv,chartConfig)
		this._charts.push(chart)
	}





	updateChartData(locationForecast,productTime){
		let forecast = locationForecast.forecastTimeGroups[this._timePeriod].forecast;

		//Get list of all times for Temperatures
		let windSeries = this.createWindSeriesFromAvg(forecast['wind (mph)'],forecast['wind dir']);
		let windGustSeries = this.createWindSeriesFromAvg(forecast['wind gust (mph)'],forecast['wind dir']);
		let cloudCoverSeries = this.createCloudCoverSeriesFromAvg(forecast['cloud cover (%)']);
		let tempSeries = this.createSeriesFromAvg(forecast['temperature'],'int');

		let forecastSnow = null;
		let forecastQpf = null;

		if (forecast.hasOwnProperty('6 hour snow')) {
			forecastSnow = forecast['6 hour snow'];
			//Change our chart from 12 to 6 hours.
			this._chart.get('s-snowfallmulti').name = this._chart.get('s-snowfallmulti').name.replace('12','6')
		}
		else { forecastSnow = forecast['12 hour snow'] }

		if (forecast.hasOwnProperty('6 hour qpf')) {
			forecastQpf = forecast['6 hour qpf'];
			this._chart.get('s-qpfmulti').name = this._chart.get('s-qpfmulti').name.replace('12','6')
		}
		else { forecastQpf = forecast['12 hour qpf'] }


		let snowMultiSeries = this.createSeriesFromAvg(forecastSnow,'float',1,'multiVal');
		let qpfMultiSeries = this.createSeriesFromAvg(forecastQpf,'float',2,'multiVal');
		let snowAccumMultiSeries = this.createSeriesFromAvg(forecastSnow,'float',1,'accum')
		let qpfAccumMultiSeries = this.createSeriesFromAvg(forecastQpf,'float',2,'accum');




		if (forecast.hasOwnProperty('low end snow')) {
			let snowLowAccumSeries = this.createSeriesFromAvg(forecast['low end snow'],'float',1,'accum')
			let snowRangeAccumSeries = [];
			for (let i=0; i<snowLowAccumSeries.length; i++){
				snowRangeAccumSeries.push({
					low : snowLowAccumSeries[i].y,
					high : snowAccumMultiSeries[i].y,
					x : snowLowAccumSeries[i].x
				})
			}
			this._chart.get('s-snowaccumlowranges').setData(snowRangeAccumSeries);
		}
		if (forecast.hasOwnProperty('high end snow')) {
			let snowHighAccumSeries = this.createSeriesFromAvg(forecast['high end snow'],'float',1,'accum')
			let snowRangeAccumSeries = [];
			for (let i=0; i<snowHighAccumSeries.length; i++){
				snowRangeAccumSeries.push({
					low : snowAccumMultiSeries[i].y,
					high : snowHighAccumSeries[i].y,
					x : snowHighAccumSeries[i].x
				})
			}

			this._chart.get('s-snowaccumhighranges').setData(snowRangeAccumSeries);
		}


		/*let dateSeries = this.createSeriesFromAvg(forecast['temperature'],'date');

		let xAxisMin = dateSeries[0];
		let xAxisMax = dateSeries[dateSeries.length-1];*/

		this._chart.get('s-temperature').setData(tempSeries);
		this._chart.get('s-wind').setData(windSeries);
		this._chart.get('s-windgust').setData(windGustSeries);
		this._chart.get('s-snowfallmulti').setData(snowMultiSeries);
		this._chart.get('s-snowaccumfcst').setData(snowAccumMultiSeries);
		this._chart.get('s-qpfaccummulti').setData(qpfAccumMultiSeries);
		this._chart.get('s-qpfmulti').setData(qpfMultiSeries);
		this._chart.get('s-cloudcover').setData(cloudCoverSeries);


		let elevation = locationForecast.elevation;
		//If we have snow level in our product, edit some of the chart to include things like elevation or elevation ranges.
		if (forecast.hasOwnProperty('snow level (kft)')) {
			let snowLevelSeries = this.createSeriesFromAvg(forecast['snow level (kft)'],'float');
			this._chart.get('s-snowlevel').setData(snowLevelSeries);

			//Hide all the plot lines and zones first, and then turn them on if they have a value.
			//Set our plot line values.  Our chart is in KFT, so convert to KFT.
			let zoneLevelVal = 25;
			let plotLineHighVal = -20;
			let plotLineLowVal = -20;
			let plotYAxisMax = 16;

			if (elevation.high) {
				plotLineHighVal = elevation.high.toFixed(1);
				zoneLevelVal = elevation.high.toFixed(1);
			}
			if (elevation.low) {
				plotLineLowVal = elevation.low.toFixed(1);
				zoneLevelVal = elevation.low.toFixed(1);
			}
			if (elevation.max) {
				plotYAxisMax = Math.ceil(elevation.max.toFixed(1));
			}

			//Change the values of our plot lines
			this._chart.get('y-snowlevel').plotLinesAndBands[0].options.value = plotLineHighVal;
			this._chart.get('y-snowlevel').plotLinesAndBands[1].options.value = plotLineLowVal;

			//Update our snow level y-axis to 1k more than the rounded max elevation.
			this._chart.get('y-snowlevel').userOptions.softMax = plotYAxisMax;

			//Update the color highlighting when snow level is over the elevation
			this._chart.get('s-snowlevel').zones[0].value = zoneLevelVal;
		}
		//Snow Level is optional in the AVG and ER doesn't do it.  Hide it if not available, but don't remove the Y axis as we want the border line still there.
		else {
			this._chart.get('y-snowlevel').userOptions.title.text = '';
		}

		//Update the crosshair to match the actual width of the columns
		//this._chart.get('x-main').crosshair.width = this._chart.get('s-cloudcover').barW;

		//Update the chart
		this._chart.get('y-snowlevel').update();



		//Set our title text for the chart
		let elevationTitleText = (elevation.text !== '') ? `(${elevation.text})` : '';
		this._chart.setTitle({ text: `Forecast Guidance For ${locationForecast.name} ${elevationTitleText}` });

		//Update the subtitle
		this._chart.setTitle(null, { text: `Source: National Weather Service &nbsp;&nbsp;&nbsp;&nbsp; Issued: ${productTime}` });


		this._chart.redraw();

	}

	createSeriesFromAvg(forecastData,type,precision = 1,key = 'val'){
		let retVal = [];
		if (type == 'int') { retVal = forecastData.map(l => ({x: l.date.getTime(), y: parseInt(l[key])})); }
		else if (type == 'float') { retVal = forecastData.map(l => ({x: l.date.getTime(), y: Number(parseFloat(l[key]).toFixed(precision)) })); }
		else if (type == 'date') { retVal = forecastData.map(l => l.date.getTime()); }
		else { retVal = forecastData.map(l => ({x: l.date.getTime(),y: l[key]})); }
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
