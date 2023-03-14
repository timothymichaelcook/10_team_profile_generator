const path = require('path');
const fs = require('fs');
const templatesDir = path.resolve(__dirname, '../src');







const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, 'manager.html'), 'utf8');
  template = replacePlaceholders(template, 'name', intern.getName());
  template = replacePlaceholders(template, 'role', intern.getRole());
  template = replacePlaceholders(template, 'email', intern.getEmail());
  template = replacePlaceholders(template, 'id', intern.getId());
  template = replacePlaceholders(template, 'officeNumber', intern.getOfficeNumber());
  return template;
}

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, 'engineer.html'), 'utf8');
  template = replacePlaceholders(template, 'name', intern.getName());
  template = replacePlaceholders(template, 'role', intern.getRole());
  template = replacePlaceholders(template, 'email', intern.getEmail());
  template = replacePlaceholders(template, 'id', intern.getId());
  template = replacePlaceholders(template, 'github', intern.getGitHub());
  return template;
}

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, 'intern.html'), 'utf8');
  template = replacePlaceholders(template, 'name', intern.getName());
  template = replacePlaceholders(template, 'role', intern.getRole());
  template = replacePlaceholders(template, 'email', intern.getEmail());
  template = replacePlaceholders(template, 'id', intern.getId());
  template = replacePlaceholders(template, 'school', intern.getSchool());
  return template;
}

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, 'main.html'), 'utf8');
  return replacePlaceholders(template, 'team', html);
}

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp('{{ ' + placeholder + '}}', 'gm');
  return template.replace(pattern, value);
}

module.exports = render;