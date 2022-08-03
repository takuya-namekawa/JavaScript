let int1 = 1;
let str1 ="Hellow";
let str2 = "World";

let orange = 100;
let apple = 120;

if (orange < apple){
  alert('みかんの値段がりんごより安い');
}else if(orange == apple){
  alert('みかんとりんごが同じ値段');
}else{
  alert('みかんの値段がりんごより高い');
}


let max = 500;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}
alert("2を掛け続けて" + max + "を超えるのに必要だった回数は" + count + "回です");

let i;
let pum = 0;

for(i = 1; i < 11; i++){
  pum = pum + i;
}
alert('1から10まで足し算した結果は' + pum + 'です');

alert(4 + 3);
alert(8 - 5);
alert("H" + "w");
alert(str1 + str2);

let promptstr = prompt('何か好きな文字を入力してください');
alert(promptstr);

let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
alert('あなたの選んだ手は' + user_hand + 'です');