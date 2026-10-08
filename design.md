# Slide Design Notes

## Welcome

Explain the app and this project website to visitors with no prior knowledge of NoCHF.

Layout: a centered title-and-logo group, followed by the NoCHF introduction and its two bullets. Place the italicized site-context paragraph below the introduction and bullets, using 16px muted text and 32px of space above it. Keep the institution name bold within the italics. Left-align the body text. Omit the contact paragraph, eyebrow, separate academic information card, and completion deadline.

Current copy:

NoCHF is an app that aims to reduce avoidable hospitalizations and emergency room visits for people living with congestive heart failure by making it easier to track daily measurements by:

- Providing a simple, easy-to-use phone app designed for older adults.
- Ensuring daily blood pressure and weight measurements through accountability provided by a friend, family member, or caregiver.

*This site outlines the purpose and development of the NoCHF app, a student capstone project to meet partial fulfillment of the requirements for a Master of Liberal Arts degree from **Harvard University Extension School***

Display the institution's name as text only. Do not include a Harvard or Harvard Extension School logo; approval would be required before adding one.

### App logo

Selected: **Cherry & Graphite**, with a Cherry heart (`#D7263D`) and Graphite hand (`#343A40`). Keep the original heart and hand shapes. Final files are `img/nochf-logo.svg` and the transparent `img/nochf-logo.png` (1152 × 1024). Other options have been removed. This selection applies to the app logo; the website retains its existing palette.

## Background

Purpose: explain CHF and establish its human and financial scale. Keep project motivation, monitoring, product features, and design decisions for later slides. Prefer a small number of charts, figures, and cards over paragraphs. Numbered endnotes link to APA-formatted references at the end of this document.

### What is CHF? — draft introduction

Congestive heart failure (CHF) is heart failure accompanied by fluid buildup, often in the lungs, legs, ankles, or other tissues. Two common forms are **heart failure with reduced ejection fraction (HFrEF)**, in which the heart pumps weakly, and **heart failure with preserved ejection fraction (HFpEF)**, in which the heart is too stiff to fill properly.[^1][^2]

**Research retained; omitted from the slide:** **Advanced heart failure** is a severe stage in which symptoms persist despite treatment and may occur even at rest. CHF can progress to this stage, but fluid buildup alone does not mean the disease is advanced.[^17]

The slide introduction includes the CHF definition, two common forms, and this monitoring statement: **Daily weight checks are a key part of CHF self-care to detect fluid retention; blood pressure should also be tracked as directed by the healthcare team.**[^6]

Evidence: AHA guidance explicitly lists daily weight and blood pressure tracking; sudden weight gain may indicate fluid retention. The healthcare team selects what to track and individual reporting thresholds. This supports monitoring as part of self-care, not a claim that either measurement alone prevents hospitalization or substitutes for the other. The guidance does not prescribe daily BP checks for every patient.

### The scale of the problem

Slide summary: In the United States, an estimated **nearly 7 million adults** were living with heart failure based on 2017–2020 data, CHF was recorded as the underlying cause of **over 60,000 deaths in 2023**, and hospital admissions with CHF as the principal diagnosis accounted for an estimated **$14.5 billion in U.S. hospital costs in 2018**. This summary links to the slide’s existing references 3, 4, and 5, respectively.

HFSA's 2025 fact sheet reports approximately **6.7 million U.S. adults aged 20 or older** with heart failure, based on **2017–2020** prevalence data. It projects that number will rise to **8.7 million in 2030**, **10.3 million in 2040**, and **11.4 million in 2050**.[^3]

| Period | U.S. adults with heart failure, millions | Data type |
| --- | ---: | --- |
| 2017–2020 | 6.7 | Historical prevalence estimate |
| 2030 | 8.7 | Projection |
| 2040 | 10.3 | Projection |
| 2050 | 11.4 | Projection |

**Chart direction:** show the historical estimate and the 2030 and 2040 projections. Omit 2050 from the site because it is too far in advance; retain it above in the research bank. Distinguish projected values with dashed outlines. Do not label 6.7 million as an observed 2025 or 2026 count. These figures cover heart failure broadly, rather than only episodes involving active congestion.[^3]

The CDC reports that heart failure was mentioned on **452,573 U.S. death certificates in 2023**. This includes cases in which heart failure was a contributing cause, so it should not be described as the number of deaths caused solely by heart failure.[^4]

**Selected CHF-specific replacement:** **62,546 U.S. deaths with congestive heart failure coded as the underlying cause in 2023.** NCHS Control Total Table 1 reports this under ICD-10 I50.0, “Underlying cause.” The same row records 280,068 total record-axis mentions, including 217,522 secondary mentions; these are different measures and must not be added together. The selected count excludes other HF codes and is not an estimate of every death among people living with CHF. Keep the broader CDC statistic above for research only.[^18]

### Hospitalization is a major cost driver

**Selected hospital-cost card:** **$14.5 billion — Estimated U.S. hospital costs for admissions with CHF as the principal diagnosis in 2018.** Hospital costs only; excludes outpatient care and indirect costs. The study defined CHF using a broad set of heart-failure diagnosis codes.[^21]

**Calculation and scope:** Add the reported annual short-stay costs ($3,131,560,372) and longer-stay costs ($11,359,002,072): **$14,490,562,444**, rounded to **$14.5 billion**. The 2023 study used the 2018 National Inpatient Sample and weighted results nationally. It identified 1,177,910 admissions with CHF as the principal diagnosis. Admissions are not unique patients. Costs were estimated from hospital charges using cost-to-charge ratios; the figure is neither total national CHF spending nor an estimate of avoidable costs.[^21]

**Diagnostic limitation:** The study's CHF definition includes ICD-10-CM I11.0, I13.0, I13.2, I50.1, I50.20–I50.23, I50.30–I50.33, I50.40–I50.43, and I50.9, with DRG codes 291–293 also used. It does not isolate clinically confirmed fluid congestion or the mortality card's ICD-10 I50.0 category. Transfers from other acute care institutions were excluded. Keep the study-defined population qualification visible.[^21]

**Earlier national cost estimate (retained for research):** **$46 billion — Estimated total U.S. cost of heart failure in 2020.** The total is calculated by adding HFSA's reported **$32 billion in direct medical costs** and **$14 billion in indirect costs**. These are U.S. dollar costs for heart failure broadly, not a CHF-only estimate or a per-patient amount.[^20] Keep the year and population scope visible. This replaces the advanced-heart-failure cost figure on the slide; retain the earlier research below.

A 2025 scoping review of **16 studies** of medically managed **advanced heart failure** found mean annual costs of **Int$48,309 per patient** across included studies and **Int$65,749** among U.S. studies. Hospitalization was the main cost driver in most reports. The authors standardized costs to **2023 international dollars**, using inflation and purchasing-power adjustments.[^5]

**Possible visual:** one cost card labeled “Advanced heart failure · annual cost per patient · 2023 international dollars.” Do not present this as the average cost for every person with heart failure or as a current hospital bill; the studies covered advanced disease and used varied populations and cost methods.[^5]

### Proposed slide structure

Use two desktop columns: prevalence chart on the left, with mortality and cost cards side by side underneath; daily-monitoring and Withings cards stacked on the right. Preserve the wording. Place each card's numbered reference consistently in its top-right corner, keeping the full APA references below the layout.

Style the supporting Withings evidence as a pale teal card below the daily-monitoring card, with 54% and 44% side by side. Clearly state that the 44% applies only to continuing users. Keep the non-CHF population and the distinction between continued use and daily adherence visible in the card footer.

Give the daily-monitoring evidence card extra prominence with a solid teal background, white text, a large 74% statistic, and a stronger heading. Keep its study definition and reference visible. The displayed 74% rounds the study's 73.6% value to the nearest whole percent.

Include a compact evidence card: **Daily monitoring is hard to sustain for CHF patients — 73.6% of days, on average.** Ware et al. (2019) measured completion of the full daily set of weight, blood pressure, heart-rate, and symptom readings, over enrollment lasting up to one year.[^16] This is a program-specific adherence measure, not the percentage of patients who cannot measure or proof that no measurements occurred on other days.

Below the daily-monitoring card: In a study of 22,177 adults using **Withings connected blood pressure monitors**, only **54%** continued using their device around one year later. Among those continuing, **44%** took only occasional, scattered measurements—highlighting the difficulty of sustaining structured home monitoring.[^19] **This study was not specifically directed at CHF patients.** Continued use is not a measure of daily adherence.

Research context: reported barriers included technical issues and difficulty establishing a habit; technical support and social support also influenced adherence. Older participants had higher adherence in this study, so it should not be used to claim older age necessarily means poorer adherence.[^16]

1. **What is CHF?** Use the two-sentence definition at the top.
2. **Lives affected:** show the 6.7 million estimate and 2030–2040 projections as a chart.
3. **Mortality context:** use 62,546 deaths with CHF (I50.0) coded as the underlying cause in 2023, with the coding qualification and full NCHS reference.
4. **Financial cost:** use the $14.5 billion hospital-cost card for 2018, with the hospital-only scope and study coding qualification.[^21]

Every statistical card or figure should carry a linked endnote, its population, and its relevant year. Create original charts from the cited values rather than copying figures from the sources.

### Additional research retained for later slide decisions

The material below is intentionally preserved even though it is not all selected for the Background slide. It can inform the Purpose, Personas, Design, or Report slides as the deck develops.

#### Two forms of heart failure

| Form | Plain-language heading | Supporting explanation |
| --- | --- | --- |
| HFrEF | Weakened pumping | The left ventricle contracts less effectively and ejects a smaller proportion of its blood with each beat. |
| HFpEF | Difficulty filling | The left ventricle is stiff and does not relax properly between beats, making filling difficult despite a preserved ejection fraction. |

These are simplified explanations of two common forms of left-sided heart failure.[^2] The June 2026 international consensus also recognizes improved EF and moves away from rigid ejection-fraction thresholds for defining heart failure.[^10] Left-sided, right-sided, and biventricular failure describe which chambers are affected, a different distinction from HFrEF versus HFpEF.[^2]

#### Candidate explanatory points

- **Fluid retention can show up on the scale.** Rapid weight gain may reflect retained fluid and can be a warning of worsening heart failure.[^6]
- **Small changes can be difficult to notice.** Symptoms may worsen gradually, making changes in a person's usual condition less obvious.[^6]
- **Heart failure affects everyday activities.** Breathlessness, fatigue, and swelling can make routine tasks more difficult; less active older adults may show tiredness or confusion without obvious breathlessness.[^7]
- **Older adults often face several risk factors.** Heart failure risk increases with age and with conditions such as coronary heart disease, high blood pressure, diabetes, and chronic kidney disease.[^8]
- **Monitoring works within a personal care plan.** Weight, blood pressure, symptoms, and observations from those assisting the patient should inform when to contact the care team.[^6]
- **Home readings are part of a larger clinical picture.** Diagnosing heart failure requires medical history, examination, and tests such as heart imaging and blood tests.[^9]

#### Notes supporting accurate wording

- **What “congestive” means:** CHF refers to heart failure accompanied by fluid buildup. Heart failure does not mean the heart has stopped beating; congestion can involve the lungs, legs, or other tissues.[^1]
- **What ejection fraction measures:** EF is the proportion of blood in the left ventricle pumped out with each beat. It is assessed with imaging, commonly an echocardiogram, rather than a scale or blood pressure cuff.[^9] A preserved EF does not rule out heart failure, and EF alone does not establish the diagnosis.[^1]
- **Why distinguish weight from blood pressure:** weight changes can indicate retained fluid; blood pressure adds another observation for the care team. Neither is a standalone test for congestion. AHA guidance emphasizes symptoms and individualized reporting instructions alongside measurements.[^6]

#### The project motivation

Kohane's account of helping his 90-year-old mother manage heart failure connects daily weight readings, an agreed treatment plan, and family involvement. It also stresses the limits of automation and the importance of human support. Use this as the project's origin story, not as clinical proof that an app prevents admissions.[^11]

**Possible visual:** a small origin-story card linking to the article, alongside a patient → measurement → supporter → care-team diagram. The diagram would represent the proposed workflow, not a tested intervention from the article.

### Measurements introduction — CHF focus

For people with **CHF**, daily weight checks can reveal **fluid buildup**. This extra fluid collects in the lungs, legs, or abdomen and may signal worsening heart failure.[^6][^24]

Blood pressure is another important signal in **CHF**: high pressure increases the resistance the heart must pump against, adding to its workload.[^27] Low pressure can also accompany heart failure or result from heart-failure medicines.[^28][^25]

**Early intervention** starts with reporting sudden weight gain or blood-pressure changes outside the care team’s agreed range, so the team can adjust treatment promptly.[^6][^29] In particular, responding to fluid-related weight gain—even before the person feels unwell—may help avoid hospitalization for worsening heart failure.[^30]

For many people living with CHF, daily measurements become part of a routine, but others find them difficult to sustain. In one heart-failure study, patients completed all daily readings on about 74% of days,[^16] while a separate study of connected blood-pressure monitor users—not specifically people with CHF—found that only 54% continued using their device around a year later, and 44% of those continuing took only occasional measurements.[^19]

**We believe a simple, easy-to-use app, combined with support and accountability from a caregiver, can help people take measurements more consistently.**

Research interpretation: blood pressure is a contextual monitoring signal, not a direct measurement of fluid congestion or a standalone diagnostic test. A rising BP is not required for deterioration; low readings also have multiple possible causes. The hospitalization statement is specifically supported by AHA advice on promptly reporting weight changes and clinician-directed treatment adjustments, not proof that NoCHF or BP monitoring alone prevents admission.


#### Why measure weight and blood pressure?

The American Heart Association recommends tracking daily weight and blood pressure alongside symptoms. Rapid weight gain can reflect fluid retention, but the person's care team should define which changes require action. Breathlessness, swelling, and changes noticed by family also matter.[^6]

**Project implication:** readings should support a personalized action plan, with a clear route to contact the care team. Treat daily measurements as repeated observations rather than “continuous monitoring.” Do not imply that weight and blood pressure alone diagnose deterioration or that every admission has a detectable warning pattern.

**Possible visual:** three compact cards—“Daily measurements,” “Personalized thresholds,” and “A clear next step”—rather than a universal alarm cutoff.

#### Missing measurements may themselves deserve attention

Haynes et al.'s secondary analysis included **538 participants**, with a mean age of **70.9 years**. Each additional day of weight-monitoring adherence in a week was associated with a lower hospitalization rate the following week (incidence rate ratio **0.89**, 95% CI **0.86–0.91**). The authors caution that adherence may reflect health status rather than cause better outcomes.[^12]

**Project implication:** consider a supportive check-in when measurements are missed rather than assuming noncompliance. This supports testing NoCHF's shared-accountability concept; it does not establish that reminders prevent hospitalization.

**Possible visual:** a conceptual measurement calendar with a missed-day check-in. Label example dates and readings as illustrative; avoid a card claiming that one extra measurement prevents 11% of admissions.

#### Remote monitoring evidence is encouraging, but outcomes differ

Umeh et al. pooled **38 randomized trials with 14,993 participants**. All-cause mortality and all-cause hospitalization were lower with telemonitoring, but the overall HF-hospitalization result did **not** reach statistical significance (RR **0.88**, 95% CI **0.77–1.01**). The subgroup monitored for at least 12 months did show lower HF hospitalization.[^13]

De Lathauwer et al. analyzed **41 randomized studies with 16,312 participants**. Their pooled estimates were:[^14]

| Outcome | Odds ratio | 95% confidence interval |
| --- | ---: | --- |
| First HF hospitalization | 0.78 | 0.70–0.87 |
| Mortality | 0.81 | 0.69–0.95 |
| All-cause hospitalization | 0.90 | 0.78–1.05 |
| Emergency department visit | 1.01 | 0.81–1.26 |

The latter two outcomes were not statistically significant. Education and self-management components were associated with stronger HF-hospitalization results, but comparisons between program components do not isolate their causal effects.[^14]

**Possible visual:** a compact forest plot with a no-effect line at 1 and all four outcomes. An OR of 0.78 means 22% lower odds, not 22 percentage points fewer admissions. These are effects of studied programs, not measured effects of NoCHF; do not add overlapping reviews' participant totals together.

#### Simplicity and assistance are substantive design requirements

Lam et al., using **2018** U.S. survey data, estimated that **38% of adults aged 65+** were not ready for video visits because of disability or technology inexperience. This is historical evidence about video telemedicine, not a current estimate of inability to use NoCHF or smartphones.[^15]

**Project implications to test:** large readable text, few steps per measurement, clear confirmation that a reading was saved, assistance with setup, and patient-controlled sharing with a trusted person. These are design hypotheses motivated by access barriers, not clinical outcomes proven by the study.

**Possible visual:** three illustrated design cards—“Easy to read,” “Easy to complete,” and “Support when needed.”

## Purpose

Removed from the site's slide sequence. Retain this section for future research and planning notes.

## Personas

### 1.1. Persona 1. Independent Living Patient Mary Johnson

**80, Female, Retired Elementary School Teacher**

**Motto:** “Life is better when shared with family and friends.”

![Mary Johnson gardening among flowers.](img/persona-chf-user.png)

*Figure 2. Persona 1. Image was generated by ChatGPT*

#### Bio

Mary is a retired teacher who lives alone in her own home. She was diagnosed with congestive heart failure (CHF) four years ago and manages her condition with daily medication as well as recording her weight and eating habits in her CHF journal. Mary values her independence and wants to remain in her own home, but living at home independently has become more challenging and she quickly admits that her memory is not what it used to be.

#### Business Domain

- Lives alone and has congestive heart failure.
- Started managing her health using a Health Diary provided by her cardiologist.
- Prefers simple technology and avoids complicated apps.
- Has an old iPhone that no longer receives updates.

#### Other People Say

**What her family says:** “Mary wants to stay independent, but we're growing anxious about her ability to keep up with her self-care. We live a state away and aren't sure how to talk with her about when she might need help at home or how we could afford it.”

**What her neighbour says:** “Mary is always friendly and enjoys taking care of her garden. She likes doing things on her own and rarely asks anyone for help.”

#### Grokkability

- A Master Gardener who volunteers at the local high school from 9:00 AM to 3:00 PM on Tuesdays and Thursdays.
- Talks to her eight-year-old granddaughter on Sunday afternoons.
- Regularly talks to her neighbors about the weather.

#### Pet Peeve

- Becomes frustrated when people tell her technology is simple but it doesn't make sense to her.
- Gets discouraged by her time being taken up by tasks that used to be easy for her.

### 1.1. Persona 2. Family Caregiver Emily Johnson

**48, Female, Program Manager**

**Motto:** “Family means showing up when you're needed.”

![Emily Johnson working at her laptop with her mother on a video call nearby.](img/persona-assistor.png)

*Figure 3. Persona 2. Image was generated by ChatGPT*

#### Bio

Emily is a Program Manager who is always trying to stay one step ahead in her busy life. She lives with her husband and teenage son and values spending time with her family. The family moved again for her and her husband’s new jobs and now lives in a city without family nearby, where they are excited to make new friends.

Over the past few years, she has gradually taken on more responsibility for helping her elderly mother manage her congestive heart failure. While her mother lives independently, Emily is becoming anxious and uncertain about whether her mother is taking adequate care of herself.

#### Business Domain

- Works as a Program Manager because she is organized and good at juggling many different tasks.
- Has to balance work, family life, and now some caregiving responsibilities for her mother, who lives one time zone away.
- Bought herself the new iPhone 17, giving her son the iPhone 15.

#### Other People Say

**What her mother says:** “Emily never makes me feel like I'm a burden. But she's a little too much like I was at her age—always racing around.”

**What her sister says:** “Emily is the person everyone relies on. She somehow manages to take care of everyone, and I can always call her and speak openly and honestly.”

#### Grokkability

- Enjoys spending time with her family and close friends and planning trips and family gatherings.
- Reads books and listens to podcasts during her commute.
- Uses technology every day but values simplicity over flashy features.

#### Pet Peeve

- Disorganized information and last-minute changes to carefully made plans.
- Having to repeat the same task multiple times.

### Why the older-adult focus matters

The same HFSA fact sheet reports these age-specific estimates from **NHANES 2021–2023**:[^3]

| Age group | Heart failure prevalence |
| --- | ---: |
| 20–39 | 0.14% |
| 40–59 | 1.95% |
| 60–69 | 5.93% |
| 70–79 | 8.23% |
| 80+ | 12.58% |

**Possible visual:** age-group bars, with a zero baseline and the survey period in the caption. These describe prevalence, not each age group's share of all cases.

## Design

Make daily measurements easy to understand and keep up with.

### Devices

- **Make taking a weight or blood pressure measurement easy.** NoCHF integrates with Wi-Fi-enabled scales and blood pressure cuffs. Once the devices are set up, the person living with CHF only needs to step on the scale or put on the cuff and push a button to take a measurement; readings sync automatically.

### The app

- **Make increases easy to spot.** When the person living with CHF or their assistor opens the app, they immediately *see any missed measurements* and any increases compared with earlier readings.
- **Make Technology Easy:** Design for older adults with large text, easy navigation, and a simple app that does only what's needed.
- **Create Reports:** Create a report that may be shared with your doctor during regular or emergency visits. View an example of the report [here](report.html).

The slide places the home screen design (`img/app-home-transparent.png`) to the right of these points on desktop and below them on smaller screens, with a rounded 2px mist-gray border around the image.

## Devices

Tagline: The Devices.

NoCHF is designed to grow with additional device integrations. Withings is the initial integration for weight and blood-pressure measurements. Devices are set up through the Withings app; with the user’s permission, NoCHF’s backend retrieves readings from their Withings account.

Both devices support Wi-Fi, allowing readings to sync after a measurement. Once a user connects their Withings account, NoCHF can subscribe to measurement updates and retrieve new readings automatically for display in the app. Withings typically delivers update notifications within two minutes of receiving the data; device syncing and app refresh can add time. [How automatic updates work](https://developer.withings.com/developer-guide/v3/data-api/notifications/notification-overview/).

- **Withings Body Smart — connected scale:** Records weight. Withings specifies **weight precision of 50 g (about 0.1 lb)**. [Weight precision specification](https://media.withings.com/press/press-releases/body-smart/20230418-body-smart-us-en.pdf) · [Product details](https://www.withings.com/en-us/collections/body-smart).
- **Withings BPM Connect — upper-arm blood-pressure cuff:** Measures systolic and diastolic blood pressure and heart rate. Withings specifies **pressure-sensor accuracy of ±3 mmHg or 2% of the reading** and pulse accuracy of ±5%. Blood-pressure measurement performance is also clinically validated. [Accuracy specifications](https://media.withings.com/kits/guides/2020/bpm-connect/qig_bpm_connect_en-fr-de.pdf#page=21) · [Product details](https://www.withings.com/en-us/products/bpm-connect).

[Withings integration documentation](https://developer.withings.com/developer-guide/v3/integration-guide/public-health-data-api/public-health-data-api-overview/).

Architecture source: `../smartweight-backend/Documentation/architecture_doc.md`, sections on integration modules and Withings synchronization. Body Smart appears in API examples; BPM Connect is a provisional model selection pending confirmation.

Product photos are stored in `assets/integrations/`, with sources and reuse status recorded in that folder’s README.

### Devices

#### Withings BPM Pro 2 (WPM07): Blood pressure accuracy validation

**Article:** [PubMed record and original abstract — PMID 41777561](https://pubmed.ncbi.nlm.nih.gov/41777561/)

**Abstract summary (paraphrased):** The study tested an upper-arm home blood pressure monitor against the ISO 81060-2:2018/AMD 2:2024 standard. Investigators compared device readings with mercury-reference measurements using a same-arm sequential protocol. Of 89 participants, 87 were included in the analysis. Mean device–reference differences were 1.0 ± 4.9 mmHg for systolic pressure and 0.6 ± 4.1 mmHg for diastolic pressure. Both ISO accuracy criteria were satisfied. The authors concluded that the device met the standard for adult home blood pressure measurement.

**Relevance:** Evidence of measurement accuracy in the tested adult population; this study does not establish NoCHF integration compatibility or improved CHF outcomes.

**APA reference:** Zelveian, P., Hakobyan, Z., Topouchian, J., Avagyan, A., Gharibyan, H., & Asmar, R. (2026). Accuracy of the Withings BPM Pro 2 (WPM07) device for self-blood pressure measurements in the general populations according to the International Organization for Standardization Universal Standard (ISO 81060-2:2018/AMD 2:2024) protocol. *Vascular Health and Risk Management, 22*, Article 585947. [https://doi.org/10.2147/VHRM.S585947](https://doi.org/10.2147/VHRM.S585947).

#### Connected blood pressure monitors: Sustained user engagement

**Article:** [PubMed record and original abstract — PMID 39315540](https://pubmed.ncbi.nlm.nih.gov/39315540/)

**Abstract summary (paraphrased):** This multinational cohort study examined 22,177 adults who first used a connected blood pressure monitor between July 2019 and March 2021. Of these users, 11,869 (54%) were still using the device around one year later. Researchers assessed measurement timing against a benchmark of at least 12 readings within three consecutive days, at least once every 90 days. Among persistent users, 44% took only occasional, sparse measurements, while 13% met the timing criterion for at least nine cumulative months of follow-up. The authors concluded that real-world measurement schedules often differed from recommendations, despite connected devices collecting substantial amounts of data.

**Relevance:** This suggests that access to a connected monitor alone may not ensure sustained, structured monitoring, supporting NoCHF's focus on accountability and ease of use. The participants were not a CHF-specific population, and the 54% figure measures continued device use around one year—not adherence to daily measurements. This study does not test whether NoCHF improves adherence or clinical outcomes.

**APA reference:** Rech, J.-S., Postel-Vinay, N., Vercamer, V., de Villèle, P., & Steichen, O. (2025). User engagement with home blood pressure monitoring: A multinational cohort using real-world data collected with a connected device. *Journal of Hypertension, 43*(1), 90–97. [https://doi.org/10.1097/HJH.0000000000003861](https://doi.org/10.1097/HJH.0000000000003861).

## User Test Feedback

## Paper

The paper will be provided at the end of the project.

### Printable patient measurements prototype

The screen-only **BP: Bars / BP: Lines** toggle starts in bars mode and switches to two solid daily-average lines: systolic with round points and diastolic with square points. Both retain labels and connect across missing days without adding markers. A legend appears in line mode; the selected chart view is used when printing.

Separate `report.html` page linked from the Report slide. US Letter landscape with half-inch margins, 30 days, and vertically stacked charts sharing daily columns. The first draft uses explicitly fictional patient details and readings for September 1-30, 2026.

- Blood pressure: one floating vertical bar per day, from daily-average diastolic to daily-average systolic. Label the average systolic above the bar and average diastolic below, rounded to whole mmHg. The sample averages two readings per day.
- Weight: daily-average line in kilograms, with the average labeled above each point to one decimal place. The sample contains one or two readings on measured days.
- Individual reading lists and timestamps are omitted; the chart space is used for the daily averages.
- Left-aligned summaries show Period Avg and Total Readings followed by "over X days" (days with at least one reading for that measurement). Period averages use all individual readings. The sample has 52 BP readings over 26 days and 35 weight readings over 26 days.
- Missing September 12-14 on both charts, September 23 for BP only, and September 6 for weight only. Retain all 30 date columns and omit missing bars, dots, and value labels. The weight line connects recorded days with straight lines across missing days. Missing days are excluded from averages and counts.
- Print / Save as PDF uses the browser dialog. Controls are hidden in print. There are no clinical target ranges in the fictional prototype.
- PDF review must check a single 11 x 8.5 inch page, readable labels, and sharp charts. This prototype contains no live data connection.
- Header: centered reporting dates with centered patient name and date of birth underneath, enlarged to 15px. The italic note below reads "Measurements represent an average for the day." No reading-times field, report title, or sample banner. Small NoCHF branding sits at the bottom-left, followed by "This report was generated by the NoCHF app."

## Team

# Background research endnotes (APA 7)

[^21]: Zilberberg, M. D., Nathanson, B. H., Sulham, K., Mohr, J. F., Goodwin, M. M., & Shorr, A. F. (2023). Descriptive epidemiology and outcomes of patients with short stay hospitalizations for the treatment of congestive heart failure in the US. *ClinicoEconomics and Outcomes Research, 15*, 139–149. [https://doi.org/10.2147/CEOR.S400882](https://doi.org/10.2147/CEOR.S400882). CHF slide reference 5 corresponds to this entry.

[^20]: Heart Failure Society of America. (2025, September 22). *Cardiology experts warn of growing heart failure epidemic and soaring costs in new HF Stats 2025 report*. [Read the report announcement](https://hfsa.org/cardiology-experts-warn-growing-heart-failure-epidemic-and-soaring-costs-new-hf-stats-2025-report). The $46 billion total is the sum of the two reported cost components.

[^19]: Rech, J.-S., Postel-Vinay, N., Vercamer, V., de Villèle, P., & Steichen, O. (2025). User engagement with home blood pressure monitoring: A multinational cohort using real-world data collected with a connected device. *Journal of Hypertension, 43*(1), 90–97. [https://doi.org/10.1097/HJH.0000000000003861](https://doi.org/10.1097/HJH.0000000000003861). On the Measurements slide this is reference 14.

[^17]: American Heart Association. (2025a, June 19). *Advanced heart failure*. [Read the explanation](https://www.heart.org/en/health-topics/heart-failure/living-with-heart-failure-and-managing-advanced-hf/advanced-heart-failure).

[^18]: National Center for Health Statistics. (2026, June 2). *Multiple cause of death mortality file: Control total table 1, United States, 2023* [Data table]. Centers for Disease Control and Prevention. [Read the table](https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Dataset_Documentation/DVS/mortality/Multiple-Cause-of-Death-File-Control-Total-Table-2023.pdf). Use row I50.0, Underlying cause column. The date is the table's printed generation date, not the year of deaths. Verified against the downloaded table; the separate 2023 file documentation identifies I50.0 as congestive heart failure. CHF slide reference 4 corresponds to this research-bank entry.

[^16]: Ware, P., Dorai, M., Ross, H. J., Cafazzo, J. A., Laporte, A., Boodoo, C., & Seto, E. (2019). Patient adherence to a mobile phone–based heart failure telemonitoring program: A longitudinal mixed-methods study. *JMIR mHealth and uHealth, 7*(2), Article e13259. [https://doi.org/10.2196/13259](https://doi.org/10.2196/13259). On the Measurements slide this is reference 13; research-bank numbering is independent.

These endnotes retain research-bank numbering. The site uses first-appearance order: CHF: 1. CHF overview; 2. HF types; 3. prevalence; 4. mortality; 5. hospital costs. Measurements: 6. monitoring guidance; 7. heart failure signs and symptoms; 8. high BP and heart workload; 9. low BP; 10. heart failure medications; 11. ESC self-care; 12. early response to weight changes; 13. daily monitoring; 14. Withings engagement. Bibliographic entries use APA style.

[^1]: American Heart Association. (n.d.). *Heart failure explained: Understanding symptoms, causes, diagnosis and treatment*. Retrieved September 24, 2026, from [the AHA overview](https://www.heart.org/en/health-topics/heart-failure/heart-failure-explained).

[^2]: American Heart Association. (2025, May 21). *Types of heart failure*. [Read the explanation](https://www.heart.org/en/health-topics/heart-failure/what-is-heart-failure/types-of-heart-failure).

[^3]: Heart Failure Society of America. (2025). *Incidence, prevalence, and lifetime risk estimates of heart failure: HFSTATS sheet, 2025 update* [Fact sheet]. [Read the fact sheet](https://hfstats.org/wp-content/uploads/2025/11/HFSTATS-Fact-Sheet-2025_Incidence-Prevalence.pdf). Data locations: p. 1, Table 1 and Figure 2; the fact sheet identifies the 2025 HF Stats report by Fonarow et al. as its underlying source.

[^4]: Centers for Disease Control and Prevention. (2024, May 15). *About heart failure*. [Read the CDC page](https://www.cdc.gov/heart-disease/about/heart-failure.html). The page currently reports the 2023 death-certificate count; checked September 24, 2026.

[^5]: Goldraich, L. A., do Nascimento, D. M., Santos, L. P., Lemos, D. M., Marcolino, M. A. Z., Clausell, N., & Etges, A. P. B. da S. (2025). Costs of medical treatment of advanced heart failure: A scoping review. *Systematic Reviews, 14*, Article 215. [https://doi.org/10.1186/s13643-025-02952-7](https://doi.org/10.1186/s13643-025-02952-7).

[^6]: American Heart Association. (2025, May 29). *Managing heart failure symptoms*. [Read the guidance](https://www.heart.org/en/health-topics/heart-failure/warning-signs-of-heart-failure/managing-heart-failure-symptoms).

[^7]: National Heart, Lung, and Blood Institute. (2022c, March 24). *Heart failure: Symptoms*. National Institutes of Health. [Read the symptom overview](https://www.nhlbi.nih.gov/health/heart-failure/symptoms).

[^8]: National Heart, Lung, and Blood Institute. (2022a, March 24). *Heart failure: Causes and risk factors*. National Institutes of Health. [Read the causes and risk factors](https://www.nhlbi.nih.gov/health/heart-failure/causes).

[^9]: National Heart, Lung, and Blood Institute. (2022b, March 24). *Heart failure: Diagnosis*. National Institutes of Health. [Read the diagnostic overview](https://www.nhlbi.nih.gov/health/heart-failure/diagnosis).

[^10]: American Heart Association. (2026, June 29). *Global experts update heart failure definition to improve prevention, diagnosis and care* [Press release]. [Read the consensus announcement](https://newsroom.heart.org/news/global-experts-update-heart-failure-definition-to-improve-prevention-diagnosis-and-care).

[^11]: Kohane, I. (2017, June 16). *What my 90-year-old mom taught me about the future of AI in health care*. WBUR. [Read the article](https://www.wbur.org/news/2017/06/16/managing-mom-weight-algorithm).

[^12]: Haynes, S. C., Tancredi, D. J., Tong, K., Hoch, J. S., Ong, M. K., Ganiats, T. G., Evangelista, L. S., Black, J. T., Auerbach, A., & Romano, P. S. (2020). Association of adherence to weight telemonitoring with health care use and death: A secondary analysis of a randomized clinical trial. *JAMA Network Open, 3*(7), Article e2010174. [https://doi.org/10.1001/jamanetworkopen.2020.10174](https://doi.org/10.1001/jamanetworkopen.2020.10174).

[^13]: Umeh, C. A., Torbela, A., Saigal, S., Kaur, H., Kazourra, S., Gupta, R., & Shah, S. (2022). Telemonitoring in heart failure patients: Systematic review and meta-analysis of randomized controlled trials. *World Journal of Cardiology, 14*(12), 640–656. [https://doi.org/10.4330/wjc.v14.i12.640](https://doi.org/10.4330/wjc.v14.i12.640).

[^14]: De Lathauwer, I. L. J., Nieuwenhuys, W. W., Hafkamp, F., Regis, M., Brouwers, R. W. M., Funk, M., & Kemps, H. M. C. (2025). Remote patient monitoring in heart failure: A comprehensive meta-analysis of effective programme components for hospitalization and mortality reduction. *European Journal of Heart Failure, 27*(9), 1670–1685. [https://doi.org/10.1002/ejhf.3568](https://doi.org/10.1002/ejhf.3568).

[^15]: Lam, K., Lu, A. D., Shi, Y., & Covinsky, K. E. (2020). Assessing telemedicine unreadiness among older adults in the United States during the COVID-19 pandemic. *JAMA Internal Medicine, 180*(10), 1389–1391. [https://doi.org/10.1001/jamainternmed.2020.2671](https://doi.org/10.1001/jamainternmed.2020.2671).

[^22]: American Heart Association. (2025, August 14). *Home blood pressure monitoring*. https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/monitoring-your-blood-pressure-at-home. Retained research; not currently cited on the slide.

[^23]: National Institute of Diabetes and Digestive and Kidney Diseases. (2016, October). *Managing chronic kidney disease*. https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/managing. Retained research; not currently cited on the slide.

[^24]: American Heart Association. (2025, May 29). *Heart failure signs and symptoms*. https://www.heart.org/en/health-topics/heart-failure/warning-signs-of-heart-failure. Measurements slide reference 7.

[^25]: American Heart Association. (2025, June 17). *Medications used to treat heart failure*. https://www.heart.org/en/health-topics/heart-failure/treatment-options-for-heart-failure/medications-used-to-treat-heart-failure. Measurements slide reference 10.

[^26]: National Heart, Lung, and Blood Institute. (2022, March 24). *Heart failure: Treatment*. https://www.nhlbi.nih.gov/health/heart-failure/treatment. Retained research; not currently cited on the slide.

[^27]: American Heart Association. (2024, May 9). *How high blood pressure can lead to heart failure*. https://www.heart.org/en/health-topics/high-blood-pressure/health-threats-from-high-blood-pressure/how-high-blood-pressure-can-lead-to-heart-failure. Measurements slide reference 8.

[^28]: American Heart Association. (2024, May 6). *Low blood pressure: When blood pressure is too low*. https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/low-blood-pressure-when-blood-pressure-is-too-low. Measurements slide reference 9.

[^29]: Heart Failure Association of the European Society of Cardiology. (n.d.). *What you can do: Self-care for heart failure*. https://www.heartfailurematters.org/what-you-can-do/. Measurements slide reference 11.

[^30]: American Heart Association. (2025, June 16). *Lifestyle changes for heart failure*. https://www.heart.org/en/health-topics/heart-failure/treatment-options-for-heart-failure/lifestyle-changes-for-heart-failure. Measurements slide reference 12.
