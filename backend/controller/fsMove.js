const fs = require('fs');
const config = require('../config');

module.exports = async (image, newPath, callback = err => {if (err) console.error(err)}) => {
    const oldPath = image.path;
    let fileExtension = image.name.split('.').slice(-1)[0].toLowerCase();

    if (config.imageFileExtensions.indexOf(fileExtension) !== -1) {
        let newPathRet = newPath + '.' + fileExtension;
        newPath = './public' + newPath + '.' + fileExtension;

        await fs.unlink(newPath, callback);
        let readStream = await fs.createReadStream(oldPath);
        let writeStream = await fs.createWriteStream(newPath);

        readStream.on('error', callback);
        writeStream.on('error', callback);

        readStream.on('close', async () => {
            await fs.unlink(oldPath, () => {console.log("====== FILE", newPath, "SAVED ======")});
        });

        await readStream.pipe(writeStream);
        return newPathRet
    }
};