# OficialLM fork of Cloudflare OS

This repository is the **metalossAI** fork of [cloudflare/cloudflare-os](https://github.com/cloudflare/cloudflare-os).

OficialLM consumes it as a **git submodule** at `vendor/cloudflare-os` (pin fork commits intentionally). Do **not** treat long-lived harness patches as a dirty tree against upstream without this fork.

## Remotes

| Remote | URL |
|--------|-----|
| `origin` | `https://github.com/metalossAI/cloudflare-os.git` |
| `upstream` | `https://github.com/cloudflare/cloudflare-os.git` |

## Where OficialLM patches live

| Change | Location |
|--------|----------|
| Agent harness, sandbox/execute tools, Overseer/LOADER internals that must ship with the kernel | **This fork** (`packages/workshop-backend`, shared as needed) |
| Better Auth bridge, desk chrome, assistant-ui adapter, wrangler host, `AUTH_GATEKEEPERS=""` | OficialLM `apps/app` |
| CRM/protocol/payments ambient gatekeeper | OficialLM-owned `gatekeeper-oficiallm` (prefer outside this fork) |
| Google gatekeeper | Submodule package `@gadgets/gatekeeper-google` |
| Outlook / Microsoft Graph | OficialLM vendor + Better Auth Microsoft link |

Prefer OficialLM adapters over fork diffs when a Cap’n Web hook is enough — fewer conflicts on `merge upstream`.

## OficialLM patch list (maintained)

Document each fork-only diff here when landed:

1. *(none yet)* — baseline tracks upstream `main` for submodule bootstrap.

## Upstream merge cadence

Pull Cloudflare security/product updates regularly (at least when CF publishes fixes that affect Overseer, auth facets, or Cap’n Web validate):

```bash
# On this fork
git fetch upstream
git checkout main
git merge upstream/main
# resolve conflicts in patched files; run CF OS tests + build validate
pnpm install
pnpm --filter @gadgets/workshop-backend run build:worker   # Cap’n Web validate
# optional: pnpm test / lint
git push origin main

# In OficialLM
cd vendor/cloudflare-os && git fetch && git checkout <new-sha>
# commit submodule bump; pnpm install; rebuild validate; pnpm typecheck
```

## Non-goals in this fork

- Publishing `@gadgets/*` to npm (submodule bump is the update channel).
- Full vendor catalog for OficialLM (product wires **Google + Outlook only**).
- Parallel OS Login / PendingLogin as product auth (Better Auth owns identity).
