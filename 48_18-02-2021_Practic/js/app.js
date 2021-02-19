// Api.registration("dayday91@day.com", "Aa123456_")
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

document.querySelector("#root").append(loader());

let state = {
    //sledit prishli li dannie k nam ili net
    loading: false,
    token: null, // netu zaregistrirovannih poljzovatelej. Token iz localStorage
    page: "home",
    contacts: [],
    credentials: {
        email: "",
        password: "",
    },
    authSuccess: false,
    authError: null,
    selectedIndex: -1,
};

function setState(newState) {
    //prodjot kakkoj-to objekt
    // metod, kotorij sledit i izmenjaet state
    state = {...state, ...newState }; // obnovljaem state. Vozjmjotsja s novogo i dobavim v starij
    //state = newState;
    renderApp();
}

function init() {
    // rabotaet s tokinami. Inicializiruem
    const token = Store.getCurrentToken();
    if (token) {
        Api.getAllContacts(token).then((response) => {
            setState({ token, page: "list", contacts: response.contacts });
        });
    } else {
        setState({});
    }
}

function renderApp() {
    const root = document.querySelector("#root");
    root.innerHTML = "";
    root.append(
        header({
            auth: state.token !== null,
            isAdd: state.page === "add",
            onAddClickHandler,
            onLoginClickHandler,
            onLogoutClickHandler,
        })
    );
    root.append(document.createElement("hr"));
    if (state.page === "home") {
        root.append(home());
    } else if (state.page === "login") {
        root.append(
            login(
                state.authSuccess,
                state.authError,
                state.credentials.email,
                state.credentials.password,
                onLoginClickHandler,
                onRegClickHandler
            )
        );
    } else {
        root.append(
            content(
                state.contacts,
                state.selectedIndex,
                state.page,
                onContactClickHandler,
                onAddClickHandler,
                onDeleteContactClickHandler
            )
        );
        if (state.loading) {
            root.append(loader());
        }
    }
}

function onLoginClickHandler() {
    setState({ page: "login" });
}

function onLogoutClickHandler() {
    Store.removeTocken();
    setState({
        token: null,
        page: "home",
        credentials: {
            email: "",
            password: "",
            authError: null,
            authSuccess: false,
        },
    });
}

function loadContacts() {
    setState({...state, loading: true });
    Api.getAllContacts(state.token)
        .then((response) => {
            setState({
                ...state,
                loading: false,
                contacts: response.contacts,
            });
        })
        .catch((error) => {
            setState({...state, loading: false });
            showError(error.message);
        });
}