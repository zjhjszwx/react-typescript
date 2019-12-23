function fetchApi(url, parms) {
    return {
        url: url,
        method: "post",
        body: parms
    };
}
fetchApi("GetList", { id: 2 });
var person1; // name | age
