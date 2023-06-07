let b1 = document.querySelector('button#print');
b1.addEventListener('click', hyoji);

function hyoji(){
    let yo = document.querySelector('input[name="genre"]');
    let g=yo.value;
    let genre='G000';
    console.log(g);
    switch(g){
            case "居酒屋":
            genre='G001';
            break;
            case "ダイニングバー・バル":
            genre='G002';
            break;
            case "創作料理":
            genre='G003';
            break;
            case "和食":
            genre='G004';
            break;
            case "洋食":
            genre='G005';
            break;
            case "イタリアン・フレンチ":
            genre='G006';
            break;
            case "中華":
            genre='G007';
            break;
            case "焼肉・ホルモン":
            genre='G008';
            break;
            case "アジア・エスニック料理":
            genre='G009';
            break;
            case "各国料理":
            genre='G010';
            break;
            case "カラオケ・パーティ":
            genre='G011';
            break;
            case "バー・カクテル":
            genre='G012';
            break;
            case "ラーメン":
            genre='G013';
            break;
            case "カフェ・スイーツ":
            genre='G014';
            break;
            case "その他グルメ":
            genre='G015';
            break;
            case "お好み焼き・もんじゃ":
            genre='G016';
            break;
            case "韓国料理":
            genre='G017';
            break;
            
    }

    console.log(genre);
	let url='https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+genre+'.json';
 
 
        let rep = document.querySelectorAll('p');
        let reh3 = document.querySelectorAll('h3');
        let reh2 = document.querySelectorAll('h2');
        for(let h of reh3){
          h.remove();
        }
        for(let h of reh2){
            h.remove();
          }
        for (let p of rep){
          p.remove();
        }
      
 
    if(genre!=="G000"){
        axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}else{
    let e=document.querySelector('div#result');
		let ekekka = document.createElement('h2');
        ekekka.textContent="検索文字列が正しくありません";
        e.insertAdjacentElement('beforeend', ekekka);

}
}
function showResult(resp) {
	let data = resp.data;
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
	console.log(data);

    
	for(let n of data.results.shop){
    
    let i=document.querySelector('div#result');
		let kekka = document.createElement('h3');
        kekka.textContent="検索結果";
        i.insertAdjacentElement('beforeend', kekka);

        let d=document.createElement('p');


        d=document.createElement('p');
        d.textContent="店の名前："+n.name;
        i.insertAdjacentElement('beforeend', d);

        d=document.createElement('p');
        d.textContent="アクセス："+n.access;
        i.insertAdjacentElement('beforeend', d);

        d=document.createElement('p');
        d.textContent="アピール："+n.catch;
        i.insertAdjacentElement('beforeend', d);

        d=document.createElement('p');
        d.textContent="予算："+n.budget.name;
        i.insertAdjacentElement('beforeend', d);
 
        d=document.createElement('p');
        d.textContent="営業情報："+n.open;
        i.insertAdjacentElement('beforeend', d);

        d=document.createElement('p');
        d.textContent="最寄駅："+n.station_name;
        i.insertAdjacentElement('beforeend', d);

        d=document.createElement('p');
        d.textContent="住所："+n.address;
        i.insertAdjacentElement('beforeend', d);

        d=document.createElement('p');
        d.textContent="ジャンル："+n.genre.name;
        i.insertAdjacentElement('beforeend', d);

        d=document.createElement('p');
        d.textContent="サブジャンル："+n.sub_genre.name;
        i.insertAdjacentElement('beforeend', d);
	  }
      i=document.querySelector('div#result');
		let owa = document.createElement('h2');
        owa.textContent="検索結果は以上です。";
        i.insertAdjacentElement('beforeend', owa);

}
function showError(err) {
	console.log(err);
}	
function finish() {
	console.log('Ajax 通信が終わりました');
}
