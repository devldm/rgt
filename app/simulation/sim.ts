import { coordinate, pathRoute, PFGrid } from "@/types/types";

// Setup PF, finder and grid
var PF = require("pathfinding");
export let finder = new PF.AStarFinder();
export let grid = generateGrid(10, 10);

// Coordinate and waypoint initalisation
let gridStart: coordinate = { x: 0, y: 0 };
let callBell: coordinate = { x: 2, y: 3 };
let elevator: coordinate = { x: 5, y: 5 };
let chime: coordinate = { x: 8, y: 2 };
let arrivalPoint: coordinate = { x: 9, y: 9 };

export let waypoints: pathRoute[] = [
  { start: gridStart, end: callBell },
  { start: callBell, end: elevator },
  { start: elevator, end: chime },
  { start: chime, end: arrivalPoint },
];

// UTILS
export function generateGrid(width: number, height: number): PFGrid {
  return new PF.Grid(width, height);
}

export function cloneGrid(grid: typeof PF.Grid) {
  return grid.clone();
}

export function findPathBetweenCoordinates(
  start: coordinate,
  end: coordinate,
  grid: PFGrid,
) {
  let clonedGrid = cloneGrid(grid);
  return finder.findPath(start.x, start.y, end.x, end.y, clonedGrid);
}
