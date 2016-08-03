elementLottery.ticket = (function () {

  function createHtml(id) {
    var ticketNumber = Math.floor(Math.random() * 1000 * 10);
    return '<div class="ticket" id="' + id + '">' + ticketNumber + '</div>'
  }

  return {
    createHtml: createHtml
  }

})();