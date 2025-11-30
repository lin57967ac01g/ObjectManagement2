const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;
const DATA_DIR = 'C:/objectManager';

app.use(cors());
app.use(express.json());

// Ensure directory exists
if (!fs.existsSync(DATA_DIR)) {
    console.log(`Directory ${DATA_DIR} does not exist. Creating it...`);
    try {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    } catch (err) {
        console.error(`Failed to create directory ${DATA_DIR}.`, err);
        console.log('Please manually create the directory or run as Administrator.');
    }
}

// Helper to read file
const readFile = (filename) => {
    const filePath = path.join(DATA_DIR, filename);
    if (!fs.existsSync(filePath)) {
        return []; // Default to empty array if file doesn't exist
    }
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Error reading ${filename}:`, err);
        return [];
    }
};

// Helper to write file
const writeFile = (filename, data) => {
    const filePath = path.join(DATA_DIR, filename);
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        console.error(`Error writing ${filename}:`, err);
        return false;
    }
};

// Endpoints
const resources = ['scenarios', 'intentions', 'flows', 'scripts', 'cases', 'case_results'];

resources.forEach(resource => {
    // GET
    app.get(`/api/${resource}`, (req, res) => {
        const data = readFile(`${resource}.json`);
        res.json(data);
    });

    // POST (Save All)
    app.post(`/api/${resource}`, (req, res) => {
        const success = writeFile(`${resource}.json`, req.body);
        if (success) {
            res.json({ success: true });
        } else {
            res.status(500).json({ error: 'Failed to write file' });
        }
    });
});

// Check for updates
app.get('/api/last-modified', (req, res) => {
    try {
        const stats = {};
        resources.forEach(r => {
            const p = path.join(DATA_DIR, `${r}.json`);
            stats[r] = fs.existsSync(p) ? fs.statSync(p).mtimeMs : 0;
        });
        res.json(stats);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Initialize with defaults if empty (Optional, just for first run demo)
app.get('/api/init', (req, res) => {
    // You could put initial seed data here if needed
    res.json({ message: 'Ready' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Serving data from ${DATA_DIR}`);
});
