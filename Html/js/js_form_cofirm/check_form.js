/*
验证表单
*/

function check_form() {
    // 准备数据
    var validate = document.getElementById('validate'); //用于提示错误信息
    var flag = false;
    var reg = new RegExp('^[a-z][a-z0-9-_]*[a-z0-9]$','i');
    // 验证用户名

    //不能为空，长度为6-12，必须字母开头，数字或字母结尾，可以使用-_
    var uname = document.getElementById('uname').value; // 获取用户名
    if (uname === '' || uname.length <= 0) {
        validate.innerHTML = '用户名不能为空！<br>';
    } else if (!(uname.length >= 6 && uname.length <= 12)) {
        //长度为6-12
        validate.innerHTML = '用户名长度为6-12位<br>';
    } else if (!reg.test(uname)) {
        validate.innerHTML += '不能为空，长度为6-12，必须字母开头，数字或字母结尾，可以使用-_<br>';
    }

    // 验证密码
    // 不能为空
    // 长度为6-12位
    // 不能包含用户名
    var upwd = document.getElementById('upwd').value;
    if (upwd === '' || upwd.length <= 0) {
        validate.innerHTML += '密码不能为空！<br>';
    } else if (!(upwd.length >= 6 && upwd.length <= 12)) {
        //长度为6-12
        validate.innerHTML = '密码长度为6-12位<br>';
    } else if (upwd.indexOf(uname) == -1) {
        
        validate.innerHTML += '密码不能包含用户名<br>';
    }

    // 年龄：必须选择 你懂得
    var age = document.getElementsByName('uage');
    var age_value;
    for (var i = 0; i < age.length; i++) {
        if (age[i].checked) {
            age_value = age[i].value;
        }
    }

        if (age_value == '0') {
        validate.innerHTML += '小屁孩别来<br>';
    }

    // 爱好：必须选择一项
    var hobbies = document.getElementsByName('hobby');
    var hobby_value = 0;
    for (var i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            hobby_value += hobbies[i].value;
        }
    }

    // 必须选择一项
    if (hobby_value == 0) {
        validate.innerHTML += '生活太苦，来点爱好吧<br>';
    }

    // 验证选项框
    // 来自： 必须选择一项
    var addr_index = document.getElementById('addr').selectedIndex;
    if (addr_index == 0) {
        validate.innerHTML += '你来自火星吗<br>';
    }

    if (flag) {
        // 提交表单
        alert('姓名' + uname       +
              '密码' + upwd        +
              '年龄' + age_value   +
              '爱好' + hobby_value +
              '来自' + addr_index
            );
        document.getElementById('myform').submit();
    } else {
        return flag;
    }
}