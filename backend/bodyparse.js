export const bodyParser = (req, next) => {
    let body = ''
    req.on('data', chucnk => {
        body += chucnk.toString()
    })
    req.on('end', () => {

        if (body) {
            req.body = JSON.parse(body)
        } else {
            req.body = {}
        }
           next()
    })
 
}