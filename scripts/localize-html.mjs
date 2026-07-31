import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

async function localizeThaiHtml(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await localizeThaiHtml(path);
    } else if (entry.name.endsWith(".html")) {
      const html = await readFile(path, "utf8");
      await writeFile(path, html.replace('<html lang="en">', '<html lang="th">'));
    }
  }
}

await localizeThaiHtml(join(process.cwd(), "out", "th"));
