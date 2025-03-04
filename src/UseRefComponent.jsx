import {useRef} from 'react';
const UseRefComponent = () => {
 const boxHand = useRef(null);
 
 console.log("out:",boxHand.current);
 const firstCatHand = useRef(null);
 const secondCatHand = useRef(null);
 const thirdCatHand = useRef(null);

 function slideToFirstCat() {
   firstCatHand.current.scrollIntoView({ behavior: 'smooth' });
 }
 function slideToSecondCat() {
   secondCatHand.current.scrollIntoView({ behavior: 'smooth' });
 }
 function slideToThirdCat() {
   thirdCatHand.current.scrollIntoView({ behavior: 'smooth' });
 }
  return (
    <>
    <>
      <button onClick={slideToFirstCat}>See Cat 1</button>
      <button onClick={slideToSecondCat}>See Cat 2</button>
      <button onClick={slideToThirdCat}>See Cat 3</button>
      <div>
        <img src="https://placehold.co/1200x500" ref={firstCatHand} />
        <img src="https://placehold.co/1200x500" ref={secondCatHand} />
        <img src="https://placehold.co/1200x500" ref={thirdCatHand} />
      </div>
    </>
    </>
  );
};

export default UseRefComponent;
