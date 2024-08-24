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
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });