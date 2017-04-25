
function demo_3() {
    (function($) {
		// slider/carousel
		var owl = $('#hero-header-1');
		owl.owlCarousel({
		    singleItem: true,
		    autoPlay: true,
		    navigation: false,
		    slideSpeed: 300,
		    paginationSpeed: 500,
		    rewindSpeed: 400,
			animateOut: 'fadeOut',
		    autoHeight: false,
		    addClassActive: true,
		    afterMove: function() {
		        $('.owl-item.active h1').addClass('animated fadeInUpSmall');
		        $('.owl-item.active p').addClass('animated-md fadeInUpSmall');
		        $('.owl-item.active .bttn-div').addClass('animated-lt fadeInUpSmall');
		    },	
		    beforeMove: function() {
		        $('.owl-item h1').removeClass('animated fadeInUpSmall');
		        $('.owl-item p').removeClass('animated-md fadeInUpSmall');
		        $('.owl-item .bttn-div').removeClass('animated-lt fadeInUpSmall');
		    },
		});

		$('.owl-item.active h1').addClass('animated fadeInUpSmall');
		$('.owl-item.active p').addClass('animated-md fadeInUpSmall');
		$('.owl-item.active .bttn-div').addClass('animated-lt fadeInUpSmall');

		// next slide
		$('.next-feature').on('click', function(event) {
		    owl.trigger('owl.next');
		});

		// prev slide
		$('.prev-feature').on('click', function(event) {
		    owl.trigger('owl.prev');
		});
	})(jQuery);
};




// handle cursor keys		
var owlbttn = $('#hero-header-1').data('owlCarousel');
$(document.documentElement).keyup(function(event) {
    if (event.keyCode == 37) {
        owlbttn.prev();
    } else if (event.keyCode == 39) {
        owlbttn.next();
    }
});



function goto_top_page() {
	! function(e) {
		var t = 600,
			n = 1200,
			o = e(".goto-top");
		e(window).scroll(function() {
			e(this).scrollTop() > t ? o.addClass("goto-is-visible") : o.removeClass("goto-is-visible goto-fade-out"), e(this).scrollTop() > n && o.addClass("goto-fade-out")
		}), o.on("click", function(t) {
			t.preventDefault(), e("body,html").animate({
				scrollTop: e("#top").offset().top
			}, 700)
		})
	}(jQuery)
}

function initialize_scrollreveal() {
	! function(e) {
		window.sr = ScrollReveal(), sr.isSupported() && document.documentElement.classList.add("sr")
	}(jQuery)
}! function() {
	function e() {
		Q.keyboardSupport && h("keydown", r)
	}

	function t() {
		if (!P && document.body) {
			P = !0;
			var t = document.body,
				n = document.documentElement,
				o = window.innerHeight,
				a = t.scrollHeight;
			if (H = document.compatMode.indexOf("CSS") >= 0 ? n : t, O = t, e(), top != self) j = !0;
			else if (a > o && (t.offsetHeight <= o || n.offsetHeight <= o)) {
				var r = document.createElement("div");
				r.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + H.scrollHeight + "px", document.body.appendChild(r);
				var i;
				k = function() {
					i || (i = setTimeout(function() {
						T || (r.style.height = "0", r.style.height = H.scrollHeight + "px", i = null)
					}, 500))
				}, setTimeout(k, 10), h("resize", k);
				var u = {
					attributes: !0,
					childList: !0,
					characterData: !1
				};
				if (x = new R(k), x.observe(t, u), H.offsetHeight <= o) {
					var c = document.createElement("div");
					c.style.clear = "both", t.appendChild(c)
				}
			}
			Q.fixedBackground || T || (t.style.backgroundAttachment = "scroll", n.style.backgroundAttachment = "scroll")
		}
	}

	function n() {
		x && x.disconnect(), p(K, a), p("mousedown", i), p("keydown", r), p("resize", k), p("load", t)
	}

	function o(e, t, n) {
		if (w(t, n), 1 != Q.accelerationMax) {
			var o = Date.now(),
				a = o - $;
			if (a < Q.accelerationDelta) {
				var r = (1 + 50 / a) / 2;
				r > 1 && (r = Math.min(r, Q.accelerationMax), t *= r, n *= r)
			}
			$ = Date.now()
		}
		if (X.push({
				x: t,
				y: n,
				lastX: 0 > t ? .99 : -.99,
				lastY: 0 > n ? .99 : -.99,
				start: Date.now()
			}), !Y) {
			var i = e === document.body,
				u = function(o) {
					for (var a = Date.now(), r = 0, c = 0, l = 0; l < X.length; l++) {
						var s = X[l],
							d = a - s.start,
							f = d >= Q.animationTime,
							h = f ? 1 : d / Q.animationTime;
						Q.pulseAlgorithm && (h = S(h));
						var p = s.x * h - s.lastX >> 0,
							m = s.y * h - s.lastY >> 0;
						r += p, c += m, s.lastX += p, s.lastY += m, f && (X.splice(l, 1), l--)
					}
					i ? window.scrollBy(r, c) : (r && (e.scrollLeft += r), c && (e.scrollTop += c)), t || n || (X = []), X.length ? N(u, e, 1e3 / Q.frameRate + 1) : Y = !1
				};
			N(u, e, 0), Y = !0
		}
	}

	function a(e) {
		P || t();
		var n = e.target,
			a = l(n);
		if (!a || e.defaultPrevented || e.ctrlKey) return !0;
		if (m(O, "embed") || m(n, "embed") && /\.pdf/i.test(n.src) || m(O, "object")) return !0;
		var r = -e.wheelDeltaX || e.deltaX || 0,
			i = -e.wheelDeltaY || e.deltaY || 0;
		return L && (e.wheelDeltaX && g(e.wheelDeltaX, 120) && (r = -120 * (e.wheelDeltaX / Math.abs(e.wheelDeltaX))), e.wheelDeltaY && g(e.wheelDeltaY, 120) && (i = -120 * (e.wheelDeltaY / Math.abs(e.wheelDeltaY)))), r || i || (i = -e.wheelDelta || 0), 1 === e.deltaMode && (r *= 40, i *= 40), !Q.touchpadSupport && v(i) ? !0 : (Math.abs(r) > 1.2 && (r *= Q.stepSize / 120), Math.abs(i) > 1.2 && (i *= Q.stepSize / 120), o(a, r, i), e.preventDefault(), void u())
	}

	function r(e) {
		var t = e.target,
			n = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== q.spacebar;
		document.contains(O) || (O = document.activeElement);
		var a = /^(textarea|select|embed|object)$/i,
			r = /^(button|submit|radio|checkbox|file|color|image)$/i;
		if (a.test(t.nodeName) || m(t, "input") && !r.test(t.type) || m(O, "video") || b(e) || t.isContentEditable || e.defaultPrevented || n) return !0;
		if ((m(t, "button") || m(t, "input") && r.test(t.type)) && e.keyCode === q.spacebar) return !0;
		var i, c = 0,
			s = 0,
			d = l(O),
			f = d.clientHeight;
		switch (d == document.body && (f = window.innerHeight), e.keyCode) {
			case q.up:
				s = -Q.arrowScroll;
				break;
			case q.down:
				s = Q.arrowScroll;
				break;
			case q.spacebar:
				i = e.shiftKey ? 1 : -1, s = -i * f * .9;
				break;
			case q.pageup:
				s = .9 * -f;
				break;
			case q.pagedown:
				s = .9 * f;
				break;
			case q.home:
				s = -d.scrollTop;
				break;
			case q.end:
				var h = d.scrollHeight - d.scrollTop - f;
				s = h > 0 ? h + 10 : 0;
				break;
			case q.left:
				c = -Q.arrowScroll;
				break;
			case q.right:
				c = Q.arrowScroll;
				break;
			default:
				return !0
		}
		o(d, c, s), e.preventDefault(), u()
	}

	function i(e) {
		O = e.target
	}

	function u() {
		clearTimeout(D), D = setInterval(function() {
			_ = {}
		}, 1e3)
	}

	function c(e, t) {
		for (var n = e.length; n--;) _[A(e[n])] = t;
		return t
	}

	function l(e) {
		var t = [],
			n = document.body,
			o = H.scrollHeight;
		do {
			var a = _[A(e)];
			if (a) return c(t, a);
			if (t.push(e), o === e.scrollHeight) {
				var r = d(H) && d(n),
					i = r || f(H);
				if (j && s(H) || !j && i) return c(t, F())
			} else if (s(e) && f(e)) return c(t, e)
		} while (e = e.parentElement)
	}

	function s(e) {
		return e.clientHeight + 10 < e.scrollHeight
	}

	function d(e) {
		var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
		return "hidden" !== t
	}

	function f(e) {
		var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
		return "scroll" === t || "auto" === t
	}

	function h(e, t) {
		window.addEventListener(e, t, !1)
	}

	function p(e, t) {
		window.removeEventListener(e, t, !1)
	}

	function m(e, t) {
		return (e.nodeName || "").toLowerCase() === t.toLowerCase()
	}

	function w(e, t) {
		e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, (B.x !== e || B.y !== t) && (B.x = e, B.y = t, X = [], $ = 0)
	}

	function v(e) {
		return e ? (z.length || (z = [e, e, e]), e = Math.abs(e), z.push(e), z.shift(), clearTimeout(C), C = setTimeout(function() {
			window.localStorage && (localStorage.SS_deltaBuffer = z.join(","))
		}, 1e3), !y(120) && !y(100)) : void 0
	}

	function g(e, t) {
		return Math.floor(e / t) == e / t
	}

	function y(e) {
		return g(z[0], e) && g(z[1], e) && g(z[2], e)
	}

	function b(e) {
		var t = e.target,
			n = !1;
		if (-1 != document.URL.indexOf("www.youtube.com/watch"))
			do
				if (n = t.classList && t.classList.contains("html5-video-controls")) break;
		while (t = t.parentNode);
		return n
	}

	function M(e) {
		var t, n, o;
		return e *= Q.pulseScale, 1 > e ? t = e - (1 - Math.exp(-e)) : (n = Math.exp(-1), e -= 1, o = 1 - Math.exp(-e), t = n + o * (1 - n)), t * Q.pulseNormalize
	}

	function S(e) {
		return e >= 1 ? 1 : 0 >= e ? 0 : (1 == Q.pulseNormalize && (Q.pulseNormalize /= M(1)), M(e))
	}

	function I(e) {
		for (var t in e) E.hasOwnProperty(t) && (Q[t] = e[t])
	}
	var O, x, k, D, C, E = {
			frameRate: 150,
			animationTime: 400,
			stepSize: 100,
			pulseAlgorithm: !0,
			pulseScale: 4,
			pulseNormalize: 1,
			accelerationDelta: 50,
			accelerationMax: 3,
			keyboardSupport: !0,
			arrowScroll: 50,
			touchpadSupport: !1,
			fixedBackground: !0,
			excluded: ""
		},
		Q = E,
		T = !1,
		j = !1,
		B = {
			x: 0,
			y: 0
		},
		P = !1,
		H = document.documentElement,
		z = [],
		L = /^Mac/.test(navigator.platform),
		q = {
			left: 37,
			up: 38,
			right: 39,
			down: 40,
			spacebar: 32,
			pageup: 33,
			pagedown: 34,
			end: 35,
			home: 36
		},
		X = [],
		Y = !1,
		$ = Date.now(),
		A = function() {
			var e = 0;
			return function(t) {
				return t.uniqueID || (t.uniqueID = e++)
			}
		}(),
		_ = {};
	window.localStorage && localStorage.SS_deltaBuffer && (z = localStorage.SS_deltaBuffer.split(","));
	var K, N = function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, n) {
				window.setTimeout(e, n || 1e3 / 60)
			}
		}(),
		R = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
		F = function() {
			var e;
			return function() {
				if (!e) {
					var t = document.createElement("div");
					t.style.cssText = "height:10000px;width:1px;", document.body.appendChild(t);
					var n = document.body.scrollTop;
					document.documentElement.scrollTop;
					window.scrollBy(0, 1), e = document.body.scrollTop != n ? document.body : document.documentElement, window.scrollBy(0, -1), document.body.removeChild(t)
				}
				return e
			}
		}(),
		V = window.navigator.userAgent,
		U = /Edge/.test(V),
		W = /chrome/i.test(V) && !U,
		G = /safari/i.test(V) && !U,
		J = /mobile/i.test(V),
		Z = (W || G) && !J;
	"onwheel" in document.createElement("div") ? K = "wheel" : "onmousewheel" in document.createElement("div") && (K = "mousewheel"), K && Z && (h(K, a), h("mousedown", i), h("load", t)), I.destroy = n, window.SmoothScrollOptions && I(window.SmoothScrollOptions), "object" == typeof exports ? module.exports = I : window.SmoothScroll = I
}(), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(e, t, n, o, a) {
		return jQuery.easing[jQuery.easing.def](e, t, n, o, a)
	},
	easeInQuad: function(e, t, n, o, a) {
		return o * (t /= a) * t + n
	},
	easeOutQuad: function(e, t, n, o, a) {
		return -o * (t /= a) * (t - 2) + n
	},
	easeInOutQuad: function(e, t, n, o, a) {
		return (t /= a / 2) < 1 ? o / 2 * t * t + n : -o / 2 * (--t * (t - 2) - 1) + n
	},
	easeInCubic: function(e, t, n, o, a) {
		return o * (t /= a) * t * t + n
	},
	easeOutCubic: function(e, t, n, o, a) {
		return o * ((t = t / a - 1) * t * t + 1) + n
	},
	easeInOutCubic: function(e, t, n, o, a) {
		return (t /= a / 2) < 1 ? o / 2 * t * t * t + n : o / 2 * ((t -= 2) * t * t + 2) + n
	},
	easeInQuart: function(e, t, n, o, a) {
		return o * (t /= a) * t * t * t + n
	},
	easeOutQuart: function(e, t, n, o, a) {
		return -o * ((t = t / a - 1) * t * t * t - 1) + n
	},
	easeInOutQuart: function(e, t, n, o, a) {
		return (t /= a / 2) < 1 ? o / 2 * t * t * t * t + n : -o / 2 * ((t -= 2) * t * t * t - 2) + n
	},
	easeInQuint: function(e, t, n, o, a) {
		return o * (t /= a) * t * t * t * t + n
	},
	easeOutQuint: function(e, t, n, o, a) {
		return o * ((t = t / a - 1) * t * t * t * t + 1) + n
	},
	easeInOutQuint: function(e, t, n, o, a) {
		return (t /= a / 2) < 1 ? o / 2 * t * t * t * t * t + n : o / 2 * ((t -= 2) * t * t * t * t + 2) + n
	},
	easeInSine: function(e, t, n, o, a) {
		return -o * Math.cos(t / a * (Math.PI / 2)) + o + n
	},
	easeOutSine: function(e, t, n, o, a) {
		return o * Math.sin(t / a * (Math.PI / 2)) + n
	},
	easeInOutSine: function(e, t, n, o, a) {
		return -o / 2 * (Math.cos(Math.PI * t / a) - 1) + n
	},
	easeInExpo: function(e, t, n, o, a) {
		return 0 == t ? n : o * Math.pow(2, 10 * (t / a - 1)) + n
	},
	easeOutExpo: function(e, t, n, o, a) {
		return t == a ? n + o : o * (-Math.pow(2, -10 * t / a) + 1) + n
	},
	easeInOutExpo: function(e, t, n, o, a) {
		return 0 == t ? n : t == a ? n + o : (t /= a / 2) < 1 ? o / 2 * Math.pow(2, 10 * (t - 1)) + n : o / 2 * (-Math.pow(2, -10 * --t) + 2) + n
	},
	easeInCirc: function(e, t, n, o, a) {
		return -o * (Math.sqrt(1 - (t /= a) * t) - 1) + n
	},
	easeOutCirc: function(e, t, n, o, a) {
		return o * Math.sqrt(1 - (t = t / a - 1) * t) + n
	},
	easeInOutCirc: function(e, t, n, o, a) {
		return (t /= a / 2) < 1 ? -o / 2 * (Math.sqrt(1 - t * t) - 1) + n : o / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
	},
	easeInElastic: function(e, t, n, o, a) {
		var r = 1.70158,
			i = 0,
			u = o;
		if (0 == t) return n;
		if (1 == (t /= a)) return n + o;
		if (i || (i = .3 * a), u < Math.abs(o)) {
			u = o;
			var r = i / 4
		} else var r = i / (2 * Math.PI) * Math.asin(o / u);
		return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / i)) + n
	},
	easeOutElastic: function(e, t, n, o, a) {
		var r = 1.70158,
			i = 0,
			u = o;
		if (0 == t) return n;
		if (1 == (t /= a)) return n + o;
		if (i || (i = .3 * a), u < Math.abs(o)) {
			u = o;
			var r = i / 4
		} else var r = i / (2 * Math.PI) * Math.asin(o / u);
		return u * Math.pow(2, -10 * t) * Math.sin((t * a - r) * (2 * Math.PI) / i) + o + n
	},
	easeInOutElastic: function(e, t, n, o, a) {
		var r = 1.70158,
			i = 0,
			u = o;
		if (0 == t) return n;
		if (2 == (t /= a / 2)) return n + o;
		if (i || (i = a * (.3 * 1.5)), u < Math.abs(o)) {
			u = o;
			var r = i / 4
		} else var r = i / (2 * Math.PI) * Math.asin(o / u);
		return 1 > t ? -.5 * (u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / i)) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / i) * .5 + o + n
	},
	easeInBack: function(e, t, n, o, a, r) {
		return void 0 == r && (r = 1.70158), o * (t /= a) * t * ((r + 1) * t - r) + n
	},
	easeOutBack: function(e, t, n, o, a, r) {
		return void 0 == r && (r = 1.70158), o * ((t = t / a - 1) * t * ((r + 1) * t + r) + 1) + n
	},
	easeInOutBack: function(e, t, n, o, a, r) {
		return void 0 == r && (r = 1.70158), (t /= a / 2) < 1 ? o / 2 * (t * t * (((r *= 1.525) + 1) * t - r)) + n : o / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + n
	},
	easeInBounce: function(e, t, n, o, a) {
		return o - jQuery.easing.easeOutBounce(e, a - t, 0, o, a) + n
	},
	easeOutBounce: function(e, t, n, o, a) {
		return (t /= a) < 1 / 2.75 ? o * (7.5625 * t * t) + n : 2 / 2.75 > t ? o * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? o * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : o * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
	},
	easeInOutBounce: function(e, t, n, o, a) {
		return a / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, o, a) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - a, 0, o, a) + .5 * o + n
	}
}), $("a.page-scroll").on("click", function(e) {
	var t = $(this);
	$("html, body").stop().animate({
		scrollTop: $(t.attr("href")).offset().top
	}, 700, "easeInOutSine"), e.preventDefault()
}), jQuery(document).ready(function(e) {
	goto_top_page()
});