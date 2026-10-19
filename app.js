"use strict";

(() => {
  const state = {
    search: "",
    category: "All",
    platform: "All"
  };

  const grid = document.getElementById("tool-grid");
  const searchInput = document.getElementById("search");
  const categoryChips = document.getElementById("category-chips");
  const platformChips = document.getElementById("platform-chips");
  const resultCount = document.getElementById("result-count");
  const emptyState = document.getElementById("empty-state");

  const uniqueSorted = (values) => [...new Set(values)].sort((a, b) => a.localeCompare(b));

  const categories = ["All", ...uniqueSorted(ECOSYSTEM_DATA.map((tool) => tool.category))];
  const platforms = ["All", ...uniqueSorted(ECOSYSTEM_DATA.flatMap((tool) => tool.platform))];

  const createChip = (label, group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip";
    button.textContent = label;
    button.dataset.value = label;
    button.dataset.group = group;

    if (
      (group === "category" && label === state.category) ||
      (group === "platform" && label === state.platform)
    ) {
      button.classList.add("active");
    }

    return button;
  };

  const renderChips = () => {
    categoryChips.replaceChildren(
      ...categories.map((label) => createChip(label, "category"))
    );
    platformChips.replaceChildren(
      ...platforms.map((label) => createChip(label, "platform"))
    );
  };

  const statusLabel = (status) => {
    if (status === "required") return "Required";
    if (status === "recommended") return "Recommended";
    return "Optional";
  };

  const matchesTool = (tool) => {
    const search = state.search.trim().toLowerCase();
    const categoryMatch =
      state.category === "All" || tool.category === state.category;
    const platformMatch =
      state.platform === "All" || tool.platform.includes(state.platform);

    if (!categoryMatch || !platformMatch) return false;
    if (!search) return true;

    const haystack = [
      tool.name,
      tool.category,
      tool.description,
      tool.status,
      ...tool.tags,
      ...tool.platform
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(search);
  };

  const createToolCard = (tool) => {
    const card = document.createElement("article");
    card.className = "tool-card";

    const top = document.createElement("div");
    top.className = "tool-top";

    const title = document.createElement("h3");
    title.className = "tool-name";
    title.textContent = tool.name;

    const tags = document.createElement("div");
    tags.className = "tag-row";

    const statusTag = document.createElement("span");
    statusTag.className = `tag ${tool.status}`;
    statusTag.textContent = statusLabel(tool.status);
    tags.append(statusTag);

    const categoryTag = document.createElement("span");
    categoryTag.className = "tag";
    categoryTag.textContent = tool.category;
    tags.append(categoryTag);

    top.append(title, tags);

    const description = document.createElement("p");
    description.className = "tool-desc";
    description.textContent = tool.description;

    const platformTags = document.createElement("div");
    platformTags.className = "tag-row";
    tool.platform.forEach((platform) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = platform;
      platformTags.append(tag);
    });

    const links = document.createElement("div");
    links.className = "tool-links";

    tool.links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.className = "tool-link";
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.rel = "noopener";
      anchor.textContent = link.label;
      links.append(anchor);
    });

    card.append(top, description, platformTags, links);
    return card;
  };

  const renderTools = () => {
    const filtered = ECOSYSTEM_DATA.filter(matchesTool);

    grid.replaceChildren(...filtered.map(createToolCard));
    resultCount.textContent = `${filtered.length} of ${ECOSYSTEM_DATA.length} tools shown`;
    emptyState.classList.toggle("hidden", filtered.length > 0);
  };

  const handleChipClick = (event) => {
    const chip = event.target.closest(".chip");
    if (!chip) return;

    const { group, value } = chip.dataset;

    if (group === "category") state.category = value;
    if (group === "platform") state.platform = value;

    document
      .querySelectorAll(`.chip[data-group="${group}"]`)
      .forEach((item) => item.classList.toggle("active", item === chip));

    renderTools();
  };

  const copyText = async (text, button) => {
    try {
      await navigator.clipboard.writeText(text);
      const original = button.textContent;
      button.textContent = "Copied!";
      setTimeout(() => {
        button.textContent = original;
      }, 1400);
    } catch {
      button.textContent = "Press Ctrl+C";
    }
  };

  const bindCopyButtons = () => {
    document.querySelectorAll(".copy-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const target = document.getElementById(button.dataset.copyTarget);
        if (target) copyText(target.innerText, button);
      });
    });
  };

  searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    renderTools();
  });

  categoryChips.addEventListener("click", handleChipClick);
  platformChips.addEventListener("click", handleChipClick);

  renderChips();
  renderTools();
  bindCopyButtons();
})();
