const resetURL = (url) => {
    window.history.pushState({}, document.title, url );
}