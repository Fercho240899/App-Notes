const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
}

indexCtrl.renderAbout = (req, res) => {
    res.render('about')
}

indexCtrl.renderLogin = (req, res) => {
    res.render('login')
}

indexCtrl.renderRegister = (req, res) => {
    res.render('register')
}


module.exports = indexCtrl;