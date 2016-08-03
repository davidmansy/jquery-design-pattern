$(document).ready(function () {
  broker.on('categoryItemClose categoryItemOpen', function (event) {
    var $counter = $('#dashboardItemCounter');
    var count = +$counter.text();

    if (event.type === 'categoryItemOpen') {
      $counter.text(count + 1);
    } else if (event.type === 'categoryItemClose' && count > 0) {
      $counter.text(count - 1);
    }
  });
});