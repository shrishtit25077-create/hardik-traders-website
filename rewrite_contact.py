import ast

with open('create_components_4.py', 'r') as f:
    content = f.read()
    
# Extract the home_contact string
try:
    code = ast.literal_eval(content)
    # The string `code` contains the python script content.
    # It has `home_contact = """..."""`
    # Let's extract it.
    start_idx = code.find('home_contact = """') + 18
    end_idx = code.find('"""\n\n# 2. FloatingActions.jsx')
    home_contact_code = code[start_idx:end_idx]
    
    with open('src/components/Contact.jsx', 'w') as out:
        out.write(home_contact_code)
    print("Successfully rewrote Contact.jsx")
except Exception as e:
    print(f"Error: {e}")
