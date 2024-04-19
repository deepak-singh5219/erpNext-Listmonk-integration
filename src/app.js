import express from "express";
import fetchUserEmails from "./integrate.js";

const app = express();
fetchUserEmails();
export default app;