var url_string = window.location;
var url = new URL(url_string);
var to = url.searchParams.get("to");
var name = url.searchParams.get("name");
var tvid = url.searchParams.get("id");

// alert("halo");
$("#penerima").html(to);
console.log(to);


$("#buka").on('click', function () {
    document.getElementById("song").pause();
    document.getElementById("song").play();
    enableScroll();
    // window.removeEventListener('DOMMouseScroll', preventDefault, false);
    // window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    // window.removeEventListener('touchmove', preventDefault, wheelOpt);
    // window.removeEventListener('keydown', preventDefaultForScrollKeys, false);

    $('body').unbind('touchmove')

    console.log("tsting");
});


$(document).ready(function(){
    $("#bukahidden").trigger('click');
});

$("#bukahidden").on('click', function () {
    document.getElementById("song").pause();
    document.getElementById("song").play();
    console.log("tsting");
});





// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    $("#setatas").trigger('click');
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}