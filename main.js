function getNumber() {
  min = Math.ceil(1);
  max = Math.floor(10);
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  outnum = document.getElementById('result');
  console.log(outnum);
  outnum.value = randomNum;
   return randomNum;
}

function nextNum(f) {
 inputnumber = f.input_id.value;
 nextnumber = parseInt(inputnumber) + 1;  
 console.log(nextnumber);
 outnumber = document.getElementById('nextnumber');
 console.log(outnumber);
 outnumber.value = nextnumber;
  return nextnumber;
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
}

let exambutton = document.querySelector('.errorbutton');
  
function fColor(){
  if (document.getElementById('resultnum').value = 'str2') {
    document.getElementById('exambutton').classList.remove('error');}
  }
