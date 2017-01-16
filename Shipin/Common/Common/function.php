<?php
/**
 * Convert a string to an array
 * @param string $str
 * @param number $split_length
 * @return multitype:string
 */
function mb_str_split($str,$split_length=1,$charset="UTF-8"){
    if(func_num_args()==1){
        return preg_split('/(?<!^)(?!$)/u', $str);
    }
    if($split_length<1)return false;
    $len = mb_strlen($str, $charset);
    $arr = array();
    for($i=0;$i<$len;$i+=$split_length){
        $s = mb_substr($str, $i, $split_length, $charset);
        $arr[] = $s;
    }
    return $arr;
}

/**
 * curl get方式获取链接内容
 * @param $url
 * @return mixed
 */
function curl_get($url){
    //初始化
    $curl = curl_init();
    //设置抓取的url
    curl_setopt($curl, CURLOPT_URL, $url);
    //设置头文件的信息作为数据流输出
    curl_setopt($curl, CURLOPT_HEADER, true);
    //设置获取的信息以文件流的形式返回，而不是直接输出。
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    //执行命令
    $data = curl_exec($curl);
    //关闭URL请求
    curl_close($curl);
    //显示获得的数据
    return $data;


}

/**
 * 字符串随机
 * @param int $len
 * @return string
 */
function str_rand($len=5){
    $str = 'abcdefghijklmnopqrstuvwxyz';
    $rand_str = '';
    for ($i=0;$i<$len;$i++){
        $rand_str .= substr($str,rand(0,strlen($str)-1),1);
    }
    return $rand_str;
}
?>