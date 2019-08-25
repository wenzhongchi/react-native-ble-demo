export function objectToParams(object: Record<string, any>) {
    let params = [];
    for (const key in object) {
        params.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`
        );
    }
    return params.join("&");
}

// extract request params from url link and convert it to an object
export function paramsToObject(url: string) {
    const queryString = url.split("?")[1].split("#")[0];

    const query: Record<string, any> = {};
    queryString.split("&").forEach(param => {
        const dict = param.split("=");
        query[dict[0]] = dict[1];
    });

    return query;
}
