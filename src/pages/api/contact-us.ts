import ApiHelper from '@/components/helper/ApiHelper';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
      try {
        const formData = req.body;
        const response = await ApiHelper.request({
          endpoint: "api/contact-us", 
          method: "POST",
          body: formData,
        });
        console.log("API Response:", response);
    
        if (response.success) {
          return res.status(200).json(response);
        } else {
          return res.status(400).json(response);
        }
      } catch (error: any) {
        return res.status(500).json({ 
          success: false, 
          message: error.message || "Internal Server Error" 
        });
      }
   
  }

}