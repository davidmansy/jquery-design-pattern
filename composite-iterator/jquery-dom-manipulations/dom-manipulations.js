setTimeout(function () {
  $('#pageHeader').css('font-size', '3em');

  $('.boxContainer .box')
    .append('<br/><br/><i>In case we need simple things</i>.')
    .parent()
    .addClass('boxsizer');

  $('.boxContainer').append('<div class="clear"><div/>');
}, 700);


//COMPOSITE PATTERN
var numberValues = [2, 5, 8];

var objectValues = [{value: 7}, {value: 4}, {value: 6}, {value: 9}];

function ValueComposite() {
  this.length = 0;
}

ValueComposite.prototype.append = function (item) {
  if (typeof item === 'object' && 'value' in item || typeof item === 'number') {
    this[this.length] = item;
    this.length++;
  }

  return this;
};

ValueComposite.prototype.increment = function (number) {
  for (var i = 0; i < this.length; i++) {
    var item = this[i];
    if (typeof item === 'object' && 'value' in item) {
      item.value += number;
    } else if (typeof item === 'number') {
      this[i] += number;
    }
  }

  return this;
}

ValueComposite.prototype.getValues = function() {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    var item = this[i];
    if (typeof item === 'object' && 'value' in item) {
      result.push(item.value);
    } else if (typeof item === 'number') {
      result.push(item);
    }
  }

  return result;
};

var valuesComposition = new ValueComposite();

for (var i = 0; i < numberValues.length; i++) {
  valuesComposition.append(numberValues[i]);
}

for (var i = 0; i < objectValues.length; i++) {
  valuesComposition.append(objectValues[i]);
}

valuesComposition
.increment(2)
.append(1)
.append(2)
.append({value: 3});

console.log(valuesComposition.getValues());

//ITERATOR PATTERN

function iterateTreeValues(node, callback) {
  if (node === null || node === undefined) {
    return;
  }

  if (typeof node === 'object') {
    if ('left' in node) {
      iterateTreeValues(node.left, callback);
    }
    if ('nodeValue' in node) {
      callback(node.nodeValue);
    }
    if ('right' in node) {
      iterateTreeValues(node.right, callback);
    }
  } else {
    callback(node);
  }
}

var collection = {
  nodeValue: 7,
  left: {
    nodeValue: 4,
    left: 2,
    right: {
      nodeValue: 6,
      left: 5,
      right: 9
    }
  },
  right: {
    nodeValue: 9,
    left: 8
  }
};

var values = [];

iterateTreeValues(collection, function (value) {
  if (value > 4) {
    values.push(value);
  }
});

console.log(values);


