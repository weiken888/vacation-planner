// Savings Tracker
function recordSavings() {
    const month = document.getElementById('month').value;
    const yourSavings = parseFloat(document.getElementById('yourSavings').value);
    const girlfriendSavings = parseFloat(document.getElementById('girlfriendSavings').value);

    if (isNaN(yourSavings) || isNaN(girlfriendSavings)) {
        alert("Please enter valid numbers for both savings.");
        return;
    }

    const totalSavings = yourSavings + girlfriendSavings;

    const tableBody = document.querySelector('#savingsTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${month}</td>
        <td>${yourSavings.toFixed(2)}</td>
        <td>${girlfriendSavings.toFixed(2)}</td>
        <td>${totalSavings.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);

    // Clear inputs
    document.getElementById('yourSavings').value = '';
    document.getElementById('girlfriendSavings').value = '';
}

function resetSavings() {
    document.querySelector('#savingsTable tbody').innerHTML = '';
}

// Vacation Strategy
function saveStrategy() {
    const accommodation = document.getElementById('accommodation').value;
    const activities = document.getElementById('activities').value;

    if (!accommodation || !activities) {
        alert("Please fill out all fields in the strategy.");
        return;
    }

    const strategyResults = `
        <h3>📝 Vacation Strategy</h3>
        <p><strong>Accommodation:</strong> ${accommodation}</p>
        <p><strong>Activities:</strong> ${activities}</p>
    `;

    document.getElementById('strategyResults').innerHTML = strategyResults;
}

function resetStrategy() {
    document.getElementById('accommodation').value = '';
    document.getElementById('activities').value = '';
    document.getElementById('strategyResults').innerHTML = '';
}