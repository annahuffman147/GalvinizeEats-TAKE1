function pullData(){
  var menuFull = new XMLHttpRequest();
  menuFull.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var menuListings = console.log(this.responseText);
    }
  }
  menuFull.open('GET', 'https://galvanize-eats-api.herokuapp.com/menu');
  menuFull.send();
}
pullData()



function displayMenuItems(){
  for (var i=0; i<menu.length; i++) {
    var menuItem = pullData.menu[i].name
      console.log(menuItem[i]);
  // var menuPrice = data.menu.price
  // $('#temperature').text(temperature)
  // $('#largeTemp').text(temperature)
};
// displayMenuItems()
//
// function display() {
//   displayMenuItems()
// }
// display()



// function displayMenuItems (){
//   var menuItems = menuListings.data.menu.name
//   var menuPrices = data.menu.price
//   console.log(menuItems);
//   console.log(menuPrices);
// }
