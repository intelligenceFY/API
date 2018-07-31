//jscs:disable
(function () {
//jscs:enable
//'use strict'
let cssArr = document.getElementsByTagName('script');
let { path, cssPath, headTitle, temp, cssName } = '';
for (let i in cssArr) {
  cssName = cssArr[i].getAttribute('data-css');
  headTitle = cssArr[i].getAttribute('data-title');
  if (cssName != null && cssName != undefined) {
    cssPath = '<link rel="stylesheet" href = "./../css/pages/' + cssName + '.css">';
    break;
  };
};

path = cssPath + '<link rel="stylesheet" href = "./../css/module/header.css">'
+ '<link rel="stylesheet" href = "./../css/module/footer.css">';

const html = '<!DOCTYPE html>' +
'<html lang="en">' +
'<head>' +
'<meta charset="UTF-8">' +
'<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
'<meta name="viewport" content="width=device-width, initial-scale=1">' +
'<title>' + headTitle + '</title>' +
path +
'<script src="../js/lib/jquery-3.1.1.min.js"></script>' +
'<script src="../js/pages/' + cssName + '.js"></script>' +
'</head>';
const headerTpl = () => {
    /*
	<div class="top">
		<span class="word1">API</span><span>management</span>
		<div class="mid">
			<ul>
				<li><a href="zhuye.html">首页</a></li>
				<li><a href="myproject.html">我的项目</a></li>
				<li><a href="my_group.html">我的团队</a></li>
				<li><a href="">教程</a></li>
			</ul>
		</div>
		<div class="right">
			<ul class="nav">
				<li><a href="">消息</a></li>
				<li class="drop-down">个人中心
					<ul class="drop-down-content">
						<li><a href="introduction.html">我的资料</a></li>
						<li><a href="my project.html">我的项目</a></li>
						<li><a href="my_group.html">我的团队</a></li>
						<li><a href="login.html">退出</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
    */
  };

//jscs:disable
const header = html + headerTpl.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '');
//jscs:enable
document.write(header);


})();
