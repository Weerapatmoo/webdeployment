let express = require('express')
let  app = express()

app.get('/',(req,resd)=>{
    console.log('Hello wold')
    resd.send('hello wold')
})
app.get ('/crash',(req,res)=>{
    console.log('Crash !!')
    res.send('Crash')
    process.exit(1)
})

app.listen(process.env.PORT,
    () =>console.log('Server is running at',process.env.PORT))
