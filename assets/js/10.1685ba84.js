(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{462:function(e,t,n){"use strict";n.r(t);n(28),n(92),n(170),n(172),n(93);var i=n(39),c={props:{selector:{type:String},excludeSelector:{type:String,default:""}},methods:{initClickHandler:function(e){var t=this.selector,n=this.excludeSelector;e.querySelectorAll(this.selector).forEach((function(c){c.addEventListener("mousedown",(function(c){if(Object(i.a)(e.querySelectorAll(n||null)).filter((function(e){return c.composedPath().includes(e)})).length>0)c.stopImmediatePropagation();else{var l=this.classList.contains("active");e.querySelectorAll(t).forEach((function(e){e.classList.remove("active")})),this.classList.toggle("active",!l)}}))}))}},mounted:function(){var e=this;this.$nextTick((function(){e.initClickHandler(document)}))}},l=n(41),o=Object(l.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=o.exports}}]);