# Universal Modder Ecosystem — GitHub Pages

A searchable, filterable catalog of everything that can be used alongside  
[**AhmedTahaAtiya/universal-modder-unrestricted**](https://github.com/AhmedTahaAtiya/universal-modder-unrestricted).

It covers required dependencies, recommended tools, AI coding agents, MCP services, local AI generation, reverse-engineering utilities, asset pipelines, audio/video tools, engine-specific modding software, and publishing workflows.

## Live site

After deployment:

```text
https://<your-username>.github.io/
```


## Features

- Searchable tool catalog
- Category filters
- Platform filters: Windows, macOS, Linux, Cloud
- Required / Recommended / Optional badges
- Copy-ready Windows PowerShell setup commands
- Direct download and documentation links
- Fully static site: no build step, framework, or server required
- Easy to extend through `data.js`


## Included tool categories

### Core dependencies

| Tool | Requirement | Purpose |
| :-- | :-- | :-- |
| Git | Required | Clone, update, and version-control mods and repositories |
| Python 3.10+ | Required | Runs the `um` CLI and its Python dependencies |
| FFmpeg | Required | Gameplay recording, video conversion, trimming, and encoding |
| uv | Recommended | Installs and isolates the `um` CLI |

### AI coding agents

- Claude Code
- OpenAI Codex CLI
- Cursor
- Gemini CLI
- GitHub Copilot / VS Code
- OpenCode

Universal Modder includes skills, `AGENTS.md`, and MCP configuration for supported agents.

### AI generation

- **fal MCP** — hosted generation for sprites, textures, PBR materials, 3D assets, rigs, sound effects, music, voice, and video
- **ComfyUI** — local image generation without requiring a fal API key
- **Ollama** — local LLMs for private/offline assistance
- **LM Studio** — local GGUF model runner with an OpenAI-compatible API


### Reverse engineering

- Ghidra
- x64dbg
- Cheat Engine
- HxD Hex Editor
- Resource Hacker


### 2D and 3D asset creation

- Blender
- Aseprite
- Krita
- GIMP
- Inkscape
- TexturePacker


### Audio and video

- Audacity
- REAPER
- OBS Studio
- ShareX
- DaVinci Resolve
- FFmpeg


### Engine tooling

- Unity
- Unreal Engine
- Godot
- AssetRipper
- UABEA
- dnSpyEx


### Development utilities

- Visual Studio Code
- GitHub Desktop
- Docker Desktop
- 7-Zip


## Quick setup — Windows

Run these commands in PowerShell:

```powershell
winget install --id Git.Git -e --source winget
winget install --id Python.Python.3.12 -e --source winget
winget install --id Gyan.FFmpeg -e --source winget
winget install --id astral-sh.uv -e --source winget
```

Close and reopen PowerShell, then install Universal Modder Unrestricted:

```powershell
git clone [https://github.com/AhmedTahaAtiya/universal-modder-unrestricted.git](https://github.com/AhmedTahaAtiya/universal-modder-unrestricted.git)
cd universal-modder-unrestricted
uv tool install --force git+[https://github.com/AhmedTahaAtiya/universal-modder-unrestricted](https://github.com/AhmedTahaAtiya/universal-modder-unrestricted)
um --help
```


## Optional installs

```powershell
winget install --id BlenderFoundation.Blender -e --source winget
winget install --id OBSProject.OBSStudio -e --source winget
winget install --id Audacity.Audacity -e --source winget
winget install --id KDE.Krita -e --source winget
winget install --id GIMP.GIMP -e --source winget
winget install --id Inkscape.Inkscape -e --source winget
winget install --id 7zip.7zip -e --source winget
winget install --id ShareX.ShareX -e --source winget
winget install --id Microsoft.VisualStudioCode -e --source winget
winget install --id GitHub.GitHubDesktop -e --source winget
```


## fal API key

fal is optional. You can use fal MCP with browser OAuth, or configure an API key.

Create the following file:

```text
~/.secrets/fal-key
```

Paste your fal API key into it.

On Windows, the full path is usually:

```powershell
C:\Users\<YourUsername>\.secrets\fal-key
```

Alternatively, set an environment variable:

```powershell
setx FAL_KEY "your_fal_api_key"
```


## Local image generation

For local generation without fal, install and run ComfyUI:

```powershell
git clone [https://github.com/comfyanonymous/ComfyUI.git](https://github.com/comfyanonymous/ComfyUI.git)
cd ComfyUI
pip install -r requirements.txt
python main.py
```

Universal Modder can use a local ComfyUI server through:

```powershell
um comfy
```


## Recommended workflow

1. Scan the target game:

```powershell
um scan
```

2. Search the shared knowledge base:

```powershell
um kb search "game name or engine"
```

3. Inspect files or memory using the appropriate tool:
    - Ghidra or x64dbg for native code
    - Cheat Engine for runtime values
    - HxD for binary/resource files
    - AssetRipper, UABEA, or dnSpyEx for Unity content
4. Generate or edit assets:
    - fal MCP for hosted generation
    - ComfyUI for local image generation
    - Blender for 3D-to-sprite rendering
    - Aseprite, Krita, or GIMP for 2D cleanup
5. Test the mod in the game.
6. Record results with OBS Studio or ShareX.
7. Document successful routes, versions, file formats, and pitfalls in the Universal Modder knowledge base.

## Project structure

```text
.
├── index.html
├── styles.css
├── app.js
└── data.js
```

| File | Purpose |
| :-- | :-- |
| `index.html` | Page structure, setup commands, filters, and tool grid |
| `styles.css` | Dark responsive GitHub Pages styling |
| `app.js` | Search, filtering, rendering, and copy-to-clipboard behavior |
| `data.js` | Editable catalog of tools, links, tags, platforms, and install commands |

## Add a new tool

Open `data.js` and append an object to `ECOSYSTEM_DATA`:

```js
{
  name: "Tool Name",
  category: "Your category",
  platform: ["Windows"],
  status: "optional",
  description: "Short explanation of what the tool does.",
  tags: ["tag1", "tag2"],
  links: [
    { label: "Download", url: "[https://example.com/](https://example.com/)" }
  ],
  install: "winget install --id Example.Tool -e --source winget"
}
```

Valid `status` values:

```text
required
recommended
optional
```


## Deploy to GitHub Pages

1. Create a repository named:

```text
your-username.github.io
```

2. Place `index.html`, `styles.css`, `app.js`, and `data.js` in the repository root.
3. Push the files:

```powershell
git init
git add .
git commit -m "Add Universal Modder ecosystem site"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

4. Open the repository on GitHub.
5. Go to **Settings → Pages**.
6. Under **Build and deployment**, select:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

7. Save and wait for deployment.
8. Open:

```text
https://your-username.github.io/
```


## Legal and safety notice

Only modify games you legally own. Respect the game’s end-user license agreement, terms of service, platform rules, third-party asset licenses, and applicable laws. Do not use these tools to distribute copyrighted assets, bypass DRM, cheat in multiplayer games, or interfere with online services.

```
```

