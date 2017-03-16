$(function() {
	$("#main-menu").smartmenus();
	var e = $(window),
		s = $("#main-menu");
	e.on("resize", function() {
		e.width() > 991 ? (s.show(), $("#main-menu").addClass("resize-menu")) : s.hide()
	}), $(".toggle-bttn").click(function() {
		s.slideToggle(300), event.preventDefault()
	}), $(window).scroll(function() {
		$("nav").offset().top > 50 ? $("nav").addClass("min-padding") : $("nav").removeClass("min-padding")
	}), $(".search").on("click", function() {
		$("body,html").toggleClass("overflow-hidden"), $(".search span").toggleClass("search-icon"), $(".goto-top").toggleClass("hide-arrow"), $(".search-field-wrapper").hasClass("is-visible") ? $(".search-field-wrapper").removeClass("is-visible") : ($(".search-field-wrapper").addClass("is-visible"), $("#search").focus())
	})
});