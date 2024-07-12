function openNewTab() {
    // Open a new tab with the specified HTML file
    window.open("buypage.html", "_blank");
}

        // Assuming items is your array of objects
        var items = [
            {name: 'Kajukatli'},
            {name: 'Laddu'},
            {name: 'Kalakhaan'},
            //...
        ];

        function searchItems(searchTerm) {
            // Convert searchTerm to lower case for case insensitive search
            searchTerm = searchTerm.toLowerCase();

            // Filter items array
            var result = items.filter(function(item) {
                return item.name.toLowerCase().includes(searchTerm);
            });

            return result;
        }

        // Usage
        var searchBar = document.getElementById('searchBar'); // Assuming 'searchBar' is the id of your input element

        searchBar.addEventListener('input', function(e) {
            var searchTerm = e.target.value;
            var results = searchItems(searchTerm);

            // Now 'results' contains the items that match the search term
            // You can display these results in your webpage
            var resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = ''; // Clear previous results

            results.forEach(function(item) {
                var li = document.createElement('li');
                li.textContent = item.name;
                resultsContainer.appendChild(li);
            });
        });