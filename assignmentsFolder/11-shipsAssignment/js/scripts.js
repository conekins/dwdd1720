fetch('../data/starships.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Starships data:', data);
    // You can now work with the JSON data here
  })
  .catch(error => {
    console.error('Error fetching starships data:', error);
  });