function getRandomIntInclusive() {
  min = Math.ceil(1);
  max = Math.floor(10);
  a = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(a);
  element = document.getElementById('result');
  console.log(element);
  element.value = a;
   return a;
}
console.log(getRandomIntInclusive());


function nextnum() {
let input = document.getElementById('input_id');
  let b = input++;
console.log(b);
 element2 = document.getElementById('result2');
 console.log(element2);
  element2.value = b;
  return b;
}
