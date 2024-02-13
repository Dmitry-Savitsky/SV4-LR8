const express = require('express');
const fs = require('fs').promises;

const app = express();
app.use(express.json());

const dataFilePath = 'Data.json';