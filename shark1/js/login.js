class Login {
  constructor() {
    // 给登录按钮,绑定点击事件
    Login.$('.accountLoginBtn').onclick = this.clickFn.bind(this)


  }

  clickFn() {
    // console.log(location.search.split('=')[1]);

    // 获取页面中form表单

    // console.log(forms);
    let username = Login.$('.loginByAccount .phoneInput')
    let password = Login.$('.pwsInputGroup .pwsInput')
    //   console.log(username,password);

    // console.log(username.value, password.value);
    // 对参数进行编码
    let data = `username=${username.value}&password=${password.value}`;
    axios.post('http://localhost:8888/users/login', data).then(res => {
      // console.log(data);
      let { status, data } = res;
      // console.log(data);

      if (status == 200) { // 请求成功

        // 判断是否登录成功
        if (data.code == 1) {
     
          location.assign('../html/detail.html')
        } else {  // 登录失败,就提示输入错误
          layer.open({
            title: '登录提示'
            , content: '用户名或者密码输入错误'
          });

        }
      }

    });

  }

  static $(tag) {
    let res = document.querySelectorAll(tag)
    return res.length == 1 ? res[0] : res;
  }
}
new Login;

let can = document.querySelector('.canSee')
let un = document.querySelector('.unSee')
//   console.log(can2,can3);
un.onclick = function () {
  un.style.display = 'none'
  can.style.display = 'block'
}
can.onclick = function () {
  can.style.display = 'none'
  un.style.display = 'block'

}