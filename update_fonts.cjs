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
            .replace(/'DM Sans',sans-serif/g, "'Outfit', sans-serif")
            .replace(/'DM Serif Display',serif/g, "'Outfit', sans-serif")
            .replace(/"DM Sans",sans-serif/g, "'Outfit', sans-serif")
            .replace(/"DM Serif Display",serif/g, "'Outfit', sans-serif")
            .replace(/Urbanist,sans-serif/g, "'Outfit', sans-serif")
            .replace(/Urbanist,serif/g, "'Outfit', sans-serif")
            .replace(/"Urbanist",sans-serif/g, "'Outfit', sans-serif")
            .replace(/"Urbanist",serif/g, "'Outfit', sans-serif")
            .replace(/'Urbanist',sans-serif/g, "'Outfit', sans-serif")
            .replace(/'Urbanist',serif/g, "'Outfit', sans-serif")
            .replace(/34px Urbanist,serif/g, "34px 'Outfit', sans-serif"); // specific case in ServicesPage.jsx
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated font in', filePath);
        }
    }
});
