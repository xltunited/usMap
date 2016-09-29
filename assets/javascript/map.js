$(document).ready(function(){

	function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
		return "<h4>"+n+"</h4><table>"+
			"<tr><td>Low</td><td>"+(d.low)+"</td></tr>"+
			"<tr><td>Average</td><td>"+(d.avg)+"</td></tr>"+
			"<tr><td>High</td><td>"+(d.high)+"</td></tr>"+
			"</table>";
	}
	
	var sampleData ={};	/* Sample random data. */	
	["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
	"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
	"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
	"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
	"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
		.forEach(function(d){ 
			var low=Math.round(100*Math.random()), 
				mid=Math.round(100*Math.random()), 
				high=Math.round(100*Math.random());
			sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
					avg:Math.round((low+mid+high)/3), color:d3.interpolate("#ffffff", "#000000")(low/100)}; 
		});
	
	/* draw states on id #statesvg */	
	mapImg.draw("#statesvg", sampleData, tooltipHtml);
	
	d3.select(self.frameElement).style("height", "600px");

	$('#radioStacked0').on('click', function(){

		$('.mapLabel').html('Programming Jobs');

		$('svg').css('display', 'none');

		$('#statesvg').css('display', 'block');

	});

	$('#radioStacked1').on('click', function(){

		$('.mapLabel').html('Jobs that require Javascript');

		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
			return "<h4>"+n+"</h4><table>"+
				"<tr><td>Low</td><td>"+(d.low)+"</td></tr>"+
				"<tr><td>Average</td><td>"+(d.avg)+"</td></tr>"+
				"<tr><td>High</td><td>"+(d.high)+"</td></tr>"+
				"</table>";
		}
		
		var sampleData ={};	/* Sample random data. */	
		["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
		"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
		"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
		"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
		"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
			.forEach(function(d){ 
				var low=Math.round(100*Math.random()), 
					mid=Math.round(100*Math.random()), 
					high=Math.round(100*Math.random());
				sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
						avg:Math.round((low+mid+high)/3), color:d3.interpolate("#ffffff", "#ffff00")(low/100)}; 
			});
		
		/* draw states on id #statesvg */	
		mapJavascript.draw("#javascriptMap", sampleData, tooltipHtml);
		
		d3.select(self.frameElement).style("height", "600px");

		$('svg').css('display', 'none');

		$('#javascriptMap').css('display', 'block');

	});

	$('#radioStacked2').on('click', function(){

		$('.mapLabel').html('Jobs that require Node');

		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
			return "<h4>"+n+"</h4><table>"+
			"<tr><td>Low</td><td>"+(d.low)+"</td></tr>"+
			"<tr><td>Average</td><td>"+(d.avg)+"</td></tr>"+
			"<tr><td>High</td><td>"+(d.high)+"</td></tr>"+
			"</table>";
		}
		
		var sampleData ={};	/* Sample random data. */	
		["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
		"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
		"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
		"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
		"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
			.forEach(function(d){ 
				var low=Math.round(100*Math.random()), 
					mid=Math.round(100*Math.random()), 
					high=Math.round(100*Math.random());
				sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
						avg:Math.round((low+mid+high)/3), color:d3.interpolate("#ffffff", "#00ff00")(low/100)}; 
			});
		
		/* draw states on id #statesvg */	
		mapNode.draw("#nodeMap", sampleData, tooltipHtml);
		
		d3.select(self.frameElement).style("height", "600px");
		
		$('svg').css('display', 'none');

		$('#nodeMap').css('display', 'block');

	});

	$('#radioStacked3').on('click', function(){

		$('.mapLabel').html('Jobs that require Python');

		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
			return "<h4>"+n+"</h4><table>"+
			"<tr><td>Low</td><td>"+(d.low)+"</td></tr>"+
			"<tr><td>Average</td><td>"+(d.avg)+"</td></tr>"+
			"<tr><td>High</td><td>"+(d.high)+"</td></tr>"+
			"</table>";
		}
		
		var sampleData ={};	/* Sample random data. */	
		["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
		"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
		"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
		"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
		"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
			.forEach(function(d){ 
				var low=Math.round(100*Math.random()), 
					mid=Math.round(100*Math.random()), 
					high=Math.round(100*Math.random());
				sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
						avg:Math.round((low+mid+high)/3), color:d3.interpolate("#ffffff", "#0000ff")(low/100)}; 
			});
		
		/* draw states on id #statesvg */	
		mapPython.draw("#pythonMap", sampleData, tooltipHtml);
		
		d3.select(self.frameElement).style("height", "600px");

		$('svg').css('display', 'none');

		$('#pythonMap').css('display', 'block');
		

	});

	$('#radioStacked4').on('click', function(){

		$('.mapLabel').html('Jobs that require Ruby');

		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
			return "<h4>"+n+"</h4><table>"+
			"<tr><td>Low</td><td>"+(d.low)+"</td></tr>"+
			"<tr><td>Average</td><td>"+(d.avg)+"</td></tr>"+
			"<tr><td>High</td><td>"+(d.high)+"</td></tr>"+
			"</table>";
		}
		
		var sampleData ={};	/* Sample random data. */	
		["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
		"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
		"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
		"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
		"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
			.forEach(function(d){ 
				var low=Math.round(100*Math.random()), 
					mid=Math.round(100*Math.random()), 
					high=Math.round(100*Math.random());
				sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
						avg:Math.round((low+mid+high)/3), color:d3.interpolate("#ffffff", "#ff0000")(low/100)}; 
			});
		
		/* draw states on id #statesvg */	
		mapRuby.draw("#rubyMap", sampleData, tooltipHtml);
		
		d3.select(self.frameElement).style("height", "600px");

		$('svg').css('display', 'none');

		$('#rubyMap').css('display', 'block');
		

	});

	$('#radioStacked5').on('click', function(){

		$('.mapLabel').html('Jobs that require PHP');

		function tooltipHtml(n, d){	/* function to create html content string in tooltip div. */
			return "<h4>"+n+"</h4><table>"+
			"<tr><td>Low</td><td>"+(d.low)+"</td></tr>"+
			"<tr><td>Average</td><td>"+(d.avg)+"</td></tr>"+
			"<tr><td>High</td><td>"+(d.high)+"</td></tr>"+
			"</table>";
		}
		
		var sampleData ={};	/* Sample random data. */	
		["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
		"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
		"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
		"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
		"WI", "MO", "AR", "OK", "KS", "LS", "VA"]
			.forEach(function(d){ 
				var low=Math.round(100*Math.random()), 
					mid=Math.round(100*Math.random()), 
					high=Math.round(100*Math.random());
				sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
						avg:Math.round((low+mid+high)/3), color:d3.interpolate("#ffffff", "#551a8b")(low/100)}; 
			});
		
		/* draw states on id #statesvg */	
		mapPHP.draw("#phpMap", sampleData, tooltipHtml);
		
		d3.select(self.frameElement).style("height", "600px");

		$('svg').css('display', 'none');

		$('#phpMap').css('display', 'block');
		

	});

});