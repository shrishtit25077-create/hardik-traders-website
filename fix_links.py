import re
import glob

def fix_link(match):
    attrs = match.group(1)
    text = match.group(2)
    # determine link based on text
    to_attr = 'to="/"' # default
    if 'About' in text: to_attr = 'to="/about"'
    elif 'Contact' in text: to_attr = 'to="/contact"'
    elif 'Products' in text: to_attr = 'to="/products"'
    elif 'Ball Bearings' in text: to_attr = 'to="/products/ball-bearings"'
    elif 'Roller Bearings' in text: to_attr = 'to="/products/roller-bearings"'
    elif 'Linear Guides' in text: to_attr = 'to="/products/linear-guide-detail"'
    elif 'Pneumatic' in text: to_attr = 'to="/products/pneumatic-systems"'
    
    # replace href="..." with the correct to_attr
    if 'href=' in attrs:
        attrs = re.sub(r'href="[^"]*"', to_attr, attrs)
    else:
        attrs += f' {to_attr}'
        
    return f'<Link {attrs}>{text}</Link>'

for file in glob.glob('src/pages/*.jsx'):
    with open(file, 'r') as f:
        content = f.read()
    
    # replace <a> tags
    new_content = re.sub(r'<a\s([^>]*)>(.*?)</a>', fix_link, content, flags=re.DOTALL)
    
    if new_content != content:
        # Ensure Link is imported
        if "Link" not in new_content and "react-router-dom" not in new_content:
            new_content = new_content.replace("import React from 'react';", "import React from 'react';\nimport { Link } from 'react-router-dom';")
        with open(file, 'w') as f:
            f.write(new_content)

print("Links replaced.")
