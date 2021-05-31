function calc_percent(num) {
  var top = document.getElementById("A" + num + "-num");
  var bottom = document.getElementById("A" + num + "-denum");
  var percent = document.getElementById("A" + num + "-per");

  if (
    top.value &&
    bottom.value &&
    top.value !== "" &&
    bottom.value &&
    top.value !== "" &&
    parseFloat(top.value) !== 0 &&
    parseFloat(bottom.value) !== 0
  ) {
    percent.innerHTML =
      Math.round(((top.value / bottom.value) * 100 + Number.EPSILON) * 100) /
        100 +
      "%";
  } else {
    percent.innerHTML = "";
  }
}

document.getElementById("mean-btn").addEventListener("click", calc_mean);

function calc_mean() {
  var sum = 0;
  var count = 0;
  var result = document.getElementById("result");
  for (i = 1; i <= 4; i++) {
    var top = document.getElementById("A" + i + "-num");
    var bottom = document.getElementById("A" + i + "-denum");

    if (
      top.value &&
      bottom.value &&
      top.value !== "" &&
      bottom.value !== "" &&
      parseFloat(top.value) !== 0 &&
      parseFloat(bottom.value) !== 0
    ) {
      sum += top.value / bottom.value;
      count++;
    }
  }
  if (count > 0) {
    result.innerHTML =
      Math.round(((sum / count) * 100 + Number.EPSILON) * 100) / 100 + "%";
  } else {
    result.innerHTML = "Please Enter a Grade.";
  }
}

document
  .getElementById("weighted-btn")
  .addEventListener("click", calc_weighted);

function calc_weighted() {
  var sum = 0;
  var count = 0;
  var result = document.getElementById("result");
  for (i = 1; i <= 4; i++) {
    var weight = document.getElementById("A" + i + "-weight");
    var top = document.getElementById("A" + i + "-num");
    var bottom = document.getElementById("A" + i + "-denum");
    if (weight.value && weight.value !== "") {
      if (
        top.value &&
        bottom.value &&
        top.value !== "" &&
        bottom.value !== "" &&
        parseFloat(top.value) !== 0 &&
        parseFloat(bottom.value) !== 0
      ) {
        sum += (top.value / bottom.value) * weight.value;
        count += weight.value;
      }
    }
  }
  if (count > 0) {
    result.innerHTML =
      Math.round(((sum / count) * 100 + Number.EPSILON) * 100) / 100 + "%";
  } else {
    result.innerHTML = "Please Enter a Weight and Grade.";
  }
}
