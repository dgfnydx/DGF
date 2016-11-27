/**
 * 
 * @authors  (DGF)
 * @date    2016-11-27
 * @version $Id$
 */
$(function() {
	// 保持知识点与示例效果的高度一致
	function sameHeight() {
		var kph = $(".notes-content .knowledge-point").height(),
			kphs = $(".demos-content .knowledge-point").height(),
			wrapw = $(".wrap").width()
		if(wrapw > 770) {
			if(kph > kphs) {
				$(".demos-content .knowledge-point").css({"minHeight": kph});
			} else {
				$(".notes-content .knowledge-point").css({"minHeight": kphs})
			}
		} else {
			$(".demos-content .knowledge-point, .notes-content .knowledge-point").css({"minHeight": 0})
		}
	}
	// 加载时执行
	sameHeight()
	// 窗口变化时执行
	$(window).resize(function() {
		sameHeight()
	})
	
	
})
