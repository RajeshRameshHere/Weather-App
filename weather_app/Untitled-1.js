


function getTimeFromCoordinates(latitude, longitude) {
  const timestamp = Math.floor(Date.now() / 1000);
  fetch(api_url +`&q=${city}`+ `&appid=${api_key}`);
    var data= response.json();


  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'OK') {
        const timeZoneId = data.timeZoneId;
        const timeString = new Date().toLocaleString('en-US', { timeZone: timeZoneId });

        console.log(`Time zone ID: ${timeZoneId}`);
        console.log(`Current time at coordinates (${latitude}, ${longitude}): ${timeString}`);
      } else {
        console.error('Error fetching timezone information:', data.status);
      }
    })
    .catch(error => console.error('Error:', error));
}

// Example coordinates (for demonstration purposes)
// const latitude = 28.6139; // Replace with your latitude
// const longitude = 77.2090; // Replace with your longitude

const longitude=data.coord.lon;
const latitude=data.coord.lot;

getTimeFromCoordinates(latitude, longitude);