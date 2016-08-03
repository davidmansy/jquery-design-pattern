$(document).ready(function () {

  var $dashboardCategories = $('.dashboardCategories');

  $dashboardCategories.on('change', '#categoriesSelector', function () {
    var selectedIndex = +$(this).val();
    var $dashboardCategory = $('.dashboardCategory');
    var $selectedIndex = $dashboardCategory.eq(selectedIndex).show();
    $dashboardCategory.not($selectedIndex).hide();
  });

  $('.boxContainer').on('click', '.boxCloseButton', function () {
    $(this).closest('.boxSizer').remove();
  });


  $dashboardCategories.on('click', 'button', function () {
    var $button = $(this);
    var boxHtml = '<div class="boxSizer"><article class="box">' +
      '<header class="boxHeader">' + $button.text() +
      '<button class="boxCloseButton">&#10006;</button></header>' +
      'Information box regarding ' + $button.text() +
      '</article></div>';
    $('.boxContainer').append(boxHtml);
  });

  //$dashboardCategory.on('click', 'button', function () {
  //  var $button = $(this);
  //  $button.attr('disabled', true);
  //
  //  setTimeout(function () {
  //    $button.attr('disabled', false);
  //  }, 700);
  //});
});