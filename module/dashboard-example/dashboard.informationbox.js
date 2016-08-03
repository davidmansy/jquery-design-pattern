dashboard.informationbox = (function () {

  'use strict';
  var $boxContainer = null;

  function init() {
    $boxContainer = dashboard.$container.find('.boxContainer');

    $boxContainer.on('click', '.boxCloseButton', function () {
      var $button = $(this);
      dashboard.informationbox.close($button);
    });
  }

  function close($boxElement) {
    $boxElement.closest('.boxSizer').remove();
  }

  function openNew(itemName) {
    var boxHtml = '<div class="boxSizer"><article class="box">' +
    '<header class="boxHeader">' + itemName +
    '<button class="boxCloseButton">&#10006;</button></header>' +
    'Information box regarding ' + itemName +
    '</article></div>';
    $boxContainer.append(boxHtml);
  }

  return {
    init: init,
    openNew: openNew,
    close: close
  };

})();