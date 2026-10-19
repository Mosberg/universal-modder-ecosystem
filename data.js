"use strict";

const ECOSYSTEM_DATA = [
  {
    name: "Git",
    category: "Core dependency",
    platform: ["Windows", "macOS", "Linux"],
    status: "required",
    description: "Clones Universal Modder, updates it, manages mod source changes, and is required by the setup workflow.",
    tags: ["version control", "repository", "CLI"],
    links: [
      { label: "Download", url: "https://git-scm.com/downloads" },
      { label: "Docs", url: "https://git-scm.com/doc" }
    ],
    install: "winget install --id Git.Git -e --source winget"
  },
  {
    name: "Python 3.10+",
    category: "Core dependency",
    platform: ["Windows", "macOS", "Linux"],
    status: "required",
    description: "Runs the um CLI and installs its Pillow, NumPy, and PyYAML dependencies.",
    tags: ["runtime", "Python", "um CLI"],
    links: [
      { label: "Download", url: "https://www.python.org/downloads/" },
      { label: "Docs", url: "https://docs.python.org/3/" }
    ],
    install: "winget install --id Python.Python.3.12 -e --source winget"
  },
  {
    name: "FFmpeg",
    category: "Core dependency",
    platform: ["Windows", "macOS", "Linux"],
    status: "required",
    description: "Required for recording, converting, trimming, encoding, and editing gameplay and showcase video.",
    tags: ["video", "audio", "conversion", "recording"],
    links: [
      { label: "Windows builds", url: "https://www.gyan.dev/ffmpeg/builds/" },
      { label: "Documentation", url: "https://ffmpeg.org/documentation.html" }
    ],
    install: "winget install --id Gyan.FFmpeg -e --source winget"
  },
  {
    name: "uv",
    category: "Core dependency",
    platform: ["Windows", "macOS", "Linux"],
    status: "recommended",
    description: "Fast Python package and tool manager. The recommended way to install and isolate the um CLI.",
    tags: ["package manager", "Python", "CLI"],
    links: [
      { label: "Install guide", url: "https://docs.astral.sh/uv/getting-started/installation/" },
      { label: "GitHub", url: "https://github.com/astral-sh/uv" }
    ],
    install: "powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex""
  },
  {
    name: "Blender",
    category: "3D & rendering",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Needed for Universal Modder’s 3D-to-sprite rendering workflow. Useful for modeling, rigging, texture baking, and rendering sprite sheets.",
    tags: ["3D", "sprites", "rendering", "animation"],
    links: [
      { label: "Download", url: "https://www.blender.org/download/" },
      { label: "Manual", url: "https://docs.blender.org/manual/en/latest/" }
    ],
    install: "winget install --id BlenderFoundation.Blender -e --source winget"
  },
  {
    name: "Claude Code",
    category: "AI coding agent",
    platform: ["Windows", "macOS", "Linux"],
    status: "recommended",
    description: "First-class Universal Modder integration: discovers bundled skills, reads AGENTS.md, and can use the fal MCP server.",
    tags: ["agent", "MCP", "skills", "terminal"],
    links: [
      { label: "Official site", url: "https://claude.com/product/claude-code" },
      { label: "Docs", url: "https://docs.anthropic.com/en/docs/claude-code" }
    ],
    install: "npm install -g @anthropic-ai/claude-code"
  },
  {
    name: "OpenAI Codex CLI",
    category: "AI coding agent",
    platform: ["Windows", "macOS", "Linux"],
    status: "recommended",
    description: "Terminal coding agent that can read the repository’s AGENTS.md and Codex-specific MCP configuration.",
    tags: ["agent", "MCP", "terminal", "OpenAI"],
    links: [
      { label: "GitHub", url: "https://github.com/openai/codex" },
      { label: "Docs", url: "https://developers.openai.com/codex/" }
    ],
    install: "npm install -g @openai/codex"
  },
  {
    name: "Cursor",
    category: "AI coding agent",
    platform: ["Windows", "macOS", "Linux"],
    status: "recommended",
    description: "AI-first code editor with agent mode and MCP support. Opens the cloned Universal Modder repository directly.",
    tags: ["agent", "editor", "MCP", "IDE"],
    links: [
      { label: "Download", url: "https://cursor.com/download" },
      { label: "MCP docs", url: "https://docs.cursor.com/context/model-context-protocol" }
    ],
    install: "winget install --id Anysphere.Cursor -e --source winget"
  },
  {
    name: "Gemini CLI",
    category: "AI coding agent",
    platform: ["Windows", "macOS", "Linux"],
    status: "recommended",
    description: "Google’s terminal agent. Universal Modder provides Gemini-compatible skills and MCP configuration.",
    tags: ["agent", "Google", "MCP", "terminal"],
    links: [
      { label: "GitHub", url: "https://github.com/google-gemini/gemini-cli" },
      { label: "Docs", url: "https://developers.google.com/gemini-code-assist/docs/gemini-cli" }
    ],
    install: "npm install -g @google/gemini-cli"
  },
  {
    name: "GitHub Copilot",
    category: "AI coding agent",
    platform: ["Windows", "macOS", "Linux"],
    status: "recommended",
    description: "Works through VS Code and supports MCP. Universal Modder includes VS Code MCP configuration and agent skills.",
    tags: ["agent", "VS Code", "MCP", "GitHub"],
    links: [
      { label: "VS Code", url: "https://code.visualstudio.com/download" },
      { label: "Copilot docs", url: "https://docs.github.com/en/copilot" }
    ],
    install: "winget install --id Microsoft.VisualStudioCode -e --source winget"
  },
  {
    name: "OpenCode",
    category: "AI coding agent",
    platform: ["Windows", "macOS", "Linux"],
    status: "recommended",
    description: "Open-source terminal coding agent. Universal Modder’s opencode.json points it at both skills and the fal MCP server.",
    tags: ["agent", "open source", "MCP", "terminal"],
    links: [
      { label: "GitHub", url: "https://github.com/sst/opencode" },
      { label: "Docs", url: "https://opencode.ai/docs/" }
    ],
    install: "npm install -g opencode-ai"
  },
  {
    name: "fal MCP",
    category: "AI generation service",
    platform: ["Cloud", "Windows", "macOS", "Linux"],
    status: "recommended",
    description: "Hosted MCP endpoint for sprites, textures, PBR materials, 3D assets, rigs, sound effects, music, voice, and video generation.",
    tags: ["MCP", "fal", "image", "video", "audio", "3D"],
    links: [
      { label: "MCP endpoint", url: "https://mcp.fal.ai/mcp" },
      { label: "fal dashboard", url: "https://fal.ai/dashboard" }
    ],
    install: "Set FAL_KEY in your environment, or save it to ~/.secrets/fal-key for um fal."
  },
  {
    name: "ComfyUI",
    category: "Local AI generation",
    platform: ["Windows", "Linux", "macOS"],
    status: "optional",
    description: "Local Stable Diffusion / Flux-style image-generation interface. Universal Modder can use it through um comfy with no fal API key.",
    tags: ["local AI", "image generation", "GPU", "Stable Diffusion"],
    links: [
      { label: "GitHub", url: "https://github.com/comfyanonymous/ComfyUI" },
      { label: "Examples", url: "https://comfyanonymous.github.io/ComfyUI_examples/" }
    ],
    install: "git clone https://github.com/comfyanonymous/ComfyUI.git && cd ComfyUI && pip install -r requirements.txt"
  },
  {
    name: "Ollama",
    category: "Local AI generation",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Run local LLMs for offline code assistance, documentation drafting, JSON transformation, and private modding research.",
    tags: ["local AI", "LLM", "offline", "privacy"],
    links: [
      { label: "Download", url: "https://ollama.com/download" },
      { label: "Model library", url: "https://ollama.com/library" }
    ],
    install: "winget install --id Ollama.Ollama -e --source winget"
  },
  {
    name: "LM Studio",
    category: "Local AI generation",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "GUI for discovering, running, and serving local GGUF models through an OpenAI-compatible local API.",
    tags: ["local AI", "LLM", "GGUF", "GUI"],
    links: [
      { label: "Download", url: "https://lmstudio.ai/" },
      { label: "Docs", url: "https://lmstudio.ai/docs" }
    ],
    install: "Download the Windows installer from lmstudio.ai."
  },
  {
    name: "Ghidra",
    category: "Reverse engineering",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "NSA-originated open-source disassembler and decompiler. Excellent for native-game analysis, function discovery, and binary patch research.",
    tags: ["disassembler", "decompiler", "native", "reverse engineering"],
    links: [
      { label: "Download", url: "https://ghidra-sre.org/" },
      { label: "GitHub", url: "https://github.com/NationalSecurityAgency/ghidra" }
    ],
    install: "Download the Ghidra release, extract it, and run ghidraRun.bat."
  },
  {
    name: "x64dbg",
    category: "Reverse engineering",
    platform: ["Windows"],
    status: "optional",
    description: "Windows user-mode debugger for examining executables, breakpoints, memory, hooks, and runtime behavior.",
    tags: ["debugger", "Windows", "native", "reverse engineering"],
    links: [
      { label: "Download", url: "https://x64dbg.com/" },
      { label: "GitHub", url: "https://github.com/x64dbg/x64dbg" }
    ],
    install: "Download the release ZIP, extract it, and run x96dbg.exe."
  },
  {
    name: "Cheat Engine",
    category: "Reverse engineering",
    platform: ["Windows"],
    status: "optional",
    description: "Memory scanner and debugger for locating values, pointers, structures, and runtime game state during experimentation.",
    tags: ["memory", "debugger", "Windows", "reverse engineering"],
    links: [
      { label: "Download", url: "https://www.cheatengine.org/downloads.php" },
      { label: "Forum", url: "https://forum.cheatengine.org/" }
    ],
    install: "Download and run the official Windows installer."
  },
  {
    name: "HxD Hex Editor",
    category: "Reverse engineering",
    platform: ["Windows"],
    status: "optional",
    description: "Fast hexadecimal editor for inspecting and patching binary files, archives, textures, save data, and ROM-like resources.",
    tags: ["hex editor", "binary", "files", "Windows"],
    links: [
      { label: "Download", url: "https://mh-nexus.de/en/hxd/" }
    ],
    install: "Download and run the official installer."
  },
  {
    name: "Resource Hacker",
    category: "Reverse engineering",
    platform: ["Windows"],
    status: "optional",
    description: "Views and edits Windows executable resources such as icons, dialogs, strings, menus, and version information.",
    tags: ["Win32", "resources", "EXE", "UI"],
    links: [
      { label: "Download", url: "http://www.angusj.com/resourcehacker/" }
    ],
    install: "Download the portable ZIP or installer from the official site."
  },
  {
    name: "7-Zip",
    category: "Files & archives",
    platform: ["Windows"],
    status: "recommended",
    description: "Extracts game archives, mod packages, portable tools, and many compressed resource formats.",
    tags: ["archive", "extraction", "files", "ZIP"],
    links: [
      { label: "Download", url: "https://www.7-zip.org/" },
      { label: "GitHub", url: "https://github.com/ip7z/7zip" }
    ],
    install: "winget install --id 7zip.7zip -e --source winget"
  },
  {
    name: "Aseprite",
    category: "2D art",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Pixel-art and animation editor. Ideal for cleaning up generated sprites, making sprite sheets, and preserving palette consistency.",
    tags: ["pixel art", "sprites", "animation", "2D"],
    links: [
      { label: "Download", url: "https://www.aseprite.org/download/" },
      { label: "Docs", url: "https://www.aseprite.org/docs/" }
    ],
    install: "Purchase from Steam/itch.io or compile the open-source version."
  },
  {
    name: "Krita",
    category: "2D art",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Free painting and image-editing application for textures, concept art, sprite cleanup, and larger illustrations.",
    tags: ["art", "textures", "painting", "2D"],
    links: [
      { label: "Download", url: "https://krita.org/en/download/" },
      { label: "Manual", url: "https://docs.krita.org/en/" }
    ],
    install: "winget install --id KDE.Krita -e --source winget"
  },
  {
    name: "GIMP",
    category: "2D art",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Free raster editor for texture conversion, palette work, batch exports, and general sprite editing.",
    tags: ["image editing", "textures", "free", "2D"],
    links: [
      { label: "Download", url: "https://www.gimp.org/downloads/" },
      { label: "Docs", url: "https://docs.gimp.org/" }
    ],
    install: "winget install --id GIMP.GIMP -e --source winget"
  },
  {
    name: "Inkscape",
    category: "2D art",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Vector editor for UI mockups, icons, logos, scalable HUD elements, and SVG-to-PNG asset exports.",
    tags: ["vector", "SVG", "UI", "icons"],
    links: [
      { label: "Download", url: "https://inkscape.org/release/" },
      { label: "Docs", url: "https://inkscape.org/doc/" }
    ],
    install: "winget install --id Inkscape.Inkscape -e --source winget"
  },
  {
    name: "TexturePacker",
    category: "2D art",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Packs individual images into optimized sprite atlases and generates engine-compatible metadata.",
    tags: ["sprite atlas", "2D", "optimization", "game assets"],
    links: [
      { label: "Download", url: "https://www.codeandweb.com/texturepacker" },
      { label: "Docs", url: "https://www.codeandweb.com/texturepacker/documentation" }
    ],
    install: "Download the installer from CodeAndWeb."
  },
  {
    name: "Audacity",
    category: "Audio",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Free audio editor for trimming generated SFX, normalizing music, removing noise, and exporting game-ready formats.",
    tags: ["audio", "SFX", "music", "editing"],
    links: [
      { label: "Download", url: "https://www.audacityteam.org/download/" },
      { label: "Manual", url: "https://support.audacityteam.org/" }
    ],
    install: "winget install --id Audacity.Audacity -e --source winget"
  },
  {
    name: "Reaper",
    category: "Audio",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Digital audio workstation for composing game music, editing stems, mixing SFX, and producing polished audio layers.",
    tags: ["DAW", "music", "audio", "production"],
    links: [
      { label: "Download", url: "https://www.reaper.fm/download.php" },
      { label: "User guide", url: "https://www.reaper.fm/userguide.php" }
    ],
    install: "Download the installer from reaper.fm."
  },
  {
    name: "OBS Studio",
    category: "Capture & publishing",
    platform: ["Windows", "macOS", "Linux"],
    status: "recommended",
    description: "Records gameplay, window captures, webcam overlays, and mod-demo footage for verification or showcase videos.",
    tags: ["recording", "streaming", "video", "showcase"],
    links: [
      { label: "Download", url: "https://obsproject.com/download" },
      { label: "Docs", url: "https://obsproject.com/kb" }
    ],
    install: "winget install --id OBSProject.OBSStudio -e --source winget"
  },
  {
    name: "ShareX",
    category: "Capture & publishing",
    platform: ["Windows"],
    status: "optional",
    description: "Screenshot, GIF, screen-recording, and upload utility for documenting before/after mod results.",
    tags: ["screenshots", "GIF", "Windows", "documentation"],
    links: [
      { label: "Download", url: "https://getsharex.com/" },
      { label: "GitHub", url: "https://github.com/ShareX/ShareX" }
    ],
    install: "winget install --id ShareX.ShareX -e --source winget"
  },
  {
    name: "DaVinci Resolve",
    category: "Capture & publishing",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Professional free-tier video editor for mod showcases, comparisons, captions, color grading, and final exports.",
    tags: ["video editing", "showcase", "free", "post-production"],
    links: [
      { label: "Download", url: "https://www.blackmagicdesign.com/products/davinciresolve" },
      { label: "Manual", url: "https://documents.blackmagicdesign.com/UserManuals/" }
    ],
    install: "Download the free version from Blackmagic Design."
  },
  {
    name: "Unity",
    category: "Engine tooling",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Useful for inspecting Unity-based games, creating test projects, and working with AssetRipper-exported content.",
    tags: ["engine", "Unity", "C#", "game development"],
    links: [
      { label: "Download", url: "https://unity.com/download" },
      { label: "Docs", url: "https://docs.unity3d.com/Manual/index.html" }
    ],
    install: "Install Unity Hub, then install the Unity version matching the target game."
  },
  {
    name: "Unreal Engine",
    category: "Engine tooling",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Useful for Unreal-based projects, asset inspection, Blueprint analysis, and building compatible test environments.",
    tags: ["engine", "Unreal", "Blueprints", "game development"],
    links: [
      { label: "Download", url: "https://www.unrealengine.com/download" },
      { label: "Docs", url: "https://dev.epicgames.com/documentation/en-us/unreal-engine" }
    ],
    install: "Install the Epic Games Launcher, then install the required Unreal Engine version."
  },
  {
    name: "Godot",
    category: "Engine tooling",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Lightweight open-source engine for prototypes, fan-game experiments, custom launchers, and testing exported assets.",
    tags: ["engine", "open source", "GDScript", "prototyping"],
    links: [
      { label: "Download", url: "https://godotengine.org/download" },
      { label: "Docs", url: "https://docs.godotengine.org/" }
    ],
    install: "winget install --id GodotEngine.Godot -e --source winget"
  },
  {
    name: "AssetRipper",
    category: "Engine tooling",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Extracts and converts Unity assets for inspection and research. Use only with legally owned games and respect licensing.",
    tags: ["Unity", "assets", "extraction", "research"],
    links: [
      { label: "GitHub", url: "https://github.com/AssetRipper/AssetRipper" },
      { label: "Releases", url: "https://github.com/AssetRipper/AssetRipper/releases" }
    ],
    install: "Download the latest release and run the GUI executable."
  },
  {
    name: "UABEA",
    category: "Engine tooling",
    platform: ["Windows"],
    status: "optional",
    description: "Unity asset bundle explorer and editor for inspecting serialized assets, textures, meshes, and bundle structure.",
    tags: ["Unity", "assets", "bundles", "inspection"],
    links: [
      { label: "GitHub", url: "https://github.com/nesrak1/UABEA" },
      { label: "Releases", url: "https://github.com/nesrak1/UABEA/releases" }
    ],
    install: "Download the release ZIP and extract it."
  },
  {
    name: "dnSpyEx",
    category: "Engine tooling",
    platform: ["Windows"],
    status: "optional",
    description: ".NET assembly editor and debugger for inspecting and modifying managed Unity or C# game code.",
    tags: [".NET", "C#", "Unity", "debugger"],
    links: [
      { label: "GitHub", url: "https://github.com/dnSpyEx/dnSpy" },
      { label: "Releases", url: "https://github.com/dnSpyEx/dnSpy/releases" }
    ],
    install: "Download the release ZIP and run dnSpy.exe."
  },
  {
    name: "VS Code",
    category: "Development",
    platform: ["Windows", "macOS", "Linux"],
    status: "recommended",
    description: "Primary editor for mod source, JSON configuration, Python scripts, documentation, and GitHub Copilot MCP workflows.",
    tags: ["editor", "IDE", "extensions", "MCP"],
    links: [
      { label: "Download", url: "https://code.visualstudio.com/download" },
      { label: "Docs", url: "https://code.visualstudio.com/docs" }
    ],
    install: "winget install --id Microsoft.VisualStudioCode -e --source winget"
  },
  {
    name: "GitHub Desktop",
    category: "Development",
    platform: ["Windows", "macOS"],
    status: "optional",
    description: "GUI frontend for Git, useful for reviewing mod changes, committing experiments, and publishing repositories.",
    tags: ["Git", "GUI", "version control", "GitHub"],
    links: [
      { label: "Download", url: "https://desktop.github.com/" },
      { label: "Docs", url: "https://docs.github.com/en/desktop" }
    ],
    install: "winget install --id GitHub.GitHubDesktop -e --source winget"
  },
  {
    name: "Docker Desktop",
    category: "Development",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description: "Runs isolated services such as local model servers, databases, web tools, or custom MCP integrations.",
    tags: ["containers", "services", "MCP", "local AI"],
    links: [
      { label: "Download", url: "https://www.docker.com/products/docker-desktop/" },
      { label: "Docs", url: "https://docs.docker.com/" }
    ],
    install: "winget install --id Docker.DockerDesktop -e --source winget"
  }
];
