import { JwtPayload, jwtDecode } from "jwt-decode";

class AuthService {
  /**
   * Decode the JWT token and return the user profile
   */
  getProfile(): JwtPayload | null {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  /**
   * Check if the user is logged in (valid token present and not expired)
   */
  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  /**
   * Check if the JWT token is expired
   */
  isTokenExpired(token: string): boolean {
    try {
      const decoded: JwtPayload = jwtDecode(token);
      if (!decoded.exp) return false; // If no expiration, assume valid
      return decoded.exp * 1000 < Date.now(); // Convert exp to milliseconds
    } catch (err) {
      return true; // If decoding fails, assume expired
    }
  }

  /**
   * Retrieve the JWT token from localStorage
   */
  getToken(): string | null {
    return localStorage.getItem("token");
  }

  /**
   * Store the JWT token and redirect to the homepage
   */
  login(idToken: string): void {
    localStorage.setItem("token", idToken);
    window.location.assign("/"); // Redirect to home page
  }

  /**
   * Remove the JWT token and redirect to the login page
   */
  logout(): void {
    localStorage.removeItem("token");
    window.location.assign("/login"); // Redirect to login page
  }
}

export default new AuthService();

