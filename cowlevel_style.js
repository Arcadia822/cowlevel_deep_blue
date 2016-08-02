// ==UserScript==
// @name         Cowlevel Style
// @namespace    http://www.zhouyuxin.net/
// @version      1.5.1
// @description  CowLevel Steam Color Theme
// @author       Arcadia
// @match        https://*.cowlevel.net/*
// ==/UserScript==


var MAIN_BG_COLOR='26,44,64';
var SECOND_BG_COLOR='23,26,33';
var LIGHT_BG_COLOR='145,145,144';

function addGlobalStyle(css) {
    var style = document.createElement('style');
    //style.type = 'text/css';
    style.innerHTML = css;
    document.body.appendChild(style);
}

(function() {
    'use strict';
    // Your code here...

    var css_value="                                                                                                                         \
        body {background: rgb("+MAIN_BG_COLOR+")}                                                                                           \
        .header-nav {background: rgb("+SECOND_BG_COLOR+")}                                                                                  \
        .open-layer {background: rgb("+SECOND_BG_COLOR+")}                                                                                  \
        .setting-list {background: rgb("+SECOND_BG_COLOR+")}                                                                                \
        .feedback-layer {background: rgb("+MAIN_BG_COLOR+")}                                                                                \
        .layui-layer-title {background: rgb("+MAIN_BG_COLOR+")}                                                                             \
        .bg-gradient-2 {background: rgba("+MAIN_BG_COLOR+",0.95)}                                                                           \
        .bg-gradient{background: -webkit-gradient(linear, 0 24%, 0 100%, from(rgba("+MAIN_BG_COLOR+",.1)), to(rgba("+MAIN_BG_COLOR+",1)));  \
                     background: linear-gradient(-180deg, rgba("+MAIN_BG_COLOR+",.1) 24%, rgba("+MAIN_BG_COLOR+",1) 100%);                  \
                     background: -moz-linear-gradient(top, rgba("+MAIN_BG_COLOR+".1),rgba("+MAIN_BG_COLOR+",1))}                            \
        .bg-gradient-3{background: -webkit-gradient(linear, 0 24%, 0 60%, from(rgba("+MAIN_BG_COLOR+",.1)), to(rgba("+MAIN_BG_COLOR+",1))); \
                     background: linear-gradient(-180deg, rgba("+MAIN_BG_COLOR+",.1) 24%, rgba("+MAIN_BG_COLOR+",1) 100%);                  \
                     background: -moz-linear-gradient(top, rgba("+MAIN_BG_COLOR+".1),rgba("+MAIN_BG_COLOR+",1))}                            \
        .layer {background: rgb("+MAIN_BG_COLOR+")}                                                                                         \
        .single-post {background: rgb("+MAIN_BG_COLOR+")}                                                                                   \
        .footer {background: rgb("+MAIN_BG_COLOR+")}                                                                                        \
        .comments + .wrapper + .fat-footer {background: rgb("+SECOND_BG_COLOR+")}                                                           \
        .comments {background: rgb("+MAIN_BG_COLOR+")}                                                                                      \
        .btn-card-border{background: rgb("+SECOND_BG_COLOR+")}                                                                              \
        .tip-window{background-color: rgb("+MAIN_BG_COLOR+")}                                                                               \
        .feedback-layer .layui-layer-title{ background: rgba("+SECOND_BG_COLOR+",.85);                                                      \
                                            border-bottom: 1px solid rgba(255,255,255,.1);                                                  \
                                            color: rgba(255,255,255,.9)}                                                                    \
        .tip-tag{background: rgb("+LIGHT_BG_COLOR+")}                                                                                       \
        .hot-box .cl-card{background: rgb("+MAIN_BG_COLOR+")}                                                                               \
        .wanguo-swiper .swiper-slide .shouchang-swiper .swiper-slide{background: rgb("+SECOND_BG_COLOR+")}                                  \
        .vm-feed-card-article {background: rgb("+SECOND_BG_COLOR+")}                                                                        \
        .vm-feed-card-answer {background: rgb("+SECOND_BG_COLOR+")}                                                                         \
        .vm-feed-card-reivew {background: rgb("+SECOND_BG_COLOR+")}                                                                         \
        .vm-feed-card-question {background: rgb("+SECOND_BG_COLOR+")}                                                                       \
        .vm-feed-card-game {background: rgb("+SECOND_BG_COLOR+")}                                                                           \
        .vm-style-double-bevel {background: rgb("+MAIN_BG_COLOR+"); padding-top:5px}                                                        \
        .left-bevel {display: none}                                                                                                         \
        .right-bevel {display: none}                                                                                                        \
    ";
    addGlobalStyle(css_value);


    //change in-line style
    try {
        document.getElementsByClassName("bg-gradient-2")[0].style.background="rgba("+MAIN_BG_COLOR+",0.9)";
    }
    catch (err) {
    }
})();
