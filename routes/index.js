(()=>{
    const path = require('path');
    const router = require("express").Router();
    const apiRoutes = require("./api");
    const scrapeRoutes = require("./scrape");


    router.use("/api", apiRoutes);
    router.use("/scrape", scrapeRoutes);

    router.use(function (req, res) {
        res.sendFile(path.join(__dirname, "../client/public/index.html"));
    });

    module.exports = router;
})();