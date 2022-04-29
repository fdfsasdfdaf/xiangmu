//获取节点
const ulObj = document.querySelectorAll('.slideshow ul li');
const olObj = document.querySelectorAll('.slideshow ol li');
const prev = document.querySelector('#goPrev');
const next = document.querySelector('#goNext');
// console.log(ulObj, olObj);
//设置变量
let index = 0;//要出来的图片索引
let lastIndex = 0;//要进去图片索引
let time;//定时器的返回值
//点击ol 中的li，实现图片切换
olObj.forEach((li, key) => {
    // console.log(li);
    //给li绑定点击事件
    li.onclick = function () {
        // console.log(this);
        lastIndex = index;
        index = key;
        change();
    }
});
// 点击左边按钮,上一张上一张  index值为--
prev.onclick = function () {

    lastIndex = index;
    index--;
    // console.log(index);
    // 当index值为0,则赋值最大索引
    if (index < 0) {
        index = olObj.length - 1;
    }
    change();
};
//   右边按钮,下一张,下一章  index++
next.onclick = function () {
    lastIndex = index;
    index++;
    if (index > olObj.length - 1) {
        index = 0;
    }
    change();
}
//轮播图倒计时
function autoPaly() {
    time = setInterval(() => {
        next.onclick();
    }, 3000)

}
autoPaly();

// 设置移入和移除事件
next.parentNode.onmouseover = function () {
    clearInterval(time)
}

next.parentNode.onmouseout = function () {
    autoPaly();
}
//实现图片切换，设置和取消ac类
function change() {
    // console.log(lastIndex, index);
    // 取消ol和ul中li有ac类的
    olObj[lastIndex].className = '';
    ulObj[lastIndex].className = '';

    // 设置当前选中的图片和序列号
    olObj[index].className = 'ac';
    ulObj[index].className = 'ac';
};