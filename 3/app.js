$(document).ready(function(){
	var d = document.querySelectorAll("#d1");
	var l = document.querySelectorAll("#l1");
	var lang = document.querySelectorAll(".lang li");
	var px = document.querySelectorAll('.q p');
	$(lang[1]).css({'color': '#0D63A0',
					'background-color': 'rgba(13, 99, 160, 0.1)'});
	var index = 0;
	$(l).hide();	
	$(l[index]).show();
	$(d[index]).css('color', '#0D63A0');
	$(".lang").click(function(){
		$(".lang ul").show();
	});
	$("#sub").click(function(){
		$(".sub").show();
	});
	$(d).click(function(){
        index = $(d).index(this);
		$(l).hide();
		$(d).css('color', '#888888');
		$(d[index]).css('color', '#0D63A0');
        $(l[index]).show();
    });
    $(".menu li:nth-child(1)").css('color', '#0D63A0');
	$("#menu").click(function() {
		$(".menu").show();
	});
	$("#contact").click(function() {
		$(".menu").hide();
		$(".contact").show();
	});
	$(".close").click(function() {
		$(".menu").hide();
		$(".contact").hide();
	});
	$('.go').click(function() {
		var index = $(this).index('.go');
		$(".title").hide();
		$(".head span").css('color', '#000000');
		$("#log").attr("src","SVG/logoB.png");
		$("#menu").attr("src","SVG/MenuB.png");
		$("header").css('background', 'rgba(13, 99, 160, 0.1)');
		$(".mainCont").hide();
		if ($(this).index('.go') == 0) {
			$(".news").show();
		}
		else if ($(this).index('.go') == 1) {
			$(".mass").show();
		}
	});
	$('.q img').click(function() {
		var x = $(this).index('.q img');
		$(px[x]).toggle();
	});
	$('.newsCard').click(function() {
		$(".news .cent").hide();
		$(".newsCont").show();
	});
	$(".ex").click(function() {
		$(".title").hide();
		$(".head span").css('color', '#000000');
		$("#log").attr("src","SVG/logoB.png");
		$("#menu").attr("src","SVG/MenuB.png");
		$("header").css('background', 'rgba(13, 99, 160, 0.1)');
		$(".mainCont").hide();
		$(".project").show();
	});
	$(".back").click(function() {
		$(".news").hide();
		$(".project").hide();
		$(".news").hide();
		$(".title").show();
		$(".mainCont").show();
		$(".head span").css('color', 'white');
		$("header").css('background', 'url(SVG/back.png)');
		$("#log").attr("src","SVG/logo.png");
		$("#menu").attr("src","SVG/Menu.png");
	});
});