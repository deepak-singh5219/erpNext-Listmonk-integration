import { config } from "dotenv";
config();

const {PORT, ERP_API_URL, ERP_API_KEY, ERP_API_SECRET } = process.env;

export { ERP_API_URL, ERP_API_KEY, ERP_API_SECRET, PORT };