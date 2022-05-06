//获取节点
const ulObj = document.querySelectorAll('.slideshow ul li');
const olObj = document.querySelectorAll('.slideshow ol li');
let divobj =document.querySelector('.slideshow')
// console.log(ulObj, olObj);
//设置变量
let index = 0;//要出来的图片索引
let lastIndex = 0;//要进去图片索引
let time;//定时器的返回值
let info=false;

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
//轮播图倒计时
function autoPaly() {
    
    time = setInterval(() => {
        if(info){

            return;

        }
        lastIndex = index;
        index++;
        if (index > olObj.length - 1) {
            index = 0;
        }
        change()
    }, 3000)

}
autoPaly();

// 设置移入和移除事件
divobj.onmouseover = function () {
    clearInterval(time)
        info=true;
}

divobj.onmouseout = function () {
    autoPaly();
    info=false;
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