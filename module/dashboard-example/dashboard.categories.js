dashboard.categories = (function () {
  'use strict';

  function init() {
    dashboard.$container.find('#categoriesSelector').change(function () {
      var selectedIndex = +$(this).val();
      selectCategory(selectedIndex);
    });

    dashboard.$container.find('.dashboardCategories').on('click', 'button', function () {
      var itemName = $(this).text();
      dashboard.informationbox.openNew(itemName);
    });
  }

  function selectCategory(categoryIndex) {
    var $dashboardCategories = dashboard.$container.find('.dashboardCategory');
    var $selectedIndex = $dashboardCategories.eq(categoryIndex).show();
    $dashboardCategories.not($selectedIndex).hide();
  }

  return {
    init: init,
    selectCategory: selectCategory
  };

})();


