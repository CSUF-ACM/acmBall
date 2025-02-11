import Game from "./Game.js";
let { Bodies, Render } = Matter;

const Camera = {
  WIDTH: window.innerWidth * 0.95,
  HEIGHT: window.innerHeight * 0.95,
  zoom: 1,
  fullScreen: false,
  lerp_coefficient: 0.03,
  /* Dummy object used for lerping */
  focusBody: Bodies.circle(0, 0, 0.1, {
    isStatic: true,
    isSensor: true,
  }),
};

Camera.setup = () => {
  Camera.focusBody.position.x = Game.ball.position.x;
  Camera.focusBody.position.y = Game.ball.position.y;
};

Camera.lerp = () => {
  /* linearly interpolates camera focus by lerp_coefficient */
  let x = (Game.ball.position.x - Camera.focusBody.position.x) * Camera.lerp_coefficient;
  let y = (Game.ball.position.y - Camera.focusBody.position.y) * Camera.lerp_coefficient
  Camera.focusBody.position.x += x;
  Camera.focusBody.position.y += y;
}

Camera.updateCamera = () => {
  /* Choose the focus target */
  let body = Camera.fullScreen ? Game.centerBody : Camera.focusBody;
  /* Linear Interpolation only if NOT fullscreen */
  Camera.fullScreen || Camera.lerp();
  /* Adjust padding of viewport */
  let divisor = Camera.fullScreen
    ? { x: Game.WIDTH / 2, y: Game.HEIGHT / 2 }
    : { x: Game.TILE_WIDTH / Camera.zoom, y: Game.TILE_HEIGHT / Camera.zoom };
  Render.lookAt(Game.render, {
    x: body.position.x,
    y: body.position.y
  }, divisor, true);
};

Camera.switchView = () => {
  Camera.fullScreen = !Camera.fullScreen;
};

// Make global
window.switchView = Camera.switchView;

export default Camera;
