import os
import re

def clean_content(text):
    # This removes all the specific "token" tags found in your Vercel logs
    # It targets <span class="token ..."> and </span> and similar garbage
    patterns = [
        r'<span[^>]*>', 
        r'</span>', 
        r'<pre[^>]*>', 
        r'</pre>',
        r'<code[^>]*>',
        r'</code>',
        r'<div[^>]*>',
        r'</div>'
    ]
    for pattern in patterns:
        text = re.sub(pattern, '', text)
    return text

# Iterate through your docs folder
docs_path = 'docs'
for root, dirs, files in os.walk(docs_path):
    for file in files:
        if file.endswith(('.md', '.mdx')):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # We only want to clean the actual text, 
            # while keeping your Docusaurus Components safe.
            # However, the "dirty" tags are usually inside 
            # CodeExample or standard code blocks.
            new_content = clean_content(content)
            
            if content != new_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"✅ Cleaned: {file_path}")

print("\nAll done! Try building again.")