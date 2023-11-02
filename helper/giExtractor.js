const fs = require('fs');

// Define the file path
const filePath = 'categories.txt';

// Initialize an empty array to store the categories
let myCategories = [];

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the file content by lines
  const lines = data.split('\n');

  // Add each category to the array
  lines.forEach(line => {
    // Remove leading and trailing whitespace
    const category = line.trim();

    // Check if the line is not empty
    if (category) {
      myCategories.push(category);
    }
  });

  // Now, myCategories contains the URLs from the file
  console.log('Categories:', myCategories);
});
