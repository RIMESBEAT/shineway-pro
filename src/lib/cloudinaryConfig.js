import cloudinary from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

export const Cloudinary = cloudinary.v2;
// Configure Cloudinary
Cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Configure Multer storage using Cloudinary
export const Storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'shineway', // Optional: specify a folder in your Cloudinary account
    allowed_formats: ['jpg', 'png', 'jpeg'], // Add any other allowed formats
  },
});

