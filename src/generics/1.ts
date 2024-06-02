import axios from 'axios';

interface UserData {
  id: number;
  name: string;
  email: string;
}

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

async function exampleUsage() {
  try {
    const userData = await fetchData<UserData>('https://example.com/api/user');
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}

exampleUsage();