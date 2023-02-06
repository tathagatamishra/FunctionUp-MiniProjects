let data = req.body

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: 'Please provide your details' })