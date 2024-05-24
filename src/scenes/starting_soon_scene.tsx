import {Circle, Txt, makeScene2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create your animations here
  view.fill('#091e26'); //background color

  const circle = createRef<Circle>();
  const userName = createRef<Txt>();
  const startingSoonText = createRef<Txt>();

  view.add(<Circle ref={circle} size={100} fill={'#0000ff'} />);
  view.add(<Txt ref={userName} text={"ArifM Streaming"} fontFamily={'Poetsen One'} fill={'#FFF7FC'} fontSize={72} y={-300} />);
  view.add(<Txt ref={startingSoonText} text={"Starting Soon..."} fontFamily={'Poetsen One'} fill={'#FFF7FC'} fontSize={60} y={-200} />);

  yield* circle().scale(2, 2).to(1, 2);
});
