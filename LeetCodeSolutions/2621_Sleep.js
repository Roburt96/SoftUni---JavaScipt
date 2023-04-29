async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
    return millis;
  }

async function main(n) {
    const result = await sleep(n);
    console.log(result);
  }
  
  main(200);

//   the main function calls the sleep function 
//   with an argument of 200 to sleep. The await 
//   keyword is used to wait for the promise returned by sleep to 
//   resolve before logging the result.