let path = require("path");
let fs = require("fs");
let http = require("http");

var normalizedPath = path.join(__dirname, "");

function img(icon, name) {
  return `<div
  style="
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border: 2px solid red;
    margin: 10px;
    width: 150px;
    height: 150px;
  "
>
  ${icon}
  ${name}
</div>`;
  // return `<img src="${name}" alt="" srcset="">`
}

const PORT = 8080;

// fs.readFile("./index.html", function (err, html) {
//   if (err) throw err;
console.log(__dirname);
const svgPath = __dirname.split("\\").slice(0, -1).join("\\");
console.log(svgPath);

let a = http.createServer(function (request, response) {
  response.writeHeader(200, { "Content-Type": "text/html" });
  // response.write(html);

  let icons = fs.readdirSync("../icons");
  icons.map((file, id) => {

    fs.readFile(svgPath + "\\icons\\" + file, "utf-8", (errFR, fileData) => {
      if (errFR) throw errFR;

      response.write(img(fileData, file));
      if (id === icons.length - 1) {
        console.log(id);
        console.log("END");
        response.end();
      }
    });
  });
});

a.listen(PORT, "localhost");
// });
