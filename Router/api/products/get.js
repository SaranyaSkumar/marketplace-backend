const cors = require('cors')({ origin: true });

module.exports = (req, res) => {
    cors(req, res, () => {
        if (req.method === 'GET') {
            res.send("hello")
        } else {
            res.status(405).send('Method Not Allowed');
        }
    });
};
