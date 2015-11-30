
var menuFull = new XMLHttpRequest();

menuFull.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var menuListings = console.log(this.responseText);
  }
}

menuFull.open('GET', 'https://galvanize-eats-api.herokuapp.com/menu');

menuFull.send();

function display() {
  displayMenuItems()
}
display()



function displayMenuItems (){
  var menuItems = menuListings.data.menu.name
  var menuPrices = data.menu.price
  console.log(menuItems);
  console.log(menuPrices);
}
