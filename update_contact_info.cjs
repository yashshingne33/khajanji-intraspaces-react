const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('./src', (filePath) => {
    if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            .replace(/\+1 2030 4050 10/g, "+91 928 414 9958")
            .replace(/info@khajanjis\.com/g, "hello@khajanjiinfraspaces.com")
            .replace(/VAMTAM/g, "ROYALSWEBTECH")
            .replace(/Mumbai,\s*Maharashtra(?:<br\s*\/?>|\\n)400001,\s*India/g, "NAGPUR<br/>MAHARASHTRA")
            .replace(/Mumbai,\s*Maharashtra\s*400001,\s*India/g, "NAGPUR, MAHARASHTRA")
            .replace(/placeholder="e.g. Mumbai"/g, 'placeholder="e.g. Nagpur"');
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated details in', filePath);
        }
    }
});
