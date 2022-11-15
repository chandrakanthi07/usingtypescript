

export function counter (s: number=0) {
	let myLocal = s;

  const myVal = () => console.log(myLocal);
  const myAdd =  () => myLocal = myLocal+1;
  
  return [myVal,myAdd]
}

const [X, Y] = counter(2);
const [M, P] = counter(10);
const [H, J] = counter(-1);



