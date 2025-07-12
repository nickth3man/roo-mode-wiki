// Simple markdown parser for the wiki
export const parseMarkdown = (markdown) => {
  if (!markdown) return '';
  
  let html = markdown;
  
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold mt-6 mb-3 text-foreground">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-8 mb-4 text-foreground border-b border-border pb-2">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-0 mb-6 text-foreground">$1</h1>');
  
  // Code blocks
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm font-mono text-muted-foreground">${code.trim()}</code></pre>`;
  });
  
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-muted-foreground">$1</code>');
  
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
  
  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>');
  
  // Lists
  html = html.replace(/^\* (.+)$/gm, '<li class="ml-4 mb-1">• $1</li>');
  html = html.replace(/^- (.+)$/gm, '<li class="ml-4 mb-1">• $1</li>');
  
  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">$1</blockquote>');
  
  // Paragraphs
  html = html.replace(/\n\n/g, '</p><p class="mb-4 text-foreground leading-relaxed">');
  html = '<p class="mb-4 text-foreground leading-relaxed">' + html + '</p>';
  
  // Clean up empty paragraphs
  html = html.replace(/<p class="mb-4 text-foreground leading-relaxed"><\/p>/g, '');
  
  return html;
};

// Extract table of contents from markdown
export const extractTOC = (markdown) => {
  if (!markdown) return [];
  
  const headings = [];
  const lines = markdown.split('\n');
  
  lines.forEach((line, index) => {
    const match = line.match(/^(#{1,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const title = match[2];
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      
      headings.push({
        level,
        title,
        id,
        line: index
      });
    }
  });
  
  return headings;
};

