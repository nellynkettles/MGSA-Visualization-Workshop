
/**
 * 
 * step 1: run a local host in your terminal
 * python -m SimpleHTTPServer
 * open browser with url http://localhost:8000/
 */


// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 100, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;



Promise.all([

    d3.csv("data/data-reduced.csv", function(d) {
        return {
            duration: +d.tripduration,
            starttime: new Date(d.starttime), // converting string to date
            endtime: new Date(d.stoptime),
            start_station_id: d["start station id"]


        }
    })
])
.then(data => {
    console.log(data[0])
    render(data[0])
})

function render(data){

    console.log("data", data)


    // set the ranges
    // var x = d3.scaleBand()
    //     .range([0, width])
    //     .domain(d3.map(data, function(d){ return d.start_station_id}))
    
    // console.log("x domain", d3.map(data, function(d){ return d.start_station_id}))


    // var y = d3.scaleLinear()
    //     .range([height, 0])
    //     .domain(d3.extent(data, function(d) { return d.duration; }) );

    // console.log("y domain", d3.extent(data, function(d) { return d.duration; }))

    let plot = d3.select(".plot").append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`)

    plot.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cy", 100)
        .attr("cx", 12)
        // .attr("cx", function(d){ return x(d.start_station_id)})
        // .attr("cy", function(d){ return y(d.duration)})
        .attr("r", 12)
        .attr("fill", "red")

    console.log("render")

      // Add the Y Axis
//   plot.append("g")
//     .attr("class", "axis")
//     .call(d3.axisLeft(y));

}