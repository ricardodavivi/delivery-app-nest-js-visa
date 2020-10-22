"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = void 0;
exports.fileFilter = (req, file, callback) => {
    const mimeTypeAllowed = ['image/png', 'image/jpeg', 'image/gif'];
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/) || mimeTypeAllowed.indexOf(file.mimetype) >= 0) {
        callback(null, true);
    }
    else {
        callback(new Error('Somente imagens são permitidas'), false);
    }
};
//# sourceMappingURL=file-filter.js.map