import json
import os

with open('/Users/shrishtitiwari/.gemini/antigravity-ide/brain/af01dc2c-e4d6-43e3-806c-8354e2d0bab2/.system_generated/logs/transcript.jsonl', 'r') as f:
    for line in f:
        try:
            entry = json.loads(line)
            if entry.get("type") == "PLANNER_RESPONSE" and entry.get("tool_calls"):
                for tool_call in entry["tool_calls"]:
                    if tool_call.get("name") == "write_to_file":
                        args = tool_call.get("args", {})
                        target = args.get("TargetFile", "")
                        if "update_tailwind.py" in target or "create_components_" in target:
                            print(f"Extracting {target}...")
                            with open(os.path.basename(target), 'w') as out_f:
                                out_f.write(args.get("CodeContent", ""))
        except json.JSONDecodeError:
            pass
