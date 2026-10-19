"use strict";

const ECOSYSTEM_DATA = [
  {
    name: "Git",
    category: "Core dependency",
    platform: ["Windows", "macOS", "Linux"],
    status: "required",
    description:
      "Clones Universal Modder, updates it, manages mod source changes, and is required by the setup workflow.",
    tags: ["version control", "repository", "CLI"],
    links: [
      { label: "Download", url: "https://git-scm.com/downloads" },
      { label: "Docs", url: "https://git-scm.com/doc" }
    ],
    install: "winget install --id Git.Git -e --source winget",
    usage: [
      "git --version",
      "git clone https://github.com/AhmedTahaAtiya/universal-modder-unrestricted.git",
      "git pull"
    ]
  },
  {
    name: "Python 3.10+",
    category: "Core dependency",
    platform: ["Windows", "macOS", "Linux"],
    status: "required",
    description:
      "Runs the um CLI and installs its Pillow, NumPy, and PyYAML dependencies.",
    tags: ["runtime", "Python", "um CLI"],
    links: [
      { label: "Download", url: "https://www.python.org/downloads/" },
      { label: "Docs", url: "https://docs.python.org/3/" }
    ],
    install: "winget install --id Python.Python.3.12 -e --source winget",
    usage: [
      "python --version",
      "python -m pip --version"
    ]
  },
  {
    name: "FFmpeg",
    category: "Core dependency",
    platform: ["Windows", "macOS", "Linux"],
    status: "required",
    description:
      "Required for recording, converting, trimming, encoding, and editing gameplay and showcase video.",
    tags: ["video", "audio", "conversion", "recording"],
    links: [
      { label: "Windows builds", url: "https://www.gyan.dev/ffmpeg/builds/" },
      { label: "Documentation", url: "https://ffmpeg.org/documentation.html" }
    ],
    install: "winget install --id Gyan.FFmpeg -e --source winget",
    usage: [
      "ffmpeg -version",
      "ffmpeg -i input.mp4 -c copy output.mkv",
      "ffmpeg -i input.mp4 -vf scale=1280:-1 output.mp4"
    ]
  },
  {
    name: "uv",
    category: "Core dependency",
    platform: ["Windows", "macOS", "Linux"],
    status: "recommended",
    description:
      "Fast Python package and tool manager. The recommended way to install and isolate the um CLI.",
    tags: ["package manager", "Python", "CLI"],
    links: [
      { label: "Install guide", url: "https://docs.astral.sh/uv/getting-started/installation/" },
      { label: "GitHub", url: "https://github.com/astral-sh/uv" }
    ],
    install:
      "powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"",
    usage: [
      "uv --version",
      "uv tool install --force git+https://github.com/AhmedTahaAtiya/universal-modder-unrestricted",
      "um --help"
    ]
  },
  {
    name: "Universal Modder Unrestricted",
    category: "Core dependency",
    platform: ["Windows", "macOS", "Linux"],
    status: "required",
    description:
      "The modding toolkit, skills, knowledge base, fal MCP integration, and um CLI used by compatible AI agents.",
    tags: ["um CLI", "skills", "MCP", "knowledge base"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/AhmedTahaAtiya/universal-modder-unrestricted"
      },
      {
        label: "Upstream project",
        url: "https://github.com/rehan-remade/universal-modder"
      }
    ],
    install:
      "git clone https://github.com/AhmedTahaAtiya/universal-modder-unrestricted.git && cd universal-modder-unrestricted && uv tool install --force git+https://github.com/AhmedTahaAtiya/universal-modder-unrestricted",
    usage: [
      "um --help",
      "um scan",
      "um kb search "game name or engine"",
      "um fal --help",
      "um comfy --help",
      "um win --help"
    ]
  },

  {
    name: "fal MCP",
    category: "AI generation service",
    platform: ["Cloud", "Windows", "macOS", "Linux"],
    status: "recommended",
    description:
      "Hosted MCP endpoint for sprites, textures, PBR materials, 3D assets, rigs, sound effects, music, voice, and video generation.",
    tags: ["MCP", "fal", "image", "video", "audio", "3D"],
    links: [
      { label: "MCP endpoint", url: "https://mcp.fal.ai/mcp" },
      { label: "fal dashboard", url: "https://fal.ai/dashboard" },
      { label: "fal docs", url: "https://docs.fal.ai/" }
    ],
    install:
      "setx FAL_KEY "your_fal_api_key"",
    usage: [
      "um fal --help",
      "um fal image --help",
      "um fal video --help",
      "um fal audio --help"
    ],
    notes:
      "Alternatively, save the key to ~/.secrets/fal-key. On Windows, that is C:\\Users\\<You>\\.secrets\\fal-key."
  },
  {
    name: "ComfyUI",
    category: "Local AI generation",
    platform: ["Windows", "Linux", "macOS"],
    status: "optional",
    description:
      "Local Stable Diffusion / Flux-style image-generation interface. Universal Modder can use it through um comfy with no fal API key.",
    tags: ["local AI", "image generation", "GPU", "Stable Diffusion"],
    links: [
      { label: "GitHub", url: "https://github.com/comfyanonymous/ComfyUI" },
      { label: "Examples", url: "https://comfyanonymous.github.io/ComfyUI_examples/" },
      { label: "Releases", url: "https://github.com/comfyanonymous/ComfyUI/releases" }
    ],
    install:
      "git clone https://github.com/comfyanonymous/ComfyUI.git && cd ComfyUI && python -m venv .venv && .venv\\Scripts\\activate && python -m pip install -r requirements.txt && python main.py",
    usage: [
      "python main.py",
      "um comfy --help",
      "um comfy status"
    ],
    notes:
      "For NVIDIA GPUs, install the matching PyTorch CUDA build before installing requirements. Start ComfyUI first, then use um comfy."
  },
  {
    name: "Ollama",
    category: "Local AI generation",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Run local LLMs for offline code assistance, documentation drafting, JSON transformation, and private modding research.",
    tags: ["local AI", "LLM", "offline", "privacy"],
    links: [
      { label: "Download", url: "https://ollama.com/download" },
      { label: "Model library", url: "https://ollama.com/library" },
      { label: "GitHub", url: "https://github.com/ollama/ollama" }
    ],
    install: "winget install --id Ollama.Ollama -e --source winget",
    usage: [
      "ollama --version",
      "ollama pull llama3.1",
      "ollama run llama3.1"
    ]
  },
  {
    name: "LM Studio",
    category: "Local AI generation",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "GUI for discovering, running, and serving local GGUF models through an OpenAI-compatible local API.",
    tags: ["local AI", "LLM", "GGUF", "GUI"],
    links: [
      { label: "Download", url: "https://lmstudio.ai/" },
      { label: "Docs", url: "https://lmstudio.ai/docs" }
    ],
    install:
      "Download the Windows installer from https://lmstudio.ai/ and run it.",
    usage: [
      "Open LM Studio",
      "Download a GGUF model",
      "Start the local server",
      "Connect an MCP-compatible client to the local endpoint"
    ]
  },

  {
    name: "Ghidra",
    category: "Reverse engineering",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Open-source disassembler and decompiler for native-game analysis, function discovery, and binary patch research.",
    tags: ["disassembler", "decompiler", "native", "reverse engineering"],
    links: [
      { label: "Download", url: "https://ghidra-sre.org/" },
      { label: "GitHub", url: "https://github.com/NationalSecurityAgency/ghidra" },
      { label: "Docs", url: "https://ghidra-sre.org/Documentation" }
    ],
    install:
      "Download the Ghidra release ZIP, extract it with 7-Zip, then run ghidraRun.bat.",
    usage: [
      "ghidraRun.bat",
      "Create a new project",
      "Import the game executable",
      "Run auto-analysis",
      "Search strings, functions, and references"
    ],
    notes:
      "Requires a supported Java runtime. Use the Java version specified on the Ghidra release page."
  },
  {
    name: "x64dbg",
    category: "Reverse engineering",
    platform: ["Windows"],
    status: "optional",
    description:
      "Windows user-mode debugger for examining executables, breakpoints, memory, hooks, and runtime behavior.",
    tags: ["debugger", "Windows", "native", "reverse engineering"],
    links: [
      { label: "Download", url: "https://x64dbg.com/" },
      { label: "GitHub", url: "https://github.com/x64dbg/x64dbg" },
      { label: "Documentation", url: "https://help.x64dbg.com/en/latest/" }
    ],
    install:
      "Download the x64dbg snapshot ZIP, extract it, run x96dbg.exe, then choose x32dbg or x64dbg to match the game executable.",
    usage: [
      "x96dbg.exe",
      "File → Open → select game executable",
      "Set breakpoints",
      "Inspect registers, stack, and memory",
      "Attach to a running process"
    ]
  },
  {
    name: "Cheat Engine",
    category: "Reverse engineering",
    platform: ["Windows"],
    status: "optional",
    description:
      "Memory scanner and debugger for locating values, pointers, structures, and runtime game state during experimentation.",
    tags: ["memory", "debugger", "Windows", "reverse engineering"],
    links: [
      { label: "Download", url: "https://www.cheatengine.org/downloads.php" },
      { label: "Forum", url: "https://forum.cheatengine.org/" }
    ],
    install:
      "Download and run the official Cheat Engine installer from cheatengine.org.",
    usage: [
      "Open Cheat Engine",
      "Attach to the game process",
      "Scan for a known value",
      "Narrow results by changing the value in game",
      "Find pointers or inspect memory structures"
    ],
    notes:
      "Single-player and offline research only. Do not use it against online, ranked, or anti-cheat-protected services."
  },
  {
    name: "HxD Hex Editor",
    category: "Reverse engineering",
    platform: ["Windows"],
    status: "optional",
    description:
      "Fast hexadecimal editor for inspecting and patching binary files, archives, textures, save data, and ROM-like resources.",
    tags: ["hex editor", "binary", "files", "Windows"],
    links: [
      { label: "Download", url: "https://mh-nexus.de/en/hxd/" },
      { label: "Documentation", url: "https://mh-nexus.de/en/hxd/quickstart.php" }
    ],
    install:
      "Download the installer or portable ZIP from mh-nexus.de and install or extract it.",
    usage: [
      "Open a game file",
      "Search for hex or text patterns",
      "Inspect file headers",
      "Patch bytes after making a backup",
      "Export selected ranges"
    ]
  },
  {
    name: "Resource Hacker",
    category: "Reverse engineering",
    platform: ["Windows"],
    status: "optional",
    description:
      "Views and edits Windows executable resources such as icons, dialogs, strings, menus, and version information.",
    tags: ["Win32", "resources", "EXE", "UI"],
    links: [
      { label: "Download", url: "http://www.angusj.com/resourcehacker/" }
    ],
    install:
      "Download Resource Hacker from angusj.com, then run the installer or extract the portable version.",
    usage: [
      "Open an .exe or .dll",
      "Browse Icon, Dialog, Menu, String Table, and Version resources",
      "Extract or replace resources",
      "Compile modified resources"
    ]
  },

  {
    name: "Aseprite",
    category: "2D art",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Pixel-art and animation editor. Ideal for cleaning up generated sprites, making sprite sheets, and preserving palette consistency.",
    tags: ["pixel art", "sprites", "animation", "2D"],
    links: [
      { label: "Download", url: "https://www.aseprite.org/download/" },
      { label: "Steam", url: "https://store.steampowered.com/app/431730/Aseprite/" },
      { label: "Docs", url: "https://www.aseprite.org/docs/" }
    ],
    install:
      "Purchase and install from Steam or itch.io, or build the open-source version from source.",
    usage: [
      "Create a indexed-color sprite",
      "Draw or clean up generated pixels",
      "Export PNG",
      "Export sprite sheet",
      "Use palette locking for consistent game assets"
    ]
  },
  {
    name: "Krita",
    category: "2D art",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Free painting and image-editing application for textures, concept art, sprite cleanup, and larger illustrations.",
    tags: ["art", "textures", "painting", "2D"],
    links: [
      { label: "Download", url: "https://krita.org/en/download/" },
      { label: "Manual", url: "https://docs.krita.org/en/" }
    ],
    install: "winget install --id KDE.Krita -e --source winget",
    usage: [
      "krita",
      "Create a texture canvas",
      "Paint or retouch generated images",
      "Export PNG, PSD, or layered files"
    ]
  },
  {
    name: "GIMP",
    category: "2D art",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Free raster editor for texture conversion, palette work, batch exports, and general sprite editing.",
    tags: ["image editing", "textures", "free", "2D"],
    links: [
      { label: "Download", url: "https://www.gimp.org/downloads/" },
      { label: "Docs", url: "https://docs.gimp.org/" }
    ],
    install: "winget install --id GIMP.GIMP -e --source winget",
    usage: [
      "gimp-2.10",
      "Open an image",
      "Convert color mode",
      "Scale or export textures",
      "Use Script-Fu for batch processing"
    ]
  },
  {
    name: "Inkscape",
    category: "2D art",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Vector editor for UI mockups, icons, logos, scalable HUD elements, and SVG-to-PNG asset exports.",
    tags: ["vector", "SVG", "UI", "icons"],
    links: [
      { label: "Download", url: "https://inkscape.org/release/" },
      { label: "Docs", url: "https://inkscape.org/doc/" }
    ],
    install: "winget install --id Inkscape.Inkscape -e --source winget",
    usage: [
      "inkscape",
      "Create vector UI elements",
      "Export PNG at required resolution",
      "Optimize SVG assets"
    ]
  },
  {
    name: "TexturePacker",
    category: "2D art",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Packs individual images into optimized sprite atlases and generates engine-compatible metadata.",
    tags: ["sprite atlas", "2D", "optimization", "game assets"],
    links: [
      { label: "Download", url: "https://www.codeandweb.com/texturepacker" },
      {
        label: "Documentation",
        url: "https://www.codeandweb.com/texturepacker/documentation"
      }
    ],
    install:
      "Download TexturePacker from CodeAndWeb, install it, and activate the desired license.",
    usage: [
      "Create a new project",
      "Add sprite folders",
      "Choose atlas format",
      "Publish sprite sheet and metadata",
      "Import the atlas into the target engine"
    ]
  },
  {
    name: "Blender",
    category: "3D & rendering",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Needed for Universal Modder’s 3D-to-sprite rendering workflow. Useful for modeling, rigging, texture baking, and rendering sprite sheets.",
    tags: ["3D", "sprites", "rendering", "animation"],
    links: [
      { label: "Download", url: "https://www.blender.org/download/" },
      { label: "Manual", url: "https://docs.blender.org/manual/en/latest/" },
      { label: "GitHub", url: "https://github.com/blender/blender" }
    ],
    install: "winget install --id BlenderFoundation.Blender -e --source winget",
    usage: [
      "blender --version",
      "blender",
      "um render3d --help",
      "Import FBX, OBJ, or glTF",
      "Render orthographic sprite views"
    ]
  },

  {
    name: "Audacity",
    category: "Audio",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Free audio editor for trimming generated SFX, normalizing music, removing noise, and exporting game-ready formats.",
    tags: ["audio", "SFX", "music", "editing"],
    links: [
      { label: "Download", url: "https://www.audacityteam.org/download/" },
      { label: "Manual", url: "https://support.audacityteam.org/" }
    ],
    install: "winget install --id Audacity.Audacity -e --source winget",
    usage: [
      "audacity",
      "Import generated audio",
      "Trim and normalize",
      "Export WAV, OGG, or MP3"
    ]
  },
  {
    name: "REAPER",
    category: "Audio",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Digital audio workstation for composing game music, editing stems, mixing SFX, and producing polished audio layers.",
    tags: ["DAW", "music", "audio", "production"],
    links: [
      { label: "Download", url: "https://www.reaper.fm/download.php" },
      { label: "User guide", url: "https://www.reaper.fm/userguide.php" }
    ],
    install:
      "Download REAPER from reaper.fm and run the installer.",
    usage: [
      "reaper",
      "Create a project",
      "Import stems",
      "Arrange and mix",
      "Render final audio"
    ]
  },

  {
    name: "OBS Studio",
    category: "Capture & publishing",
    platform: ["Windows", "macOS", "Linux"],
    status: "recommended",
    description:
      "Records gameplay, window captures, webcam overlays, and mod-demo footage for verification or showcase videos.",
    tags: ["recording", "streaming", "video", "showcase"],
    links: [
      { label: "Download", url: "https://obsproject.com/download" },
      { label: "Knowledge base", url: "https://obsproject.com/kb" },
      { label: "GitHub", url: "https://github.com/obsproject/obs-studio" }
    ],
    install: "winget install --id OBSProject.OBSStudio -e --source winget",
    usage: [
      "obs64",
      "Add Game Capture or Window Capture",
      "Select microphone and desktop audio",
      "Start Recording",
      "Export MP4 or MKV"
    ]
  },
  {
    name: "ShareX",
    category: "Capture & publishing",
    platform: ["Windows"],
    status: "optional",
    description:
      "Screenshot, GIF, screen-recording, and upload utility for documenting before/after mod results.",
    tags: ["screenshots", "GIF", "Windows", "documentation"],
    links: [
      { label: "Download", url: "https://getsharex.com/" },
      { label: "GitHub", url: "https://github.com/ShareX/ShareX" },
      { label: "Docs", url: "https://getsharex.com/docs" }
    ],
    install: "winget install --id ShareX.ShareX -e --source winget",
    usage: [
      "ShareX",
      "Capture region",
      "Record animated GIF",
      "Record screen",
      "Upload or save captures"
    ]
  },
  {
    name: "DaVinci Resolve",
    category: "Capture & publishing",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Professional free-tier video editor for mod showcases, comparisons, captions, color grading, and final exports.",
    tags: ["video editing", "showcase", "free", "post-production"],
    links: [
      {
        label: "Download",
        url: "https://www.blackmagicdesign.com/products/davinciresolve"
      },
      {
        label: "Manual",
        url: "https://documents.blackmagicdesign.com/UserManuals/"
      }
    ],
    install:
      "Download DaVinci Resolve from Blackmagic Design and run the installer.",
    usage: [
      "Create a new project",
      "Import OBS gameplay recordings",
      "Edit before/after comparisons",
      "Add captions",
      "Export final MP4"
    ]
  },

  {
    name: "um win",
    category: "Windows automation",
    platform: ["Windows"],
    status: "recommended",
    description:
      "Universal Modder’s Windows automation toolkit for launching games, focusing windows, sending input, capturing screens, and verifying mod behavior.",
    tags: ["automation", "input", "capture", "testing"],
    links: [
      {
        label: "Universal Modder repository",
        url: "https://github.com/AhmedTahaAtiya/universal-modder-unrestricted"
      }
    ],
    install:
      "uv tool install --force git+https://github.com/AhmedTahaAtiya/universal-modder-unrestricted",
    usage: [
      "um win --help",
      "um win launch --help",
      "um win focus --help",
      "um win input --help",
      "um win capture --help"
    ],
    notes:
      "Use only with single-player games or private test environments. Avoid automation in online or anti-cheat-protected games."
  },
  {
    name: "OBS + um win test loop",
    category: "Windows automation",
    platform: ["Windows"],
    status: "recommended",
    description:
      "Combined workflow: launch the game with um win, apply or reload the mod, capture gameplay with OBS, then inspect the recording for verification.",
    tags: ["testing", "capture", "automation", "verification"],
    links: [
      { label: "OBS Studio", url: "https://obsproject.com/download" },
      {
        label: "Universal Modder repository",
        url: "https://github.com/AhmedTahaAtiya/universal-modder-unrestricted"
      }
    ],
    install:
      "winget install --id OBSProject.OBSStudio -e --source winget && uv tool install --force git+https://github.com/AhmedTahaAtiya/universal-modder-unrestricted",
    usage: [
      "um win launch --help",
      "um win capture --help",
      "obs64",
      "Record gameplay",
      "Review footage and iterate"
    ]
  },

  {
    name: "Unity",
    category: "Engine tooling",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Useful for inspecting Unity-based games, creating test projects, and working with AssetRipper-exported content.",
    tags: ["engine", "Unity", "C#", "game development"],
    links: [
      { label: "Download", url: "https://unity.com/download" },
      { label: "Docs", url: "https://docs.unity3d.com/Manual/index.html" }
    ],
    install:
      "winget install --id Unity.UnityHub -e --source winget",
    usage: [
      "Open Unity Hub",
      "Install the Unity version matching the target game",
      "Create or open a test project",
      "Inspect exported assets",
      "Rebuild test scenes"
    ]
  },
  {
    name: "Unreal Engine",
    category: "Engine tooling",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Useful for Unreal-based projects, asset inspection, Blueprint analysis, and building compatible test environments.",
    tags: ["engine", "Unreal", "Blueprints", "game development"],
    links: [
      { label: "Download", url: "https://www.unrealengine.com/download" },
      {
        label: "Docs",
        url: "https://dev.epicgames.com/documentation/en-us/unreal-engine"
      }
    ],
    install:
      "Install the Epic Games Launcher, then install the Unreal Engine version required by the target project.",
    usage: [
      "Open Epic Games Launcher",
      "Install Unreal Engine",
      "Open or create a project",
      "Inspect assets and Blueprints",
      "Package a test build"
    ]
  },
  {
    name: "Godot",
    category: "Engine tooling",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Lightweight open-source engine for prototypes, fan-game experiments, custom launchers, and testing exported assets.",
    tags: ["engine", "open source", "GDScript", "prototyping"],
    links: [
      { label: "Download", url: "https://godotengine.org/download" },
      { label: "Docs", url: "https://docs.godotengine.org/" },
      { label: "GitHub", url: "https://github.com/godotengine/godot" }
    ],
    install: "winget install --id GodotEngine.Godot -e --source winget",
    usage: [
      "godot",
      "Create a project",
      "Import sprites or audio",
      "Build a test scene",
      "Export a prototype"
    ]
  },
  {
    name: "AssetRipper",
    category: "Engine tooling",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Extracts and converts Unity assets for inspection and research. Use only with legally owned games and respect licensing.",
    tags: ["Unity", "assets", "extraction", "research"],
    links: [
      { label: "GitHub", url: "https://github.com/AssetRipper/AssetRipper" },
      { label: "Releases", url: "https://github.com/AssetRipper/AssetRipper/releases" }
    ],
    install:
      "Download the latest AssetRipper GUI release ZIP, extract it, and run AssetRipper.GUI.Free.exe.",
    usage: [
      "Open AssetRipper",
      "Select the game data folder",
      "Export assets",
      "Inspect textures, meshes, audio, and scripts"
    ]
  },
  {
    name: "UABEA",
    category: "Engine tooling",
    platform: ["Windows"],
    status: "optional",
    description:
      "Unity asset bundle explorer and editor for inspecting serialized assets, textures, meshes, and bundle structure.",
    tags: ["Unity", "assets", "bundles", "inspection"],
    links: [
      { label: "GitHub", url: "https://github.com/nesrak1/UABEA" },
      { label: "Releases", url: "https://github.com/nesrak1/UABEA/releases" }
    ],
    install:
      "Download the UABEA release ZIP, extract it, and run UABEA.exe or UABEA64.exe.",
    usage: [
      "Open a Unity bundle",
      "Inspect assets",
      "Export textures or meshes",
      "Import modified assets",
      "Save the bundle"
    ]
  },
  {
    name: "dnSpyEx",
    category: "Engine tooling",
    platform: ["Windows"],
    status: "optional",
    description:
      ".NET assembly editor and debugger for inspecting and modifying managed Unity or C# game code.",
    tags: [".NET", "C#", "Unity", "debugger"],
    links: [
      { label: "GitHub", url: "https://github.com/dnSpyEx/dnSpy" },
      { label: "Releases", url: "https://github.com/dnSpyEx/dnSpy/releases" }
    ],
    install:
      "Download the dnSpyEx release ZIP, extract it, and run dnSpy.exe or dnSpy-x86.exe.",
    usage: [
      "Open a managed assembly",
      "Search classes and methods",
      "Edit C# code",
      "Compile the module",
      "Debug the game assembly"
    ]
  },

  {
    name: "Visual Studio Code",
    category: "Development",
    platform: ["Windows", "macOS", "Linux"],
    status: "recommended",
    description:
      "Primary editor for mod source, JSON configuration, Python scripts, documentation, and GitHub Copilot MCP workflows.",
    tags: ["editor", "IDE", "extensions", "MCP"],
    links: [
      { label: "Download", url: "https://code.visualstudio.com/download" },
      { label: "Docs", url: "https://code.visualstudio.com/docs" }
    ],
    install: "winget install --id Microsoft.VisualStudioCode -e --source winget",
    usage: [
      "code .",
      "Open the cloned Universal Modder repository",
      "Edit skills, JSON, and Python files",
      "Use GitHub Copilot with MCP"
    ]
  },
  {
    name: "GitHub Desktop",
    category: "Development",
    platform: ["Windows", "macOS"],
    status: "optional",
    description:
      "GUI frontend for Git, useful for reviewing mod changes, committing experiments, and publishing repositories.",
    tags: ["Git", "GUI", "version control", "GitHub"],
    links: [
      { label: "Download", url: "https://desktop.github.com/" },
      { label: "Docs", url: "https://docs.github.com/en/desktop" }
    ],
    install: "winget install --id GitHub.GitHubDesktop -e --source winget",
    usage: [
      "Open GitHub Desktop",
      "Add or clone a repository",
      "Review changes",
      "Commit and push"
    ]
  },
  {
    name: "7-Zip",
    category: "Files & archives",
    platform: ["Windows"],
    status: "recommended",
    description:
      "Extracts game archives, mod packages, portable tools, and many compressed resource formats.",
    tags: ["archive", "extraction", "files", "ZIP"],
    links: [
      { label: "Download", url: "https://www.7-zip.org/" },
      { label: "GitHub", url: "https://github.com/ip7z/7zip" }
    ],
    install: "winget install --id 7zip.7zip -e --source winget",
    usage: [
      "7z x archive.zip -oOutputFolder",
      "7z x tool.7z -oTools",
      "Right-click archive → 7-Zip → Extract Here"
    ]
  },
  {
    name: "Docker Desktop",
    category: "Development",
    platform: ["Windows", "macOS", "Linux"],
    status: "optional",
    description:
      "Runs isolated services such as local model servers, databases, web tools, or custom MCP integrations.",
    tags: ["containers", "services", "MCP", "local AI"],
    links: [
      { label: "Download", url: "https://www.docker.com/products/docker-desktop/" },
      { label: "Docs", url: "https://docs.docker.com/" }
    ],
    install: "winget install --id Docker.DockerDesktop -e --source winget",
    usage: [
      "docker --version",
      "docker compose up -d",
      "docker ps"
    ]
  }
];
