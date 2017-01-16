<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
	<meta http-equiv="Cache-Control" content="no-siteapp">
	<meta name="format-detection" content="telephone=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<script src="http://apps.bdimg.com/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<title><?php echo ($content["content_title"]); ?></title>
	<link rel="stylesheet" href="/Public/css/style.css">
</head>
<body>
	<div class="ct"><?php echo ($content["content_title"]); ?></div>
	
	<div class="wrap-act">
		<div class="act-cont" style="margin-top: 10px">
			<div id="tConArt" class="art_co sau">
				<div class="rich_media_content" id="js_content">
					<div id="nr2804">
						<div id="sm168" style="height: 200px;">
							<img id="img" src="<?php echo ($content["content_image"]); ?>" style="visibility: visible;height: 200px;width: 100%">
							<img class="pp888" src="/Public/img/play.png" alt="" style="width: 60px;height: 60px;">
						</div>
						
						<div style="height:20px;line-height:0;font-size:0;"></div>
					</div>
					
					<div id="nr2804_v" style="display:none;">
						<iframe src="<?php echo ($content["content_video_id"]); ?>" frameborder="0" width="100%" height="221"></iframe>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<article>
		<div class="rc8989">
			推荐热门
		</div>
		
		<?php if(is_array($contents)): $i = 0; $__LIST__ = $contents;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if($vo['content_id'] == $content['content_id']){ continue; } ?>
			<a href="<?php echo ($vo["domain"]); ?>">
				<section style="color: black">
					<img src="<?php echo ($vo["content_image"]); ?>">
					<div class="ic2987">
						<div class="it5858"><?php echo ($vo["content_title"]); ?></div>
					</div>
				</section>
			</a><?php endforeach; endif; else: echo "" ;endif; ?>
		
		<div id="sa000" style="display:none;">
			<img src="http://t.cn/RMxytGm" style="width: 100%;"/>
		</div>
	</article>
	
	<div style="display:none">
		<?php echo ($content["statistics_code"]); ?>
		<?php echo ($content["data_statistics_code"]); ?>
		<?php echo ($content["total_statistics_code"]); ?>
	</div>
	
	<script>
		var main_url = '<?php echo ($content["share_url"]); ?>'
	</script>
	<script>window.ourself_domain=true;</script>
	<script src="/Public/js/index.js"></script>
</body>
</html>