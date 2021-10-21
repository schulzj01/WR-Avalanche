class ChartManager  {

	constructor() {
		this._chartPrecip;
		this._chartWind;
		this._chartTemp;
		this.configureChartJs();
		this.initializeCharts();
	}

	configureChartJs(){
		// Add mouse overcursor functionality to Chart.js
		Chart.Tooltip.positioners.cursor = function(chartElements, coordinates) {
			return coordinates;
		}
	}
	initializeCharts() {
		const _this = this;
		

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
	
		/*
			scales : {
				yAxisWind: {
					axis: 'y',
					text: 'Wind (mph)',
					suggestedMin: 0,
					suggestedMax: 25,
					color: '#b06bff',
					display:false,			
					type: 'linear',
				},
			},
			options: {
				maintainAspectRatio: false,
				responsive:true,
				plugins: {
					//tooltip : tooltip,
//					legend : legend,
				},				
			}
		}*/

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
		
	/*	//const config2 = Object.assign({},config);	
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
		}]*/
		//config2.data = windData;

		let ctxPrecip = document.getElementById('chartPrecip').getContext('2d');
		this._chartPrecip = new Chart(ctxPrecip, config);

		let ctxWind = document.getElementById('chartWind').getContext('2d');
		this._chartWind = new Chart(ctxWind, windConfig);
	}

	updateChartData(locationForecast){
		//Get list of all times for Temperatures
		let windSeries = this.createWindSeriesFromAvg(locationForecast.forecast['wind (mph)'],locationForecast.forecast['wind gust (mph)'],locationForecast.forecast['wind dir']);	
		let snow12Series = this.createSeriesFromAvg(locationForecast.forecast['12 hour snow'],'float');	
		let qpf12Series = this.createSeriesFromAvg(locationForecast.forecast['12 hour qpf'],'float');	
		let tempSeries = this.createSeriesFromAvg(locationForecast.forecast['temperature'],'int');
		let snowLevelSeries = this.createSeriesFromAvg(locationForecast.forecast['snow level (kft)'],'int');		
		let dateSeries = this.createSeriesFromAvg(locationForecast.forecast['temperature'],'date');	

		let xAxisMin = dateSeries[0];
		let xAxisMax = dateSeries[dateSeries.length-1];

		let windScales = this._chartWind.options.scales; 
		let windDatasets = this._chartWind.data.datasets;
		windDatasets[0].data = windSeries 
		windDatasets[1].data = windSeries		
		windScales.xAxisDayLabels.min = xAxisMin;
		windScales.xAxisDayLabels.max = xAxisMax;
		windScales.xAxis1.min = xAxisMin;
		windScales.xAxis1.max = xAxisMax;
		this._chartWind.update();

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
		this._chartPrecip.data.datasets[3].data = qpf12Series;
		this._chartPrecip.data.datasets[4].data = tempSeries;
		this._chartPrecip.data.datasets[5].data = snowLevelSeries;
		this._chartPrecip.options.scales.xAxisDayLabels.min = dateSeries[0];
		this._chartPrecip.options.scales.xAxisDayLabels.max = dateSeries[dateSeries.length-1]
		this._chartPrecip.options.scales.xAxis1.min = dateSeries[0];
		this._chartPrecip.options.scales.xAxis1.max = dateSeries[dateSeries.length-1]	
		this._chartPrecip.update();

		
	}


	createSvgArrow(direction = 0,color = 'red'){
		let img = new Image();
		//let svg = `<svg xmlns="http://www.w3.org/2000/svg"  transform="rotate(${direction})" height="30" width="30"><text x="50%" y="50%" text-anchor="middle"  fill="${color}">&#10137;</text></svg>`;
		let svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 22 22" width="20" height="20" transform="rotate(${direction})" fill="${color}">
		            <circle width="100%" height="100%" fill="#F2F5FF"/>		
		            <path d="M 10.996369,21 C 7.665697,17.681044 4.330672,14.363847 1,11.044011 c 2.127567,-0.0018 4.256584,9.09e-4 6.38415,-9.09e-4 0.0044,-3.347113 0.0015,-6.694226 0.0015,-10.041338 2.409113,-0.0026 4.816776,-0.0018 7.225889,-9.09e-4 0.0029,3.347112 0,6.695105 0.0015,10.042218 2.128926,9.09e-4 4.257943,-9.09e-4 6.386961,9.09e-4 C 17.664975,14.362087 14.335754,17.683684 10.996375,21 Z" style="stroke-width:3;stroke:#F2F5FF;stroke-opacity:1;stroke-miterlimit:4;stroke-linejoin:round" />
		          </svg>`
		img.src = "data:image/svg+xml;base64,"+btoa(svg);
		return img
	}

	createSeriesFromAvg(forecastData,type){
		let retVal = [];
		if (type == 'int') { retVal = forecastData.map(l => ({x: l.date, y: parseInt(l.val)})); }
		else if (type == 'float') { retVal = forecastData.map(l => ({x: l.date, y: parseFloat(l.val)}) ); }		
		else if (type == 'date') { retVal = forecastData.map(l => l.date); }		
		else { retVal = forecastData.map(l => ({x: l.date,y: l.val})); }
		return retVal;
	}

	createWindSeriesFromAvg(windSpeedData,windGustData,windDirData){
		function stringDirectionToDegrees(winddir){
			let possibleVals = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
			let index = possibleVals.findIndex(l => l === winddir);
			let degrees = null;
			if (index !== -1) { degrees = index * 22.5; }
			return degrees;
		}	
		let retVal = windSpeedData.map((l,i) => {
			return ({
				x: l.date, 
				y: parseInt(l.val),
				gust: parseInt(windGustData[i].val),
				dirS: windDirData[i].val, 
				dir: stringDirectionToDegrees(windDirData[i].val)
			})
		});
		return retVal;
	}

}