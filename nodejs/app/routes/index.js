const express = require('express');
const azureService = require('../services')
const router = express.Router();

router.get('/api/azure-blob-storage', azureService.getAzureBlobStorageContent)

module.exports = router;