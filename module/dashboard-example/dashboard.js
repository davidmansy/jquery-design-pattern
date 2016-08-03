var dashboard = (function () {

  'use strict';
  var $container = $('.dashboardContainer');

  function init() {
    dashboard.categories.init();
    dashboard.informationbox.init();
    dashboard.counter.init();
  }

  return {
    $container: $container,
    init: init
  }

})();

$(document).ready(dashboard.init);