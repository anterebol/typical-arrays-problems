
exports.min = function min(arg) {
  if (typeof(arg) === 'object') {
  let value = arg[0];
    if (typeof(value) === 'number') {
  for (let i = 1; i < arg.length; i++) {
    if (value > arg[i]) {
      value = arg[i];
    }
  } 
  return value; 
  } 
  else {
    return 0;
  }
}
  else {
    return 0;
  }
}

exports.max = function max(arg) {
  if (typeof(arg) === 'object') {
  let value = arg[0];
    if (typeof(value) === 'number') {
  for (let i = 1; i < arg.length; i++) {
    if (value < arg[i]) {
      value = arg[i];
    }
  } 
  return value; 
  } 
  else {
    return 0;
  }
}
  else {
    return 0;
  }
}

exports.avg = function avg(arg) {
  if (typeof(arg) === 'object') {
  let value = arg[0];
    if (typeof(value) === 'number') {
  for (let i = 1; i < arg.length; i++) {
    value = value + arg[i];
  }
   value = value / arg.length; 
   return value; 
  } 
    else {
    return 0;
  }
  }
    else {
    return 0;
  }
}

