#!/usr/bin/env python3
import subprocess, json, os, sys

API_KEY = os.environ.get("STITCH_API_KEY", "")
PROJECT_ID = "16258321429899151658"
OUT_DIR = "/Users/shrishtitiwari/.gemini/antigravity-ide/brain/af01dc2c-e4d6-43e3-806c-8354e2d0bab2/stitch_screens"

os.makedirs(OUT_DIR, exist_ok=True)

screens = [
    ("about_enhanced",     "263f0dc479e54ddcb545c6154c70fdd0"),
    ("ball_bearings",      "314c40710dd54f2597018918fc17244c"),
    ("contact_us",         "5f99ab55405d41ef86a57524f97340e2"),
    ("about_red",          "86126e1e4201461db3507c84d00dfe01"),
    ("products",           "0f37b22dee06414ebf5e5c1e77490ac8"),
    ("linear_guide",       "1fc0729db22243f7b1f212cb6185aa8a"),
    ("home_red_brands",    "252ca56c70aa4223961340ef2d6debc1"),
    ("pneumatics",         "ab403c531fb74fa29fc9b3bc2556a42f"),
    ("product_detail",     "af0807fca31949ad99361ae2562a39f9"),
    ("get_quote",          "bdfb1c72908241c99ee0374dcd64acea"),
    ("product_categories", "e0b86c70420c4587aa719c98e697bff1"),
    ("roller_bearings",    "c9bde0ce3f954545ae1bb71d0135d78f"),
]

def fetch_screen(slug, screen_id, idx):
    print(f"[{idx+1}/{len(screens)}] Fetching: {slug} ({screen_id})")
    payload = json.dumps({
        "jsonrpc": "2.0",
        "id": idx + 1,
        "method": "tools/call",
        "params": {
            "name": "get_screen",
            "arguments": {"project_id": PROJECT_ID, "screen_id": screen_id}
        }
    })
    result = subprocess.run(
        ["curl", "-s", "-X", "POST", "https://stitch.googleapis.com/mcp",
         "-H", "Content-Type: application/json",
         "-H", f"X-Goog-Api-Key: {API_KEY}",
         "-d", payload],
        capture_output=True, text=True, timeout=60
    )
    if result.returncode != 0:
        print(f"  ERROR: curl failed for {slug}")
        return None
    try:
        data = json.loads(result.stdout)
        sc = data.get("result", {}).get("structuredContent", {})
        png_url = sc.get("screenshot", {}).get("downloadUrl", "")
        html_url = sc.get("htmlCode", {}).get("downloadUrl", "")
        title = sc.get("title", slug)
        return {"slug": slug, "title": title, "png_url": png_url, "html_url": html_url}
    except Exception as e:
        print(f"  ERROR parsing response for {slug}: {e}")
        print(f"  RAW: {result.stdout[:500]}")
        return None

def download_file(url, path):
    if not url:
        print(f"  SKIP: no URL for {path}")
        return False
    r = subprocess.run(
        ["curl", "-L", "-s", "-o", path, url],
        capture_output=True, timeout=60
    )
    size = os.path.getsize(path) if os.path.exists(path) else 0
    if size > 100:
        print(f"  ✓ {os.path.basename(path)} ({size//1024}KB)")
        return True
    else:
        print(f"  FAIL: {os.path.basename(path)} too small ({size}B)")
        return False

summary = {}
for idx, (slug, screen_id) in enumerate(screens):
    info = fetch_screen(slug, screen_id, idx)
    if not info:
        continue
    png_path  = os.path.join(OUT_DIR, f"{slug}.png")
    html_path = os.path.join(OUT_DIR, f"{slug}.html")
    png_ok  = download_file(info["png_url"],  png_path)
    html_ok = download_file(info["html_url"], html_path)
    summary[slug] = {"title": info["title"], "png": png_ok, "html": html_ok}

print("\n=== SUMMARY ===")
for slug, s in summary.items():
    print(f"  {slug}: PNG={'✓' if s['png'] else '✗'} HTML={'✓' if s['html'] else '✗'} — {s['title']}")

with open(os.path.join(OUT_DIR, "manifest.json"), "w") as f:
    json.dump(summary, f, indent=2)
print(f"\nManifest written to {OUT_DIR}/manifest.json")
