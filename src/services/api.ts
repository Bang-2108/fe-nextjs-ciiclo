const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/v1';

export async function fetchFromApi(endpoint: string) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    next: { revalidate: 60 },
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data from: ${endpoint}`);
  }

  const responseData = await res.json();
  return responseData.data;
}