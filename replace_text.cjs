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
    if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            .replace(/New York City/g, 'India')
            .replace(/in New York/g, 'in India')
            .replace(/New York, New York/g, 'Mumbai, Maharashtra')
            .replace(/the NYC luxury market/g, 'the Indian luxury market')
            .replace(/New York, Seventh Ave, 20th<br \/>Floor, NY 10018/g, 'Mumbai, Maharashtra<br />400001, India')
            .replace(/New York, Seventh Ave,<br\/>20th Floor, NY 10018/g, 'Mumbai, Maharashtra<br/>400001, India')
            .replace(/New York, Seventh Ave,<br \/>20th Floor, NY 10018/g, 'Mumbai, Maharashtra<br />400001, India')
            .replace(/New York, Seventh Ave, 20th\\nFloor, NY 10018/g, 'Mumbai, Maharashtra\\n400001, India')
            .replace(/New York, Seventh Ave, 20th<br\/>Floor, NY 10018/g, 'Mumbai, Maharashtra<br/>400001, India')
            .replace(/placeholder="e.g. New York"/g, 'placeholder="e.g. Mumbai"');
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated', filePath);
        }
    }
});
