let paintWall = function () {
    console.log("The wall has been painted red");
}
paintWall();

let paintWall2 = function (color) {
    console.log("The wall has been painted " + color);
}
paintWall2("green");

let paintWall3 = function (wall, color) {
    console.log("The " + wall + " wall has been painted " + color);
}
paintWall3("north", "orange");