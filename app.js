const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;

const s3 = new AWS.S3({
  accessKeyId: process.env.AWSaId,
  secretAccessKey: process.env.AWSsaK
});


const storage = multer.memoryStorage();
const upload = multer( { storage: storage } );

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', upload.single('image'), (req, res) => {
  const file = req.file;


  const params = {
    Bucket: 'your-bucket-name',
    Key: file.originalname,
    Body: file.buffer,
    ACL: 'public-read' 
  };


  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error uploading file');
    }

    console.log('File uploaded successfully:', data.Location);
    res.send('File uploaded successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${ port }`);
});
