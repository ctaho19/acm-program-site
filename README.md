# Automated Control Monitoring: Google Sites mockup

A three-page mockup of the site for the ETB that onboards cyber controls (mapped to ISS requirements) into automated control monitoring. It's built to be rebuilt by hand in Google Sites, and every layout uses only blocks Sites supports.

## Preview

Open `index.html` in a browser. Click **Show Sites blocks** (bottom right) to label every section with the Sites block to use.

Text in `[brackets]` is placeholder content. Replace it with real details.

## Theme setup (Sites → Themes)

| Setting | Value |
| --- | --- |
| Theme | Simple (or any clean sans-serif theme) |
| Theme color | Custom `#004977` (Capital One navy) |
| Fonts | Roboto: Title 700, Heading 700, Subheading 500, Normal 400 |
| Header type | Title only (the navy hero is a section, not the header) |
| Logo | Upload the approved logo from the internal brand portal |
| Navigation | Top |

Red (`#D03027`) appears only in images (icons, diagram, and the short rule under each hero eyebrow), since Sites themes don't allow a second text accent color.

## Mapping mockup elements to Sites

- **Navy hero**: new section, then *Change background* to `sites-uploads/hero-bg.png` (Home) or `hero-bg-compact.png` (other pages), then a text box and a button.
- **Red rule under the eyebrow**: upload `sites-uploads/red-rule.png` as a small image directly under the eyebrow text.
- **Logo**: `sites-uploads/logo-placeholder.png` until the approved logo is available.
- **Avatars**: upload circle-cropped headshots above each name.
- **Document links**: text links; `doc.png` can sit beside them as a small image if wanted.
- **Gray sections**: section style *Emphasis 1*.
- **Columns**: drag text boxes and images side by side within a section.
- **Thin line above each column**: *Insert → Divider*.
- **Icons and diagram**: upload the PNGs from `sites-uploads/`.
- **FAQ**: *Insert → Collapsible text*.
- **Dashboard ↗ menu item**: *Pages → + → Add link* pointing to the QuickSight dashboard.

CSS marked `/* mockup only */` (hover/press states, the onboarding timeline rail, and the gray "Who · Your time" panels) has no Sites equivalent. The layout still reads fine without it.

## Page checklist

1. **Home**: hero, what is ACM
2. **For Control Owners**: hero with dashboard button, five onboarding steps with documents, FAQs
3. **Contacts**: points of contact, team channel, office hours

Publish with sharing limited to your organization.
