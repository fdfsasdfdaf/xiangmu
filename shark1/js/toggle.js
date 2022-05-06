//放大镜
const MINI_WIDTH = 450,
    MASK_WIDTH = 303.75,
    MAX_WIDTH = 540;
var mini, mask, max, imgCon, left, right, prev;

init();

function init() {
    mini = document.querySelector(".mini");
    mask = document.querySelector(".mask");
    max = document.querySelector(".max");
    imgCon = document.querySelector(".img-con");
    left = document.querySelector(".left");
    right = document.querySelector(".right");
    mini.addEventListener("mouseenter", mouseHandler);
    mini.addEventListener("mouseleave", mouseHandler);
    imgCon.addEventListener("mouseover", imgMouseHandler);
    left.addEventListener("click", bnClickHandler)
    right.addEventListener("click", bnClickHandler)
        // 抛发事件，处理当刚开始的时候设定默认选中第一个小图片，并且激活切换大图的背景图
    var evt = new MouseEvent("mouseover", {
        bubbles: true
    });
    imgCon.firstElementChild.dispatchEvent(evt);
}

function mouseHandler(e) {
    // mask.style.display=max.style.display=e.type==="mouseenter" ? "block" :"none";
    if (e.type === "mouseenter") {
        // 当鼠标进入mini时，显示mask和max，并且侦听鼠标在mini移动事件
        mask.style.display = "block";
        max.style.display = "block";
        mini.addEventListener("mousemove", mouseHandler);
    } else if (e.type === "mouseleave") {
        // 当鼠标离开mini时，隐藏mask和max，并且删除侦听鼠标在mini移动事件
        mask.style.display = "none";
        max.style.display = "none";
        mini.removeEventListener("mousemove", mouseHandler);
    } else if (e.type === "mousemove") {
        // 当鼠标移动时，获取mini相对视口的矩形范围，包括坐标
        // maskMove(e.offsetX, e.offsetY);
        var rect = mini.getBoundingClientRect();
        // 用当前鼠标相对视口的坐标-mini相对视口的坐标
        maskMove(e.clientX - rect.x, e.clientY - rect.y)
    }

}

function maskMove(x, y) {
    // 将mask的放在鼠标的中间，就是减去mask一半宽度
    x = x - MASK_WIDTH / 2;
    y = y - MASK_WIDTH / 2;
    // 限制xy边界
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > MINI_WIDTH - MASK_WIDTH) x = MINI_WIDTH - MASK_WIDTH;
    if (y > MINI_WIDTH - MASK_WIDTH) y = MINI_WIDTH - MASK_WIDTH;
    // 设置mask的坐标为x，y
    Object.assign(mask.style, {
        left: x + "px",
        top: y + "px"
    });
    // 设置max的背景图坐标与x,y相反，乘以相对比例
    Object.assign(max.style, {
        backgroundPositionX: -x * MAX_WIDTH / MASK_WIDTH + "px",
        backgroundPositionY: -y * MAX_WIDTH / MASK_WIDTH + "px"
    })
}

function imgMouseHandler(e) {
    if (e.target.nodeName !== "IMG") return;
    // 当鼠标经过小图，切换小图边线
    changePrev(e.target);
    // 并且将小图地址去除icon_这个字符替换给mini和max的背景图
    mini.style.backgroundImage = max.style.backgroundImage = `url(${e.target.src.replace(/icon_/,"")})`
}

// 切换边框线
function changePrev(elem) {
    if (prev) {
        prev.style.borderColor = "transparent"
    }
    prev = elem;
    prev.style.borderColor = "red";
}

// 当点击左右按钮时，让图片容器挪动到指定位置
function bnClickHandler(e) {
    if (this === left) {
        imgCon.style.left = "0px";
    } else {
        imgCon.style.left = "-380px"
    }
}

//tab栏切换
var ul = document.querySelector(".nav-tabs");
ul.onclick = function(e) {
    if (e.target.nodeName === "UL") return;
    var li;
    if (e.target.nodeName === "A") li = e.target.parentElement;
    else li = e.target;
    var prev = document.querySelector("[active]");
    prev.removeAttribute("active");
    li.setAttribute("active", "");
}

//微信二维码显示
//遮罩
//弹出隐藏层
// function ShowDiv(show_outer, bg_mask) {
//     document.getElementById(show_outer).style.display = 'block';
//     document.getElementById(bg_mask).style.display = 'block';
//     var bgmask = document.getElementById(bg_mask);
//     bgmask.style.width = document.body.scrollWidth;
//     // bgdiv.style.height = $(document).height();
//     // $("#" + bg_mask).height($(document).height());
// };
//关闭弹出层
// function CloseDiv(show_div, bg_div) {
//     document.getElementById(show_div).style.display = 'none';
//     document.getElementById(bg_div).style.display = 'none';
// };