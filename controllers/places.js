const router = require('express').Router();

router.get('/', (req,res) => {
    let places = [{
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: '/images/kabob.jpg'
        }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/pizza.jpg'
        }
    ]
    res.render('places/index',{ places });
});

router.get('/new', (req,res) => {
    res.send('New Page Form');
});

router.get('/:id', (req, res) => {
    let myId = req.params.id;
    res.send(`Details for ${myId}`);
});

router.get('/:id/edit', (req,res) => {
    let myId = req.params.id;
    res.send(`Edit page for ${myId}`);
});

module.exports = router;