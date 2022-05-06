class detail {
    basew = 'http://localhost:3000/posts'

    constructor() {
        // this.checkLogin()
        // 将加入购物车使用事件委托
        this.$('.proinfo').addEventListener('click', this.addCartFn.bind(this))
    }

    // 操作购物车页面,用户必须登录


    // 加入购物车的方法
    async addCartFn(eve) {
       
        if (eve.target.classList.contains('btn-black')) {
          
            axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            // 数据必须以原生的方式拼接好
            const img = document.querySelector('.img-con .img1').getAttribute('src');
            const tit = document.querySelector('.pro-name1').innerHTML;
            const pos = document.querySelector('.pro-price span').innerHTML;
            // console.log(pos);
            
            let param = `img=${img}&title=${tit}&pos=${pos}`;
            // 如果用户登录,则加数据信息添加到购物车中
            axios.post(this.basew, param).then(({ status }) => {
                // console.log(data);
                location.assign('./car.html');
           

            })

            // console.log(eve.target);



        }
    }
    $(tag) {
        let res = document.querySelectorAll(tag)
        return res.length == 1 ? res[0] : res;
    }
}

new detail