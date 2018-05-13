const map = [ // zawiera układ obiektów na mapie świata
  [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  1, -1,  1,  0,  0,  0,  0,  0,  2,  0,  0],
  [ 0,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0],
  [ 0,  0,  0,  0,  1, -1,  1,  0,  0,  0,  0,  0, -1,  0,  0],
  [ 0,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0],
  [ 0,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0],
  [ 0,  0,  0,  0,  0, -1,  1,  0,  0,  0,  1,  0, -1,  0,  0],
  [ 0,  0,  0,  0,  0, -1, -1, -1, -1, -1, -1,  0, -1,  0,  0],
  [ 0,  0,  1, -1, -1, -1,  0,  0,  0,  0, -1, -1, -1,  0,  0],
  [ 0,  0,  0,  0,  0, -1,  0,  0,  0,  0, -1,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  0, -1, -1, -1, -1, -1, -1,  1,  0,  0,  0],
  [ 0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
];

const map1 = [ // zawiera układ obiektów na mapie świata
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  1, -1,  1,  0,  0,  0,  0,  0,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  1, -1,  1,  0,  0,  0,  0,  0, -1,  0,  0, -1, -1, -1, -1,  1,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0, -1,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0,  0,  0, -1,  0,  0, -1,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  1,  0,  0,  0,  1,  0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1, -1, -1, -1, -1, -1,  0, -1,  0,  0,  0, -1,  0,  0,  0,  0, -1,  1, 0, 0],
    [ 0,  0,   1, -1, -1, -1,  0,  0,  0,  0, -1, -1, -1,  0,  0,  0, -1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0, -1,  0,  0,  0,  0,  0, -1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,   0,  0,  0, -1,  0,  0,  0,  0, -1,  1,  0, -1, -1, -1, -1,  0,  0,  0,  1, -1,  0, 0, 0],
    [ 0,  0,  -1, -1, -1, -1, -1,  1,  0,  0,  1,  0,  0, -1,  0,  0, -1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  0,  0,  1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1, -1, -1, -1, -1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  1, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  2,  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  0,  0,  0,  0,  0,  0,  1, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0, -1,  0,  0,  1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  0,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  0,  0, -1,  0,  0,  0,  0, -1,  0, 0, 0],
    [ 0,  2,  -1,  0,  0,  0,  0,  0,  0,  0,  0,  1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  0, 0, 0],
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, -1,  2, 0, 0],
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0],
    [ 0,  0,   0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0, 0]
  ];

const canvas = document.querySelector('canvas').getContext("2d");;

const droga = Math.floor(Math.random() * 6);
const trawa = Math.floor(Math.random() * 6);

function PrintWorld(map) {

  map.forEach((line, j) => {
    line.forEach((el, i) => {
      let image = new Image();
      image.onload = () => {
        canvas.drawImage(image, i*32, j*32, 32, 32);
      }
      if (el == 0) {
        image.src = 'img/trawa_' + trawa + '.png';
      }
      if (el == -1) {
        image.src = 'img/droga_' + droga + '.png';
      }
      if (el == 1) {
        image.src = 'img/domek_' + Math.floor(Math.random() * 4) + '.png';
      }
      if (el == 2) {
        image.src = 'img/wysypisko.png';
      }
    })
  })
}

function PrintTruck(x, y) {
  let image = new Image();
  image.onload = () => {
    canvas.drawImage(image, x*32, y*32);
  }
  image.src = 'img/smieciarka_0.png';


}


function moveSimple(start, end) {
  if (map1[start.x][start.y] != -1) {
    PrintWorld(map1)
    PrintTruck(start.y, start.x);
    alert("Starting point is not traversable!")
  } else if (map1[end.x][end.y] != -1) {
    PrintWorld(map1)
    PrintTruck(end.y, end.x);
    alert("End point is not traversable!")
  } else {
    let a = A(map1, start, end).reverse();
    let path = a.concat([end])
    console.log(path);

    let i = 0;

    const animate = () => {
      let obj = path[i];
      PrintWorld(map1)
      PrintTruck(obj.y, obj.x);
      if (i < path.length-1) i++;
    }
    window.setInterval(animate, 500)
  }
}

function moveMultiple (destinations) {

}

function distanceForTSP(destinations) {
  var distance = 0;
  for (var i = 0; i < destinations.length-1; i++) {
    distance += Math.pow(( destinations[i].x - destinations[i+1].x ), 2) + Math.pow(destinations[i].y - destinations[i+1].y,2);
    // var newDist = A(map1, destinations[i], destinations[i+1]).length;
    // console.log("Destinations: ", destinations[i], destinations[i+1]);
    // console.log("A:", A(map1, destinations[i], destinations[i+1]));
    // console.log("A.length", newDist);
    // distance += newDist;
  }
  console.log("Overall distance: ", distance);
  return distance;
}


let start = {x: 4, y: 18};
let middle = {x: 7, y: 12};
let end = {x: 18, y: 13};
let destinations = [start, end, middle];
TSP(destinations, distanceForTSP)
// distanceForTSP(destinations)

// moveSimple(start, end)
drawMap(map1);
