// const fs = require('fs')

// fs.readFile('../README.md', (err, date)=>{
    
//     if(err) throw err

//     console.log(data.toString())
// })

// 使用promis封装
const p = new Promise(function(resolve, reject){
    fs.readFile("../README.md", (err, data)=>{
        if(err) reject(err)
        // 如果成功
        resolve(data)
    })
})

p.then(function(value){
   console.log(value.toString()) 
}, function(reason){
    console.log("读取失败！！")
})