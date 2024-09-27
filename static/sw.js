self.addEventListener("fetch", (event) => {
    console.log(event);
    if (event.request.url.startsWith(self.location.origin)) {
        // console.log(event);
    }
});
