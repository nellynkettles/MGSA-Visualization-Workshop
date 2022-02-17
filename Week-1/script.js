
/**
 * 
 * step 1: run a local host in your terminal
 * python -m SimpleHTTPServer
 * open browser with url http://localhost:8000/
 */

const width = d3.select('.plot').node().clientWidth,
    height = d3.select('.plot').node().clientHeight;


const data = [
    {
        x:5,
        y:20,
        category: "Dogs",
        radius: 10
    },
    {
        x:2,
        y:7,
        category: "Cats",
        radius: 4
    },
    {
        x:16,
        y:6,
        category: "Bunnies",
        radius: 20
    },
    {
        x:16,
        y:17,
        category: "Lizards",
        radius: 12
    }
]


let plot = d3.select(".plot");

let circles = plot.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("r", 12)
    .attr("fill", "red")
