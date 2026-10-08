# NOCHF style reference

This document records the supplied color palette and design inspiration from the app dashboard. Color names and suggested website uses are proposed for this project. Hex codes and opacity values below are transcribed from the palette image unless marked approximate.

## Color palette

| Name | Suggested CSS token | Hex | Opacity | Suggested use |
| --- | --- | --- | --- | --- |
| White | `--color-white` | `#FFFFFF` | 100% | Cards, content surfaces, text on dark backgrounds |
| Deep Slate | `--color-deep-slate` | `#2C3E3E` | 100% | Main text, headings, strong icons |
| Mist Gray | `--color-mist-gray` | `#8EA3A3` | 100% | Supporting graphics, inactive icons, chart labels |
| Soft Stone | `--color-soft-stone` | `#E0E6E5` | 100% | Borders, dividers, chart grid lines |
| Slate | `--color-slate` | `#627575` | 100% | Section headings and secondary text |
| Teal | `--color-teal` | `#0B7979` | 100% | Selected navigation, primary accents, chart lines |
| Neutral Gray | `--color-neutral-gray` | `#808080` | 100% | Unselected states and neutral supporting elements |
| Black | `--color-black` | `#000000` | 100% | High-contrast details and numeric values |
| Pale Teal | `--color-pale-teal` | `#E4F2F1` | 100% | Soft accent backgrounds and highlighted areas |
| Slate Veil | `--color-slate-veil` | `#627575` | 20% | Subtle separators and translucent borders |
| Cloud | `--color-cloud` | `#F4F7F6` | 100% | Main slide and page background |
| Shadow | `--color-shadow` | `#000000` | 10% | Subtle shadows or overlays |
| Success Green | `--color-success-green` | `#2E8B75` | 100% | Positive results and success states |
| Coral | `--color-coral` | `#E55C55` | 100% | Errors, alerts, or points requiring attention |
| Mint Wash | `--color-mint-wash` | `#E8F5F1` | 100% | Positive-state backgrounds |
| Rose Wash | `--color-rose-wash` | `#FDECEB` | 100% | Alert-state backgrounds |

For the translucent colors, use `rgb(98 117 117 / 20%)` for Slate Veil and `rgb(0 0 0 / 10%)` for Shadow. Apply transparency to the color itself rather than setting opacity on an entire container and its contents.

## Named swatches in the reference

The palette also shows four named selection swatches. These mappings are suggested semantic associations; the image does not display hex values beside those swatches.

| Reference label | Proposed name | Reference value |
| --- | --- | --- |
| Selected | Teal | Use palette color `#0B7979` |
| Unselected | Neutral Gray | Use palette color `#808080` |
| Section Header | Slate | Use palette color `#627575` |
| Sys Line Gold | Systolic Gold | Approximately `#B98B43`; exact design value still needed |

Reserve Systolic Gold (`--color-systolic-gold`) for the blood-pressure accent and related data highlights. The approximate value is a visual estimate, not a confirmed palette hex code.

## App design inspiration

The dashboard screenshot shows a light, spacious interface with a pale background, white rounded cards, dark slate headings, muted section labels, and teal accents. Thin borders and simple outline icons keep the interface visually quiet. Gold distinguishes the blood-pressure card, while teal emphasizes the weight card, chart lines, and active Home navigation.

Suggested direction for the presentation website:

- Use Cloud as the slide background, Deep Slate for main text, and Slate for secondary text.
- Use Teal for the active slide button and primary accents, with White text where contrast is sufficient.
- Introduce White rounded cards when grouping people, research findings, designs, or test results.
- Use Soft Stone borders and restrained shadows to separate content.
- Keep typography simple, with large slide titles, clear section labels, and short supporting text.
- Use Font Awesome outline-style icons where available to echo the app's simple icon treatment.
- Keep the full slide names centered across the top, with previous and next buttons on either side.
- Preserve the full-screen presentation layout, horizontal transitions, and left/right keyboard controls.
- Use gold, green, and coral selectively when they convey a meaningful distinction.

Check text and control contrast when applying these colors; lighter palette colors are best suited to surfaces, borders, and decorative details.

## Implementation status

The selected app logo uses Cherry `#D7263D` for the heart and Graphite `#343A40` for the hand. Its final assets are `img/nochf-logo.svg` and `img/nochf-logo.png`; these colors supplement the existing interface palette.

The deck now uses the named palette tokens in `styles.css`: Cloud slide backgrounds, White navigation/footer surfaces and rounded prompt cards, Deep Slate headings, Slate supporting text, Teal selected navigation and accents, Pale Teal hover states, and Soft Stone borders. Other palette colors remain available for future content; the approximate Systolic Gold is reserved for blood-pressure graphics.

The current slide order is Welcome, CHF, Measurements, Personas, Integration, Design, User Test, Report, and Team. CHF presents the disease context, prevalence chart, mortality, and hospital costs; Measurements presents the daily weight and blood-pressure guidance, daily-monitoring evidence, and Withings evidence. Both open full research references in a scrollable dialog with readable 16px text.

The presentation grid is constrained to the viewport width, while the navigation labels scroll horizontally on smaller screens. The prevalence chart uses a fixed 120px plotting area and a shared zero baseline, so bar heights remain proportional at every viewport size.
