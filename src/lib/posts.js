import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content');

// Get all posts and sort them by date (newest first)
export function getPosts() {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const { data, content } = matter(fileContents);

        return {
            id,
            title: data.title,
            description: data.description,
            tags: data.tags,
            date: data.date,
            content,
        };
    });

    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

