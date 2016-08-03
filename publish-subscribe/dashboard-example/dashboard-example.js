$(document).ready(function () {

  window.broker = $('.dashboardContainer');
  var $dashboardCategories = $('.dashboardCategories');

  $('#categoriesSelector').change(function () {
    var message = {categoryIndex: +$(this).val()};
    broker.trigger('dashboardCategorySelect', [message]);
  });
  
  broker.on('dashboardCategorySelect', function (event, message) {
    var $dashboardCategory = $('.dashboardCategory');
    var $selectedIndex = $dashboardCategory.eq(message.categoryIndex).show();
    $dashboardCategory.not($selectedIndex).hide();
  });

  $('.boxContainer').on('click', '.boxCloseButton', function () {
    var boxIndex = $(this).closest('.boxSizer').index();
    var message = {boxIndex: boxIndex};
    broker.trigger('categoryItemClose', [message]);
  });

  broker.on('categoryItemClose', function (event, message) {
    $('.boxContainer .boxSizer').eq(message.boxIndex).remove();
  });

  $dashboardCategories.on('click', 'button', function () {
    var $button = $(this);
    var message = {categoryName: $button.text()};
    broker.trigger('categoryItemOpen', [message]);
  });

  broker.on('categoryItemOpen', function (event, message) {
    var boxHtml = '<div class="boxSizer"><article class="box">' +
    '<header class="boxHeader">' + message.categoryName +
    '<button class="boxCloseButton">&#10006;</button></header>' +
    'Information box regarding ' + message.categoryName +
    '</article></div>';
    $('.boxContainer').append(boxHtml);
  })

});