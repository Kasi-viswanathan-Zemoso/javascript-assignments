
document.getElementById("demo").innerHTML = localStorage.clickcount;

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("demo").innerHTML = localStorage.clickcount;
}

function clickCounterN() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) - 1;
  } else {
    localStorage.clickcount = -1;
  }
  document.getElementById("demo").innerHTML = localStorage.clickcount;
}

function clickCounter2() {
  if (sessionStorage.clickcount2) {
    sessionStorage.clickcount2 = Number(sessionStorage.clickcount2) + 1;
  } else {
    sessionStorage.clickcount2 = 1;
    }
  document.getElementById("demo2").innerHTML = sessionStorage.clickcount2;
}

function clickCounter2N() {
  if (sessionStorage.clickcount2) {
    sessionStorage.clickcount2 = Number(sessionStorage.clickcount2) - 1;
  } else {
    sessionStorage.clickcount2 = -1;
    }
  document.getElementById("demo2").innerHTML = sessionStorage.clickcount2;
}

function clearLocal() {
    localStorage.clickcount = 0;
    document.getElementById("demo").innerHTML = localStorage.clickcount;
}

function clearSession() {
    sessionStorage.clickcount2 = 0;
    document.getElementById("demo2").innerHTML = sessionStorage.clickcount2;
}