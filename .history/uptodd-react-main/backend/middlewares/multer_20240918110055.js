import multer from "multer"
export const upload = multer({
    dest: "uploads/", // Directory to store uploaded files
    limits: { fileSize: 1 * 1024 * 1024 }, // 1 MB file size limit
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(pdf|doc|docx)$/)) {
        return cb(new Error("Please upload a PDF, DOC, or DOCX file."))
      }
      cb(null, true)
    },
  })