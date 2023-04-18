// A small trick to walk the top, right, bottom, and left points
const dir = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // Check all the base cases
    // If the point is off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // If we hit a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // If we are at the end point, push the point into the path
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    // If we've seen this point already the return false
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // Pre recursion
    // After checking all the base cases, update the seen array, and push curr to the path
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // Recursion
    // Walk the top, left, right and bottom points from the current point
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
        ) {
            return true;
        }
    }

    // Post recursion
    // This means that the path is not viable, so pop and return false
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
