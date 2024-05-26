import {Img, Line, Txt, Rect, Icon, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, range, makeRef} from '@motion-canvas/core';
import bg from '../../assets/bg.jpg';

export default makeScene2D(function* (view) {
  const rects: Rect[] = [];
  //background
  view.add(<Img src={bg} />);

    // Create some rects
  view.add(
    range(5).map(i => (
      <Rect
        ref={makeRef(rects, i)}
        width={30}
        height={30}
        x={-100 + 50 * i}
        fill="#F0F0F0"
        radius={10}
      />
    )),
  );

  const userName = createRef<Txt>();
  const startingSoonText = createRef<Txt>();

  view.add(
    <Line
      points={[
        [-680, 0],
        [-200, 0],
      ]}
      stroke={'#F0F0F0'}
      lineWidth={10}
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
      lineWidth={10}
      radius={40}
    />,
  );
  
  view.add(<Txt ref={userName} text={"ArifM Streaming"} fontFamily={'Fjalla One'} fill={'#F0F0F0'} fontSize={96} y={-250} />);
  view.add(<Txt ref={startingSoonText} text={"Starting Soon"} fontFamily={'Fjalla One'} fill={'#F0F0F0'} fontSize={72} y={-120} />);
  //view.add(<Txt text={"@arifmstreaming"} fontFamily={'Poetsen One'} fill={'#F0F0F0'} fontSize={32} y={230} x={-500} />);
  //view.add(<Txt text={"github.com"} fontFamily={'Poetsen One'} fill={'#F0F0F0'} fontSize={24} y={230} x={-150} />);
  //view.add(<Txt text={"cosmic.cetacea"} fontFamily={'Jaro'} fill={'#F0F0F0'} fontSize={32} y={230} x={170} />);
  //view.add(<Txt text={"@arifmstreaming"} fontFamily={'Poetsen One'} fill={'#F0F0F0'} fontSize={24} y={230} x={-500} />);
  view.add(
    <Icon
    y={150}
    x={-550}
    icon={'bxl:youtube'}
    size={[100, 100]}
     />
  );

  view.add(
    <Icon
    y={150}
    x={-200}
    icon={'bxl:github'}
    size={[100, 100]}
     />
  );

  view.add(
    <Icon
    y={150}
    x={130}
    icon={'bxl:instagram'}
    size={[100, 100]}
     />
  );

  view.add(
    <Icon
    y={150}
    x={450}
    icon={'bxl:tiktok'}
    size={[100, 100]}
     />
  );

  yield* all(
    //userName().scale(1.1, 2).to(1, 2),
    startingSoonText().fill('#ff0000', 2),
  );
});
