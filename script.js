//your JS code here. If required.
function loadPromises() {
    const table = document.getElementById('myTable');

    // Clear any existing rows
    table.innerHTML = '';

    // Add the loading row
    const loadingRow = table.insertRow();
    const loadingCell = loadingRow.insertCell();
    loadingCell.colSpan = 2;
    loadingCell.textContent = 'Loading...';

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
        table.innerHTML = '';

        // Populate the table with results
        results.forEach((result) => {
            const row = table.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            cell1.textContent = result.promise;
            cell2.textContent = result.time;
        });

        // Add the total row
        const totalRow = table.insertRow();
        const totalCell1 = totalRow.insertCell();
        const totalCell2 = totalRow.insertCell();
        totalCell1.textContent = 'Total';
        totalCell2.textContent = ((endTime - startTime) / 1000).toFixed(3);
    });
}
