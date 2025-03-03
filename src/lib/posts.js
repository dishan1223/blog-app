import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

/*---
title: "The Power of React: Why It's Still Dominating Web Development"
description: "React has been a leading JavaScript library for years. Let's explore why it's still the top choice for developers in 2025."
tags: ["React", "Web Development", "JavaScript", "Frontend"]
date: "2025-03-02"
---
*/


// Get all posts
export function getPosts() {
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        return {
            id,
            ...data,
            content,
        };
    }
    );
    return posts;
}
