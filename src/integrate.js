import { ERP_API_KEY, ERP_API_SECRET, ERP_API_URL } from "./config/envConfig.js";
import axios from "axios";
export default async function fetchUserEmails() {
    try {
      const response = await axios.get(ERP_API_URL, {
        headers: {
          Authorization: `token ${ERP_API_KEY}:${ERP_API_SECRET}`
        }
      });
      
      
      const users = response.data.data; 
      const emails = users.map(user => user.name); 
      console.log(emails);
      
      return emails;
    } catch (error) {
      console.error('Error fetching user emails:', error);
      return [];
    }
}

