import { generateUploadButton, generateUploadDropzone, generateUploader } from '@uploadthing/react';
import { generateReactHelpers } from '@uploadthing/react/hooks';
import type { OurFileRouter } from '@/app/api/uploadthing/core';

export const uploadButton = generateUploadButton<OurFileRouter>();
export const uploadDropzone = generateUploadDropzone<OurFileRouter>();
export const uploader = generateUploader<OurFileRouter>();

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
