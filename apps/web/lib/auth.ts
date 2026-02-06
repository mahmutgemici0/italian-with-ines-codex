export const auth = {
  getToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("ines_token");
  },
  setToken(token: string) {
    if (typeof window === "undefined") return;
    localStorage.setItem("ines_token", token);
    document.cookie = `auth_token=${token}; path=/`;
  },
  setRole(role: string) {
    if (typeof window === "undefined") return;
    document.cookie = `role=${role}; path=/`;
  },
};
