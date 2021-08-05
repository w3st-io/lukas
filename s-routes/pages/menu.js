const cors = require('cors')
const express = require('express')


const router = express.Router().use(cors())


const menu = require('../../s-defaults/menu')


router.get(
	'/',
	async (req, res) => {
		res.send({
			executed: true,
			status: true,
			menu: menu
		})
	}
)


module.exports = router