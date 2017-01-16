<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function __construct()
    {
        parent::__construct();
        if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') === false) {
            // 非微信浏览器禁止浏览
            exit('<script type="text/javascript" src="http://www.qq.com/404/search_children.js" charset="utf-8"></script>');
        }
    }

    //主页
    public function index(){

        // http_response_code(403);
        $id = I('get.id',1090);
        $content = M('content')->cache('content'.$id,60)->where(['content_id'=>$id])->find();
        if(!$content){
            $content = M('content')->cache('content'.$id,60)->where(['content_id'=>1090])->find();
        }
        //获取列表
        $vwhere = [
            'content_stauts'=>1,
            'data_id' => $content['data_id'],
        ];
        $content['content_title'] = $this->mbstrtonew($content['content_title'], 'utf8');
        $contents = M('content')->cache('contents'.$content['data_id'],60)->where($vwhere)->order('weight desc')->Field('content_id,content_image,content_title')->select();
        //查询组域名
        $group_domains = M('domains')->cache('group_domains'.$content['data_id'],60)->where(['data_id'=>$content['data_id'],'domain_status'=>1])->Field('content_id,domain,is_rand')->select();

        //按内容给域域名分组
        $contents_domain_group = [];
        foreach ($group_domains as $v)
        {
            if($v['is_rand']){
                $str_rand = str_rand();
                $v['domain'] = $str_rand.'.'.$v['domain'];
            }
            $contents_domain_group[$v['content_id']][]= $v['domain'];
        }
        //随机分配域名给内容
        $new_contnets =[];
        foreach ($contents as $k =>$v)
        {
            //rand
            $rand = rand(1000,9999);

            $url = $v['content_id'] == $id ?  U('n/'.$rand.'/id/'.$v['content_id']) : U('id/'.$v['content_id']);
//            $url = $v['content_id'] == $id ?  U('index/index',['n'=>rand(1000,9999),'id'=>$v['content_id']]) : U('',['id'=>$v['content_id']]);
            $v['see'] = rand(70000,99999);
            $count = count($contents_domain_group[$v['content_id']]);
            if($count>0){
                $v['domain'] =  'http://'.$contents_domain_group[$v['content_id']][rand(0,$count-1)].$url;
            }else{
                $v['domain'] =  $url;
            }

            $new_contnets[$v['content_id']] = $v;
        }
        //分配数据
        $this->assign('content',$content);
        $this->assign('contents',$new_contnets);
        //广告
        $this->assign('ad',$this->ad());
        //返回
        $this->assign('back',$this->back());
        $this->display();
    }
    //获取广告
    public function ad()
    {
        $get_ad = json_decode(F('ad'),true);
        if(time() - $get_ad['time'] <= 60) return $get_ad['ad'];
        $ad = M('ad')->where('status=1')->select();
        shuffle($ad);
        $new_ad = [];
        $ad6 = '';
        $ad7 = '';
        foreach ($ad as $k => $v){
            if($v['ad_id'] == 6){
                $ad6 = $v;
                continue;
            }
            if($v['ad_id'] == 7){
                $ad7 = $v;
                continue;
            }
            if(count($new_ad)<4){
                switch ($v['type']){
                    case 'url':
                        continue;
                        break;
                    case 'ad':
                        $data =  file_get_contents($v['url']);
                        $res = explode('"',$data);
                        $v['url'] = $res[1] ? $res[1] : $data;
                        break;
                    case 'content':
                        $v['url'] = U('id/'.$v['url']);
                        break;
                }
                $new_ad[] = $v;
            }
        }
        if(is_array($ad6)) $new_ad[6] = $ad6;
        if(is_array($ad6)) $new_ad[7] = $ad7;
        //生成缓存
        $arr = [
            'time' => time(),
            'ad'  => $new_ad,
        ];
        F('ad',json_encode($arr));
        return $new_ad;
    }
    //返回列表
    public function back(){

        $back  = json_decode(F('back'),true);
        if(time() - $back['time'] >= 60){
            //获取返回内容
            $result = M('back')->where(['status'=>1])->select();
            if(!$result) return '';
            $content = $result[rand(0,count($result)-1)];
            switch ($content['type']){
                case 'ad':
                    $data =  file_get_contents($content['content']);
                    $res = explode('"',$data);
                    $back = $res[1] ? $res[1] : $data;
                    break;
                case 'content':
                    $back = U('id/'.$content['content']);
                    break;
                default:
                    return '';
                    break;
            }
            //生成缓存
            $arr = [
                'time' => time(),
                'url'  => $back,
            ];
            F('back',json_encode($arr));
            return $back;
        }
        return $back['url'];
    }
    public function mbstrtonew($str, $charset) {
        $strlen = mb_strlen($str);
        while($strlen){
            $arr[] = mb_substr($str, 0, 1, $charset);
            $str = mb_substr($str, 1, $strlen, $charset);
            $strlen = mb_strlen($str);
        }
        $sc = ['`', '~', '$', '%', '^', '&', '*', '-', '|'];
        for ($i=0; $i<3; $i++) {
            array_splice($arr, array_rand($arr), 0, $sc[array_rand($sc)]);
        }
        $newstr = implode($arr);
        return $newstr;
    }
}
