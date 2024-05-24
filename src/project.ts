import {makeProject} from '@motion-canvas/core';

// import example from './scenes/example?scene'; //example scene
//import starting_soon from './scenes/starting_soon_scene?scene';
// import be_right_back from './scenes/be_right_back?scene';
import stream_is_ending from './scenes/stream_is_ending?scene';

import './global.css';

export default makeProject({
  //scenes: [starting_soon],
  scenes: [stream_is_ending],
});
