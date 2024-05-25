import {makeProject} from '@motion-canvas/core';

// import example from './scenes/v1/example?scene'; //example scene
import starting_soon from './scenes/v2/starting_soon_scene?scene';
//import be_right_back from './scenes/v1/be_right_back?scene';
//import stream_is_ending from './scenes/v1/stream_is_ending?scene';

import './global.css';

export default makeProject({
  scenes: [starting_soon],
  //scenes: [stream_is_ending],
});
