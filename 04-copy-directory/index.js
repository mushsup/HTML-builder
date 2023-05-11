const fs = require('fs/promises');
const path = require('path');

async function copyDir(sourceDir, targetDir) {
  await fs.mkdir(targetDir, { recursive: true });
  const dirEntries = await fs.readdir(sourceDir, { withFileTypes: true });

  for (const entry of dirEntries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      await copyDir(sourcePath, targetPath);
    } else {
      await fs.copyFile(sourcePath, targetPath);
    }
  }
}

copyDir(path.join(__dirname, 'files'), path.join(__dirname, 'files-copy'));

