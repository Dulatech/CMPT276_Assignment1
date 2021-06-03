var activities = 4;

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
  for (i = 1; i <= activities; i++) {
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
  for (i = 1; i <= activities; i++) {
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

document.getElementById("addrow-btn").addEventListener("click", add_act);

function add_act() {
  activities++;

  var tr = document.createElement("tr");
  var titleText = document.createTextNode("Activity " + activities);
  var initialsText = document.createTextNode("A" + activities);
  var title = document.createElement("td");
  var initials = document.createElement("td");
  var weight = document.createElement("td");
  var weightInput = document.createElement("input");
  weightInput.setAttribute("id", "A" + activities + "-weight");
  var grade = document.createElement("td");
  var gradeInput1 = document.createElement("input");
  gradeInput1.setAttribute("id", "A" + activities + "-num");
  gradeInput1.setAttribute("onkeyup", "calc_percent(" + activities + ")");
  var gradeDevider = document.createElement("span");
  var gradeDeviderText = document.createTextNode("/");
  var gradeInput2 = document.createElement("input");
  gradeInput2.setAttribute("id", "A" + activities + "-denum");
  gradeInput2.setAttribute("onkeyup", "calc_percent(" + activities + ")");
  var percent = document.createElement("td");
  percent.setAttribute("id", "A" + activities + "-per");

  title.appendChild(titleText);
  initials.appendChild(initialsText);
  gradeDevider.appendChild(gradeDeviderText);
  weight.appendChild(weightInput);
  grade.appendChild(gradeInput1);
  grade.appendChild(gradeDevider);
  grade.appendChild(gradeInput2);

  tr.appendChild(title);
  tr.appendChild(initials);
  tr.appendChild(weight);
  tr.appendChild(grade);
  tr.appendChild(percent);
  document.getElementById("table").appendChild(tr);
}
