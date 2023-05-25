
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log("答え（デバッグ用）:" + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b1 = document.querySelector('button#print');
b1.addEventListener('click', hantei);


function hantei() {
  let yo = document.querySelector('input[name="yosoti"]');
  let yoso =yo.value;
  kaisu++;
   let k = document.querySelector('span#kaisu'); 

  let ans = document.querySelector('span#answer'); 

  k.textContent = kaisu; 

  ans.textContent = yoso;
  let re =document.querySelector('p#result');

  console.log(kaisu+"回目の予想:   "+yoso);
  if(kaisu>3){
    re.textContent="答えは　"+kotae+"　でした.すでにゲームは終わっています";
  }else if(kotae===Number(yoso)){
    re.textContent="正解です.おめでとう!";
    kaisu+=3;
  }else if(kaisu!==3){
    if(kotae>=yoso){
      re.textContent="まちがい.答えはもっと大きいですよ";
    }else{
      re.textContent="まちがい.答えはもっと小さいですよ";
    }
  }else{
    re.textContent="まちがい.残念でした答えは"+kotae+"ですよ";
  }
}