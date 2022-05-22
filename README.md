# E-Commerce Back End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application provides the user with an e-commerce back end. The application runs in node and uses an express server paired with sequelize and mysql2 to handle requests and query a database.

The data is arranged as a set of four models. There are product, category, tag, and product-tag models. Relationships are defined for the data between the different models. Products may belong to only one category, each product can have many tags, and each tag can have many products. Users are able to send get, post, put, and delete requests to the server to retrieve and manipulate data on the database. Since this application is only a back end application, Insomnia was utilized to generate the server requests.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Demo](#demo)
- [License](#license)
- [Questions](#questions)

---

## Installation

To install this application, download all of the files from the repository to a local directory on your machine. The application was built on node.js v16.14.2, and a compatible installation of node.js is required to use the application.

After downloading all of the files from the repository, your mySQL user name and password need to be coded into a .env file in the application's root directory. All dependencies for the application should be installed by running `npm i` in the root directory.

The database must be created by running `source schema.sql` after logging in to a mySQL interface.

After the database is created, seed data can be added to the database by running `npm run seed` in the terminal.

---

## Usage

After the above installation steps are complete, the application is ready to use. To use the application, from the terminal run `npm start`. Since there is no front end for this application, http route testing should be completed via an API design platform such as Insomnia.

---

## Tests

No test scripts were developed for this application.

---

## Demo

A demonstration of the deployed application is at the following YouTube link:
[E-Commerce Back End Demo](https://www.youtube.com/watch?v=NtHvQKAxLkw)

---

## License

This project is licensed under a [MIT License](https://opensource.org/licenses/MIT).

---

## Questions

Check out my [GitHub profile](https://github.com/aavillanueva6).

For additional questions about this project, please reach out to me at <aavillanueva6@gmail.com>
