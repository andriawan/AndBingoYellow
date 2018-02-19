/**
 * Muhammad Irwan Andriawan
 *
 * CP 
 * 089637755100
 * 
 * github 
 * github.com/andriawan
 * 
 * This script is aim to handle logic of box view
 * 
 * 
 *
 */

// create namespace as blank object to
// avoid global variable polution
andriawan = {};
// blank array for looping random number
andriawan.array = [];
// array vertical
andriawan.arrayVertikal1 = [];
andriawan.arrayVertikal2 = [];
andriawan.arrayVertikal3 = [];
andriawan.arrayVertikal4 = [];
andriawan.arrayVertikal5 = [];
// array horizontal
andriawan.arrayHorizontal1 = [];
andriawan.arrayHorizontal2 = [];
andriawan.arrayHorizontal3 = [];
andriawan.arrayHorizontal4 = [];
andriawan.arrayHorizontal5 = [];
// array diagonal
andriawan.arrayDiagonal1 = [];
andriawan.arrayDiagonal2 = [];

/**
 * 
 * This function is aim to check whether
 * vertical pattern has been made
 * 
 * param - interger data which indicate
 * box position
 *
 */
andriawan.checkVerticalPosition = function (data) {
  if (data >= 1 && data <= 5 ){
    andriawan.arrayVertikal1.push(data);
  }else if(data >= 6 && data <= 10){
    andriawan.arrayVertikal2.push(data);
  }else if(data >= 11 && data <= 15){
    andriawan.arrayVertikal3.push(data);
  }else if(data >= 16 && data <= 20){
    andriawan.arrayVertikal4.push(data);
  }else if(data >= 21 && data <= 25){
    andriawan.arrayVertikal5.push(data);
  }
}

/**
 * 
 * This function is aim to check whether
 * horizontal pattern has been made
 * 
 * param - interger data which indicate
 * box position
 *
 */
andriawan.checkHorizontalPosition = function(data){
  if ([1,6,11,16,21].indexOf(data) > -1) {
    andriawan.arrayHorizontal1.push(data);
  }else if([2,7,12,17,22].indexOf(data) > -1) {
    andriawan.arrayHorizontal2.push(data);
  }else if([3,8,13,18,23].indexOf(data) > -1) {
    andriawan.arrayHorizontal3.push(data);
  }else if([4,9,14,19,24].indexOf(data) > -1) {
    andriawan.arrayHorizontal4.push(data);
  }else if([5,10,15,20,25].indexOf(data) > -1) {
    andriawan.arrayHorizontal5.push(data);
  }
}

/**
 * 
 * This function is aim to check whether
 * diagonal pattern has been made
 * 
 * param - interger data which indicate
 * box position
 *
 */

andriawan.checkDiagonalPosition = function (data) {
  if([1,7,19,25].indexOf(data) > -1){
    andriawan.arrayDiagonal1.push(data);
  }else if([5,9,17,21].indexOf(data) > -1){
    andriawan.arrayDiagonal2.push(data);
  }else if(13 == data) {
    andriawan.arrayDiagonal1.push(data);
    andriawan.arrayDiagonal2.push(data);
  }
}

/**
 * 
 * This function is aim to check whether
 * a yellow box has 5 horizontal/vertical/diagonal
 * pattern. Then, it will alert BINGO !
 * 
 */
andriawan.checkFiveCell = function () {
  if (andriawan.arrayVertikal1.length == 5){
    alert("BINGO !");
    andriawan.arrayVertikal1 = [];
  }else if(andriawan.arrayVertikal2.length == 5){
    alert("BINGO !");
    andriawan.arrayVertikal2 = [];
  }else if(andriawan.arrayVertikal3.length == 5){
    alert("BINGO !");
    andriawan.arrayVertikal3 = [];
  }else if(andriawan.arrayVertikal4.length == 5){
    alert("BINGO !");
    andriawan.arrayVertikal4 = [];
  }else if(andriawan.arrayVertikal5.length == 5){
    alert("BINGO !");
    andriawan.arrayVertikal5 = [];
  }else if(andriawan.arrayHorizontal1.length == 5){
    alert("BINGO !");
    andriawan.arrayHorizontal1 = [];
  }else if(andriawan.arrayHorizontal2.length == 5){
    alert("BINGO !");
    andriawan.arrayHorizontal2 = [];
  }else if(andriawan.arrayHorizontal3.length == 5){
    alert("BINGO !");
    andriawan.arrayHorizontal3 = [];
  }else if(andriawan.arrayHorizontal4.length == 5){
    alert("BINGO !");
    andriawan.arrayHorizontal4 = [];
  }else if(andriawan.arrayHorizontal5.length == 5){
    alert("BINGO !");
    andriawan.arrayHorizontal5 = [];
  }else if(andriawan.arrayDiagonal1.length == 5){
    alert("BINGO !");
    andriawan.arrayDiagonal1 = [];
  }else if(andriawan.arrayDiagonal2.length == 5){
    alert("BINGO !");
    andriawan.arrayDiagonal2 = [];
  }
}

/**
 * 
 * this function is aim to swipe
 * random value in an array
 * 
 * param - arary which want to be shuffled
 *
 */
andriawan.shuffle = function(array){
  var counter = array.length,temporaryValue, randomIndex;

  while (counter) {
    randomIndex = Math.floor(Math.random() * counter--);
    temporaryValue = array[counter];
    array[counter] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// bootstraping logic here
$('document').ready(function () {
  
          
  for (var index = 0; index < 25; index++){
    
    // insert into array number with range 1 - 25
    andriawan.array[index] = index+1;

    // shuffle the number
    andriawan.shuffle(andriawan.array);

    // create the DOM
    $('.container_15.custom').append('<div class="grid_3 custom ' + index + '" data-state="false" data-position=' + (index + 1) + '></div>');
  }

  // about the view
  for (var index = 0; index < andriawan.array.length; index++) {
    // show the random array to the box
    $('.grid_3.custom.' + index).append(andriawan.array[index]);
    // create click listener
    $('.grid_3.custom.' + index).click(function () {
      // check attribute to prevent double yellow
      // clicking
      if($(this).attr("data-state") === "true"){
        alert("please click another box");
        return;
      }
      // every data attribut is in string form
      // so we need to parse it to process calculation
      // on its data
      var data = parseInt($(this).attr("data-position"));

      // main logic checking (see main.js)
      andriawan.checkVerticalPosition(data);
      andriawan.checkHorizontalPosition(data);
      andriawan.checkDiagonalPosition(data);
      andriawan.checkFiveCell();

      // react to the DOM
      $(this).css({"background-color": "yellow"});
      $(this).attr("data-state",true);
      
    })
  }
  
});