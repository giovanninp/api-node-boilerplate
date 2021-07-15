const healtcheckRoutes = (router) => {
    router.get('/healthcheck',(req, res) => {
        res.json({'status': "online"})
    })
}

module.exports = healtcheckRoutes;