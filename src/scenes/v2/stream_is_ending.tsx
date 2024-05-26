import {Img, Line, Txt, Rect, Icon, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, range, makeRef, sequence} from '@motion-canvas/core';
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
        x={-130 + 65 * i}
        fill="#EF4040"
        radius={5}
      />
    )),
  );

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
  
  view.add(<Txt text={"ArifM Streaming"} fontFamily={'Anton'} fill={'#F0F0F0'} fontSize={96} y={-250} />);
  view.add(<Txt text={"Stream is Ending. Thanks For Watching"} fontFamily={'Anton'} fill={'#F0F0F0'} fontSize={72} y={-120} />);
  view.add(<Txt text={"@arifmstreaming"} fontFamily={'Fjalla One'} fill={'#F0F0F0'} fontSize={32} y={230} x={-520} />);
  //view.add(<Txt text={"github.com"} fontFamily={'Poetsen One'} fill={'#F0F0F0'} fontSize={24} y={230} x={-150} />);
  view.add(<Txt text={"cosmic.cetacea"} fontFamily={'Fjalla One'} fill={'#F0F0F0'} fontSize={32} y={230} x={180} />);
  view.add(<Txt text={"@cosmic_cetacea"} fontFamily={'Fjalla One'} fill={'#F0F0F0'} fontSize={32} y={230} x={500} />);
  view.add(
    <Icon
    y={160}
    x={-520}
    icon={'bxl:youtube'}
    size={[100, 100]}
     />
  );

  view.add(
    <Icon
    y={160}
    x={-175}
    icon={'bxl:github'}
    size={[100, 100]}
     />
  );

  view.add(
    <Icon
    y={160}
    x={175}
    icon={'bxl:instagram'}
    size={[100, 100]}
     />
  );

  view.add(
    <Icon
    y={160}
    x={500}
    icon={'bxl:tiktok'}
    size={[100, 100]}
     />
  );

  // yield* all(
  //   sequence(0.5, ...rects.map(rect => rect.position.y(50, 1).to(-50, 1).to(0, 1)),),
  //   all(...rects.map(rect => rect.fill('#EF4040', 0.5).to('#FFA732', 2).to('#EF4040', 0.5),)),
  //   all(...rects.map(rect => rect.radius(5, 0.5).to(30, 2).to(5, 0.5),)),
  // );

});
