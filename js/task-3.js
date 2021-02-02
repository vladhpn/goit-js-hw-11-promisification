const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  return new Promise((resoulve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);
    const canProcess = Math.random() > 0.3;
    let id = transaction.id;
    setTimeout(() => {
      if (canProcess) {
        const result = { id, delay };
        resoulve(result);
      }
      reject(transaction.id);
    }, delay);
  });
};

const logSuccess = result => {
  console.log(`Transaction ${result.id} processed in ${result.delay}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
