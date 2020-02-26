

// Idのないものから値を取得する

var lang = document.querySelector('html').lang;

var opt;
if (lang === 'ja') {
  opt = document.querySelector('option[value="index.html"]');
}else if(lang === 'en'){
  opt = document.querySelector('option[value="indexen.html"]');
}else if(lang === 'zh'){
  opt = document.querySelector('option[value="indexzh.html"]');
}
opt.selected = true;

// htmlのlangで場合わけして、optionのところから値をとってくるようにしている
// とってきた値に対し、trueを入れることで、ブール属性になる
// ブール属性になると、この下に書いてあるコードは選択された値にURLを変えるものだから、その値のURLになる

document.getElementById('form').select.onchange = function() {
  // セレクトが変わった時に発動
  location.href = document.getElementById('form').select.value;
  }
  // プルダウンの時の場合は親要素<select>から値を取得