import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {"message":"Type in your URL",
     "name" : "URL"
    }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    const URL= answers.URL;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));
    fs.writeFile('URL.txt', URL, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });