var dataDrivenQuiz = (function () {

  function MultipleChoiceBuilder() {
    this.title = 'Untitled';
    this.options = [];
  }

  MultipleChoiceBuilder.prototype.setTitle = function(title) {
    this.title = title;
    return this;
  };

  MultipleChoiceBuilder.prototype.setAcceptsMultiple = function(acceptsMultiple) {
    this.acceptsMultiple = acceptsMultiple;
    return this;
  };

  MultipleChoiceBuilder.prototype.addOption = function(optionText) {
    this.options.push(optionText);
    return this;
  };

  MultipleChoiceBuilder.prototype.getResult = function() {
    var $header = $('<header>').text(this.title);

    var questionGuid = $.guid++;
    var $optionsList = $('<ul class="unstyled">');

    _.each(this.options, function (option, index) {
      var $input = $('<input/>').attr({
        type: this.acceptsMultiple ? 'checkbox' : 'radio',
        value: index,
        name: questionGuid
      });
      var $option = $('<li>').append($('<label>').append($input, $('<span>').text(option)));
      $optionsList.append($option);
    }, this);

    return $('<article>').append($header, $optionsList);
  };

  function init() {
    var $form = $('form');
    _.each(dataDrivenQuiz.questions.data, function (question) {
      var multipleChoiceBuilder = new MultipleChoiceBuilder();
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
    init: init,
    MultipleChoiceBuilder: MultipleChoiceBuilder
  }

})();

$(document).ready(dataDrivenQuiz.init);