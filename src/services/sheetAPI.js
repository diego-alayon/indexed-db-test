import axios from 'axios';
import { config } from '../config';

const getSheetData = async () => {
  const response = await axios.get(`${config.api_url}${config.sheet_id}/${config.sheet_name}`);
  console.log(`${config.api_url}${config.sheet_id}/${config.sheet_name}`)
  return response.data;
}

export { getSheetData };
