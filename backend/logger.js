export const logger = req => {
   const timestamp = new Date().toISOString()
   console.log(`[${timestamp}] ${req.method} request to ${req.url}`)
}
