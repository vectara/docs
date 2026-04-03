---
id: role-based-access-control
title: Role-based access control
sidebar_label: Role-based access control
---

import CodePanel from '@site/src/theme/CodePanel';

Vectara uses Role-Based Access Control (RBAC) with four tiers of roles:
**API roles** (account-wide), **corpus roles** (per-corpus),
**agent roles** (per-agent), and **platform roles** (system-level). Each tier
controls access to different resources. A user's effective permissions are the
**union** of all their assigned roles.

## API roles (account-level)

API roles control what a user or app client can do across the entire account.

| Role | Description |
|------|-------------|
| `owner` | Full account control including deletion and ownership transfer. |
| `administrator` | Manages users, app clients, LLMs, encoders, agents, corpora, tools, and instructions. Cannot delete the account or manage billing. |
| `billing_administrator` | Views and edits billing activity only. |
| `corpus_administrator` | Creates, deletes, and resets corpora. Has full read/write access to all corpus data. |
| `corpus_developer` | Indexes, queries, and manages documents across all corpora. Cannot create or delete corpora. |
| `corpus_viewer` | Read-only query and document listing across all corpora. |
| `agent_administrator` | Full agent management: create, delete, replace agents, manage connectors, tool servers, and agent identity. |
| `agent_developer` | Updates agents, manages sessions, tools, instructions, and schedules. Cannot create or delete agents. |
| `agent_viewer` | Read-only access to agents, sessions, events, tools, instructions, and schedules. |
| `agent_user` | Can create agent sessions and send input to agents. |
| `pipeline_administrator` | Full pipeline management: create, update, delete, and trigger pipelines. |
| `pipeline_viewer` | Read-only access to pipelines and pipeline runs. |
| `viewer` | Read-only access across corpora, agents, and pipelines. Combines `corpus_viewer`, `agent_viewer`, and `pipeline_viewer`. |

### API role hierarchy

Higher roles inherit all permissions of lower roles in their domain:

- **Corpus domain:** `corpus_viewer` → `corpus_developer` → `corpus_administrator` → `administrator` → `owner`
- **Agent domain:** `agent_user` / `agent_viewer` → `agent_developer` → `agent_administrator` → `administrator` → `owner`
- **Pipeline domain:** `pipeline_viewer` → `pipeline_administrator` → `administrator` → `owner`

## Corpus roles (per-corpus)

Corpus roles control what a user or app client can do within a specific
corpus. They grant access to **one corpus only**, unlike API roles which
apply account-wide.

| Role | Description |
|------|-------------|
| `viewer` | Query, search, list documents, view metadata and query history. |
| `editor` | Everything in `viewer`, plus upload files, index documents, and delete documents. |
| `administrator` | Everything in `editor`, plus update corpus settings, reset the corpus, and replace filter attributes. |
| `owner` | Everything in `administrator`, plus delete the corpus. |

### Corpus role hierarchy

`viewer` → `editor` → `administrator` → `owner`

:::note
A API role like `corpus_developer` grants access to **all** corpora,
while a corpus role like `editor` grants access to **one specific** corpus.
:::

## Agent roles (per-agent)

Agent roles control what a user or app client can do with a specific agent.

| Role | Description |
|------|-------------|
| `agent_user` | Create sessions and send input (interact with the agent). |
| `agent_viewer` | Read-only access: view agent config, sessions, events, schedules, tools, instructions, and artifacts. |
| `agent_developer` | Everything in `agent_viewer` and `agent_user`, plus update the agent, manage sessions, create/update tools, instructions, and schedules. |
| `agent_administrator` | Everything in `agent_developer`, plus delete the agent, manage connectors, tool servers, and agent identity. |

### Agent role hierarchy

`agent_user` / `agent_viewer` → `agent_developer` → `agent_administrator`

Note that `agent_user` and `agent_viewer` are independent — a viewer can
inspect but not interact, while a user can interact but not inspect session
history.

## Platform roles (system-level)

Platform roles are for on-premises platform administration.

| Role | Description |
|------|-------------|
| `platform_admin` | Full platform control across all customers. Implies `administrator` API role. |
| `platform_viewer` | Read-only platform access. |

## How roles interact

A user's effective permissions come from the **union** of:
1. Their **API roles** (account-wide)
2. Their **corpus roles** (per-corpus grants)
3. Their **agent roles** (per-agent grants)

For example, a user with the `corpus_viewer` API role can query any
corpus. If they also have an `editor` corpus role on a specific corpus, they
can index documents into that corpus but not others.

### Baseline access

All authenticated users (regardless of role) can:
- List corpora, rerankers, LLMs, encoders, generation presets, table extractors, and hallucination correctors
- Manage their own API keys
- View their own user profile
- Use chat completions, factual consistency evaluation, and hallucination correction

## Best practices

- Assign only the roles a user needs (principle of least privilege).
- Use **corpus roles** for per-corpus access control instead of broad API roles.
- Use **agent roles** to give end users `agent_user` access without exposing agent configuration.
- Review role assignments when rotating keys or changing team structure.

## Common issues and solutions

| Symptom | Cause | Solution |
|---------|-------|----------|
| 403 Forbidden | Missing role for the operation | Check the endpoint's required roles in the API reference |
| Can query but not index | User has `viewer` corpus role | Upgrade to `editor` corpus role |
| Can't create agents | Missing `agent_administrator` API role | Assign the role to the user |
| Agent interaction fails | Missing `agent_user` role on the agent | Grant `agent_user` agent role |

## Example role assignments

| Scenario | Role type | Role | Scope |
|----------|-----------|------|-------|
| Frontend search app (read-only) | Corpus | `viewer` | Specific corpus |
| Backend service indexing data | Corpus | `editor` | Specific corpus |
| Agent chatbot for end users | Agent | `agent_user` | Specific agent |
| Developer building an agent | API | `agent_developer` | Account-wide |
| Admin managing all corpora | API | `corpus_administrator` | Account-wide |
| Platform operator | Platform | `platform_admin` | Platform-wide |
