import { sleep } from "../src/helpers.js";
import Tile from "../src/Tile.js";

let tile = new Tile();
let { ballStart, ballEnd } = tile;

ballStart.position = { x: 0, y: 0 };
ballStart.velocity = { x: 0, y: 0 };

ballEnd.position = { x: 0, y: 0 };
ballEnd.velocity = { x: 0, y: 0 };

// This function will run once when the tile loads for the first time
tile.setup = function () {};

// This function will run when the ball enters your tile
tile.onBallEnter = async function () {};

// This function will run once every tick while the ball is in your tile
tile.onTick = function () {};

// This function will run once everey tick, even if the ball is not in your tile
tile.onTickBackground = function () {};
