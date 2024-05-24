import {Circle, Txt, Line, makeScene2D} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create your animations here
  view.fill('#3C486B'); //background color

  const userName = createRef<Txt>();
  const startingSoonText = createRef<Txt>();
  const centerCircle = createRef<Circle>();

  view.add(<Txt ref={userName} text={"ArifM Streaming"} fontFamily={'Poetsen One'} fill={'#F0F0F0'} fontSize={80} y={-300} />);
  view.add(<Txt ref={startingSoonText} text={"Starting Soon..."} fontFamily={'Poetsen One'} fill={'#F0F0F0'} fontSize={72} y={-150} />);
  view.add(
    <Line
      points={[
        [-683, 0],
        [-200, 0],
      ]}
      stroke={'#F0F0F0'}
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
      stroke={'#F0F0F0'}
      lineWidth={15}
      radius={40}
    />,
  );
  view.add(
    <Circle
      ref={centerCircle}
      size={100}
      x={-130}
      fill={'#F9D949'}
    />,
  );

  yield* all(
    //userName().scale(1.1, 2).to(1, 2),
    //startingSoonText().scale(0.9, 2).to(1, 2),
    centerCircle().position.x(130, 2).to(-130, 2),
    centerCircle().fill('#F45050', 2).to('#F9D949', 2),
  );
});
