"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "double",
  backgroundColor: "black",
};

// Text + chalk definitions
const data = {
  name: chalk.white("              Neil Italia"),
  handle: chalk.white("@neilitalia"),
  work: chalk.white("Front-End Focused Full-Stack Developer"),
  opensource: chalk.white("Node.js Community Committee ") + chalk.green("⬢"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("bitandbang"),
  npm: chalk.red("https://npmjs.com/") + chalk.red("~neilitalia"),
  github: chalk.magenta("https://github.com/") + chalk.magenta("neilitalia"),
  linkedin: chalk.blue("https://linkedin.com/in/") + chalk.blue("neilitalia"),
  web: chalk.green("https://neilitalia.dev"),
  blog: chalk.cyan("https://blog.neilitalia.dev"),
  npx: chalk.red("npx") + " " + chalk.cyan("neilitalia"),
  labelWork: chalk.white.bold("       Work:"),
  labelOpenSource: chalk.white.bold("Open Source:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
  labelBlog: chalk.white.bold("       Blog:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`;
// const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;
const bloging = `${data.labelBlog}  ${data.blog}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline +
  working +
  newline +
  newline +
  webing +
  newline +
  bloging +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  npming +
  newline +
  newline +
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
