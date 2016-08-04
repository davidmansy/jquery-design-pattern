var dataDrivenForm = (function () {

  function formElementHTMLFactory(formElementDefinition) {
    var type, title, name;
    if (!formElementDefinition.title || !formElementDefinition.title.length) {
      title = formElementDefinition.name;
    } else {
      title = formElementDefinition.title;
    }
    type = formElementDefinition.type;
    name = formElementDefinition.name;
    var topPart = '<div><label><span>' + title + '</span><br/>';
    var bottomPart = '</label></div>';

    if (type === 'text') {
      return topPart +
        '<input type="text" maxlength="200" name="' + name + '" />' +
        bottomPart;
    } else if (type === 'email') {
      return topPart +
        '<input type="email" required name="' + name + '" />' +
        bottomPart;
    } else if (type === 'number') {
      return topPart +
        '<input type="number" min="0" max="2147483647" name="' + name + '" />' +
        bottomPart;
    } else if (type === 'date') {
      return topPart +
      '<input type="date" min="1900-01-01" name="' + name + '" />' +
      bottomPart;
    } else if (type === 'textarea') {
      return topPart +
        '<textarea cols="30" rows="3" maxlength="800" name="' + name + '" />' +
        bottomPart;
    } else if (type === 'checkbox') {
      return '<div><label><span>' + title + '</span>' +
      '<input type="checkbox" name="' + name + '" />' +
      bottomPart;
    } else if (type === 'notice') {
      return '<p>' + name + '</p>';
    } else if (type === 'button') {
      return '<button name="' + name + '">' + title + '</button>';
    }
  }

  function init() {
    var $form = $('form');
    _.each(dataDrivenForm.parts.data, function (part) {
      var elementHTML = formElementHTMLFactory(part);
      if (elementHTML && elementHTML.length) {
        $form.append(elementHTML);
      }
    });
  }

  return {
    formElementHTMLFactory: formElementHTMLFactory,
    init: init
  };

})();

$(document).ready(dataDrivenForm.init);