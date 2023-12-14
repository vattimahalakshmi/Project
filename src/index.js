import './styles.scss';
// Make an AJAX request using jQuery

$.ajax({
  url: 'https://restcountries.com/v3.1/all', // Replace with your API endpoint
  method: 'GET', // HTTP method (GET, POST, PUT, DELETE, etc.)
  dataType: 'json', // Data type expected from the server
  success: function (data) {
    // Function to handle a successful request
    console.log('Data received:', data);

    // You can manipulate or work with the 'data' received from the API here
  },
  error: function (xhr, status, error) {
    // Function to handle errors during the request
    console.error('Request failed:', status, error);
  },
});
