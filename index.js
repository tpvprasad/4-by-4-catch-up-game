var p1currentIndex = 4;
var p2currentIndex = 11;
var targetIndex = 1;
var count1 = 0;
var count2 = 0;

function player1() {
  document.getElementById("g" + targetIndex).addEventListener;
  count1++;
  document.getElementById("player1").innerHTML = count1;
  do {
    targetIndex = Math.floor(Math.random() * 16) + 1;
  } while (targetIndex == p1currentIndex || targetIndex == p2currentIndex);

  document.getElementById("g" + targetIndex).style.backgroundColor = "red";
}

function player2() {
  count2++;
  document.getElementById("player2").innerHTML = count2;
  do {
    targetIndex = Math.floor(Math.random() * 16) + 1;
  } while (targetIndex == p1currentIndex || targetIndex == p2currentIndex);
  document.getElementById("g" + targetIndex).style.backgroundColor = "red";
}

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  positions = {
    1: {
      87: 1,
      68: 2,
      83: 5,
      65: 1,
    },
    2: {
      87: 2,
      68: 3,
      83: 6,
      65: 1,
    },
    3: {
      87: 3,
      68: 4,
      83: 7,
      65: 2,
    },
    4: {
      87: 4,
      68: 4,
      83: 8,
      65: 3,
    },
    5: {
      87: 1,
      68: 6,
      83: 9,
      65: 5,
    },
    6: {
      87: 2,
      68: 7,
      83: 10,
      65: 5,
    },
    7: {
      87: 3,
      68: 8,
      83: 11,
      65: 6,
    },
    8: {
      87: 4,
      68: 8,
      83: 12,
      65: 7,
    },
    9: {
      87: 5,
      68: 10,
      83: 13,
      65: 9,
    },
    10: {
      87: 6,
      68: 11,
      83: 14,
      65: 9,
    },
    11: {
      87: 7,
      68: 12,
      83: 15,
      65: 10,
    },
    12: {
      87: 8,
      68: 12,
      83: 16,
      65: 11,
    },
    13: {
      87: 9,
      68: 14,
      83: 13,
      65: 13,
    },
    14: {
      87: 10,
      68: 15,
      83: 14,
      65: 13,
    },
    15: {
      87: 11,
      68: 16,
      83: 15,
      65: 14,
    },
    16: {
      87: 12,
      68: 16,
      83: 16,
      65: 15,
    },
  };

  if (e.keyCode == 87) {
    console.log("UP");
    // console.log(p1currentIndex);
    let updatedIndex = positions[p1currentIndex][e.keyCode];
    if (updatedIndex != p2currentIndex) {
      document.getElementById("g" + p1currentIndex).style.backgroundColor =
        "lightblue";
      p1currentIndex = updatedIndex;
      document.getElementById("g" + p1currentIndex).style.backgroundColor =
        "green";
      console.log(p1currentIndex);

      if (p1currentIndex == targetIndex) player1();
    }

    // let id = g+p1currentIndex;
    // document.getElementById()
  } else if (e.keyCode == 68) {
    console.log("RIGHT");
    let updatedIndex = positions[p1currentIndex][e.keyCode];
    if (updatedIndex != p2currentIndex) {
      document.getElementById("g" + p1currentIndex).style.backgroundColor =
        "lightblue";
      p1currentIndex = updatedIndex;
      document.getElementById("g" + p1currentIndex).style.backgroundColor =
        "green";
      console.log(p1currentIndex);

      if (p1currentIndex == targetIndex) player1();
    }
  } else if (e.keyCode == 83) {
    console.log("DOWN");
    let updatedIndex = positions[p1currentIndex][e.keyCode];
    if (updatedIndex != p2currentIndex) {
      document.getElementById("g" + p1currentIndex).style.backgroundColor =
        "lightblue";
      p1currentIndex = updatedIndex;
      document.getElementById("g" + p1currentIndex).style.backgroundColor =
        "green";
      console.log(p1currentIndex);

      if (p1currentIndex == targetIndex) player1();
    }
  } else if (e.keyCode == 65) {
    console.log("LEFT");
    let updatedIndex = positions[p1currentIndex][e.keyCode];
    if (updatedIndex != p2currentIndex) {
      document.getElementById("g" + p1currentIndex).style.backgroundColor =
        "lightblue";
      p1currentIndex = updatedIndex;
      document.getElementById("g" + p1currentIndex).style.backgroundColor =
        "green";
      console.log(p1currentIndex);

      if (p1currentIndex == targetIndex) player1();
    }
  }

  positions = {
    1: {
      38: 1,
      39: 2,
      40: 5,
      37: 1,
    },
    2: {
      38: 2,
      39: 3,
      40: 6,
      37: 1,
    },
    3: {
      38: 3,
      39: 4,
      40: 7,
      37: 2,
    },
    4: {
      38: 4,
      39: 4,
      40: 8,
      37: 3,
    },
    5: {
      38: 1,
      39: 6,
      40: 9,
      37: 5,
    },
    6: {
      38: 2,
      39: 7,
      40: 10,
      37: 5,
    },
    7: {
      38: 3,
      39: 8,
      40: 11,
      37: 6,
    },
    8: {
      38: 4,
      39: 8,
      40: 12,
      37: 7,
    },
    9: {
      38: 5,
      39: 10,
      40: 13,
      37: 9,
    },
    10: {
      38: 6,
      39: 11,
      40: 14,
      37: 9,
    },
    11: {
      38: 7,
      39: 12,
      40: 15,
      37: 10,
    },
    12: {
      38: 8,
      39: 12,
      40: 16,
      37: 11,
    },
    13: {
      38: 9,
      39: 14,
      40: 13,
      37: 13,
    },
    14: {
      38: 10,
      39: 15,
      40: 14,
      37: 13,
    },
    15: {
      38: 11,
      39: 16,
      40: 15,
      37: 14,
    },
    16: {
      38: 12,
      39: 16,
      40: 16,
      37: 15,
    },
  };

  if (e.keyCode == 38) {
    console.log("UP");
    // console.log(p1currentIndex);
    let updatedIndex = positions[p2currentIndex][e.keyCode];
    if (updatedIndex != p1currentIndex) {
      document.getElementById("g" + p2currentIndex).style.backgroundColor =
        "lightblue";
      p2currentIndex = updatedIndex;
      document.getElementById("g" + p2currentIndex).style.backgroundColor =
        "yellow";
      console.log(p2currentIndex);

      if (p2currentIndex == targetIndex) player2();
    }
  } else if (e.keyCode == 39) {
    console.log("RIGHT");
    let updatedIndex = positions[p2currentIndex][e.keyCode];
    if (updatedIndex != p1currentIndex) {
      document.getElementById("g" + p2currentIndex).style.backgroundColor =
        "lightblue";
      p2currentIndex = updatedIndex;
      document.getElementById("g" + p2currentIndex).style.backgroundColor =
        "yellow";
      console.log(p2currentIndex);

      if (p2currentIndex == targetIndex) player2();
    }
  } else if (e.keyCode == 40) {
    console.log("DOWN");
    let updatedIndex = positions[p2currentIndex][e.keyCode];
    if (updatedIndex != p1currentIndex) {
      document.getElementById("g" + p2currentIndex).style.backgroundColor =
        "lightblue";
      p2currentIndex = updatedIndex;
      document.getElementById("g" + p2currentIndex).style.backgroundColor =
        "yellow";
      console.log(p2currentIndex);

      if (p2currentIndex == targetIndex) player2();
    }
  } else if (e.keyCode == 37) {
    console.log("LEFT");
    let updatedIndex = positions[p2currentIndex][e.keyCode];
    if (updatedIndex != p1currentIndex) {
      document.getElementById("g" + p2currentIndex).style.backgroundColor =
        "lightblue";
      p2currentIndex = updatedIndex;
      document.getElementById("g" + p2currentIndex).style.backgroundColor =
        "yellow";
      console.log(p2currentIndex);

      if (p2currentIndex == targetIndex) player2();
    }
  }
}
