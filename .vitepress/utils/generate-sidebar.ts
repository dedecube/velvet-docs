import { capitalCase } from 'case-anything';
import fs from 'fs';
import path from 'path';
import { isMarkdownFile, prefixRegex, removeExtension, removePrefix, shouldIgnore } from './shared';

/**
 * Generates the sidebar for a given directory.
 * @param directory The directory path.
 * @param basePath The base path for generating links.
 * @returns The generated sidebar.
 */
export function generateSidebar(directory: string, basePath = '') {
  const sidebar = [] as any;

  const items = fs.readdirSync(directory);

  items.forEach(item => {
    const itemPath = path.join(directory, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory() && item.match(prefixRegex)) {
      const newBasePath = path.join(basePath, item);

      sidebar.push({
        text: generateSidebarText(item),
        base: '/' + removePrefix(item),
        items: generateSidebar(itemPath, newBasePath),
        collapsed: true,
      });
    } else if (stats.isFile() && isMarkdownFile(item) && !shouldIgnore(item)) {
      const relativePath = getRelativePath(directory, item);

      sidebar.push({
        text: generateSidebarText(item),
        link: '/' + removeExtension(relativePath) + '/',
      });
    }
  });

  return sidebar;
}

/**
 * Gets the relative path of a file.
 * 
 * @param directory The directory path.
 * @param file The file name.
 * @returns The relative path of the file.
 */
function getRelativePath(directory: string, file: string): string {
  return path.join(directory, file)
    .split('/')
    .reverse()[0]
    .replace(prefixRegex, '');
}

/**
 * Generates the sidebar text from a file name.
 * 
 * @param item The file name.
 * @returns The sidebar text.
 */
function generateSidebarText(item: string): string {
  return capitalCase(
    removePrefix(removeExtension(item)),
    { keepSpecialCharacters: false }
  );
}