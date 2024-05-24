import {Circle, Txt, Line, makeScene2D} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create your animations here
  view.fill('#091e26'); //background color

  const circle = createRef<Circle>();
  const userName = createRef<Txt>();
  const startingSoonText = createRef<Txt>();

  view.add(<Circle ref={circle} size={100} fill={'#0000ff'} />);
  view.add(<Txt ref={userName} text={"ArifM Streaming"} fontFamily={'Poetsen One'} fill={'#FFF7FC'} fontSize={72} y={-300} />);
  view.add(<Txt ref={startingSoonText} text={"Starting Soon..."} fontFamily={'Poetsen One'} fill={'#FFF7FC'} fontSize={60} y={-200} />);
  view.add(
    <Line
      points={[
        [-683, 0],
        [-200, 0],
      ]}
      stroke={'#FFF7FC'}
      lineWidth={15}
      radius={40}
    />,
  );
  view.add(
    <Line
      points={[
        [200, 0],
        [680, 0],
      ]}
      stroke={'#FFF7FC'}
      lineWidth={15}
      radius={40}
    />,
  );

  yield* all(
    userName().scale(1.1, 2).to(1, 2),
    startingSoonText().scale(0.8, 2).to(1, 2)
  );
});
