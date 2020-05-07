


d3.csv(".\\data\\summary_airlines.csv", function(data) {

  "use strict";
  
  var margin = 75,
      width = 800 - margin,
      height = 400 - margin;


  d3.select('body')
    .append('h2')
    .text('Performance of 6 Largest U.S. Domestic Carriers from 2003 to 2015');
  
  function addText(svg, chart, text1) {
  // addText takes chart and text name and assign that name to the chart
    svg.append("text")
   .attr("x", chart._xPixels() + chart._widthPixels() / 2)
   .attr("y", chart._yPixels() - 20)
   .style("text-anchor", "middle")
   .style("font-family", "sans-serif")
   .style("font-weight", "bold")
   .text(text1);

  };
                        

          
          
  function createSVG() {
  // This function simply return a new SVG
    return d3.select("body")
    .append("svg")
      .attr("width", width + margin)
      .attr("height", height + margin)
    .append('g')
        .attr('class','chart');
  };


  function addSeries( series, chart) {
  // addSeries, add Line and Point series to chart and also assign colors to the serries
    
    

  
    chart.addSeries(series, dimple.plot.line);
    chart.addSeries(series, dimple.plot.scatter);
    chart.assignColor("SkyWest Airlines Inc.", "orange", "orange",.5);
    chart.assignColor("Delta Air Lines Inc.", "red", "red", 1);
    chart.assignColor("Southwest Airlines Co.", "brown", "brown", .5);
    chart.assignColor("United Air Lines Inc.", "lightblue", "lightblue", .7);
    chart.assignColor("ExpressJet Airlines Inc.", "green", "green", .5);
    chart.assignColor("American Airlines Inc.", "black", "black", .4);
    chart.addLegend(width * .75, height * .81, width*0.25, 100, 'right');
    
    
    var hey = ["1", "2"];
          d3.selectAll("path")
                  .attr('r', function(d) {
                      if (d['carrier_name'] == "United Air Lines Inc.") {
                      hey.push("pedarsaggggg");
                      return 15;
                  } else {
                    for (x in d) {
                            hey.push(x);
                        } 
                        
                      return 30;
                  }
                      
                    });

         // window.alert(hey);

    d3.selectAll("circle")
      .attr('r', function(d) {
          if (d['aggField'] == "Delta Air Lines Inc.") {
          
          return 15;
      } else {
        
          return 5;
      }
     }); 

  };

  // draw chart: Average Delay per Flight due to Carrier over Year for 6 Largest Carriers        
  var svg = createSVG()
  var chart1 = new dimple.chart(svg, data);
  var x = chart1.addTimeAxis("x", "year"); 
  x.tickFormat = "%Y";
  x.title = 'Year';
  
  var y = chart1.addMeasureAxis("y", "avg_carrier_delay");
  y.title = "Average Delay per Flight due to Carrier (minutes)";
  addText(svg, chart1, "Average Delay per Flight due to Carrier over Year for 6 Largest Carriers");
  addSeries("carrier_name", chart1);
  chart1.draw();
  
  
  
  // draw chart: Average Arrival Delay per Flight over Year for 6 Largest Carriers
  var svg2 = createSVG()
  var chart2 = new dimple.chart(svg2, data);

  var x = chart2.addTimeAxis("x", "year"); 
  x.tickFormat = "%Y";
  x.title = 'Year';
  //chart.addCategoryAxis("x", "carrier_name");
  var y = chart2.addMeasureAxis("y", "avg_arr_delay");
  y.title = "Average Delay per Flight (minutes)";
  addSeries("carrier_name", chart2);
  addText(svg2, chart2, "Average Arrival Delay per Flight over Year for 6 Largest Carriers");
  
  chart2.draw();

  
  // draw chart: Percentage of On-Time Flights over Year for 6 Largest Carriers
  var svg3 = createSVG()  
  var chart3 = new dimple.chart(svg3, data);
  var x = chart3.addTimeAxis("x", "year"); 
  x.tickFormat = "%Y";
  x.title = 'Year';
  
  var y = chart3.addMeasureAxis("y", "avg_ontime");
  y.overrideMin = 60
  y.title = "Percentage of On-Time Flights";
  addSeries("carrier_name", chart3);
  addText(svg3, chart3, "Percentage of On-Time Flights over Year for 6 Largest Carriers");
  chart3.draw();
  

  // draw chart: Percentage of Late Flight due to Carrier over Year for 6 Largest Carriers
  var svg4 = createSVG()
  var chart4 = new dimple.chart(svg4, data);
  var x = chart4.addTimeAxis("x", "year"); 
  x.tickFormat = "%Y";
  x.title = 'Year';
  
  var y = chart4.addMeasureAxis("y", "avg_carrier_ct");
  y.title = "Percentage of Delayed Flights due to Carrier";
  addSeries("carrier_name", chart4);
  addText(svg4, chart4, "Percentage of Late Flight due to Carrier over Year for 6 Largest Carriers");
  chart4.draw();


  // draw chart: Percentage of Delayed Flights over Year for 6 Largest Carriers
  var svg5 = createSVG()
  var chart5 = new dimple.chart(svg5, data);
  var x = chart5.addTimeAxis("x", "year"); 
  x.tickFormat = "%Y";
  x.title = 'Year';
  
  var y = chart5.addMeasureAxis("y", "avg_arr_del15");
  y.title = "Percentage of Delayed Flights";
  addSeries("carrier_name", chart5);
  addText(svg5, chart5, "Percentage of Delayed Flights over Year for 6 Largest Carriers");
  chart5.draw();

  

  // Change the length of the line related to Delta Air Lines to 5 and other to 2
  d3.selectAll('path')
    .attr('stroke-width', function(d) {
      if(d['key'] == "Delta Air Lines Inc.") {
        return 5;
      } else {
        return 2;
      }
    });  

  // Change the Radius of Circles to 3
  d3.selectAll('circle')
    .attr('r', 2 );
});

  
