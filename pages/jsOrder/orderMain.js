$.get('https://galvanize-eats-api.herokuapp.com/menu', printMenuItems);

function printMenuItems (data) {
	var menuItems = data.menu;
  var menuPrices = data.price;
	for (var i=0; i<menuItems.length; i++) {
		console.log(menuItems[i].name, menuItems[i].price);
    var $div = $("<div class='comboItemPrice' id='comboItemPrice'>" +
    "<p class='menuItem' id='menuItem'>"+ menuItems[i].name + "</p>" +
    "<p class='menuPrices' id='menuPrices'>" + menuItems[i].price + "</p>" +
    "</div>");
    $div.click(function(){
      console.log('item was clicked');
    })
    $('#displayMenu').append($div)
    // $('#menuItem0').text(menuItems[0].name);
    // $('#menuPrices0').text(menuItems[0].price);
    // $('#menuItem1').text(menuItems[1].name);
    // $('#menuPrices1').text(menuItems[1].price);
    // $('#menuItem2').text(menuItems[2].name);
    // $('#menuPrices2').text(menuItems[2].price);
    // $('#menuItem3').text(menuItems[3].name);
    // $('#menuPrices3').text(menuItems[3].price);
    // $('#menuItem4').text(menuItems[4].name);
    // $('#menuPrices4').text(menuItems[4].price);
	}
}

function menuItems (data){
  var temperature = data.query.results.channel.item.condition.temp
  $('#temperature').text(temperature)
  $('#largeTemp').text(temperature)
};
