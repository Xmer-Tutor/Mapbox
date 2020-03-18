const spawn = require('cross-spawn')
const { NODE_ENV, port } = process.env
const cmd = NODE_ENV === 'production' ? ['yarn', ['serve', '-l', port]] : ['yarn', ['start']];
const app = spawn(...cmd)

app.stdout.on('data', data => {
    console.log(`${data}`)
})

app.stderr.on('data', data => {
    console.log(`stderr: ${data}`)
})

app.on('close', code => {
    console.log(`process exited with code: ${code}`)
})