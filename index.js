// .map() functions

function mapToNegativize(sourceArray){ 
  return sourceArray.map(x => x*-1);
}

function mapToNoChange(sourceArray){
  return sourceArray;
}

function mapToDouble(sourceArray){
  return sourceArray.map(x => x*2);
}

function mapToSquare(sourceArray){
  return sourceArray.map(x => x**2);
}

// .reduce functions

function reduceToTotal(sourceArray, startingPoint = 0){
  const reduceNumber = function(start, end){
    return start + end 
  }
  return sourceArray.reduce()
}