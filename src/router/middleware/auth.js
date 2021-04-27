const auth = function ({ next, store }) {
    console.log('test');
    if (!store.getters.auth) {
        return next({
            name: 'login'
        })
    }

    return next()
}

export {auth}