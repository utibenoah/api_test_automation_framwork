const winston = require('winston')

const {combine, timestamp, json,prettyPrint, printf, colorize, align}=winston.format
const path=require('path')
const moment=require('moment-timezone')


// current directory
let currentDir= __dirname

// change directory--move one level up

let srcDir= path.resolve(currentDir,'..')

// change to logging directory
loggingDir=path.resolve(srcDir, 'logging')
console.log(loggingDir)

//set timezone
const timeZone='Africa/lagos' // west africa: nigeria



const logger=winston.createLogger({
    
    format:combine(
        timestamp({format:()=>moment.tz(timeZone).format()}),
        printf(({level,message,timestamp})=>{
            return `${timestamp}, ${level} ${message}`
        }),
        prettyPrint()
        
    ),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:path.join(loggingDir,'test_error.log'),
            maxFiles:5,
            maxsize: 10*1024, //size in byte
            level: 'error'
        }),
        
        new winston.transports.File({filename:path.join(loggingDir,'test_run.log'),
            maxFiles:5,
            maxsize: 10*1024, //size in byte
            level: 'info'
        })
        

    ]
})



module.exports =logger