class problem {

    basew = 'http://localhost:3000/posts'
    constructor() {
        //调用获取数据的方法
        this.getda();
        this.b();

    }
    b(){
        
        this.$('.car-list1').addEventListener('click', this.distribueEve.bind(this));

        this.$('.icon-select-col1 input').addEventListener('click', this.clickAllChecked.bind(this));

    }
    async getda() {
        let { data, status } = await axios.get(this.basew)
        // console.log(data,status);
        if (status != 200) {
            throw new Error('请求失败');
        }
        // console.log(data);
        let tr = '';
        data.forEach(ele => {
            tr += `
            
            <tr id="${ele.id}" class="car-list">
 <td class="t-l" width="188">
          <label for="select-0" class="checkboxCol active">
              <div class="icon-select-col">
              <input type="checkbox" class="select-col">

               <i class="icon-select"></i>
                   </div>
                    <span></span>
                 
                 </td>
                 <td width="70">
               <div class="img-col">
             <img src='${ele.img}'>
             </div>
          </td>
           <td width="246">
           <p class="pro-name ">${ele.title}</p>
             <p class="pro-desc"></p>
              </td>
             <td width="134" class="itxt">1</td>
            <td width="134">￥
            <span class="sum">${ele.pos}</span></td>
              <td width="134">待付款</td>
            
            <td width="10" calss="conta">
            <a>删除</a>
            </td>
         
            </tr>
          
             `
        });
        // console.log(tr);
        problem.$('tbody').innerHTML = tr
        // console.log(tbody);
    }
    //绑定事件

    //获取节点的方法
    static $(ele, all = false) {
        return all ? document.querySelectorAll(ele) : document.querySelector(ele)
    }
    //删除
    distribueEve({ target }) {
        //判断是否有conta的类

        if (target.nodeName == "A") {
            // console.log(target); 
            // 获取商品id
            let trobj = target.parentNode.parentNode;
            console.log(trobj);
            // trobj.remove()
            axios.delete('http://localhost:3000/posts' + '/' + trobj.id).then(() => {

                trobj.remove()
                this.getNumPriceGoods()
            })


        } 

// 判断点击是否为单个商品的选中按钮
            if (target.classList.contains('select-col')) {
              // console.log(target);
           this.getOneGoodsCheck(target);
            // 统计商品数量和价格的方法
             this.getNumPriceGoods()
              }

    }

     // 单个商品的选中按钮的回调
     getOneGoodsCheck(target) {
      //如果是取消,则直接让全选取消
      // console.log(target.checked);
      if (!target.checked) {
        this.$('.icon-select-col1 input').checked = false;
        return ;
      }
  
      // console.log(target.checked);
      // 如果点击的是选中,则返回true
      if (target.checked) {
        // 选中页面中,没有被选中的商品
        // console.log(this.$('.select-col'));
        let res = Array.from(this.$('.select-col')).find(checkbox => {
          // 没有被选中,状态为false
          // console.log(checkbox.checked);
          return !checkbox.checked
  
        });
        // console.log(res);
        if(!res)this.$('.icon-select-col1 input').checked = true; 
      }
  
  
    }

  // 获取页面中,所有选中商品的价格和数量
  getNumPriceGoods() {
    let goods = document.querySelectorAll('.car-list');
    // console.log(goods);

    // 保存数量和价格
    let totalNum = 0;
    let totalPrice = 0;
    // // console.log(goods);

    goods.forEach(one => {
      console.log(one.firstElementChild.firstElementChild.firstElementChild);
      // 只统计本选中的商品的价格和数量
      if (one) {
        // console.log(one);
        // 数量的获取
        
        // console.log(one.querySelector('.itxt'));
        totalNum = one.querySelector('.itxt').innerHTML - 0 + totalNum; 
        // // console.log(one.querySelector('.sum').innerHTML);
        totalPrice = one.querySelector('.sum').innerHTML - 0 + totalPrice;
      }

    });

    // console.log(totalNum, totalPrice );
    // // 设置到总计上
    this.$('.cart-bottom .cart-bottom-right .total-num').innerHTML = totalNum;

    this.$('.total-price').innerHTML = totalPrice;
// console.log(this.$('.cart-bottom .cart-bottom-right .total-num'));
  }
 
  // 全选的实现
  clickAllChecked(eve) {
    // console.log(eve.target);
    // 获取全选按钮的状态
    let checked = eve.target.checked;
    // console.log(checked);
    this.oneGoodsCheck(checked);
    // 统计数量和价格的方法
    this.getNumPriceGoods();
    // console.log(this);
  }

  // 设置单个商品的选中状态
  oneGoodsCheck(checkStatus) {
    let goodsList = this.$('.car-list');
    
    goodsList.forEach(ul => {
      // console.log(ul);
      // 找到单个商品的复选框
      ul.firstElementChild.firstElementChild.firstElementChild.firstElementChild.checked = checkStatus;

    })
   
  }
  $(tag) {
    let res = document.querySelectorAll(tag)
    return res.length == 1 ? res[0] : res;
}

}

new problem;

