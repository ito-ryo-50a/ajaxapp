console.log('index.js: loaded');
// cssセレクタを使って要素を取得
const heading = document.querySelector('h2');
// h2要素のテキストを取得
const headingText = heading.textContent;
// button要素を作成
const button = document.createElement('button');
// body要素の子要素としてbutton要素を追加
document.body.appendChild(button);
