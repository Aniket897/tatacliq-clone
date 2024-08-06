import multer from "multer";
import { v4 } from "uuid";

const storage = multer.diskStorage({
  destination: () => {},
  filename: () => {},
});

const upload = multer({
  storage,
});

export default upload;
