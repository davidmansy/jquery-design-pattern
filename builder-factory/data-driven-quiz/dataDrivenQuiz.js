var dataDrivenQuiz = (function () {
  'use strict';

  function init() {
    var $form = $('form');
    _.each(dataDrivenQuiz.questions.data, function (question) {
      var multipleChoiceBuilder = new dataDrivenQuiz.MultipleChoiceBuilder();
      multipleChoiceBuilder
        .setTitle(question.title)
        .setAcceptsMultiple(question.acceptsMultiple);
      _.each(question.options, function (option) {
        multipleChoiceBuilder.addOption(option);
      });
      $form.append(multipleChoiceBuilder.getResult());
    });
  }

  return {
    init: init
  }

})();

$(document).ready(dataDrivenQuiz.init);