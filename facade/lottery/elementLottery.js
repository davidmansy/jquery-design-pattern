var elementLottery = (function () {

  var elementIDs;
  var ticketCount = 30;
  var $lottery;

  function init() {
    elementIDs = [];
    $lottery = $('#lottery').empty();
    addTickets(ticketCount);
    $('#lotteryTicketButton').click(pick);
  }

  function addTickets(count) {
    var i = 0;
    for (; i < count; i++) {
      var id = elementLottery.uidProvider.get();
      elementIDs.push(id);
      $lottery.append(elementLottery.ticket.createHtml(id));
    }
  }

  function pick() {
    var index = Math.floor(Math.random() * elementIDs.length);
    var result = $lottery.find('#' + elementIDs[index]).text();
    alert(result);
    return result;
  }

  return {
    init: init
  }
})();

$(document).ready(elementLottery.init);