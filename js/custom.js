var url_string = window.location;
var url = new URL(url_string);
var to = url.searchParams.get("to");
var name = url.searchParams.get("name");
var tvid = url.searchParams.get("id");

// alert("halo");
$("#penerima").html(to);
console.log(to);


window.addEventListener('load', function () {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var source = audioCtx.createBufferSource();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'audio/audio.mp3');
    xhr.responseType = 'arraybuffer';
    xhr.addEventListener('load', function (r) {
        audioCtx.decodeAudioData(
                xhr.response, 
                function (buffer) {
                    source.buffer = buffer;
                    source.connect(audioCtx.destination);
                    source.loop = false;
                });
        source.start(0);
    });
    xhr.send();
});