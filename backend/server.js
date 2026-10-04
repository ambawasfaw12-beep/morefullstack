import http from 'node:http'
import { tasks } from './data.js'
import { logger } from './logger.js'
import { corsMiddleware } from './cors.js'

const PORT = 5000
const server = http.createServer((req, res) => {

    logger(req)
    corsMiddleware(res)

    const path = req.url
    const method = req.method
    if (path === '/api/tasks' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(tasks))
    } else if (path === '/api/tasks' && method === 'POST') {
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })
        req.on('end', () => {
            const parseData = JSON.parse(body)
            tasks.push(parseData)
            console.log(tasks)
            res.writeHead(201, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(parseData))
        })
    } else if (path.startsWith('/api/tasks/') && method === 'DELETE') {
        const parts = path.split('/')
        const id = parts[3]
        const numbericId = Number(id)
        const taskIndex = tasks.findIndex(task => task.id === numbericId)
        if (undeleteArray === -1) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: "Task not found" }))
        }
        tasks.splice(taskIndex, 1)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: "Task deleted successfully" }))
    }

    else if (path.startsWith('/api/tasks/') && method === 'PUT') {
        const parts = path.split('/');
        const numericId = Number(parts[3]);

        const taskIndex = tasks.findIndex(task => task.id === numericId);

        if (taskIndex === -1) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: "Task not found" }));
        }

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const parseData = JSON.parse(body);

            // Update the task in memory
            tasks[taskIndex] = {
                ...tasks[taskIndex], // keep existing properties (e.g. id)
                ...parseData         // overwrite updated fields (e.g. title)
            };

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(tasks[taskIndex]));
        });
    }

    else {
        res.writeHead(404)
        res.end(JSON.stringify({ error: 'Route not found' }))
    }
})
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})