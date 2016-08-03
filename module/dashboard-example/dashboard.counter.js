dashboard.counter = (function () {

  'use strict';
  var dashboardItemCounter;
  var $counter;

  function init() {
    $counter = $('#dashboardItemCounter');

    var $boxContainer = dashboard.$container.find('.boxContainer');
    var initialValue = $boxContainer.find('.boxSizer').length;
    dashboard.counter.setValue(initialValue);

    dashboard.$container.find('.dashboardCategories').on('click', 'button', function () {
      dashboard.counter.setValue(dashboardItemCounter + 1);
    });

    $boxContainer.on('click', '.boxCloseButton', function () {
      dashboard.counter.setValue(dashboardItemCounter - 1);
    });
  }

  function setValue(value) {
    dashboardItemCounter = value;
    $counter.text(dashboardItemCounter);
  }

  return {
    init: init,
    setValue: setValue
  };

})();