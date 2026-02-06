const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

export const api = {
  courses: () => request<any[]>("/courses"),
  digitalProducts: () => request<any[]>("/products/digital"),
  resources: () => request<any[]>("/resources/free"),
  health: () => request<{ status: string }>("/health"),
};
