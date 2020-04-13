// Your code here

function mapToNegativise(arr){
  let newArr = [];
  for(let i = 0; i < arr; i++){
    newArr.push(arr[i*-1])
  }
  return newArr
}