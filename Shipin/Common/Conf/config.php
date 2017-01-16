<?php
return array(
	//'配置项'=>'配置值'
    'DB_SQL_BUILD_CACHE' => true,
    'DB_SQL_BUILD_LENGTH' => 50, // SQL缓存的队列长度
	'URL_MODEL' => '2',
    //设置模块列表
    'MODULE_ALLOW_LIST'    =>    array('Home'),
    'DEFAULT_MODULE' => 'Home',
	//数据库配置信息
	'DB_TYPE'   => 'mysql', 	// 数据库类型
	'DB_HOST'   => 'wltvideo.c2szdjwifzej.ap-northeast-2.rds.amazonaws.com', // 服务器地址
	'DB_NAME'   => 'shipin',  // 数据库名
	'DB_USER'   => 'wltvideo', 		// 用户名
	'DB_PWD'    => 'wltvideo12345678', 	// 密码
	'DB_PORT'   => 3306, 		// 端口
//	'DB_PREFIX' => 'cs_', 	// 数据库表前缀
	'DB_CHARSET'=> 'utf8', 		// 字符集
    'DB_LIKE_FIELDS'=>'content',
    //路由
    'URL_ROUTER_ON'	=> true,
    'URL_ROUTE_RULES'=> array(
        'id/:id\d'=>'index/index', //规则路由
        'n/:n\d/id/:id\d'=>'index/index', //规则路由
    ),
);
