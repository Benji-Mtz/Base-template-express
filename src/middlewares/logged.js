// Middleware se ejecuta despues de un req pero antes del res

const isLoggedMiddleware = (req, res, next) => {
    // console.log("Execute middleware");

    let logged = false;

    if (logged) {
        next()
    } else {
        res.send('No puede acceder debe loguearse');
    }
}

module.exports = isLoggedMiddleware;