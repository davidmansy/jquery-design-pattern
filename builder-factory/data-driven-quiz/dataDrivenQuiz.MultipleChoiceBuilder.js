dataDrivenQuiz.MultipleChoiceBuilder = (function () {
  'use strict';

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
      var $option = $('<li>').append($('<label>').append($input, $('<span>').text(option.text)));
      $optionsList.append($option);
    }, this);

    return $('<article>').append($header, $optionsList);
  };

  return MultipleChoiceBuilder;

})();