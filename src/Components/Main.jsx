import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Sunburst from "sunburst-chart";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  FormLabel,
  Card,
  Spinner,
  Jumbotron,
} from "react-bootstrap";
import { select } from "d3";
var mockData = require("./mockupData.json").data;
var realData = mockData;
var sundata = {};
const server = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: realData,
      });
    }, 1000);
  });
};
// var sundata = {
//   name: "root",
//   color: "brown",
//   children: [
//     {
//       name: "leafA",
//       value: 3,
//       color: "green",
//     },
//     {
//       name: "nodeB",
//       color: "orange",
//       children: [
//         {
//           name: "leafBA",
//           value: 5,
//           color: "yellowgreen",
//         },
//         {
//           name: "leafBB",
//           value: 1,
//           color: "yellowgreen",
//         },
//       ],
//     },
//   ],
// };
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sunbData: {},
      isLoading: true,
      realData: mockData,
      lobFilters: "",
      phaseFilter: "",
      solutionTechnologiesUsedFilter: "",
      capabilitiesFilter: "",
      columnDefs: [
        {
          headerName: "ID",
          field: "solutionId",
          filter: "agTextColumnFilter",
          width: 70,
        },
        { headerName: "Name", field: "name" },
        { headerName: "Description", field: "description" },
        { headerName: "Line Of Business", field: "lineOfBusiness" },
        { headerName: "Phase", field: "phase" },
        { headerName: "Production Date", field: "prodDate" },
        {
          headerName: "Solution Tech. Used",
          field: "solutionTechnologiesUsed",
        },
        { headerName: "Capabilities", field: "capabilities" },
        { headerName: "Certification Status", field: "certificationStatus" },
        { headerName: "Classification Rating", field: "classificationRating" },
        { headerName: "Info Type", field: "informationType" },
        { headerName: "Retirement Target Date", field: "retirementTargetDate" },
      ],
      rowData: realData,
      ideationSolutionNumber: 0,
      developmentSolutionNumber: 0,
      productionSolutionNumber: 0,
      retiredSolutionNumber: 0,
      filter: {
        line: "",
        phase: "",
        solution: "",
        capability: "",
      },
      //data: ["AAA"],
      lob: [],
      phase: [],
      solutionTechnologiesUsed: [],
      capabilities: [],
      //lob, phase, solutionTechnologiesUsed, capabilities,
    };
  }
  componentDidMount() {
    server().then((data) => {
      let lob = [];
      let phase = [];
      let solutionTechnologiesUsed = [];
      let capabilities = [];
      realData.forEach((rec) => {
        if (lob.indexOf(rec.lineOfBusiness) == -1) lob.push(rec.lineOfBusiness);
        if (phase.indexOf(rec.phase) == -1) phase.push(rec.phase);
        if (
          solutionTechnologiesUsed.indexOf(rec.solutionTechnologiesUsed) == -1
        )
          solutionTechnologiesUsed.push(rec.solutionTechnologiesUsed);
        if (capabilities.indexOf(rec.capabilities) == -1)
          capabilities.push(rec.capabilities);
      });
      console.log(lob, phase, solutionTechnologiesUsed, capabilities);
      this.setState({ lob, phase, solutionTechnologiesUsed, capabilities });
      this.setState({ isLoading: false });
      console.log(this.state.lob);

      let ideationSolutionNumber = 0;
      let developmentSolutionNumber = 0;
      let productionSolutionNumber = 0;
      let retiredSolutionNumber = 0;
      // console.log('dataaaa:',data.data)
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].phase === "Ideation") {
          ideationSolutionNumber = ideationSolutionNumber + 1;
        } else if (data.data[i].phase === "Development") {
          developmentSolutionNumber = developmentSolutionNumber + 1;
        } else if (data.data[i].phase === "Production") {
          productionSolutionNumber = productionSolutionNumber + 1;
        } else if (data.data[i].phase === "Retired") {
          retiredSolutionNumber = retiredSolutionNumber + 1;
        }
      }
      this.setState({
        ideationSolutionNumber,
        developmentSolutionNumber,
        productionSolutionNumber,
        retiredSolutionNumber,
      });

      this.updateChartOne(realData);
      this.updateChartTwo(realData);
      this.updateChartThree(realData);
      this.updateChartFour(realData);
      this.sunChartD3(realData);
      // this.updateChartFive(data.data);
    });

    // The Pie Chart #1

    var width = 300;
    var height = 300;
    var margin = 0;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin;

    // append the svg object to the div called 'my_dataviz'
    var svg = window.d3
      .select("#my_dataviz")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // Create dummy data
    var data = {};

    // set the color scale
    var color = window.d3
      .scaleOrdinal()
      .domain(data)
      .range(["#d2d43f", "orange", "green", "red"]);

    // Compute the position of each group on the pie:
    var pie = window.d3.pie().value(function (d) {
      return d.value;
    });
    var data_ready = pie(window.d3.entries(data));
    // Now I know that group A goes from 0 degrees to x degrees and so on.

    // shape helper to build arcs:
    var arcGenerator = window.d3.arc().innerRadius(0).outerRadius(radius);

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll("mySlices")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .attr("fill", function (d) {
        return color(d.data.key);
      })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    // Now add the annotation. Use the centroid method to get the best coordinates
    svg
      .selectAll("mySlices")
      .data(data_ready)
      .enter()
      .append("text")
      .text(function (d) {
        return "" + d.data.key;
      })
      .attr("transform", function (d) {
        return "translate(" + arcGenerator.centroid(d) + ")";
      })
      .style("text-anchor", "middle")
      .style("font-size", 14);

    // Stacked Bar Chart

    var initStackedBarChart = {
      draw: function (config) {
        let domEle = config.element,
          stackKey = config.key,
          data = config.data,
          margin = { top: 0, right: 10, bottom: 30, left: 30 },
          parseDate = window.d3.timeParse("%m/%Y"),
          width = 240 - margin.left - margin.right,
          height = 210 - margin.top - margin.bottom,
          xScale = window.d3.scaleLinear().rangeRound([0, width]),
          yScale = window.d3.scaleBand().rangeRound([height, 0]).padding(0.1),
          color = window.d3.scaleOrdinal(window.d3.schemeCategory20),
          xAxis = window.d3.axisBottom(xScale),
          yAxis = window.d3
            .axisLeft(yScale)
            .tickFormat(window.d3.timeFormat("%b")),
          svg = window.d3
            .select("#" + domEle)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr(
              "transform",
              "translate(" + margin.left + "," + margin.top + ")"
            );

        var stack = window.d3
          .stack()
          .keys(stackKey)
          /*.order(d3.stackOrder)*/
          .offset(window.d3.stackOffsetNone);

        var layers = stack(data);
        data.sort(function (a, b) {
          return b.total - a.total;
        });
        yScale.domain(
          data.map(function (d) {
            return parseDate(d.date);
          })
        );
        xScale.domain([0, 200]).nice();

        var layer = svg
          .selectAll(".layer")
          .data(layers)
          .enter()
          .append("g")
          .attr("class", "layer")
          .style("fill", function (d, i) {
            return color(i);
          });

        layer
          .selectAll("rect")
          .data(function (d) {
            return d;
          })
          .enter()
          .append("rect")
          .attr("y", function (d) {
            return yScale(parseDate(d.data.date));
          })
          .attr("x", function (d) {
            return xScale(d[0]);
          })
          .attr("height", yScale.bandwidth())
          .attr("width", function (d) {
            return xScale(d[1]) - xScale(d[0]);
          });

        svg
          .append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + (height + 5) + ")")
          .call(xAxis);

        svg
          .append("g")
          .attr("class", "axis axis--y")
          .attr("transform", "translate(0,0)")
          .call(yAxis);
      },
    };
    var stackedData = realData;

    var key = ["wounds", "disease"];

    initStackedBarChart.draw({
      data: stackedData,
      key: key,
      element: "stacked-bar",
    });

    // Bar Chart Init 3rd

    function barChart(selector) {
      let svg = window.d3.select(selector),
        margin = { top: 20, right: 20, bottom: 30, left: 50 },
        width = 200 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom,
        g = svg
          .append("g")
          .attr(
            "transform",
            "translate(" + margin.left + "," + margin.top + ")"
          );

      g.append("g").attr("class", "x axis");

      g.append("g").attr("class", "y axis");
      let myData = realData;
      // let myData = [
      //   { name: "John", age: 23, height: 1.93 },
      //   { name: "Mafe", age: 22, height: 1.7 },
      //   { name: "Sonia", age: 27, height: 1.6 },
      //   { name: "Vicente", age: 73, height: 0.32 },
      // ];

      let x = window.d3.scaleBand().padding(0.2).range([0, width]);

      let y = window.d3.scaleLinear().range([height, 0]);

      function update(myData) {
        x.domain(myData.map((d) => d.name));
        y.domain([0, window.d3.max(myData, (d) => d.height)]);

        let points = g.selectAll(".point").data(myData); //update

        let pointsEnter = points.enter().append("rect").attr("class", "point");

        points
          .merge(pointsEnter) //Enter + Update
          .attr("x", (d) => x(d.name))
          .attr("y", (d) => y(d.height))
          .attr("width", (d) => x.bandwidth())
          .attr("height", (d) => height - y(d.height))

          .style("fill", "steelsteelblue");

        points.exit().remove();

        g.select(".x.axis")
          .call(window.d3.axisBottom(x))
          .attr("transform", "translate(0, " + height + ")");

        g.select(".y.axis").call(window.d3.axisLeft(y));
      }

      //update(myData);
    }

    barChart("#viz");

    // Trend bar Chart

    // barChart("#ziz");

    //   function sunburst() {
    //     // Dimensions of sunburst.
    //     var width = 300;
    //     var height = 300;
    //     var radius = Math.min(width, height) / 2;

    //     // Breadcrumb dimensions: width, height, spacing, width of tip/tail.
    //     var b = {
    //       w: 75,
    //       h: 30,
    //       s: 3,
    //       t: 10,
    //     };

    //     // Mapping of step names to colors.
    //     var colors = {
    //       home: "#5687d1",
    //       product: "#7b615c",
    //       search: "#de783b",
    //       account: "#6ab975",
    //       other: "#a173d1",
    //       end: "#bbbbbb",
    //     };

    //     // Total size of all segments; we set this later, after loading the data.
    //     var totalSize = 0;

    //     var vis = window.d3
    //       .select("#chart")
    //       .append("svg:svg")
    //       .attr("width", width)
    //       .attr("height", height)
    //       .append("svg:g")
    //       .attr("id", "container")
    //       .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    //     var partition = window.d3
    //       .partition()
    //       .size([2 * Math.PI, radius * radius]);

    //     var arc = window.d3
    //       .arc()
    //       .startAngle(function (d) {
    //         return d.x0;
    //       })
    //       .endAngle(function (d) {
    //         return d.x1;
    //       })
    //       .innerRadius(function (d) {
    //         return Math.sqrt(d.y0);
    //       })
    //       .outerRadius(function (d) {
    //         return Math.sqrt(d.y1);
    //       });

    //     // Use window.d3.text and window.d3.csvParseRows so that we do not need to have a header
    //     // row, and can receive the csv as an array of arrays.

    //     var csv = [
    //       ["account-account-account-account-account-account", 2],
    //       ["account-account-account-account-account-end", 10],
    //     ];
    //     var json = buildHierarchy(csv);
    //     createVisualization(json);

    //     // Main function to draw and set up the visualization, once we have the data.
    //     function createVisualization(json) {
    //       // Basic setup of page elements.
    //       initializeBreadcrumbTrail();
    //       // drawLegend();
    //       // window.d3.select("#togglelegend").on("click", toggleLegend);

    //       // Bounding circle underneath the sunburst, to make it easier to detect
    //       // when the mouse leaves the parent g.
    //       vis.append("svg:circle").attr("r", radius).style("opacity", 0);

    //       // Turn the data into a window.d3 hierarchy and calculate the sums.
    //       var root = window.d3
    //         .hierarchy(json)
    //         .sum(function (d) {
    //           return d.size;
    //         })
    //         .sort(function (a, b) {
    //           return b.value - a.value;
    //         });

    //       // For efficiency, filter nodes to keep only those large enough to see.
    //       var nodes = partition(root)
    //         .descendants()
    //         .filter(function (d) {
    //           return d.x1 - d.x0 > 0.005; // 0.005 radians = 0.29 degrees
    //         });

    //       var path = vis
    //         .data([json])
    //         .selectAll("#chart path")
    //         .data(nodes)
    //         .enter()
    //         .append("svg:path")
    //         .attr("display", function (d) {
    //           return d.depth ? null : "none";
    //         })
    //         .attr("d", arc)
    //         .attr("fill-rule", "evenodd")
    //         .style("fill", function (d) {
    //           return colors[d.data.name];
    //         })
    //         .style("opacity", 1)
    //         .on("mouseover", mouseover);

    //       // Add the mouseleave handler to the bounding circle.
    //       window.d3.select("#container").on("mouseleave", mouseleave);

    //       // Get total size of the tree = value of root node from partition.
    //       totalSize = path.datum().value;
    //     }

    //     // Fade all but the current sequence, and show it in the breadcrumb trail.
    //     function mouseover(d) {
    //       var percentage = ((100 * d.value) / totalSize).toPrecision(3);
    //       var percentageString = percentage + "%";
    //       if (percentage < 0.1) {
    //         percentageString = "< 0.1%";
    //       }

    //       window.d3.select("#chart #percentage").text(percentageString);

    //       window.d3.select("#chart #explanation").style("visibility", "");

    //       var sequenceArray = d.ancestors().reverse();
    //       sequenceArray.shift(); // remove root node from the array
    //       updateBreadcrumbs(sequenceArray, percentageString);

    //       // Fade all the segments.
    //       window.d3.selectAll("#chart path").style("opacity", 0.3);

    //       // Then highlight only those that are an ancestor of the current segment.
    //       vis
    //         .selectAll("path")
    //         .filter(function (node) {
    //           return sequenceArray.indexOf(node) >= 0;
    //         })
    //         .style("opacity", 1);
    //     }

    //     // Restore everything to full opacity when moving off the visualization.
    //     function mouseleave(d) {
    //       // Hide the breadcrumb trail
    //       window.d3.select("#trail").style("visibility", "hidden");

    //       // Deactivate all segments during transition.
    //       window.d3.selectAll("#chart path").on("mouseover", null);

    //       // Transition each segment to full opacity and then reactivate it.
    //       window.d3
    //         .selectAll("#chart path")
    //         .transition()
    //         .duration(1000)
    //         .style("opacity", 1)
    //         .on("end", function () {
    //           window.d3.select(this).on("mouseover", mouseover);
    //         });

    //       window.d3.select("#explanation").style("visibility", "hidden");
    //     }

    //     function initializeBreadcrumbTrail() {
    //       // Add the svg area.
    //       var trail = window.d3
    //         .select("#aad")
    //         .append("svg:svg")
    //         .attr("width", width)
    //         .attr("height", 50)
    //         .attr("id", "trail");
    //       // Add the label at the end, for the percentage.
    //       trail.append("svg:text").attr("id", "endlabel").style("fill", "#000");
    //     }

    //     // Generate a string that describes the points of a breadcrumb polygon.
    //     function breadcrumbPoints(d, i) {
    //       var points = [];
    //       points.push("0,0");
    //       points.push(b.w + ",0");
    //       points.push(b.w + b.t + "," + b.h / 2);
    //       points.push(b.w + "," + b.h);
    //       points.push("0," + b.h);
    //       if (i > 0) {
    //         // Leftmost breadcrumb; don't include 6th vertex.
    //         points.push(b.t + "," + b.h / 2);
    //       }
    //       return points.join(" ");
    //     }

    //     // Update the breadcrumb trail to show the current sequence and percentage.
    //     function updateBreadcrumbs(nodeArray, percentageString) {
    //       // Data join; key function combines name and depth (= position in sequence).
    //       var trail = window.d3
    //         .select("#trail")
    //         .selectAll("g")
    //         .data(nodeArray, function (d) {
    //           return d.data.name + d.depth;
    //         });

    //       // Remove exiting nodes.
    //       trail.exit().remove();

    //       // Add breadcrumb and label for entering nodes.
    //       var entering = trail.enter().append("svg:g");

    //       entering
    //         .append("svg:polygon")
    //         .attr("points", breadcrumbPoints)
    //         .style("fill", function (d) {
    //           return colors[d.data.name];
    //         });

    //       entering
    //         .append("svg:text")
    //         .attr("x", (b.w + b.t) / 2)
    //         .attr("y", b.h / 2)
    //         .attr("dy", "0.35em")
    //         .attr("text-anchor", "middle")
    //         .text(function (d) {
    //           return d.data.name;
    //         });

    //       // Merge enter and update selections; set position for all nodes.
    //       entering.merge(trail).attr("transform", function (d, i) {
    //         return "translate(" + i * (b.w + b.s) + ", 0)";
    //       });

    //       // Now move and update the percentage at the end.
    //       window.d3
    //         .select("#trail")
    //         .select("#endlabel")
    //         .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
    //         .attr("y", b.h / 2)
    //         .attr("dy", "0.35em")
    //         .attr("text-anchor", "middle")
    //         .text(percentageString);

    //       // Make the breadcrumb trail visible, if it's hidden.
    //       window.d3.select("#trail").style("visibility", "");
    //     }

    //     function buildHierarchy(csv) {
    //       var root = { name: "root", children: [] };
    //       for (var i = 0; i < csv.length; i++) {
    //         var sequence = csv[i][0];
    //         var size = +csv[i][1];
    //         if (isNaN(size)) {
    //           // e.g. if this is a header row
    //           continue;
    //         }
    //         var parts = sequence.split("-");
    //         var currentNode = root;
    //         for (var j = 0; j < parts.length; j++) {
    //           var children = currentNode["children"];
    //           var nodeName = parts[j];
    //           var childNode;
    //           if (j + 1 < parts.length) {
    //             // Not yet at the end of the sequence; move down the tree.
    //             var foundChild = false;
    //             for (var k = 0; k < children.length; k++) {
    //               if (children[k]["name"] === nodeName) {
    //                 childNode = children[k];
    //                 foundChild = true;
    //                 break;
    //               }
    //             }
    //             // If we don't already have a child node for this branch, create it.
    //             if (!foundChild) {
    //               childNode = { name: nodeName, children: [] };
    //               children.push(childNode);
    //             }
    //             currentNode = childNode;
    //           } else {
    //             // Reached the end of the sequence; create a leaf node.
    //             childNode = { name: nodeName, size: size };
    //             children.push(childNode);
    //           }
    //         }
    //       }
    //       return root;
    //     }
    //   }

    //   //sunburst();
  }
  updateChartOne = (data) => {
    let ideation = 0;
    let development = 0;
    let production = 0;
    let retired = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].phase === "Ideation") {
        ideation = ideation + 1;
      } else if (data[i].phase === "Development") {
        development = development + 1;
      } else if (data[i].phase === "Production") {
        production = production + 1;
      } else if (data[i].phase === "Retired") {
        retired = retired + 1;
      }
    }

    var width = 180;
    var height = 180;
    var margin = 0;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin;

    // append the svg object to the div called 'my_dataviz'
    document.querySelector("#my_dataviz").innerHTML = "";
    var svg = window.d3
      .select("#my_dataviz")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .attr("fill", "black");
    // Create dummy data
    var chartData = {
      Ideation: this.state.ideationSolutionNumber,
      Development: this.state.developmentSolutionNumber,
      Production: this.state.productionSolutionNumber,
      Retired: this.state.retiredSolutionNumber,
    };

    // set the color scale
    var color = window.d3
      .scaleOrdinal()
      .domain(chartData)
      .range(["yellow", "orange", "green", "red"]);

    // Compute the position of each group on the pie:
    var pie = window.d3.pie().value(function (d) {
      return d.value;
    });

    var data_ready = pie(window.d3.entries(chartData));
    // Now I know that group A goes from 0 degrees to x degrees and so on.

    // shape helper to build arcs:
    var arcGenerator = window.d3.arc().innerRadius(0).outerRadius(radius);

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll("mySlices")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .attr("fill", function (d) {
        return color(d.data.key);
      })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    var total = 0;
    data_ready.forEach((d) => (total += d.value));
    console.log("tottt" + total);
    // Now add the annotation. Use the centroid method to get the best coordinates
    svg
      .selectAll("mySlices")
      .data(data_ready)
      .enter()
      .append("text")
      .text(function (d) {
        return ((d.value / total) * 100).toPrecision(3) + " %";
      })
      .attr("transform", function (d) {
        return "translate(" + arcGenerator.centroid(d) + ")";
      })
      .style("text-anchor", "middle")
      .style("font-size", 13);
  };

  updateChartTwo = (arg) => {
    const dataUpdated = (data) => {
      let capabilities = [];

      for (let i = 0; i < data.length; i++) {
        if (capabilities.find((e) => e.label === data[i].capabilities)) {
          const item = capabilities.find(
            (e) => e.label === data[i].capabilities
          );

          if (data[i].phase === "Ideation") {
            console.log("Ideation");
            item.ideation = item.ideation + 1;
            item.total = item.total + 1;
          } else if (data[i].phase === "Development") {
            console.log("Development");
            item.development = item.development + 1;
            item.total = item.total + 1;
          } else if (data[i].phase === "Production") {
            console.log("Production");
            item.production = item.production + 1;
            item.total = item.total + 1;
          } else if (data[i].phase === "Retired") {
            console.log("Retired");
            item.retired = item.retired + 1;
            item.total = item.total + 1;
          }

          const filteredCapabilites = capabilities.filter(
            (e) => e !== data[i].capabilities
          );

          capabilities = filteredCapabilites.concat(item);
        } else {
          if (data[i].phase === "Ideation") {
            capabilities.push({
              label: data[i].capabilities,
              total: 1,
              ideation: 1,
              development: 0,
              production: 0,
              retired: 0,
            });
          } else if (data[i].phase === "Development") {
            capabilities.push({
              label: data[i].capabilities,
              total: 1,
              development: 1,
              ideation: 0,
              production: 0,
              retired: 0,
            });
          } else if (data[i].phase === "Production") {
            capabilities.push({
              label: data[i].capabilities,
              total: 1,
              ideation: 0,
              development: 0,
              production: 1,
              retired: 0,
            });
          } else if (data[i].phase === "Retired") {
            capabilities.push({
              label: data[i].capabilities,
              total: 1,
              ideation: 0,
              development: 0,
              production: 0,
              retired: 1,
            });
          }
        }
      }

      // for (let i = 0 ; i < capabilities.length ; i++){
      //     const ideation = [...data].filter(e => e ===  )
      // }
      capabilities.forEach((d) => console.log("me", d));
      return capabilities;
    };

    const stackedData = dataUpdated(arg);

    const maxDomain = stackedData.sort((a, b) => {
      if (a.total > b.total) {
        return -1;
      } else if (a.total === b.total) {
        return 0;
      } else if (a.total < b.total) {
        return 1;
      }
    })[0].total;

    document.querySelector("#stacked-bar").innerHTML = "";
    var initStackedBarChart = {
      draw: function (config) {
        let domEle = config.element,
          stackKey = config.key,
          data = config.data,
          margin = { top: 0, right: 10, bottom: 30, left: 70 },
          width = 300 - margin.left - margin.right,
          height = 220 - margin.top - margin.bottom,
          xScale = window.d3.scaleLinear().rangeRound([0, width]),
          yScale = window.d3.scaleBand().rangeRound([height, 0]).padding(0.1),
          color = window.d3
            .scaleOrdinal()
            .domain(data)
            .range(["yellow", "orange", "green", "red"]),
          xAxis = window.d3.axisBottom(xScale),
          yAxis = window.d3.axisLeft(yScale),
          svg = window.d3
            .select("#" + domEle)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr(
              "transform",
              "translate(" + margin.left + "," + margin.top + ")"
            );

        var stack = window.d3
          .stack()
          .keys(stackKey)
          /*.order(d3.stackOrder)*/
          .offset(window.d3.stackOffsetNone);

        var layers = stack(data);
        data.sort(function (a, b) {
          return b.total - a.total;
        });
        yScale.domain(
          data.map(function (d) {
            return d.label;
          })
        );
        xScale.domain([0, maxDomain]).nice();

        var layer = svg
          .selectAll(".layer")
          .data(layers)
          .enter()
          .append("g")
          .attr("class", "layer")
          .style("fill", function (d, i) {
            return color(i);
          });

        layer
          .selectAll("rect")
          .data(function (d) {
            return d;
          })
          .enter()
          .append("rect")
          .attr("y", function (d) {
            return yScale(d.data.label);
          })
          .attr("x", function (d) {
            return xScale(d[0]);
          })
          .attr("height", yScale.bandwidth())
          .attr("width", function (d) {
            return xScale(d[1]) - xScale(d[0]);
          });

        svg
          .append("g")
          .attr("class", "axis axis--x")
          .attr("transform", "translate(0," + (height + 5) + ")")
          .call(xAxis)
          .style("font-size", "8px");

        svg
          .append("g")
          .attr("class", "axis axis--y")
          .attr("transform", "translate(0,0)")
          .call(yAxis);
      },
    };

    var stackededData = [
      {
        label: "A",
        total: 200,
        capabilities: 100,
        phases: 50,
      },
      {
        label: "M",
        total: 100,
        capabilities: 50,
        phases: 50,
      },
      {
        label: "L",
        total: 200,
        capabilities: 100,
        phases: 50,
      },
      {
        label: "O",
        total: 200,
        capabilities: 100,
        phases: 50,
      },
      {
        label: "P",
        total: 200,
        capabilities: 100,
        phases: 50,
      },
      {
        label: "Q",
        total: 200,
        capabilities: 100,
        phases: 50,
      },
      {
        label: "R",
        total: 200,
        capabilities: 100,
        phases: 50,
      },
    ];

    var key = ["ideation", "development", "production", "retired"];

    initStackedBarChart.draw({
      data: stackedData,
      key: key,
      element: "stacked-bar",
    });
  };
  updateChartThree = (newData) => {
    document.querySelector("#viz").innerHTML = "";

    function barChart(selector) {
      let svg = window.d3.select(selector),
        margin = { top: 20, right: 20, bottom: 30, left: 50 },
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg
          .append("g")
          .attr(
            "transform",
            "translate(" + margin.left + "," + margin.top + ")"
          );

      g.append("g").attr("class", "x axis");

      g.append("g").attr("class", "y axis");

      const renderNewData = (d) => {
        let final = [];
        for (let i = 0; i < d.length; i++) {
          let foundItem = final.find(
            (e) => e.label === d[i].solutionTechnologiesUsed
          );
          console.log("ffff" + foundItem);
          if (foundItem) {
            const filteredArry = final.filter(
              (e) => e.label !== d[i].solutionTechnologiesUsed
            );
            foundItem.total = foundItem.total + 1;
            final = filteredArry.concat(foundItem);
          } else {
            final.push({ label: d[i].solutionTechnologiesUsed, total: 1 });
          }
        }
        return final;
      };

      let myData = renderNewData(newData);
      console.log(myData);

      let x = window.d3
        .scaleBand()
        .padding(0.2)
        .range([0, width - 1]);

      let y = window.d3.scaleLinear().range([height, 0]);

      function update(myData) {
        x.domain(myData.map((d) => d.label));
        y.domain([0, window.d3.max(myData, (d) => d.total)]);

        let points = g.selectAll(".point").data(myData); //update

        let pointsEnter = points.enter().append("rect").attr("class", "point");

        points
          .merge(pointsEnter) //Enter + Update
          .attr("x", (d) => x(d.label))
          .attr("y", (d) => y(d.total))
          .attr("width", (d) => x.bandwidth())
          .attr("height", (d) => height - y(d.total))

          .style("fill", "steelblue");

        points.exit().remove();

        g.select(".x.axis")
          .call(window.d3.axisBottom(x))
          .attr("transform", "translate(0, " + height + ")")
          .style("font-size", "10px");

        g.select(".y.axis").call(window.d3.axisLeft(y));
      }

      update(myData);
    }

    barChart("#viz");
  };
  updateChartFour = (data) => {
    var d3 = window.d3;
    var margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 240 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
      .select("#ziz")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //Read the data
    var margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 240 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
      .select("#ziz")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let lin = [];
    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    months.forEach((rec) => {
      lin.push({ month: rec, value: 0 });
    });
    data.forEach((d) => {
      // Oct 23
      var dateParts = d.prodDate.split("-");

      // month is 0-based, that's why we need dataParts[1] - 1
      var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
      let dt = new Date(dateObject);
      console.log("Month", months[dt.getMonth()]);
      let mon = dt.getMonth() + 1;
      lin.forEach((r) => {
        if (r.month == mon) {
          //console.log('here')
          r.value += 1;
        }
      });
    });
    console.log(lin);
    var x = d3
      .scaleLinear()
      .domain(
        d3.extent(lin, function (d) {
          console.log("m----", d.month, "---", d.value);
          return d.month;
        })
      )
      .range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(lin, function (d) {
          console.log("efsd" + d.value);
          return +d.value;
        }),
      ])
      .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));
    svg.append("g").call(d3.axisLeft(y));

    // Add the line
    svg
      .append("path")
      .datum(lin)
      .attr("fill", "none")
      .attr("stroke", "orange")
      .attr("stroke-width", 2)

      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            console.log("m----", d.month);
            return x(d.month);
          })
          .y(function (d) {
            return y(d.value);
          })
      )
      .style("font-size", "2px");
  };

  fetchSunChartData(data) {
    let res = {
      name: "Projects",
      children: [
        { name: "Line of Business", children: [], size: 3000 },
        { name: "Phase", children: [], size: 3000 },
        { name: "Solutiontech.", children: [], size: 3000 },
        { name: "Capabilities", children: [], size: 3000 },
      ],
    };
    let lob = this.state.lob;
    let phase = this.state.phase;
    let sols = this.state.solutionTechnologiesUsed;
    let caps = this.state.capabilities;

    lob.forEach((l) => {
      res.children[0].children.push({
        name: l,
        children: [],
        size: 500000,
      });
    });

    phase.forEach((l) => {
      res.children[1].children.push({
        name: l,
        children: [],
        size: 500000,
      });
    });

    sols.forEach((l) => {
      res.children[2].children.push({
        name: l,
        children: [],
        size: 500000,
      });
    });

    caps.forEach((l) => {
      res.children[3].children.push({
        name: l,
        children: [],
        size: 500000,
      });
    });

    for (let i = 0; i < lob.length; i++) {
      data.forEach((rec) => {
        if (rec.lineOfBusiness == lob[i]) {
          res.children[0].children[i].children.push({
            name: rec.name,
            children: [],
            size: 50000 * i * Math.random(),
          });
        }
      });
    }
    for (let i = 0; i < phase.length; i++) {
      data.forEach((rec) => {
        if (rec.phase == phase[i]) {
          res.children[1].children[i].children.push({
            name: rec.name,
            children: [],
            size: 50000 * i * Math.random(),
          });
        }
      });
    }
    for (let i = 0; i < sols.length; i++) {
      data.forEach((rec) => {
        if (rec.solustionTechnologiesUsed == sols[i]) {
          res.children[2].children[i].children.push({
            name: rec.name,
            children: [],
            size: 50000 * i * Math.random(),
          });
        }
      });
    }
    for (let i = 0; i < caps.length; i++) {
      data.forEach((rec) => {
        if (rec.capabilities == caps[i]) {
          res.children[3].children[i].children.push({
            name: rec.name,
            children: [],
            size: 50000 * i * Math.random(),
          });
        }
      });
    }
    sundata = res;
  }
  sunChartD3(data) {
    this.fetchSunChartData(data);
    var d3 = window.d3;
    var width = 100;
    var height = 100;
    var radius = Math.min(width, height) / 2;

    var maxRadius = Math.min(width, height) / 2 - 5;

    const formatNumber = d3.format(",d");

    const x = d3
      .scaleLinear()
      .range([0, 2 * Math.PI])
      .clamp(true);

    const y = d3.scaleSqrt().range([maxRadius * 0.1, maxRadius]);

    const color = d3.scaleOrdinal(d3.schemeCategory20);

    const partition = d3.partition();

    const arc = d3
      .arc()
      .startAngle((d) => x(d.x0))
      .endAngle((d) => x(d.x1))
      .innerRadius((d) => Math.max(0, y(d.y0)))
      .outerRadius((d) => Math.max(0, y(d.y1)));

    const middleArcLine = (d) => {
      const halfPi = Math.PI / 2;
      const angles = [x(d.x0) - halfPi, x(d.x1) - halfPi];
      const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);

      const middleAngle = (angles[1] + angles[0]) / 2;
      const invertDirection = middleAngle > 0 && middleAngle < Math.PI; // On lower quadrants write text ccw
      if (invertDirection) {
        angles.reverse();
      }

      const path = d3.path();
      path.arc(0, 0, r, angles[0], angles[1], invertDirection);
      return path.toString();
    };

    const textFits = (d) => {
      const CHAR_SPACE = 6;

      const deltaAngle = x(d.x1) - x(d.x0);
      const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);
      const perimeter = r * deltaAngle;

      return d.data.name.length * CHAR_SPACE < perimeter;
    };

    const svg = d3
      .select("#chart")
      .append("svg")
      .style("width", "700")
      .style("height", "700")
      .attr("viewBox", `${-width / 2} ${-height / 2} ${width} ${height}`)
      .on("click", () => focusOn()); // Reset zoom on canvas click

    //this.fetchSunChartData("jj");

    var root = d3.hierarchy(sundata);
    root.sum((d) => d.size);
    console.log("root", root);

    const slice = svg.selectAll("g.slice").data(partition(root).descendants());

    slice.exit().remove();

    const newSlice = slice
      .enter()
      .append("g")
      .attr("class", "slice")
      .on("click", (d) => {
        d3.event.stopPropagation();
        focusOn(d);
      });

    newSlice
      .append("title")
      .text((d) => d.data.name + "\n" + formatNumber(d.value));

    newSlice
      .append("path")
      .attr("class", "main-arc")
      .style("fill", (d) => color((d.children ? d : d.parent).data.name))
      .attr("d", arc);

    newSlice
      .append("path")
      .attr("class", "hidden-arc")
      .attr("id", (_, i) => `hiddenArc${i}`)
      .attr("d", middleArcLine);

    const text = newSlice
      .append("text")
      .attr("display", (d) => (textFits(d) ? null : "none"));

    // Add white contour
    text
      .append("textPath")
      .attr("startOffset", "50%")
      .attr("xlink:href", (_, i) => `#hiddenArc${i}`)
      .text((d) => d.data.name)
      .style("fill", "none")
      .style("stroke", "#fff")
      .style("stroke-width", 5)
      .style("stroke-linejoin", "round");

    text
      .append("textPath")
      .attr("startOffset", "50%")
      .attr("xlink:href", (_, i) => `#hiddenArc${i}`)
      .text((d) => d.data.name);

    function focusOn(d = { x0: 0, x1: 1, y0: 0, y1: 1 }) {
      // Reset to top-level if no data point specified

      const transition = svg
        .transition()
        .duration(500)
        .tween("scale", () => {
          const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
            yd = d3.interpolate(y.domain(), [d.y0, 1]);
          return (t) => {
            x.domain(xd(t));
            y.domain(yd(t));
          };
        });

      transition.selectAll("path.main-arc").attrTween("d", (d) => () => arc(d));

      transition
        .selectAll("path.hidden-arc")
        .attrTween("d", (d) => () => middleArcLine(d));

      transition
        .selectAll("text")
        .attrTween("display", (d) => () => (textFits(d) ? null : "none"));

      moveStackToFront(d);

      //

      function moveStackToFront(elD) {
        svg
          .selectAll(".slice")
          .filter((d) => d === elD)
          .each(function (d) {
            this.parentNode.appendChild(this);
            if (d.parent) {
              moveStackToFront(d.parent);
            }
          });
      }
    }
  }

  updateChartFive = (dat) => {
    let ddata = [
      ["account-account-account-account-account-account", 5],
      ["account-account-account-account-account-end", 10],
    ];

    document.querySelector("#chart").innerHTML =
      "<div id='explanation' style={{visibility:'hidden',display:'block'}}><span id='percentage'></span><br/>-</div>";

    function sunburst() {
      // Dimensions of sunburst.
      var width = 300;
      var height = 300;
      var radius = Math.min(width, height) / 2;

      // Breadcrumb dimensions: width, height, spacing, width of tip/tail.
      var b = {
        w: 75,
        h: 30,
        s: 3,
        t: 10,
      };

      // Mapping of step names to colors.
      var colors = {
        home: "#5687d1",
        product: "#7b615c",
        search: "#de783b",
        account: "#6ab975",
        other: "#a173d1",
        end: "#bbbbbb",
      };

      // Total size of all segments; we set this later, after loading the data.
      var totalSize = 0;

      var vis = window.d3
        .select("#chart")
        .append("svg:svg")
        .attr("width", width)
        .attr("height", height)
        .append("svg:g")
        .attr("id", "container")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      var partition = window.d3
        .partition()
        .size([2 * Math.PI, radius * radius]);

      var arc = window.d3
        .arc()
        .startAngle(function (d) {
          return d.x0;
        })
        .endAngle(function (d) {
          return d.x1;
        })
        .innerRadius(function (d) {
          return Math.sqrt(d.y0);
        })
        .outerRadius(function (d) {
          return Math.sqrt(d.y1);
        });

      // Use window.d3.text and window.d3.csvParseRows so that we do not need to have a header
      // row, and can receive the csv as an array of arrays.

      var csv = ddata;
      var json = buildHierarchy(csv);
      createVisualization(json);

      // Main function to draw and set up the visualization, once we have the data.
      function createVisualization(json) {
        // Basic setup of page elements.
        initializeBreadcrumbTrail();
        // drawLegend();
        // window.d3.select("#togglelegend").on("click", toggleLegend);

        // Bounding circle underneath the sunburst, to make it easier to detect
        // when the mouse leaves the parent g.
        vis.append("svg:circle").attr("r", radius).style("opacity", 0);

        // Turn the data into a window.d3 hierarchy and calculate the sums.
        var root = window.d3
          .hierarchy(json)
          .sum(function (d) {
            return d.size;
          })
          .sort(function (a, b) {
            return b.value - a.value;
          });

        // For efficiency, filter nodes to keep only those large enough to see.
        var nodes = partition(root)
          .descendants()
          .filter(function (d) {
            return d.x1 - d.x0 > 0.005; // 0.005 radians = 0.29 degrees
          });

        var path = vis
          .data([json])
          .selectAll("#chart path")
          .data(nodes)
          .enter()
          .append("svg:path")
          .attr("display", function (d) {
            return d.depth ? null : "none";
          })
          .attr("d", arc)
          .attr("fill-rule", "evenodd")
          .style("fill", function (d) {
            return colors[d.data.name];
          })
          .style("opacity", 1)
          .on("mouseover", mouseover);

        // Add the mouseleave handler to the bounding circle.
        window.d3.select("#container").on("mouseleave", mouseleave);

        // Get total size of the tree = value of root node from partition.
        totalSize = path.datum().value;
      }

      // Fade all but the current sequence, and show it in the breadcrumb trail.
      function mouseover(d) {
        var percentage = ((100 * d.value) / totalSize).toPrecision(3);
        var percentageString = percentage + "%";
        if (percentage < 0.1) {
          percentageString = "< 0.1%";
        }

        window.d3.select("#chart #percentage").text(percentageString);

        window.d3.select("#chart #explanation").style("visibility", "");

        var sequenceArray = d.ancestors().reverse();
        sequenceArray.shift(); // remove root node from the array
        updateBreadcrumbs(sequenceArray, percentageString);

        // Fade all the segments.
        window.d3.selectAll("#chart path").style("opacity", 0.3);

        // Then highlight only those that are an ancestor of the current segment.
        vis
          .selectAll("path")
          .filter(function (node) {
            return sequenceArray.indexOf(node) >= 0;
          })
          .style("opacity", 1);
      }

      // Restore everything to full opacity when moving off the visualization.
      function mouseleave(d) {
        // Hide the breadcrumb trail
        window.d3.select("#trail").style("visibility", "hidden");

        // Deactivate all segments during transition.
        window.d3.selectAll("#chart path").on("mouseover", null);

        // Transition each segment to full opacity and then reactivate it.
        window.d3
          .selectAll("#chart path")
          .transition()
          .duration(1000)
          .style("opacity", 1)
          .on("end", function () {
            window.d3.select(this).on("mouseover", mouseover);
          });

        window.d3.select("#explanation").style("visibility", "hidden");
      }

      function initializeBreadcrumbTrail() {
        // Add the svg area.
        var trail = window.d3
          .select("#aad")
          .append("svg:svg")
          .attr("width", width)
          .attr("height", 50)
          .attr("id", "trail");
        // Add the label at the end, for the percentage.
        trail.append("svg:text").attr("id", "endlabel").style("fill", "#000");
      }

      // Generate a string that describes the points of a breadcrumb polygon.
      function breadcrumbPoints(d, i) {
        var points = [];
        points.push("0,0");
        points.push(b.w + ",0");
        points.push(b.w + b.t + "," + b.h / 2);
        points.push(b.w + "," + b.h);
        points.push("0," + b.h);
        if (i > 0) {
          // Leftmost breadcrumb; don't include 6th vertex.
          points.push(b.t + "," + b.h / 2);
        }
        return points.join(" ");
      }

      // Update the breadcrumb trail to show the current sequence and percentage.
      function updateBreadcrumbs(nodeArray, percentageString) {
        // Data join; key function combines name and depth (= position in sequence).
        var trail = window.d3
          .select("#trail")
          .selectAll("g")
          .data(nodeArray, function (d) {
            return d.data.name + d.depth;
          });

        // Remove exiting nodes.
        trail.exit().remove();

        // Add breadcrumb and label for entering nodes.
        var entering = trail.enter().append("svg:g");

        entering
          .append("svg:polygon")
          .attr("points", breadcrumbPoints)
          .style("fill", function (d) {
            return colors[d.data.name];
          });

        entering
          .append("svg:text")
          .attr("x", (b.w + b.t) / 2)
          .attr("y", b.h / 2)
          .attr("dy", "0.35em")
          .attr("text-anchor", "middle")
          .text(function (d) {
            return d.data.name;
          });

        // Merge enter and update selections; set position for all nodes.
        entering.merge(trail).attr("transform", function (d, i) {
          return "translate(" + i * (b.w + b.s) + ", 0)";
        });

        // Now move and update the percentage at the end.
        window.d3
          .select("#trail")
          .select("#endlabel")
          .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
          .attr("y", b.h / 2)
          .attr("dy", "0.35em")
          .attr("text-anchor", "middle")
          .text(percentageString);

        // Make the breadcrumb trail visible, if it's hidden.
        window.d3.select("#trail").style("visibility", "");
      }

      // function drawLegend() {

      // // Dimensions of legend item: width, height, spacing, radius of rounded rect.
      // var li = {
      //     w: 75, h: 30, s: 3, r: 3
      // };

      // var legend = window.d3.select("#legend").append("svg:svg")
      //     .attr("width", li.w)
      //     .attr("height", window.d3.keys(colors).length * (li.h + li.s));

      // var g = legend.selectAll("g")
      //     .data(window.d3.entries(colors))
      //     .enter().append("svg:g")
      //     .attr("transform", function(d, i) {
      //             return "translate(0," + i * (li.h + li.s) + ")";
      //         });

      // g.append("svg:rect")
      //     .attr("rx", li.r)
      //     .attr("ry", li.r)
      //     .attr("width", li.w)
      //     .attr("height", li.h)
      //     .style("fill", function(d) { return d.value; });

      // g.append("svg:text")
      //     .attr("x", li.w / 2)
      //     .attr("y", li.h / 2)
      //     .attr("dy", "0.35em")
      //     .attr("text-anchor", "middle")
      //     .text(function(d) { return d.key; });
      // }

      // Take a 2-column CSV and transform it into a hierarchical structure suitable
      // for a partition layout. The first column is a sequence of step names, from
      // root to leaf, separated by hyphens. The second column is a count of how
      // often that sequence occurred.
      function buildHierarchy(csv) {
        var root = { name: "root", children: [] };
        for (var i = 0; i < csv.length; i++) {
          var sequence = csv[i][0];
          var size = +csv[i][1];
          if (isNaN(size)) {
            // e.g. if this is a header row
            continue;
          }
          var parts = sequence.split("-");
          var currentNode = root;
          for (var j = 0; j < parts.length; j++) {
            var children = currentNode["children"];
            var nodeName = parts[j];
            var childNode;
            if (j + 1 < parts.length) {
              // Not yet at the end of the sequence; move down the tree.
              var foundChild = false;
              for (var k = 0; k < children.length; k++) {
                if (children[k]["name"] === nodeName) {
                  childNode = children[k];
                  foundChild = true;
                  break;
                }
              }
              // If we don't already have a child node for this branch, create it.
              if (!foundChild) {
                childNode = { name: nodeName, children: [] };
                children.push(childNode);
              }
              currentNode = childNode;
            } else {
              // Reached the end of the sequence; create a leaf node.
              childNode = { name: nodeName, size: size };
              children.push(childNode);
            }
          }
        }
        return root;
      }
    }

    sunburst();
  };
  computeKpis(data) {
    let ideationSolutionNumber = 0;
    let developmentSolutionNumber = 0;
    let productionSolutionNumber = 0;
    let retiredSolutionNumber = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].phase === "Ideation") {
        ideationSolutionNumber = ideationSolutionNumber + 1;
      } else if (data[i].phase === "Development") {
        developmentSolutionNumber = developmentSolutionNumber + 1;
      } else if (data[i].phase === "Production") {
        productionSolutionNumber = productionSolutionNumber + 1;
      } else if (data[i].phase === "Retired") {
        retiredSolutionNumber = retiredSolutionNumber + 1;
      }
    }
    this.setState({
      ideationSolutionNumber,
      developmentSolutionNumber,
      productionSolutionNumber,
      retiredSolutionNumber,
    });
  }
  filterOut() {
    var d3 = window.d3;

    let lob = this.state.lobFilters;
    let phase = this.state.phaseFilter;
    let solutionTechnologiesUsed = this.state.solutionTechnologiesUsedFilter;
    let capabilities = this.state.capabilitiesFilter;
    console.log(lob, phase, solutionTechnologiesUsed, capabilities);
    let result = mockData;
    if (
      lob == "" &&
      phase == "" &&
      solutionTechnologiesUsed == "" &&
      capabilities == ""
    ) {
      alert("Select at least one filter");
      return;
    }
    if (lob != "") {
      result = mockData.filter((e) => e.lineOfBusiness == lob);
    }
    if (phase != "") {
      result = result.filter((e) => e.phase == phase);
    }
    if (solutionTechnologiesUsed != "") {
      result = result.filter(
        (e) => e.solutionTechnologiesUsed == solutionTechnologiesUsed
      );
    }
    if (capabilities != "") {
      result = result.filter((e) => e.capabilities == capabilities);
    }

    realData = result;
    if (result.length == 0) {
      alert("No matches at all for the filter!! Resetting filters");
      this.resetFilters();
      return;
    }
    d3.selectAll("svg > *").remove();
    d3.select("#ziz").empty();
    console.log(realData);
    setTimeout(() => {
      this.computeKpis(realData);
      this.updateCharts(result);
    }, 1000);
  }
  resetFilters() {
    var d3 = window.d3;
    d3.selectAll("svg > *").remove();
    setTimeout(() => {
      this.setState({
        lobFilters: "",
        phaseFilter: "",
        solutionTechnologiesUsedFilter: "",
        capabilitiesFilter: "",
      });
      realData = mockData;
      this.updateCharts(realData);
      this.updateChartOne(realData);
      this.computeKpis(mockData);
    }, 1000);
  }
  updateCharts(data) {
    // burstDataReady();
    this.sunChartD3(data);
    //this.plotSunchart();
    this.updateChartOne(data);
    this.updateChartTwo(data);
    this.updateChartThree(data);
    this.updateChartFour(data);
  }

  render() {
    //this.fetchSunChartData();
    return (
      <Container fluid="true">
        <Jumbotron>
          <Row>
            <div className="item" id="topbar">
              <Container>
                <div id="top">
                  <Row id="toppy" xl={8}>
                    <Col>
                      <div>
                        <br></br>
                        <Row>
                          <Button
                            onClick={this.filterOut.bind(this)}
                            variant="success"
                          >
                            Filter
                          </Button>
                        </Row>
                        <br></br>
                        <Row>
                          <Button
                            onClick={this.resetFilters.bind(this)}
                            variant="danger"
                          >
                            Reset
                          </Button>
                        </Row>
                      </div>
                    </Col>
                    <Col>
                      <Col>
                        <Row>
                          <FormLabel>Line Of Business</FormLabel>
                        </Row>
                        <Row>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              {!this.state.lobFilters &&
                                "Select Line of Business"}
                              {this.state.lobFilters && this.state.lobFilters}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              {this.state.lob.map((cap) => (
                                <Dropdown.Item
                                  key={cap}
                                  onSelect={() => {
                                    this.setState({ lobFilters: cap });
                                    console.log(cap);
                                  }}
                                >
                                  {cap}
                                </Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </Row>
                      </Col>
                    </Col>
                    <Col>
                      <Row>
                        <FormLabel>Phase</FormLabel>
                      </Row>
                      <Row>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            {!this.state.phaseFilter && "Select Phase"}
                            {this.state.phaseFilter && this.state.phaseFilter}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {this.state.phase.map((cap) => (
                              <Dropdown.Item
                                key={cap}
                                onSelect={() => {
                                  this.setState({ phaseFilter: cap });
                                  console.log(cap);
                                }}
                              >
                                {cap}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <FormLabel>Soln. Technology Used</FormLabel>
                      </Row>
                      <Row>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            {!this.state.solutionTechnologiesUsedFilter &&
                              "Select Tech."}
                            {this.state.solutionTechnologiesUsedFilter &&
                              this.state.solutionTechnologiesUsedFilter}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {this.state.solutionTechnologiesUsed.map((cap) => (
                              <Dropdown.Item
                                key={cap}
                                onSelect={() => {
                                  this.setState({
                                    solutionTechnologiesUsedFilter: cap,
                                  });
                                  console.log(cap);
                                }}
                              >
                                {cap}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <FormLabel>Capabilities</FormLabel>
                      </Row>
                      <Row>
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                          >
                            {!this.state.capabilitiesFilter &&
                              "Select Capabilities"}
                            {this.state.capabilitiesFilter &&
                              this.state.capabilitiesFilter}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            title="Dropdowna"
                            onSelect={function (evt) {
                              console.log(evt);
                            }}
                          >
                            {this.state.capabilities.map((cap) => (
                              <Dropdown.Item
                                key={cap}
                                onSelect={() => {
                                  this.setState({ capabilitiesFilter: cap });
                                  console.log(cap);
                                }}
                              >
                                {cap}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Row>
                    </Col>
                    <Col xl="2"></Col>
                  </Row>

                  <Row>
                    <div className="main-wrapper">
                      <div className="item yellowed">
                        <div className="inner-sm-card ">
                          Solutions in Ideation
                        </div>
                        <div className="inner-sm-card-no">
                          {this.state.ideationSolutionNumber}
                        </div>
                      </div>
                      <div className="item oranged">
                        <div className="inner-sm-card">
                          Solutions in Development
                        </div>
                        <div className="inner-sm-card-no">
                          {this.state.developmentSolutionNumber}
                        </div>
                      </div>
                      <div className="item greened">
                        <div className="inner-sm-card">
                          Solutions in Production
                        </div>
                        <div className="inner-sm-card-no">
                          {this.state.productionSolutionNumber}
                        </div>
                      </div>
                      <div className="item red">
                        <div className="inner-sm-card">Solutions Retired</div>
                        <div className="inner-sm-card-no">
                          {this.state.retiredSolutionNumber}
                        </div>
                      </div>

                      <div className="side-item">
                        <div id="sequence"></div>
                        <div className="item">
                          <svg width="550" height="500" id="chart"></svg>
                        </div>
                        <div className="item">
                          <svg width="500" height="350">
                            <text>PlaceHolder</text>
                          </svg>
                        </div>
                      </div>
                      <div className="x2item">
                        <div id="my_dataviz"></div>
                      </div>
                      <div className="x2item">
                        <div id="stacked-bar"></div>
                      </div>
                      <div className="x2item">
                        <svg width="240" height="200" id="viz"></svg>
                      </div>
                      <div className="x2item" id="line-chart">
                        <svg width="240" height="200" id="ziz"></svg>
                      </div>

                      <div className="bottom-left">
                        <div
                          className="ag-theme-alpine"
                          style={{ height: "160%", width: "100%" }}
                        >
                          <AgGridReact
                            pagination={true}
                            paginationPageSize="5"
                            animateRows={true}
                            columnDefs={this.state.columnDefs}
                            rowData={this.state.rowData}
                            defaultColDef={{
                              resizable: true,
                              sortable: true,
                              filter: true,
                            }}
                          ></AgGridReact>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
                <div className="bottom-right">
                  <Col id="grid-table"></Col>
                </div>
                <div></div>
              </Container>
            </div>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
