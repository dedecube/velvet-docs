import fs from 'fs';
import path from 'path';
import { prefixRegex, shouldIgnore } from './shared';

/**
 * Recursively generates rewrites for markdown files in a directory.
 * 
 * @param directory The directory to generate rewrites for.
 * @param basePath The base path for the rewrites.
 * @returns The generated rewrites.
 */
export function generateRewrites(directory: string, basePath = ''): Record<string, string> {
  let rewrites: Record<string, string> = {};

  const items = fs.readdirSync(directory);

  items.forEach(item => {
    const itemPath = path.join(directory, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      const newBasePath = path.join(basePath, item);
      Object.assign(rewrites, generateRewrites(itemPath, newBasePath));
    } else if (stats.isFile() && isMarkdownFile(item) && !shouldIgnore(item)) {
      const fullPath = path.join(basePath, item);
      const relativePath = getRelativePath(directory, item);

      rewrites[fullPath] = `${relativePath.replace(/\.md$/, '/index.md')}`;
    }
  });

  return rewrites;
}

/**
 * Gets the relative path of a file within a directory.
 * 
 * @param directory The directory containing the file.
 * @param file The file to get the relative path for.
 * @returns The relative path of the file.
 */
function getRelativePath(directory: string, file: string): string {
  return path.join(directory, file)
    .replace(`${process.cwd()}/src/`, '')
    .split('/')
    .map(part => part.replace(prefixRegex, ''))
    .join('/');
}

/**
 * Checks if a file is a markdown file.
 * 
 * @param item The file to check.
 * @returns Whether the file is a markdown file.
 */
function isMarkdownFile(item: string): boolean {
  return path.extname(item) === '.md';
}

