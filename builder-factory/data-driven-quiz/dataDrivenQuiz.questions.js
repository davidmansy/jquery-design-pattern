dataDrivenQuiz.questions = (function () {

  var questions = [{
    title: 'Which is the most preferred way to write our JavaScript code?',
    options: [
      'inline along with our HTML',
      'flat inside *.js files',
      'in small Modules, one per *.js file'
    ]
  }, {
    title: 'What does the $() function returns when invoked with a CSS selector?',
    options: [
      'a single element',
      'an array of elements',
      'the HTML of the selected element',
      'a Composite Object'
    ]
  }, {
    title: 'Which of the following are Design Patterns',
    acceptsMultiple: true,
    options: [
      'Garbage Collector',
      'Class',
      'Object Literal',
      'Observer'
    ]
  }, {
    title: 'How can get a hold to the <body> element of a page?',
    acceptsMultiple: true,
    options: [
      'document.body',
      'document.getElementsByTagName(\'body\')[0]',
      '$(\'body\')[0]',
      'document.querySelector(\'body\')'
    ]
  }];

  return {
    data: questions
  }

})();