const fs = require("fs");

fs.readFile("./operations/data.txt", (err, data) => {
  
  if (err) {

    console.log(err.message);

  } else {

    console.log(data);

    // Move the deletion operation inside the callback
    fs.unlinkSync("./operations/data.txt"); // delete the file
    console.log("File deleted successfully.");
  }
});
