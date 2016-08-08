dataDrivenQuiz.questions = (function () {

  var questions = [{
    title: 'Which is the most preferred way to write our JavaScript code?',
    options: [
      { text: 'inline along with our HTML', id: '0'},
      { text: 'flat inside *.js files', id: '1' },
      { text: 'in small Modules, one per *.js file', id: '2' }
    ],
    correctAnswers: ['2']
  }, {
    title: 'What does the $() function returns when invoked with a CSS selector?',
    options: [
      { text: 'a single element', id: '0' },
      { text: 'an array of elements', id: '1' },
      { text: 'the HTML of the selected element', id: '2' },
      { text: 'a Composite Object', id: '3' }
    ],
    correctAnswers: ['3']
  }, {
    title: 'Which of the following are Design Patterns',
    acceptsMultiple: true,
    options: [
      { text: 'Garbage Collector', id: '0' },
      { text: 'Class', id: '1' },
      { text: 'Object Literal', id: '2' },
      { text: 'Observer', id: '3' }
    ],
    correctAnswers: ['2', '3']
  }, {
    title: 'How can get a hold to the <body> element of a page?',
    acceptsMultiple: true,
    options: [
      { text: 'document.body', id: '0' },
      { text: 'document.getElementsByTagName(\'body\')[0]', id: '1' },
      { text: '$(\'body\')[0]', id: '2' },
      { text: 'document.querySelector(\'body\')', id: '3' }
    ],
    correctAnswers: ['0', '1', '2', '4']
  }];

  return {
    data: questions
  }

})();