let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {
	// URL を設定
	let genre ='G001'
	let url = 'https://www.nishita-lab.org/web-contents/jsons/test.json';
	let url2='https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+genre+'.json';
	let url3='https://www.nishita-lab.org/web-contents/jsons/hotpepper/G001.json';

	// 通信開始

	axios.get(url2)
		.then(showResult)
		.catch(showError)
		.then(finish);
}


// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);

	// data.x を出力
	for(let n of data.results.shop){
		console.log(n.access);
		console.log(n.address);
		console.log(n.budget.name);
		console.log(n.catch);
		console.log(n.genre.name);
		console.log(n.name);
		console.log(n.open);
		console.log(n.station_name);
		console.log(n.subgenre_name);
	  }

}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
