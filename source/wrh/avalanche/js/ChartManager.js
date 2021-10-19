class ChartManager  {

	constructor() {
		this._chart1;
		this.initializeCharts();

	}


	initializeCharts() {
		const _this = this;
		/**
		 * Add cursor functionality to Chart.js
		 * @returns 
		 */
		Chart.Tooltip.positioners.cursor = function(chartElements, coordinates) {
			return coordinates;
		}

		const data = {
			//labels: dateSeries,
			//labels: ['A','B','C'],
			datasets: [
				{
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
					pointStyle : 'crossRot',
					radius: 6,
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
			]
		};
		const plugins = {
			tooltip: {
				mode: 'index',
				position:'cursor',
				intersect: false,
				filter: function (tooltipItem) {
//							console.log(tooltipItem)
					return true
					return tooltipItem.datasetIndex !== 0; 
				}
			},
			legend: {
				labels: {
					filter: function (legendItem, chartData) {
						if (legendItem.text === 'Wind Gusts (mph)') { return false; }
						else return true;
					},
				}
			}
		}

		const config = {
			type: 'line',
			data: data,
			options: {	
				plugins: plugins,			
				scales: {
					xAxis1: {
						axis: 'x',
						grid : { offset: false },
						offset : true,
						//max: xAxisMax,
						//min: xAxisMin,					
						type: 'time',
						time: {
							unit: 'hour',
							stepSize: 3,
						},
						source: 'data',			
					},
					yAxisWind: {
						axis: 'y',
						text: 'Wind (mph)',
						suggestedMin: -5,
						suggestedMax: 25,
						color: '#b06bff',
						display:false,
						//max: xAxisMax,
						//min: xAxisMin,					
						type: 'linear',
					},
					yAxisSnow: {
						axis: 'y',
						text: 'Snow (in)',
						min: 0,
						suggestedMax: 4,
						display:false,
						color: '#b06bff',
						//max: xAxisMax,
						//min: xAxisMin,					
						type: 'linear',
					},
					yAxisQPF: {
						axis: 'y',
						text: '12 Hour Liquid Precip (in)',
						min: 0,
						suggestedMax: 1,
						display:false,
						color: '#b06bff',
						//max: xAxisMax,
						//min: xAxisMin,					
						type: 'linear',
					},
					yAxisTemp: {
						axis: 'y',
						text: 'Temperature',
						suggestedMin: 0,
						suggestedMax: 30,
						color: '#b06bff',
						display:false,
						//max: xAxisMax,
						//min: xAxisMin,					
						type: 'linear',
					},
					yAxisSnowLevel: {
						axis: 'y',
						text: 'Snow Level (kft)',
						suggestedMin: -5,
						suggestedMax: 4,
						color: '#ff606e',
						display:false,
						//max: xAxisMax,
						//min: xAxisMin,					
						type: 'linear',
					},						
				},
			},
		};

		let ctx = document.getElementById('chart1').getContext('2d');
		this._chart1 = new Chart(ctx, config);
	}

	updateChartData(locationForecast){
		//Get list of all times for Temperatures
		let windSeries = this.createWindSeriesFromAvg(locationForecast.forecast['wind (mph)'],locationForecast.forecast['wind dir']);	
		let windGustSeries = this.createSeriesFromAvg(locationForecast.forecast['wind gust (mph)'],'int');
		let snow12Series = this.createSeriesFromAvg(locationForecast.forecast['12 hour snow'],'float');	
		let qpf12Series = this.createSeriesFromAvg(locationForecast.forecast['12 hour qpf'],'float');	
		let tempSeries = this.createSeriesFromAvg(locationForecast.forecast['temperature'],'int');
		let snowLevelSeries = this.createSeriesFromAvg(locationForecast.forecast['snow level (kft)'],'int');		
		let dateSeries = this.createSeriesFromAvg(locationForecast.forecast['temperature'],'date');	

		this.xAxisMax = tempSeries.at(-1).x;
		this.xAxisMin = tempSeries[0].x;	
    
		this._chart1.data.datasets[0].data = windSeries;
		
		
    this._chart1.data.datasets[1].data = windGustSeries;
		this._chart1.data.datasets[2].data = snow12Series;
		this._chart1.data.datasets[3].data = qpf12Series;
		this._chart1.data.datasets[4].data = tempSeries;
		this._chart1.data.datasets[5].data = snowLevelSeries;		
		this._chart1.update();
	}


	createSvgArrow(direction = 0,color = 'red'){
		let img = new Image();
		//let svg = `<svg xmlns="http://www.w3.org/2000/svg"  transform="rotate(${direction})" height="30" width="30"><text x="50%" y="50%" text-anchor="middle"  fill="${color}">&#10137;</text></svg>`;
		let svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 22 22" width="20" height="20" transform="rotate(${direction})" fill="${color}">
		            <circle width="100%" height="100%" fill="#F2F5FF"/>		
		            <path d="M 11.003631,1 C 14.334303,4.3189564 17.669328,7.6361528 21,10.955989 c -2.127567,0.0018 -4.256584,-9.09e-4 -6.38415,9.09e-4 -0.0044,3.347113 -0.0015,6.694226 -0.0015,10.041338 -2.409113,0.0026 -4.816776,0.0018 -7.225889,9.09e-4 -0.0029,-3.347112 0,-6.695105 -0.0015,-10.042218 -2.128926,-9.09e-4 -4.257943,9.09e-4 -6.38696101,-9.09e-4 C 4.335025,7.6379128 7.664246,4.3163164 11.003625,1 Z" style="stroke-width:3;stroke:#F2F5FF;stroke-opacity:1;stroke-miterlimit:4;stroke-linejoin:round" />
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

	createWindSeriesFromAvg(windSpeedData,windDirData){
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
				dir: stringDirectionToDegrees(windDirData[i].val)
			})
		});
		return retVal;
	}

}