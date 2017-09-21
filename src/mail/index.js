require('marko/node-require').install({
  compilerOptions: {
    writeToDisk: false,
  },
});
const sass = require('node-sass');
const juice = require('juice');
require('util.promisify/shim')();
const path = require('path');
const fs = require('fs');
const util = require('util');
const mailer = require('../mailer/index.js');

const exists = util.promisify(fs.exists);
const renderSass = util.promisify(sass.render);
const juiceResources = util.promisify(juice.juiceResources);

const currentDirectory = process.cwd();

module.exports = async (templatePath, data, options) => {
  const templateDir = path.join(currentDirectory, './app/mailer', templatePath);
  const htmlFile = path.join(templateDir, 'html.marko');
  const textFile = path.join(templateDir, 'text.marko');

  let stylesFile;
  const sassStyle = path.join(templateDir, 'style.sass');
  const scssStyle = path.join(templateDir, 'style.scss');
  const sassExists = await exists(sassStyle);
  const scssExists = await exists(scssStyle);
  if (sassExists) stylesFile = sassStyle;
  if (scssExists) stylesFile = scssStyle;

  const folderExists = await exists(templateDir);
  if (!folderExists) {
    throw new Error('template directory does not exist');
  }

  const htmlExists = await exists(htmlFile);
  if (!htmlExists) {
    throw new Error('html template does not exist');
  }

  if (!options.from) {
    throw new Error('please specify from email address');
  }

  if (!options.to) {
    throw new Error('please specify to email address');
  }

  let styles;
  if (stylesFile) {
    styles = await renderSass({
      file: stylesFile,
    });
  }

  const htmlTemplate = require(htmlFile);
  let html = await htmlTemplate.render(data);

  let text;
  const textFileExists = await exists(textFile);
  if (textFileExists) {
    const textTemplate = require(textFile);
    text = await textTemplate.render(data);
  }

  if (styles) {
    html = juice.inlineContent(html.toString(), styles.css.toString());
  } else {
    html = await juiceResources(html.toString(), {});
  }

  await mailer.sendMail({
    from: options.from,
    to: options.to,
    subject: options.subject,
    text: text.toString(),
    html: html.toString(),
  });
};
