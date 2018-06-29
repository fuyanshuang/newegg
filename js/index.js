$(function(){
	

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
	function banner_c_top(){
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

		$(".banner_sowing_a").hover(function(){
			clearInterval(imageInitailMove);
		},function(){
			imageInitailMove = setInterval(function(){
					imageMove();
				}, 3000);
		})

	}
	banner_c_top();
	
	function banner_c_bottom(){
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

			/*$(".b_c_bsleft").click(function(){
				oBcbul.style.left = oBcbul.offsetLeft + "744" + "px";
			})*/
		}

		function timerBcbulInner(){
			iBnow++;
			bcbulRoll();
		}

		timerBcbul = setInterval(timerBcbulInner, 3000);

	
		$(".b_c_bmover").hover(function(){
			clearInterval(timerBcbul);
		},
		function(){ 
			timerBcbul = setInterval(timerBcbulInner, 3000);
		})
	}
	banner_c_bottom();



	function banner_r_top(){
		var oUl = $(".b_r_tul");
		var aSpans = $(".b_r_tspan").find("span");

		var iUnow = 0;
		var timerBrtul = null;

		function brtulRoll(){
			aSpans.removeClass("brtspans").eq(iUnow).addClass("brtspans");
			if(iUnow == 2){
				aSpans.eq(0).addClass("brtspans");
			}
			oUl.animate({
				left: -226 * iUnow
			}, 400, function(){
				if(iUnow == 2){
					iUnow = 0;
					oUl.css("left", 0);
				}
			});

			for(var i = 0; i < aSpans.length; i++){

			}
		}

		function timerBrtulInnter(){
			iUnow++;
			brtulRoll();
		}

		timerBrtul = setInterval(timerBrtulInnter, 2000);

		aSpans.click(function(){
			iUnow = $(this).index();
			brtulRoll();
		})

		$(".b_r_tul").hover(function(){
			clearInterval(timerBrtul);
		},
		function(){
			timerBrtul = setInterval(timerBrtulInnter, 2000);
		})
	}
	banner_r_top();


	function hotsale_roll(){
		var oP = $(".hotsale_title").find("p");
		var oUl = $(".hotsale_left_ul");
		var iNow = 0;
		var timer = null;
		var count = 1;

		$(".hotsale_title").find("p").click(function(){
			
			
			oUl.animate({
				left: -960 * count
			}, 200, function(){
				if(count == 4){
					
					oUl.animate({
						left: 0
					}, 0)
					count = 1;
				}
			})
			count++;
		})
	}
	hotsale_roll();
})