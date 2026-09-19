# 1App — Vue reference implementation

This Vue/Vite version is a visual/interaction port of the supplied React/Vercel 1App landing page.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Notes

- The active page is `src/App.vue`.
- The styling in `src/style.css` is based on the supplied React reference stylesheet.
- React-only Framer Motion behavior was translated to native Vue transitions/CSS and Vue reactivity.
- The existing `src/components/` files are retained as the original Vue work-in-progress, but the active page currently uses the parity implementation in `App.vue`.
