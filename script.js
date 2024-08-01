//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const outputTable = document.getElementById('output');

  // Create an array of promises
  const promises = [1, 2, 3].map((num, index) => {
    return new Promise((resolve) => {
      const time = Math.random() * 2 + 1; // random time between 1 and 3 seconds
      setTimeout(() => {
        resolve({ promise: `Promise ${num}`, time: time.toFixed(3) });
      }, time * 1000);
    });
  });

  const startTime = performance.now();

  // Wait for all promises to resolve
  Promise.all(promises).then((results) => {
    const endTime = performance.now();

    // Clear the loading row
    outputTable.innerHTML = '';

    // Populate the table with results
    results.forEach((result) => {
      const row = document.createElement('tr');
      const cell1 = document.createElement('td');
      const cell2 = document.createElement('td');
      cell1.textContent = result.promise;
      cell2.textContent = result.time;
      row.appendChild(cell1);
      row.appendChild(cell2);
      outputTable.appendChild(row);
    });

    // Add the total row
    const totalRow = document.createElement('tr');
    const totalCell1 = document.createElement('td');
    const totalCell2 = document.createElement('td');
    totalCell1.textContent = 'Total';
    totalCell2.textContent = ((endTime - startTime) / 1000).toFixed(3);
    totalRow.appendChild(totalCell1);
    totalRow.appendChild(totalCell2);
    outputTable.appendChild(totalRow);
  });
});
