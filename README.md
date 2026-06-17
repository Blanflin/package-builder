# Get Monie Productions — Website & Package Builder

Cinematic photography & videography site for Get Monie Productions (Acadiana / Lafayette / Opelousas), with an interactive **base + add-on package builder**.

Single-page site, no build step — just static `index.html` + assets.

## Structure

```
index.html              # entire site (HTML + Tailwind CDN + inline JS builder engine)
assets/
  logo/
    gm-monogram.jpg      # nav / footer mark
    gm-logo-full.jpg     # hero logo plaque
  gallery/               # 14 portfolio photos (web-optimized)
```

## The package builder

Four-step flow wired to the GET_MONIE pricing blueprint:

1. **Event** — Wedding · Portrait · Small Event · Commercial
2. **Service** — Photo + Video · Photography · Videography (auto-selected when only one applies)
3. **Base tier** — sets the starting price; each base includes shooting, consultation, capped edited deliverable, online delivery, and full editing
4. **Add-ons** — each shows its price and value copy; running total updates live

Wedding **presets** (Essential $2,400 · Signature $3,350 · Premium $4,500 · Luxury $6,050) one-click build a base + add-ons. "Request this package" drops a full itemized summary into the contact form.

To change a price, edit the `PRICING` object near the bottom of `index.html`.

## Contact

- Email: getmonieproductions@gmail.com · Phone: 337-356-2331
- Social: Facebook / Instagram (@qmoniep) / YouTube — linked in the footer
- The inquiry form posts to Formspree (`/f/xyzwqnyo`) via AJAX, with the built package summary + total attached as hidden fields.

## Optional polish

- Swap the logo images for transparent PNGs if you have them.
- Add a dedicated photo-request / sports order form (old repo used Formspree `/f/xzzrljbw`).

## Local preview

Open `index.html` in a browser, or run a static server:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.
