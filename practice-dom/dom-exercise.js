//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];

//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h=document.querySelector('h2#ex42');
let p = document.createElement('p');
p.textContent = '写真表と都市の緯度経度のページです';
p.setAttribute('style','text-emphasis: sesamegreen');
h.insertAdjacentElement('afterend', p);

// 練習4-3 写真表作成プログラム
let =document.querySelector('div#phototable'); 
let i=document.querySelector('div#phototable'); 
let img1 = document.createElement('img'); 
img1.setAttribute('src','taro.png'); 
let p2=document.createElement('p'); 
p2.insertAdjacentElement('beforeend',img1); 
i.insertAdjacentElement('afterend', p2); 

let img2 = document.createElement('img'); 
img2.setAttribute('src','jiro.png'); 
let p3=document.createElement('p'); 
p3.insertAdjacentElement('beforeend',img2); 
i.insertAdjacentElement('afterend', p3); 

let img3 = document.createElement('img'); 
img3.setAttribute('src','hanako.png'); 
let p4=document.createElement('p'); 
p4.insertAdjacentElement('beforeend',img3); 
i.insertAdjacentElement('afterend', p4); 
// 練習4-4 箇条書き削除プログラム
let li = document.querySelectorAll('ul#location > li');
for(reli of li){
  reli.remove();
} 

// 練習4-5 箇条書き追加プログラム
let lo=document.querySelector('ul#location');
for(dates of data){
	let li1 = document.querySelectorAll('ul#location > li');
	li1 = document.createElement('li');
	li1.textContent = dates.name+dates.lat+dates.lng;
	lo.insertAdjacentElement('beforeend', li1); 
  }
