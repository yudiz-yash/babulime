const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchFromAPI(path) {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: 60 }, // cache 60s
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// Always fetches fresh data from the server — no cache
export async function fetchNoCache(path) {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export { API_URL };
