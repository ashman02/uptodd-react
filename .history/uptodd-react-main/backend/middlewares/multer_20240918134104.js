const upload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 2MB file size limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Only .pdf, .doc, and .docx files are allowed'), false)
    }
    cb(null, true)
  },
})
