let readlineSync = require('readline-sync')
let ram = new Array();
let fs = require('fs')
let arg = process.argv
let program = fs.readFileSync(arg[2]).toString()

ram = program.split(/\s+/)
let ip = 0
let cf = 0

while (ip < ram.length) {
    switch (ram[ip]) {
        case 'set':
            ram[ram[ip+1]] = parseInt(ram[ip+2])
            ip += 2
            break
        case 'add':
            ram[ram[ip+3]] = ram[ram[ip+1]] + ram[ram[ip+2]]
            ip += 3
            break
        case 'sub':
            ram[ram[ip+3]] = ram[ram[ip+1]] - ram[ram[ip+2]]
            ip += 3
            break
        case 'mul':
            ram[ram[ip+3]] = ram[ram[ip+1]] * ram[ram[ip+2]]
            ip += 3
            break
        case 'output':
            console.log(ram[ram[ip+1]])
            ip += 1
            break
        case 'input':
            ram[ram[ip+1]] = readlineSync.questionInt()
            ip += 1
            break
        case 'cmp':
            if (ram[ram[ip+1]] > ram[ram[ip+2]]) {
                cf = 1
            } else if (ram[ram[ip+1]] < ram[ram[ip+2]]) {
                cf = -1
            } else {
                cf = 0
            }
            ip += 2
            break
        case 'jmp':
            ip = labelIndex(ram, ram[ip+1])
            break
        case 'je':
            if (cf === 0) {
                ip = labelIndex(ram, ram[ip+1])
            }
            break
        case 'jb':
            if (cf === 1) {
                ip = labelIndex(ram, ram[ip+1])
            }
            break
        case 'jl':
            if (cf === -1) {
                ip = labelIndex(ram, ram[ip+1])
            }
            break
    }
    ip++
}

function labelIndex(ram, label) {
    for (let i = 0; i < ram.length; i++) {
        if (ram[i] === label.slice(1, label.length)) {
            return i
        }
    }
}

/*
for (let i = 0; i<ram.length; i++) {
    console.log(i, ram[i])
}

 */