//获取节点
//  ('http://localhost:8888')

// const { axios } = require("./axios");

let  ulobj = document.querySelectorAll('.hotu');
 let pobj = document.querySelectorAll('.move');
// console.log(ulobj,pobj);
// axios.get('http://localhost:8888')
pobj.forEach((index,key)=>{
    index.onclick = function(){
        // index.style.display='none';
        index.innerHTML = `
        <li>
        <a href="javascript:;">
            <i>新品</i>
            <div>
                <img src="../img/hot.png" alt="">
            </div>

        </a>
        <p class="hotn">黑鲨5 Pro 中国航天版 礼盒装</p>
        <p class="hotd">航天版 礼盒装</p>
        <p class="hotp">￥5999</p>
    </li>
    <li>
    <a href="javascript:;">
        <i>新品</i>
        <div>
            <img src="../img/hot.png" alt="">
        </div>

    </a>
    <p class="hotn">黑鲨5 Pro 中国航天版 礼盒装</p>
    <p class="hotd">航天版 礼盒装</p>
    <p class="hotp">￥5999</p>
</li>
<li>
<a href="javascript:;">
    <i>新品</i>
    <div>
        <img src="../img/hot.png" alt="">
    </div>

</a>
<p class="hotn">黑鲨5 Pro 中国航天版 礼盒装</p>
<p class="hotd">航天版 礼盒装</p>
<p class="hotp">￥5999</p>
</li>
<li>
<a href="javascript:;">
    <i>新品</i>
    <div>
        <img src="../img/hot.png" alt="">
    </div>

</a>
<p class="hotn">黑鲨5 Pro 中国航天版 礼盒装</p>
<p class="hotd">航天版 礼盒装</p>
<p class="hotp">￥5999</p>
</li>
<li>
<a href="javascript:;">
    <i>新品</i>
    <div>
        <img src="../img/hot.png" alt="">
    </div>

</a>
<p class="hotn">黑鲨5 Pro 中国航天版 礼盒装</p>
<p class="hotd">航天版 礼盒装</p>
<p class="hotp">￥5999</p>
</li>
<li>
<a href="javascript:;">
    <i>新品</i>
    <div>
        <img src="../img/hot.png" alt="">
    </div>

</a>
<p class="hotn">黑鲨5 Pro 中国航天版 礼盒装</p>
<p class="hotd">航天版 礼盒装</p>
<p class="hotp">￥5999</p>
</li>


        `
 
    }
});

   
let me =document.querySelector('.icon-wode');
let gouwu =document.querySelector('.icon-gouwuche')
// console.log(me);
me.onclick=function(){
    location.assign('./login.html')
};
gouwu.onclick=function(){
    location.assign('./car.html')
};
let aobj = document.querySelectorAll('a')
// console.log(aobj);
aobj.forEach((index,ke)=>{
    // console.log(index,ke);
    index.onclick=function(){
        location.assign('./detail.html')
    };
})





