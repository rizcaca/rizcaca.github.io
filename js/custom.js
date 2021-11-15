var url_string = window.location;
var url = new URL(url_string);
var to = url.searchParams.get("to");
var name = url.searchParams.get("name");
var tvid = url.searchParams.get("id");

// alert("halo");
$("#penerima").html(to);
console.log(to);
