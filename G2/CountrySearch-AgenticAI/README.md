# Agentic AI & Context Engineering

## 1. What is an AI Agent?

A regular AI interaction looks like this:

```
You ask a question → AI answers → done.
```

An **AI agent** is different. Instead of answering a single question, it:

1. Receives a **goal**
2. Breaks the goal into **steps**
3. Takes **actions** (writes files, reads docs, runs code)
4. Checks its own **output**
5. Loops until the goal is complete

```
Goal given → Agent plans → Agent acts → Agent checks → Agent corrects → Done
```

You are not giving it a prompt. You are giving it a **mission**.

In this project, Claude Code is the agent. You give it the goal
("build CountrySearch") and it reads your `.md` files, writes every file,
and verifies itself against `ACCEPTANCE.md` — without you typing another word.

---

## 2. What Makes an Agent "(Semi)Autonomous"?

An autonomous agent has three properties:

| Property | What it means | In this project |
|----------|--------------|-----------------|
| **Memory** | It remembers context across steps | Your `.md` files are its memory |
| **Tools** | It can take actions, not just talk | It writes files, runs terminal commands |
| **Judgment** | It makes decisions without asking you | It chooses how to implement what's specified |

The key insight: **the agent's quality is limited by the quality of its context.**
A vague goal produces a vague result. A well-structured context produces
a well-structured app.

---

## 3. What is Context Engineering?

Context engineering is the practice of **deliberately designing the information
an AI agent receives** so it can do its job accurately and independently.

It is not prompt engineering. Here is the difference:

| | Prompt Engineering | Context Engineering |
|---|---|---|
| **Scale** | A single message | A system of documents |
| **Audience** | One interaction | An autonomous agent over many steps |
| **Goal** | Get a good reply | Guide an entire workflow |
| **Skill** | Writing good questions | Designing information architecture |
| **Analogy** | Asking a colleague a question | Writing the onboarding docs for a new hire |

Think of it this way: if prompt engineering is *talking* to an AI,
context engineering is *preparing the environment* the AI works inside.

---

## 4. Why `.md` Files?

Markdown files are the standard format for context engineering because:

- **Plain text** — no special tools needed, works everywhere
- **Structured** — headings, tables, and code blocks create clear hierarchy
- **Readable by both humans and agents** — your teammates and the AI read the same source
- **Version-controllable** — lives in Git alongside your code
- **Composable** — one file per concern, combined at runtime

When Claude Code starts, it automatically reads `README.md` from your project root.
That file is the agent's entry point — the first thing it sees, the document that
tells it where everything else is.

---

## 5. The Anatomy of a Context System

This project uses **7 files**, each with a single responsibility:

```
AGENT.md            ← Entry point. Reading order. Rules.
PROJECT.md          ← What to build. What NOT to build. Constraints.
ARCHITECTURE.md     ← Folder structure. Module responsibilities.
MODELS.md           ← Data shapes. How data flows between modules.
API.md              ← External API. Endpoints. Error cases.
FEATURES.md         ← UI behaviour. Edge cases. UX rules.
STYLING.md          ← Visual design. Layout. CSS guidelines.
ACCEPTANCE.md             ← Acceptance checklist. Self-verification.
```

Each file answers a different question the agent will have as it builds:

> *"What am I building?"* → `PROJECT.md`
> *"How should I structure it?"* → `ARCHITECTURE.md`
> *"What does the data look like?"* → `MODELS.md`
> *"How do I call the API?"* → `API.md`
> *"What should this button do?"* → `FEATURES.md`
> *"Am I done?"* → `ACCEPTANCE.md`

If any of these questions go unanswered, the agent guesses.
When the agent guesses, you get inconsistency.

---

## 6. Why This Approach is Better

### vs. Pasting your requirements into a chat

| | Chat prompt | Context files |
|---|---|---|
| Reproducible | ❌ You retype every session | ✅ Files are always there |
| Shareable | ❌ Lives in your browser tab | ✅ Lives in your repo |
| Correctable | ❌ Hard to pinpoint what went wrong | ✅ Edit one file, re-run |
| Scalable | ❌ Context window fills up fast | ✅ Agent reads only what it needs |
| Auditable | ❌ No record of what you asked | ✅ Spec is version-controlled |

### vs. Writing all the code yourself

| | Writing it yourself | Agent + context files |
|---|---|---|
| Speed | Slow | Fast |
| Consistency | Depends on your focus | Enforced by spec |
| Learning | High (you figure it out) | Medium (you design, agent implements) |
| Control | Total | High — you own the spec |

The important point: **you do not give up control. You move your control upstream.**
Instead of controlling every line of code, you control the specification.
The agent handles implementation. You handle architecture and intent.

---

## 7. The Mental Model

Think of yourself as a **tech lead** and the agent as a **junior developer**.

A good tech lead does not sit next to the junior and dictate every line.
They write clear architecture docs, define the data models, specify the API
contracts, and set the acceptance criteria. Then they let the junior implement —
and verify the result against the spec when it's done.

That is exactly what this `.md` file system does:

```
You (tech lead)         →   Writes the .md files
Claude Code (junior)    →   Reads the .md files, builds the app
ACCEPTANCE.md                 →   The code review checklist
```

The better your `.md` files, the better the output — every time.

---

## 8. What You Learned by Doing This

By building CountrySearch with this approach, you practised:

- **Separation of concerns** — applied to documentation, not just code
- **Designing before building** — the spec exists before a single `.js` file
- **Data modelling** — defining shapes in `MODELS.md` before any class is written
- **API-first thinking** — `API.md` treats the external service as a contract
- **Acceptance-driven development** — `ACCEPTANCE.md` defines "done" before work starts

These are professional software engineering skills. The agent is a tool.
The thinking behind the `.md` files is the skill.

---

> *"The quality of your output is determined by the quality of your context."*
