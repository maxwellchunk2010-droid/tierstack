// TierStack — single source of truth for the prototype.
// Editorial v0: tier placements are starting editorial opinions ONLY.
// Hands-on testing is in progress. No scores, prices, or third-party ratings are claimed here.
// To port to Astro/Next: move this object to JSON / a content collection and keep the same fields.
window.TIERSTACK_DATA = {
  editorialLabel: "Editorial v0 — hands-on testing in progress",
  lastUpdatedNote: "Prototype seed data — not yet hands-on tested",
  categories: [
    {
      id: "coding-agents",
      name: "AI Coding Agents / IDEs",
      short: "Code with an agent in your editor or terminal",
      description: "Agents and AI-first editors that write, edit, and debug code inside real repos.",
      testTask: "Add auth + a CRUD page to a starter Next.js repo, fix 3 seeded bugs, and build a small browser game from one prompt."
    },
    {
      id: "app-builders",
      name: "Prompt-to-App Builders",
      short: "Describe an app, get a running app",
      description: "Vibe-coding builders that turn a prompt into a deployed web app you can iterate on.",
      testTask: "Build a waitlist landing page + admin dashboard with a database. Score deploy success, editability, and code export."
    },
    {
      id: "backend-deploy",
      name: "Vibe-Coder Backend & Deploy Stack",
      short: "Database, auth, hosting, and shipping",
      description: "The backend, auth, and deployment layer underneath vibe-coded apps.",
      testTask: "Wire the same starter app to database, auth, and a public deploy. Score setup time, docs clarity, and export / lock-in."
    },
    {
      id: "chat-assistants",
      name: "General Chat Assistants",
      short: "Everyday reasoning, writing, and coding help",
      description: "General-purpose assistants builders use for reasoning, drafting, coding help, and research.",
      testTask: "10 fixed prompts: reasoning, coding, current events with citations, and long-document summary, with hallucination spot-checks."
    },
    {
      id: "agent-frameworks",
      name: "Agent Frameworks & Automation",
      short: "Build agents and automated workflows",
      description: "Frameworks and no-code automation platforms for building agents and connecting tools together.",
      testTask: "Build the same workflow everywhere: new form submission, enrich it, notify Slack/email, log it to a sheet. Measure setup time and failures."
    },
    {
      id: "game-dev",
      name: "AI for Game Dev",
      short: "3D, sprites, worlds, and game characters",
      description: "AI tools for game-ready assets, prototypes, and in-game characters — the gaming wedge of TierStack.",
      testTask: "Generate a game-ready 3D prop / sprite sheet and import it into Unity or Godot. Score usability without heavy cleanup."
    }
  ],
  tools: [
    // --- AI Coding Agents / IDEs ---
    { name: "Cursor", category: "coding-agents", tier: "S", bestFor: "Daily AI-first coding in a full IDE", verdict: "Pick this if you want an AI-first editor as your main daily driver.", url: "https://cursor.com" },
    { name: "Claude Code", category: "coding-agents", tier: "S", bestFor: "Terminal-driven, multi-file repo work", verdict: "Pick this if you are comfortable in the terminal and want an agent working across a whole repo.", url: "https://claude.com" },
    { name: "GitHub Copilot", category: "coding-agents", tier: "A", bestFor: "Teams already living on GitHub", verdict: "Pick this if your team is on GitHub and wants AI help inside your existing editor and workflow.", url: "https://github.com/features/copilot" },
    { name: "Devin Desktop (formerly Windsurf)", category: "coding-agents", tier: "A", bestFor: "An agent-first IDE alternative to Cursor", verdict: "Pick this if you want a full IDE built around managing local and cloud coding agents, and want to compare editors before committing.", url: "https://devin.ai/desktop" },
    { name: "OpenAI Codex", category: "coding-agents", tier: "A", bestFor: "Delegating coding tasks to a cloud agent", verdict: "Pick this if you want to hand off well-scoped tasks and review the result, rather than pair in an editor.", url: "https://openai.com" },
    { name: "Cline", category: "coding-agents", tier: "B", bestFor: "Bring-your-own-model coding in VS Code", verdict: "Pick this if you want an open, model-flexible agent inside VS Code and control over which model you pay for.", url: "https://cline.bot" },
    { name: "Aider", category: "coding-agents", tier: "B", bestFor: "Open-source, git-native terminal pairing", verdict: "Pick this if you want a lightweight open-source terminal pair programmer with tight git integration.", url: "https://aider.chat" },
    { name: "Zed", category: "coding-agents", tier: "B", bestFor: "A fast editor with built-in AI features", verdict: "Pick this if editor speed matters most and you want AI features without a heavy IDE.", url: "https://zed.dev" },

    // --- Prompt-to-App Builders ---
    { name: "Lovable", category: "app-builders", tier: "S", bestFor: "Prompt-to-full-stack app, fast", verdict: "Pick this if you want to go from an idea to a working full-stack app by describing it.", url: "https://lovable.dev" },
    { name: "Bolt.new", category: "app-builders", tier: "A", bestFor: "Building and iterating in the browser", verdict: "Pick this if you want to build, edit, and deploy a web app entirely in the browser.", url: "https://bolt.new" },
    { name: "v0 by Vercel", category: "app-builders", tier: "A", bestFor: "Generating polished web UIs and apps", verdict: "Pick this if UI quality matters most and your stack leans toward Vercel / Next.js.", url: "https://v0.app" },
    { name: "Replit Agent", category: "app-builders", tier: "A", bestFor: "Idea-to-deployed app inside Replit", verdict: "Pick this if you want building, hosting, and deploying handled in one place.", url: "https://replit.com" },
    { name: "Firebase Studio", category: "app-builders", tier: "B", bestFor: "App building inside the Firebase ecosystem", verdict: "Pick this if your app will live on Firebase / Google Cloud and you want that integration from the start.", url: "https://firebase.google.com" },

    // --- Backend & Deploy Stack ---
    { name: "Supabase", category: "backend-deploy", tier: "S", bestFor: "Postgres database, auth, and storage in one", verdict: "Pick this if you want an open-source-friendly backend with a real Postgres database under it.", url: "https://supabase.com" },
    { name: "Vercel", category: "backend-deploy", tier: "S", bestFor: "Deploying Next.js and frontend apps", verdict: "Pick this if you are shipping a Next.js / frontend app and want the simplest path to a live URL.", url: "https://vercel.com" },
    { name: "Clerk", category: "backend-deploy", tier: "A", bestFor: "Drop-in authentication and user management", verdict: "Pick this if you want polished sign-in, sign-up, and user management without building auth yourself.", url: "https://clerk.com" },
    { name: "Firebase", category: "backend-deploy", tier: "A", bestFor: "Google-backed backend for web and mobile", verdict: "Pick this if you want a mature all-in-one backend, especially for mobile or realtime apps.", url: "https://firebase.google.com" },
    { name: "Netlify", category: "backend-deploy", tier: "A", bestFor: "Deploying static sites and Jamstack apps", verdict: "Pick this if you are deploying a frontend / Jamstack site and want a simple, established host.", url: "https://www.netlify.com" },
    { name: "Neon", category: "backend-deploy", tier: "B", bestFor: "Serverless Postgres on its own", verdict: "Pick this if you want serverless Postgres you can pair with any frontend or auth provider.", url: "https://neon.com" },
    { name: "Railway", category: "backend-deploy", tier: "B", bestFor: "Deploying backends and services simply", verdict: "Pick this if you need to deploy a backend service, worker, or database without cloud-console complexity.", url: "https://railway.com?referralCode=KpJteX" },

    // --- General Chat Assistants ---
    { name: "ChatGPT", category: "chat-assistants", tier: "S", bestFor: "All-round assistant with a broad ecosystem", verdict: "Pick this if you want the default all-rounder and the widest set of built-in tools and integrations.", url: "https://chatgpt.com" },
    { name: "Claude", category: "chat-assistants", tier: "S", bestFor: "Writing, reasoning, and coding help", verdict: "Pick this if you do a lot of writing, analysis, or coding and prefer its tone and reasoning style.", url: "https://claude.ai" },
    { name: "Gemini", category: "chat-assistants", tier: "A", bestFor: "Google ecosystem and long documents", verdict: "Pick this if you live in Google Workspace or work with very long documents and media.", url: "https://gemini.google.com" },
    { name: "Grok", category: "chat-assistants", tier: "A", bestFor: "X-connected, real-time-flavoured answers", verdict: "Pick this if you want an assistant closely tied to X and current conversation there.", url: "https://grok.com" },
    { name: "Microsoft Copilot", category: "chat-assistants", tier: "B", bestFor: "Microsoft 365 and Windows users", verdict: "Pick this if your work lives in Microsoft 365 and Windows and you want the assistant built into it.", url: "https://copilot.microsoft.com" },
    { name: "DeepSeek", category: "chat-assistants", tier: "B", bestFor: "Trying open-weight-style models via chat", verdict: "Pick this if you want to try a capable non-US-lab assistant and compare it against your current default.", url: "https://www.deepseek.com" },

    // --- Agent Frameworks & Automation ---
    { name: "n8n", category: "agent-frameworks", tier: "S", bestFor: "Self-hostable workflow + AI automation", verdict: "Pick this if you want powerful workflow automation you can self-host and extend with code.", url: "https://n8n.io" },
    { name: "Zapier", category: "agent-frameworks", tier: "A", bestFor: "Connecting apps without code, fast", verdict: "Pick this if you need the widest set of ready-made app connections and the least setup friction.", url: "https://zapier.com" },
    { name: "Make", category: "agent-frameworks", tier: "A", bestFor: "Visual, more complex automation scenarios", verdict: "Pick this if you want a visual builder for branching, multi-step automations beyond simple triggers.", url: "https://www.make.com" },
    { name: "LangGraph", category: "agent-frameworks", tier: "A", bestFor: "Building stateful agents in code", verdict: "Pick this if you are a developer building agents as code and need control over state and flow.", url: "https://www.langchain.com" },
    { name: "CrewAI", category: "agent-frameworks", tier: "B", bestFor: "Role-based multi-agent crews in Python", verdict: "Pick this if the 'crew of agents with roles' model fits how you think about your workflow.", url: "https://www.crewai.com" },
    { name: "OpenAI Agents SDK", category: "agent-frameworks", tier: "B", bestFor: "Building agents on OpenAI models in code", verdict: "Pick this if you are standardising on OpenAI models and want their first-party agent toolkit.", url: "https://openai.com" },

    // --- AI for Game Dev ---
    { name: "Meshy", category: "game-dev", tier: "A", bestFor: "Text/image to 3D models for games", verdict: "Pick this if you need 3D props and assets quickly for prototypes or jams.", url: "https://www.meshy.ai" },
    { name: "Tripo", category: "game-dev", tier: "A", bestFor: "Fast AI 3D model generation", verdict: "Pick this as a second 3D generator to compare against Meshy on your own asset prompts.", url: "https://www.tripo3d.ai" },
    { name: "Scenario", category: "game-dev", tier: "A", bestFor: "Consistent, custom-trained game art", verdict: "Pick this if you need game art in a consistent style you can train and reuse across a project.", url: "https://www.scenario.com" },
    { name: "Rosebud AI", category: "game-dev", tier: "B", bestFor: "Building playable games with AI help", verdict: "Pick this if you want to prototype a playable game with AI assistance rather than just assets.", url: "https://rosebud.ai" },
    { name: "Inworld AI", category: "game-dev", tier: "B", bestFor: "AI characters and NPC behaviour", verdict: "Pick this if your game needs conversational NPCs or AI-driven characters, not just static assets.", url: "https://inworld.ai" },
    { name: "Ludo.ai", category: "game-dev", tier: "B", bestFor: "Game ideation, research, and assets", verdict: "Pick this if you want help at the concept and market-research stage of a game, before production.", url: "https://ludo.ai" }
  ],
  releases: [
    {
      title: "Coding agents keep moving into the terminal and the cloud",
      category: "AI Coding Agents / IDEs",
      metaImpact: "Watch",
      summary: "Example feed entry for the prototype: major coding tools continue adding agentic, multi-file and delegated-task workflows alongside editor-based chat.",
      take: "Does this change the meta? Watch — the editor-vs-terminal split is the comparison to test hands-on, not a headline to trust."
    },
    {
      title: "Prompt-to-app builders push on databases and deployment",
      category: "Prompt-to-App Builders",
      metaImpact: "Watch",
      summary: "Example feed entry for the prototype: app builders keep bundling more of the stack — database, auth, and hosting — so a prompt gets closer to a shipped product.",
      take: "Does this change the meta? Watch — deploy success and code export on the same test app will decide, once tested."
    },
    {
      title: "Chat assistants add deeper research and agent modes",
      category: "General Chat Assistants",
      metaImpact: "Watch",
      summary: "Example feed entry for the prototype: general assistants continue rolling out multi-step research and task-completing agent features next to normal chat.",
      take: "Does this change the meta? Watch — run the fixed 10-prompt set and check citations before moving any tier."
    },
    {
      title: "Automation platforms add AI agent building blocks",
      category: "Agent Frameworks & Automation",
      metaImpact: "Watch",
      summary: "Example feed entry for the prototype: workflow platforms keep adding AI steps and agent nodes on top of classic trigger-and-action automation.",
      take: "Does this change the meta? Watch — the same form-to-notification workflow, timed on each platform, is the real test."
    },
    {
      title: "AI 3D tools focus on cleaner, game-ready output",
      category: "AI for Game Dev",
      metaImpact: "Watch",
      summary: "Example feed entry for the prototype: 3D generation tools keep marketing faster generation and cleaner meshes aimed at real game pipelines.",
      take: "Does this change the meta? Watch — nothing moves until a generated prop survives import into Unity or Godot without heavy cleanup."
    },
    {
      title: "Backend platforms court vibe coders directly",
      category: "Vibe-Coder Backend & Deploy Stack",
      metaImpact: "Watch",
      summary: "Example feed entry for the prototype: database, auth, and hosting platforms increasingly pitch one-click setup for AI-built apps and agent-generated code.",
      take: "Does this change the meta? Watch — setup time from a starter app to a public, authenticated deploy is the metric to measure."
    }
  ],
  criteria: [
    { name: "Output quality", weight: 35, description: "Results on our standard, published test tasks — the same task for every tool in a category." },
    { name: "Speed & reliability", weight: 15, description: "Failures, rate limits, downtime, and how fast a usable result arrives." },
    { name: "Ease of use / time to first result", weight: 15, description: "How quickly a new builder gets something real, without reading a manual cover to cover." },
    { name: "Value", weight: 15, description: "Free-tier usefulness and how the price compares to peers. We link to official pricing and never copy prices into rankings." },
    { name: "Ecosystem & control", weight: 10, description: "Integrations, export, data policy, and lock-in. Can you leave with your work?" },
    { name: "Momentum", weight: 10, description: "Shipping cadence and community signal. Is the tool alive and improving?" }
  ]
};
