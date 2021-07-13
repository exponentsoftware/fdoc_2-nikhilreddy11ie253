const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA',
    'India'
  ]
  
  function createArrayOfArrays(arr) {
      let arr1 = [];
    for(let i of arr ) {
        let arr2=[]
        let j= i[0] + i.substr(1,i.length -1).toLowerCase();
        arr2.push(j);
        arr2.push(i.substr(0,3))
        arr2.push(i.length)
        arr1.push(arr2)
    }
    return arr1;
   }
   console.log(createArrayOfArrays(countries))