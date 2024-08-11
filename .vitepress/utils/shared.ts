import path from "path";

/**
 * Regular expression to match numeric prefixes like "01-", "02-", etc.
 */
export const prefixRegex = /^\d{2,}-/;

/**
 * Checks if a file is a markdown file.
 * 
 * @param item The file to check.
 * @returns Whether the file is a markdown file.
 */
export function isMarkdownFile(item: string): boolean {
  return path.extname(item) === '.md';
}

/**
 * Checks if a file should be ignored when generating rewrites or sidebar.
 * 
 * @param item The file to check.
 * @returns Whether the file should be ignored.
 */
export function shouldIgnore(item: string): boolean {
  return item.startsWith('_') || item.startsWith('.') || item.startsWith('index');
}

/**
 * Removes the numeric prefix from a string.
 * @param str The string to remove the prefix from.
 * @returns The string without the prefix.
 */
export function removePrefix(str: string): string {
  return str.replace(prefixRegex, '');
}

/**
 * Removes the file extension from a string.
 * @param str The string to remove the extension from.
 * @returns The string without the extension.
 */
export function removeExtension(str: string): string {
  return str.replace(/\.md$/, '');
}