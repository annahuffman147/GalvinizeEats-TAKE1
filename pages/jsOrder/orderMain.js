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
      console.log(menuItems);
      $('.menuItem').css('background-color', 'grey');
      // $('this.menuItems').append(menuItems[i].price)
    })
    $('#displayMenu').append($div)
	}
}


var $quantity = $("<form>" +
    "Quantity (between 0 and 5):" +
    "<input type='number' name='quantity' min='0' max='5'>" +
    "</form>"
);

// $(document).ready(function(){
//   $('.menuItem').on('click', function(event){
//     console.log(true);
//     // var temperature = data.query.results.channel.item.condition.temp;
//     console.log($("#temperature").text());
//   });
