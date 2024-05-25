import {Circle, Txt, Line, Path, makeScene2D} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';
import {githubLogo, instagramLogo, tiktokLogo, youtubeLogo} from '../../utils/logo_path';

export default makeScene2D(function* (view) {
  // Create your animations here
  view.fill('#3C486B'); //background color

  const userName = createRef<Txt>();
  const startingSoonText = createRef<Txt>();
  const centerCircle = createRef<Circle>();

  view.add(<Txt ref={userName} text={"ArifM Streaming"} fontFamily={'Poetsen One'} fill={'#F0F0F0'} fontSize={80} y={-300} />);
  view.add(<Txt ref={startingSoonText} text={"Be Right Back..."} fontFamily={'Poetsen One'} fill={'#F0F0F0'} fontSize={72} y={-150} />);
  view.add(<Txt text={"@arifmstreaming"} fontFamily={'Poetsen One'} fill={'#F0F0F0'} fontSize={32} y={230} x={-500} />);
  //view.add(<Txt text={"github.com"} fontFamily={'Poetsen One'} fill={'#F0F0F0'} fontSize={24} y={230} x={-150} />);
  view.add(<Txt text={"cosmic.cetacea"} fontFamily={'Poetsen One'} fill={'#F0F0F0'} fontSize={32} y={230} x={170} />);
  //view.add(<Txt text={"@arifmstreaming"} fontFamily={'Poetsen One'} fill={'#F0F0F0'} fontSize={24} y={230} x={-500} />);
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

  view.add(
    <Path
      scale={0.2}
      fill={'#F0F0F0'}
      data={youtubeLogo}
      y={100}
      x={-550}      
    />,
  );

  view.add(
    <Path
      scale={0.2}
      fill={'#F0F0F0'}
      data={githubLogo}
      y={100}
      x={-200}      
    />,
  );

  view.add(
    <Path
      scale={0.2}
      fill={'#F0F0F0'}
      data={instagramLogo}
      y={100}
      x={130}      
    />,
  );

  view.add(
    <Path
      scale={0.2}
      fill={'#F0F0F0'}
      data={tiktokLogo}
      y={100}
      x={450}      
    />,
  );

  yield* all(
    //userName().scale(1.1, 2).to(1, 2),
    //startingSoonText().scale(0.9, 2).to(1, 2),
    centerCircle().position.x(130, 2).to(-130, 2),
    // centerCircle().fill('#F0F0F0', 2).to('#F9D949', 2),
  );
});
