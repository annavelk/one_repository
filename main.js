function RandomInt() {
  min = Math.ceil(1);
  max = Math.floor(10);
  a = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(a);
  element = document.getElementById('result');
  console.log(element);
  element.value = a;
   return a;
}



function nextnum(f) {
  input = f.input_id.value;
 b = input + 1;
console.log(b);
 element2 = document.getElementById('result2');
 console.log(element2);
  element2.value = b;
  return b;
}
 
