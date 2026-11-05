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

## Project rules
- Site-wide contact data and nav live in `src/lib/site.ts`; edit there, never inline in pages — keeps phones/address consistent.
- Admission form validation lives in `src/lib/admission.ts` (tested in `src/test/admission.test.tsx`) so rules stay testable apart from UI.
- Animations use the `motion` package via shared helpers in `src/components/site/motion.tsx`; root wraps in `MotionConfig reducedMotion="user"` to respect reduced-motion.
- Header/Footer are rendered once in `src/routes/__root.tsx`; pages render only their own sections.
- Keep school images as bundled imports from `src/assets`, not Lovable CDN pointers, so deployments on the user's VPS serve every image themselves.
