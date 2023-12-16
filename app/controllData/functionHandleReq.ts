import axios from "axios";

/* function handle data */
export const handleData = async (url: string, method: string, data: any = null) => {
  try {
    return await axios({
      method: method,
      url: url,
      data: data,
      // withCredentials:true,
      headers: {
        'Content-Type': 'multipart/form-data',
        // Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};