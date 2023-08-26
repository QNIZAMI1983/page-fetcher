const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('HTTP Error:', response.statusCode);
    return;
  }

  fs.writeFile(filePath, body, (error) => {
    if (error) {
      console.error('Error writing to file:', error);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});
