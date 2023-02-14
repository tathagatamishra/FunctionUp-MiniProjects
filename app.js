const schedule = require('node-schedule')

const array = require('./event')

for (let i of array) {
    let job = schedule.scheduleJob(i.dateTime, ()=> {

        setTimeout(()=>{

            console.log(i.text.split('').reverse().join, new Date().toString())

            job.cancel()
        },  i.text.length*1000)
    })
}