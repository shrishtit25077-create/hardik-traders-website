import re

with open('src/index.css', 'w') as out:
    pass # clear it first, wait, let's read from git first.

import subprocess

result = subprocess.run(["git", "show", "HEAD:src/index.css"], capture_output=True, text=True)
css_content = result.stdout

# Replace the light tokens with dark theme tokens
dark_tokens = """
:root {
  --red:       #E10600;
  --red-hover: #FF2D20;
  --red-tint:  #1A0505;
  --red-tint2: rgba(225,6,0,0.1);

  --bg:        #050505;   /* pure black */
  --bg2:       #0D0D0D;   /* charcoal */
  --surface:   #151515;   /* alternate section */
  --card:      #1F1F1F;
  --border:    #333333;
  --border-lt: #222222;

  --text:      #FFFFFF;
  --sub:       #D1D1D1;
  --text-muted: #8A8A8A;
  --muted:     #5F5F5F;

  --topbar-h:  0px;
  --nav-h:     64px;
  --header-h:  80px;
}
"""

# replace the root block
css_content = re.sub(r':root\s*\{[^}]+\}', dark_tokens.strip(), css_content)

with open('src/index.css', 'w') as out:
    out.write(css_content)

print("CSS updated with dark theme tokens.")
