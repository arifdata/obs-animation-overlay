import {Circle, makeScene2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create your animations here
  view.fill('#091e26'); //background color

  const circle = createRef<Circle>();

  view.add(<Circle ref={circle} size={100} fill={'#0000ff'} />);

  yield* circle().scale(2, 2).to(1, 2);
});
