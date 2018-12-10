import auth0 from "auth0-js";
// import { AUTH_CONFIG } from "./auth0-variables";
import EventEmitter from "eventemitter3";
import router from "./../router";

export default class AuthService {
  authenticated = this.isAuthenticated();
  authNotifier = new EventEmitter();

  constructor() {
    this.login = this.login.bind(this);
    this.setSession = this.setSession.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  auth0 = new auth0.WebAuth({
    domain: process.env.VUE_APP_AUTH0_DOMAIN,
    clientID: process.env.VUE_APP_AUTH0_CLIENT_ID,
    redirectUri: process.env.VUE_APP_AUTH0_CALLBACK_URL,
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }

  /**
   * looks for an authentication result in the URL hash
   * and processes it with the parseHash method from auth0.js
   */
  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        router.replace("/");
      } else if (err) {
        router.replace("/");
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  /**
   * Sets the user's Access Token, ID Token, and a time at which the Access Token will expire
   * @param {*} authResult
   */
  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    this.authNotifier.emit("authChange", { authenticated: true });
  }

  /**
   * Removes the user's tokens from browser storage
   */
  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.userProfile = null;
    this.authNotifier.emit("authChange", false);
    // navigate to the home route
    router.replace("/");
  }

  /**
   * Checks whether the expiry time for the Access Token has passed
   */
  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}
