// You can use JavaScript to dynamically populate the sports list and handle other interactive features.

document.addEventListener('DOMContentLoaded', function () {
    // Fetch sports data from the server and populate the sports list
    fetchSports();
});

function fetchSports() {
    // Simulated sports data, replace it with actual data from your server
    const sportsData = ['Football', 'Basketball', 'Tennis', 'Running', 'Cycling'];

    const sportsList = document.getElementById('sportsList');

    sportsData.forEach(sport => {
        const listItem = document.createElement('li');
        listItem.textContent = sport;
        sportsList.appendChild(listItem);
    });
}
