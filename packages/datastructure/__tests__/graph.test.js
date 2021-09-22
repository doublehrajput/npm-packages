import { Graph } from "../lib";

let graph = new Graph();
test("add vertex", () => {
  graph.addVertex("Delhi");

  expect(Object.keys(graph.adjencencyList)).toStrictEqual(["Delhi"]);
});

test("add edge", () => {
  graph.addEdge("Delhi", "Pune");
  graph.addEdge("Delhi", "Kolkata");
  graph.addEdge("Mumbai", "Kolkata");

  expect(Object.keys(graph.adjencencyList)).toStrictEqual([
    "Delhi",
    "Pune",
    "Kolkata",
    "Mumbai",
  ]);

  expect([...graph.adjencencyList["Delhi"]]).toStrictEqual(["Pune", "Kolkata"]);
});

test("remove edge", () => {
  graph.removeEdge("Delhi", "Pune");

  expect([...graph.adjencencyList["Delhi"]]).toStrictEqual(["Kolkata"]);
  graph.removeEdge("Mumbai", "Kolkata");
  expect([...graph.adjencencyList["Mumbai"]]).toStrictEqual([]);
});

test("remove vertex", () => {
  graph.removeVertex("Kolkata");
  expect([...graph.adjencencyList["Delhi"]]).toStrictEqual([]);
  expect(Object.keys(graph.adjencencyList)).toStrictEqual([
    "Delhi",
    "Pune",
    "Mumbai",
  ]);
});
