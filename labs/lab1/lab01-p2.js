/*
home page
about us
contact
login
register
details\
search page
*/

import http from "http";
import fs from "fs";
import path from "path";

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("WELCOME TO THE SERVER");
  } else if (req.url === "/about") {
    const webpage = fs.readFileSync(path.join("html", "about.html"));
    res.end(webpage);
  } else if (req.url === "/summary") {
    res.end(
      "That is essentially our course right there.  You will be creating a backend application that will run specific operations, whether it's sending content, reading information, validating login credentials and more."
    );
  } else if (req.url === "/hobbies") {
    res.end(
      "I am a soccer player. My aim is to become a freelance in the field of Microsoft dev. Streamling business workflows using Microsoft PowerPlatform. I love web devlopment, and i look forward learning about how the webserver is setup and MERN so I start earnign money form it in the industry. I require a guideline to follow and a mentor, to make sure my learning path is correct and i am not wasting time."
    );
  } else {
    res.end("Page not found");
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
