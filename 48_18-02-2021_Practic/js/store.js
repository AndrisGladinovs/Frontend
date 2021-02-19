const TOKEN_KEY = "TOCKEN";

class Store {
    static getCurrentToken() {
        return localStorage.getItem(TOKEN_KEY);
    }

    static saveTocken(tocken) {
        localStorage.setItem(TOKEN_KEY, tocken);
    }

    static removeTocken() {
        localStorage.removeItem(TOKEN_KEY);
    }
}