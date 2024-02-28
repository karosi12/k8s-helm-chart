const pino = require('pino');
const logger = pino({ level: 'info' });

const { DefaultAzureCredential } = require("@azure/identity");
const { BlobServiceClient } = require("@azure/storage-blob");

const getAzureBlobStorageContent = async (req, res) => {
  try {  
    const account = process.env.STORAGE_ACCOUNT_NAME;
    const defaultAzureCredential = new DefaultAzureCredential();
    const blobServiceClient = new BlobServiceClient(
      `https://${account}.blob.core.windows.net`,
      defaultAzureCredential
    );
    logger.info(`blobServiceClient => ${JSON.stringify(blobServiceClient)}`)
    return res.status(200).send({statusCode: 200, data: blobServiceClient, message: 'success'})   
  } catch (error) {
    logger.info(`Internal server error => ${error.message}`)
    return res.status(500).send(Responses.error(500, "Internal server error")); 
  }
}

module.exports = { getAzureBlobStorageContent }
