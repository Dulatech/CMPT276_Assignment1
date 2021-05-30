function calc_percent(num) {
  var top = document.getElementById("A" + num + "-num");
  var bottom = document.getElementById("A" + num + "-denum");
  var percent = document.getElementById("A" + num + "-per");
  percent = document.getElementById("A" + num + "-per");

  if (
    top.value &&
    bottom.value &&
    top.value !== "" &&
    bottom.value &&
    top.value !== ""
  ) {
    percent.innerHTML = parseFloat((top.value / bottom.value) * 100).toFixed(2);
  } else {
    percent.innerHTML = "";
  }
}
