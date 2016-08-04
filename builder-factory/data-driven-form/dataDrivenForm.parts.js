dataDrivenForm.parts = (function () {

  var parts = [
    {
      type: 'text',
      name: 'firstname',
      title: 'First Name'
    },
    {
      type: 'text',
      name: 'lastname',
      title: 'Last Name'
    },
    {
      type: 'email',
      name: 'email',
      title: 'e-mail address'
    },
    {
      type: 'date',
      name: 'birthdate',
      title: 'Date of birth'
    },
    {
      type: 'number',
      name: 'experience',
      title: 'Years of experience'
    },
    {
      type: 'textarea',
      name: 'summary',
      title: 'Summary'
    },
    {
      type: 'checkbox',
      name: 'receivenotifications',
      title: 'Receive notification e-mails'
    },
    {
      type: 'notice',
      name: 'By using this form you accept the terms of use'
    },
    {
      type: 'button',
      name: 'Save'
    },
    {
      type: 'button',
      name: 'Submit'
    }
  ];

  return {
    data: parts
  }

})();