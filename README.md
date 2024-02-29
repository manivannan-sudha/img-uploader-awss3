# Image Uploader using AWS S3
This project is a simple image uploader built with Node.js and Express, leveraging Amazon S3 (Simple Storage Service) for storing the uploaded images. It allows users to upload images via a web interface, which are then securely stored on AWS S3.

## Features
**Image Upload**: Users can easily upload images using the provided web interface.
**AWS S3 Integration:** Uploaded images are securely stored in an AWS S3 bucket, ensuring durability and scalability.
**Visual Interface:** The web interface provides a visually appealing form for uploading images.
**Environment Configuration:** AWS credentials are securely managed using environment variables, ensuring security and flexibility.
## Requirements
Node.js installed on your system
AWS account with access to S3
## Setup
#### Clone the repository:
```bash
git clone https://github.com/manivannan-sudha/img-uploader-awss3
cd image-uploader
```

#### Install dependencies:
```bash
npm install
```

#### Set up environment variables:
Create a .env file in the root directory and add the following:

```makefile
AWSaId = <your-access-key-id>
AWSsaK = <your-secret-access-key>
```
Replace <your-access-key-id> and <your-secret-access-key> with your AWS credentials.

#### Run the application:
```bash
npm start
```
#### Access the application:
Open your web browser and navigate to http://localhost:3000 to access the image uploader.

### Contributing
Contributions are welcome! Please feel free to fork the repository and submit pull requests with your enhancements or bug fixes.
