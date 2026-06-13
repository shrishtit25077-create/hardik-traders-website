import os, ast
for f in ["update_tailwind.py", "create_components_1.py", "create_components_2.py", "create_components_3.py", "create_components_4.py"]:
    if os.path.exists(f):
        with open(f, "r") as infile:
            content = infile.read()
            try:
                # The content starts with " and ends with ", with \n inside.
                decoded = ast.literal_eval(content)
                with open(f, "w") as outfile:
                    outfile.write(decoded)
            except Exception as e:
                print(f"Error on {f}: {e}")
