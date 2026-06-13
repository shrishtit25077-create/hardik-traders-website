import re
import glob

def fix_inquiry_buttons(file_path, category_name):
    with open(file_path, 'r') as f:
        content = f.read()

    if "useNavigate" not in content:
        content = content.replace("import { Link } from 'react-router-dom';", "import { Link, useNavigate } from 'react-router-dom';")
        # insert useNavigate
        content = re.sub(r'const [a-zA-Z]+ = \(\) => {', r'\g<0>\n  const navigate = useNavigate();\n\n  const handleInquiry = (productName, sku) => {\n    navigate("/contact", { state: { productName, sku, category: "'+category_name+'" } });\n  };', content)

    # Now we need to find each product card.
    # The structure looks like:
    # <span className="...text-on-surface-variant">SKU: 6205-2RS</span>
    # ...
    # <h3 className="...text-on-surface mb-4 leading-tight">Deep Groove Ball Bearing</h3>
    # ...
    # <button className="...">Send Inquiry</button>

    # We can split the content by '<div className="bg-surface-container-low border border-surface-container-highest rounded-lg overflow-hidden group hover:industrial-shadow'
    # or just use regex to find all cards.
    parts = content.split('<!-- Product Card')
    if len(parts) == 1:
        # try another split
        parts = content.split('<div className="bg-surface-container-low border border-surface-container-highest rounded-lg')

    new_parts = [parts[0]]
    for part in parts[1:]:
        sku_match = re.search(r'SKU:\s*([^<]+)<', part)
        name_match = re.search(r'<h3[^>]*>([^<]+)</h3>', part)
        
        if sku_match and name_match:
            sku = sku_match.group(1).strip()
            name = name_match.group(1).strip()
            
            # replace button
            part = re.sub(r'<button([^>]*)>Send Inquiry</button>', f'<button\\1 onClick={{() => handleInquiry("{name}", "{sku}")}}>Send Inquiry</button>', part)
            
        new_parts.append(part)

    new_content = '<div className="bg-surface-container-low border border-surface-container-highest rounded-lg'.join(new_parts)
    
    with open(file_path, 'w') as f:
        f.write(new_content)

fix_inquiry_buttons('src/pages/BallBearings.jsx', 'Ball Bearings')
fix_inquiry_buttons('src/pages/RollerBearings.jsx', 'Roller Bearings')
print("Updated Ball and Roller bearings.")
