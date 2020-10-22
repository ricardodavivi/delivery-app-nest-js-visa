"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filenameGenerator = void 0;
const path_1 = require("path");
const uuid_1 = require("uuid");
exports.filenameGenerator = (req, file, callback) => {
    try {
        let fileExtName = path_1.extname(file.originalname);
        if (!fileExtName) {
            switch (file.mimetype) {
                case 'image/png':
                    fileExtName = '.png';
                    break;
                case 'image/jpeg':
                    fileExtName = '.jpg';
                    break;
                case 'image/gif':
                    fileExtName = '.gif';
                    break;
                default:
                    break;
            }
        }
        const randomName = uuid_1.v4();
        callback(null, `${randomName}${fileExtName}`);
    }
    catch (error) {
        callback(error, '');
    }
};
//# sourceMappingURL=filename-generator.js.map