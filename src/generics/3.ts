function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
  }
  
  const objA = { name: 'Alice' };
  const objB = { age: 30 };
  
  const mergedObj = merge(objA, objB);
  
  console.log(mergedObj); // { name: 'Alice', age: 30 }
  
  
  const objC = { color: 'blue' };
  const objD = { weight: 70 };
  
  const mergedObj2 = merge(objC, objD);
  
  console.log(mergedObj2); // { color: 'blue', weight: 70 }