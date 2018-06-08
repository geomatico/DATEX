const getXML = require('../getXML')

const appRouter = function (app) {
  app.get("/", function(req, res) {
    getXML('http://infocar.dgt.es/datex2/dgt/PredefinedLocationsPublication/camaras/content.xml')
      .then(response => {
        res.set('Content-Type', 'application/json');
        res.status(200).send(response);
      })
      .catch(err => res.status(500).send(err))
  });
}

module.exports = appRouter;