const {Router} = require('express')
const Desk = require('../models/Desk')
const router = Router()
const auth = require('../middleware/auth.middleware')

// /api/desk/...

router.get('/getdesks', auth, async (req,res) => {
    try {

        let desks = await Desk.find({author: req.user.userId})
        res.json(desks)

    } catch (e) {
        res.status(500).json({message: `Something go wrong... ${e}`})
    }
})


router.post('/createdesk', auth, async (req,res) => {
    try {

        const desk = new Desk({
            text: req.body.value, author: req.user.userId
        })

        await desk.save()
        res.status(201).json({desk})

    } catch (e) {
        res.status(500).json({message: 'Something go wrong...'})
    }
})

router.post('/deletedesk', auth, async (req,res) => {
    try {

        const del = await Desk.findByIdAndDelete(req.body.index)
        res.json(del)
        res.status(201).json({message: 'Desk deleted successfully'})

    } catch (e) {
        res.status(500).json({message: 'Something go wrong...'})
    }
})

module.exports = router