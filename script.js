window.onload = function(e) {
    document.getElementById("subscribe-form").addEventListener("submit", submit);
}
function submit() {
    var value = document.getElementById("email").value;
    alert(value);
}
