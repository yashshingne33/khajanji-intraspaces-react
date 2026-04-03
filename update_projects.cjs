const fs = require('fs');
const path = require('path');

const replacements = {
    "Quebec mountain view": "Lonavala Valley Estate",
    "Station house": "The Heritage Dwelling",
    "Villa skyfall": "Skyline Penthouse",
    "Hilton forest colonial": "Kodaikanal Retreat",
    "The NY apartment": "Bandra Luxury Apartment",
    "Modern fantasy": "Contemporary Delhi Residence",
    "Rolling apartment": "Mumbai Seaview Apartment",
    "French affair": "Colonial Heritage House",
    "Villa Neron": "Goa Coastal Villa",
    "Villa Rossa": "Pune Hillside Residence",
    "Welington house": "The Royal Enclave",
    "Casa 201": "Vasant Vihar Modern"
};

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('./src', (filePath) => {
    if (filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;
        
        for (const [key, value] of Object.entries(replacements)) {
            const regex = new RegExp(key, 'g');
            newContent = newContent.replace(regex, value);
        }
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated project names in', filePath);
        }
    }
});
