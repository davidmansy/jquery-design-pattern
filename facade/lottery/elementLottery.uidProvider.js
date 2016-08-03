elementLottery.uidProvider = (function () {

  function get() {
    return 'Lot' + $.guid++;
  }

  return {
    get: get
  }
})();