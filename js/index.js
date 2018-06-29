$(function(){
	/*$(".banner_left").hover(function(){
		$(this).find("li").css("backgroundColor", "#f7f7f7");
	},
	function(){
		$(this).find("li").css("backgroundColor", "#fff");
	})*/

	$(".banner_left_li").hover(function(){
		$(this).css("backgroundColor", "#fff")
		.siblings(".banner_left_li").css("backgroundColor", "#f7f7f7")
		.find(".lastli_ul").css("backgroundColor", "#f7f7f7");
		$(this).find(".lastli_ul").css("backgroundColor", "#fff");
		$(this).find(".banner_left_pd, .banner_left_pdborder").css("display", "block");
	},
	function(){
		$(this).css("backgroundColor", "#f7f7f7")
		.siblings(".banner_left_li").css("backgroundColor", "#f7f7f7");
		$(this).find(".lastli_ul").css("backgroundColor", "#f7f7f7");
		$(this).find(".banner_left_pd, .banner_left_pdborder").css("display", "none");	
	})
	$(".banner_left").mouseleave(function(){
		$(this).find(".banner_left_li, .lastli_ul").css("backgroundColor", "#fff");
	})


	/*  轮播图   */
	function banner_top(){
		var banner_top_images = $(".banner_sowing_a");
		var banner_top_spans = $(".banner_sowing_o").find("span");

		function showImages(index){
			for(var i = 0; i < banner_top_images.length; i++){
				banner_top_spans[i].index = i;
				banner_top_images[i].index = i;
				banner_top_spans[i].style.backgroundColor = "#737373";
				banner_top_images[i].style.opacity = "0";
				banner_top_images[i].style.zIndex = 100 - i;
			}

			banner_top_images[index].style.opacity = "1";
			banner_top_spans[index].style.backgroundColor = "#ff6600";

		}
		showImages(0);

		var top_count = 1;
		function imageMove(){
			if(top_count % 4 == 0){
				top_count = 0;
			}
			showImages(top_count);
			top_count++;
		}

		var imageInitailMove = setInterval(function(){
			imageMove();
		}, 3000);

		
		for(var j = 0; j < banner_top_spans.length; j++){
			banner_top_spans[j].onmouseenter = function(ev){
				clearInterval(imageInitailMove);

				top_count = ev.target.index;

				showImages(top_count);
				imageInitailMove = setInterval(function(){
					imageMove();
				}, 3000);
			}
		}
	}
	banner_top();
	
	function banner_bottom(){
		var oBcbul = $(".b_c_bul");
		var oBcsleft = $(".b_c_bsleft");
		var oBcsright = $(".b_c_bsright");
		var iBnow = 0;
		var timerBcbul = null;

		function bcbulRoll(){
			oBcbul.animate({
				left: -744 * iBnow
			}, 800, function(){

				if(iBnow == 2){
					iBnow = 0;
					oBcbul.css("left", 0);
				}
			})
		}

		function timerBcbulInner(){
			iBnow++;
			bcbulRoll();
		}

		timerBcbul = setInterval(timerBcbulInner, 3000);


	
		/*$(".b_c_bul").hover(function(){
			clearInterval(timerBcbulInner);
		},
		function(){ 
			timerBcbul = setInterval(timerBcbulInner, 3000);
		})*/
	}
	banner_bottom();
})