<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep customer-facing catalogue categories as dedicated TanStack routes, because each category must open from the hamburger menu as its own indexable page.
- Keep shared pharmacy navigation, WhatsApp conversion actions, and footer in one site-shell component, so every page stays consistent.
