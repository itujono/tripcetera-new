function navigation_menu() {
	! function(n) {
		var t = !1;
		n(".nav-button").on("click", function(o) {
			o.preventDefault(), t || (n(this).parents(".csstransitions").length > 0 && (t = !0), n("html").toggleClass("scroll-hide"), n(".goto-top").toggleClass("goto-hide"), n("body").toggleClass("navigation-is-open"), n(".nav-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
				t = !1
			}))
		})
	}(jQuery)
}
jQuery(document).ready(function(n) {
	navigation_menu()
});