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
 b = parseInt(input) + 1;  // у тебя было складывание строк, нужно использовать parseInt
console.log(b);
 element2 = document.getElementById('result2');
 console.log(element2);
  element2.value = b;
  return b;
}
 
function examNum(d) {
  numeric = parseInt(d.num_id.value);
  console.log(numeric);
  str = "Число входит в нужный диапазон";
  str2 = "Ошибка! Число не входит в нужный диапазон";
  getrange = document.getElementById('resultnum');
  resultnum=(1 <= numeric && numeric <= 10)? str:str2;
console.log(getrange);
getrange.value = resultnum;
return resultnum;
};
let exambutton = document.querySelector('.errorbutton');
function fColor(){
  if (document.getElementById('resultnum').value = 'str2') {
    document.getElementById('exambutton').classList.remove('error');}
  }
