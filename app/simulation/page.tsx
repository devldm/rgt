import { findPathBetweenCoordinates, grid, waypoints } from "./sim";

export default function Simulation() {
  let paths = waypoints.map((waypoint) => {
    return findPathBetweenCoordinates(waypoint.start, waypoint.end, grid);
  });

  let combinedPath = paths
    .map((path, index) => {
      if (index !== 0) {
        return path.slice(1);
      }
      return path;
    })
    .flat();

  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen">
      <h1 className="text-3xl pb-6">Simulation</h1>
      <div className="grid grid-cols-10 gap-1 max-w-max">
        {grid.nodes.map((row, rowIndex: number) =>
          row.map((node, colIndex: number) => {
            const isPath = combinedPath.some(
              (coord) => coord[0] === colIndex && coord[1] === rowIndex,
            );
            const isWaypoint = waypoints.some(
              (waypoint) =>
                (waypoint.start.x === colIndex &&
                  waypoint.start.y === rowIndex) ||
                (waypoint.end.x === colIndex && waypoint.end.y === rowIndex),
            );
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`flex w-20 h-20 p-4 justify-center items-center border border-gray-300 ${isWaypoint ? "bg-purple-600" : ""} ${isPath ? "bg-blue-400" : ""} ${node.walkable ? "bg-green-400" : "bg-red-400"}`}
              >
                <span className="text-md text-black">
                  {`[${node.x}, ${node.y}]`}
                </span>
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
}
