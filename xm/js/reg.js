function get_product_inf() {

    $.ajax({
        url: 'include/show_recommend.aspx',
        type: 'post',
        data: '',
        beforeSend: function (XMLHttpRequest) {
            $("#flexiselDemo1").html( "<center><img alt=loading src=img/wait.gif width=100 height=100 /></center>");
        },
        success: function (msg) {
            $("#flexiselDemo1").html(msg);
            $("#flexiselDemo1").flexisel({
                visibleItems: 4,
                animationSpeed: 1000,
                autoPlay: true,
                autoPlaySpeed: 3000,
                pauseOnHover: true,
                enableResponsiveBreakpoints: true,
                responsiveBreakpoints: {
                    portrait: {
                        changePoint: 480,
                        visibleItems: 1
                    },
                    landscape: {
                        changePoint: 640,
                        visibleItems: 2
                    },
                    tablet: {
                        changePoint: 768,
                        visibleItems: 2
                    }
                }
            });
        }
    });
}
function go_step1() {
        var msg;
        msg=document.getElementById("company_msg").innerHTML;
        if(msg.indexOf("可以注册")< 0){

            var dd = msg .replace(/<\/?.+?>/g, "");
            var dds = dd.replace(/&nbsp;/g, ""); //

            alert(dds);
        }
        else if(document.getElementById("agree").checked==false){
            alert("请查看并且同意使用协议！");
        }
        else{

            document.getElementById("reg_step1").style.display = "none";
            document.getElementById("reg_step2").style.display = "";
            document.getElementById("reg_step3").style.display = "none";
        }
    }
    function go_step2() {
        var msg1;
        msg = document.getElementById("Umessage").innerHTML;
        var pass1 = $("#tpassword").val();
        var pass2 = $("#rpassword").val();
        if (msg.indexOf("可以注册") < 0) {
            alert("用户名填写有误！");
        }
        else if ((pass1 == null || pass1 == undefined || pass1 == '') && (pass2 == null || pass2 == undefined || pass2 == '')) {
            alert("密码不能为空！");
        }
        else if (pass1 !== pass2) {
            alert("密码两次输入不一致！");
        }
        else {
             document.getElementById("reg_step1").style.display = "none";
            document.getElementById("reg_step2").style.display = "none";
            document.getElementById("reg_step3").style.display = "";
        }
    }
    function go_step3() {
        var mailstr = $("#email").val();
        var pass1 = $("#tel").val();
        var pass2 = $("#phone").val();
        if (check_email(mailstr) == false) {
            alert("邮箱格式有误！");
        }
        else if ((pass1 == null || pass1 == undefined || pass1 == '') && (pass2 == null || pass2 == undefined || pass2 == '')) {
            alert("电话号码或者手机号码必须填写一个！");
         }
        else{

        document.getElementById("reg_step1").style.display = "none";
        document.getElementById("reg_step2").style.display = "none";
        document.getElementById("reg_step3").style.display = "";

        }
    }
    function go_step0() {

        document.getElementById("reg_step1").style.display = "";
        document.getElementById("reg_step2").style.display = "none";
        document.getElementById("reg_step3").style.display = "none";

    }

function checkcompany(){  //返回查询测试用户注册名是否符合要求
    var str;
    str = $("#company_name").val();
    if (str != "") {
        if (str.length < 4) {
            document.getElementById("company_msg").innerHTML = "<font color='red'>请填写和组织机构代码证（或营业执照）一致的企业名称！</font>"
        }
        else {
            $.ajax({
                url: 'com_admin/include/reg_check_company.aspx?name=' + escape(str),
                type: 'post',
                data: '',
                beforeSend: function (XMLHttpRequest) {
                    document.getElementById("company_msg").innerHTML = '<img alt=loading src=img/wait.gif width=25 height=25 />';
                },
                success: function (msg) {
                    document.getElementById("company_msg").innerHTML = msg;
                 }
            });
        }
    }
    else {
        document.getElementById("company_msg").innerHTML = "<font color='red'>请填写和组织机构代码证（或营业执照）一致的企业名称！</font>";
    }
}
function checkusername(str) {  //返回查询测试用户注册名是否符合要求
if (str != "") {
    if (str.length < 6)
     {
    document.getElementById("Umessage").innerHTML = "<font color='red'>用户名太短</font>"
    }
    else {
            $.ajax({
            url: 'com_admin/include/reg_check.aspx?name=' + escape(str),
            type: 'post',
            data: '',
            beforeSend: function (XMLHttpRequest) {
            document.getElementById("Umessage").innerHTML = '<img alt=loading src=img/wait.gif width=25 height=25 />';
            },
            success: function (msg) {
                 document.getElementById("Umessage").innerHTML = msg;
            }
            });
         }
    }
else {
    document.getElementById("Umessage").innerHTML = "填写用户名";
    }
}
/*  
测试密码
*/
function check_pass() {  
    var __th = $('#tpassword');
    if (!__th.val()) {
        $('#pwd_tip').hide();
        $('#pwd_err').show();
        Primary();
        return;
    }
    if (__th.val().length < 6) {
        $('#pwd_tip').hide();
        $('#pwd_err').show();
        Weak();
        return;
    }
    var _r = checkPassword(__th);
    if (_r < 1) {
        $('#pwd_tip').hide();
        $('#pwd_err').show();
        Primary();
        return;
    }
    if (_r > 0 && _r < 2) {
        Weak();
    } else if (_r >= 2 && _r < 4) {
        Medium();
    } else if (_r >= 4) {
        Tough();
    }
    $('#pwd_tip').hide();
    $('#pwd_err').hide();
  
}
function Primary() {
    $('#pwdLevel_1').attr('class', 'ywz_zhuce_huixian');
    $('#pwdLevel_2').attr('class', 'ywz_zhuce_huixian');
    $('#pwdLevel_3').attr('class', 'ywz_zhuce_huixian');
}

function Weak() {
    $('#pwdLevel_1').attr('class', 'ywz_zhuce_hongxian');
    $('#pwdLevel_2').attr('class', 'ywz_zhuce_huixian');
    $('#pwdLevel_3').attr('class', 'ywz_zhuce_huixian');
}

function Medium() {
    $('#pwdLevel_1').attr('class', 'ywz_zhuce_hongxian');
    $('#pwdLevel_2').attr('class', 'ywz_zhuce_hongxian2');
    $('#pwdLevel_3').attr('class', 'ywz_zhuce_huixian');
}

function Tough() {
    $('#pwdLevel_1').attr('class', 'ywz_zhuce_hongxian');
    $('#pwdLevel_2').attr('class', 'ywz_zhuce_hongxian2');
    $('#pwdLevel_3').attr('class', 'ywz_zhuce_hongxian3');
}
function checkPassword(pwdinput) {
    var maths, smalls, bigs, corps, cat, num;
    var str = $(pwdinput).val()
    var len = str.length;

    var cat = /.{16}/g
    if (len == 0) return 1;
    if (len > 16) { $(pwdinput).val(str.match(cat)[0]); }
    cat = /.*[\u4e00-\u9fa5]+.*$/
    if (cat.test(str)) {
        return -1;
    }
    cat = /\d/;
    var maths = cat.test(str);
    cat = /[a-z]/;
    var smalls = cat.test(str);
    cat = /[A-Z]/;
    var bigs = cat.test(str);
    var corps = corpses(pwdinput);
    var num = maths + smalls + bigs + corps;

    if (len < 6) { return 1; }

    if (len >= 6 && len <= 8) {
        if (num == 1) return 1;
        if (num == 2 || num == 3) return 2;
        if (num == 4) return 3;
    }

    if (len > 8 && len <= 11) {
        if (num == 1) return 2;
        if (num == 2) return 3;
        if (num == 3) return 4;
        if (num == 4) return 5;
    }

    if (len > 11) {
        if (num == 1) return 3;
        if (num == 2) return 4;
        if (num > 2) return 5;
    }
}

function corpses(pwdinput) {
    var cat = /./g
    var str = $(pwdinput).val();
    var sz = str.match(cat)
    for (var i = 0; i < sz.length; i++) {
        cat = /\d/;
        maths_01 = cat.test(sz[i]);
        cat = /[a-z]/;
        smalls_01 = cat.test(sz[i]);
        cat = /[A-Z]/;
        bigs_01 = cat.test(sz[i]);
        if (!maths_01 && !smalls_01 && !bigs_01) { return true; }
    }
    return false;
}
function checkrpass() {
    var pass1 = $("#tpassword").val();
    var pass2 = $("#rpassword").val();
    if (pass2) {
        if (pass1 == pass2) {
            document.getElementById("rpass_msg").innerHTML = "<font color='green'>√</font>";
        }
        else {
            document.getElementById("rpass_msg").innerHTML = "<font color='red'>两次输入不一致</font>";
        }
    }
    else {
        document.getElementById("rpass_msg").innerHTML = "<font color='red'>请输入密码</font>";
    }
}
function checkmail(Email){
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; //验证邮箱的正则表达式
    if (!reg.test(Email)) {
        document.getElementById("email_msg").innerHTML = "<font color='red'>邮箱格式不对</font>";
        document.getElementById("email").value = "";
        }
    else {
        document.getElementById("email_msg").innerHTML = "<font color='green'>√</font>";
    }
}
function check_email(Email) {
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; //验证邮箱的正则表达式
    if (!reg.test(Email)) {
        return false;
    }
    else {
        return true;
    }
}
function check_form(){
    if (!document.getElementById("username").value) {
        alert("请输入用户名");
        document.getElementById("username").focus();
        return false;
    }
    else if (document.getElementById("Umessage").innerHTML.indexOf("可以注册") < 0 )  
     {
        alert("用户名有误");
        document.getElementById("username").focus();
        return false;
    } 
    else if (!document.getElementById("tpassword").value) {
        alert("请输入密码");
        document.getElementById("tpassword").focus();
        return false;
    }
    else if (document.getElementById("tpassword").value != document.getElementById("rpassword").value) {
        alert("两次密码输入不一致");
        document.getElementById("rpassword").focus();
        return false;
    }
    else if (!document.getElementById("email").value) {
        alert("请输入电子邮箱地址");
        document.getElementById("email").focus();
        return false;
    }
    else if (validate() == false) {
        alert("验证码错误");
        $("#J_codetext").focus();
        return false;
    }
    else {
        return true;
    }
    

}