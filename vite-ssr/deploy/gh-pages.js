const ghpages = require("gh-pages");
const path = require("path");
const fs = require("fs");
const jekyllConfigFile = path.join(__dirname, "../jekyll.config");
const distClientDir = path.join(__dirname, "../dist/client");
fs.copyFileSync(
  jekyllConfigFile,
  path.join(distClientDir,'_config.yml'),
);
ghpages.publish(distClientDir, function (err) {
  if (err) {
    console.log("Deploy Failed!");
    console.error(err);
  } else {
    console.log("Successfully Deployed to GithubPages");
  }
});
