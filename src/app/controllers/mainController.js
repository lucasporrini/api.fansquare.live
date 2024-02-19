exports.homePage = (req, res) => {
    const data = {
        title: 'Accueil',
        message: 'Bienvenue sur FanSquare'
    };
    res.json(data);
};