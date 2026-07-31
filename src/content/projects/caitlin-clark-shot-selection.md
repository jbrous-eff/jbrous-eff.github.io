---
title: "Caitlin Clark's Signature Shot Is Killing Her Efficiency"
description: "A shot-by-shot breakdown of catch-and-shoot vs. pull-up threes shows her efficiency problem is about shot selection, not shooting."
date: 2026-07-30
tags: ["data", "wnba", "basketball"]
featured: true
draft: false
---

*A shot-level analysis of creation type, distance, and expected value, 2024-2026*

## Introduction

The gap between how much is written about Caitlin Clark and how much of it is quantified may be the widest in American sports. The skeptic case cites her topline percentages, 43% from the field and 34% from three on heavy volume this season, and concludes she is an inefficient shooter. The defense cites her range and concludes the critics do not understand what they are watching. Both camps are arguing from aggregates that pool fundamentally different shots, which is why the argument never resolves.

This piece separates the shots. I located every jump shot of Clark's three professional regular seasons using ESPN play-by-play coordinates, classified each by creation type (catch-and-shoot versus off the dribble), and benchmarked her against every other guard in the league under identical filters. Three findings follow.

First, Clark is above the league-guard baseline on every shot type she takes, including the ones that look bad. Second, her inefficiency is allocative rather than mechanical: 58% of her three-point attempts come off the dribble, against roughly 21% for the league's guards. Third, the expected-value gap between her two shot types is 0.90 points per attempt, which makes a normal shot mix worth roughly 2.6 points per game before any defensive adjustment. The remainder of the piece presents the data behind each claim and then considers, and largely rejects, the available defenses of the current mix.

## Data and methodology

Shot data come from ESPN play-by-play via the wehoop package (sportsdataverse), covering the 2024 through 2026 regular seasons. Shot coordinates were calibrated against ESPN's stated shot distances and carry an average error of 0.3 feet.

Clark's 1,163 field-goal attempts were filtered to isolate jump shots: attempts tagged as layups, dunks, drives, floaters, or tips were removed, along with all attempts inside 10 feet and five end-of-quarter heaves (prayers, not decisions, and they belong in no one's shooting sample). This leaves 775 jump shots, of which 657 are three-point attempts.

Creation type follows ESPN's own play descriptors: attempts tagged pull-up or step-back are classified as off the dribble; untagged jump shots are classified as catch-and-shoot. The untagged population may include some unlabeled off-dribble attempts, which biases the measured gap between the two categories toward zero. The true gap is therefore at least as large as reported.

The baseline sample applies identical seasons, tags, and filters to every other guard in the league, Clark excluded: 17,593 catch-and-shoot threes and 4,611 pull-up threes. ESPN's pull-up tag plausibly skews toward the most identifiable pull-ups, but because the same tagging governs both samples, the comparison is robust to shifts in absolute levels.

## Results

Clark's three-point attempts divide as follows.

| Three-point jump shots | Attempts | FG% | Points per shot |
| --- | --- | --- | --- |
| Catch-and-shoot | 279 | .503 | 1.51 |
| Off the dribble | 378 | .204 | 0.61 |

Distance barely moves the catch-and-shoot number: .51 from 22 to 26 feet (132 attempts) and .50 beyond 27 feet (149 attempts). The off-the-dribble figure is .23 inside 27 feet and .17 beyond it. Her midrange jumpers (10 to 21 feet) run .42 and .39 respectively on smaller samples.

The league-guard baselines, same filters:

| Guard baseline, threes | FG% | Points per shot |
| --- | --- | --- |
| Catch-and-shoot | .398 | 1.19 |
| Off the dribble | .174 | 0.52 |

By depth, guards hit 40% on catch-and-shoot threes from 22 to 26 feet and 38% beyond 27; off the dribble, 19% and 11%. Clark exceeds the baseline in every cell. Her worst category, the deep pull-up, is six points above the league's. Her best category is roughly ten points above what guards shoot from five feet closer with no dribble.

<figure>
  <img src="/images/caitlin-clark-shots/shot-dotmap.png" alt="Every Clark jump shot, 2024-26, by creation type — catch-and-shoot on the left, pull-up/stepback on the right, with league-guard baselines beneath each panel" />
  <figcaption>Every Clark jump shot, 2024-26, by creation type. Filled markers are makes; league-guard baselines beneath each panel.</figcaption>
</figure>

The distribution is where she departs from the league. Of her 657 three-point jump shots, 58% came off the dribble. The guard average is approximately 21%. She takes the league's lowest-value shot type at nearly triple the normal share, and the league-wide expected value on that shot type, 0.52 points per attempt, makes it the worst shot in professional basketball that professionals still take on purpose.

At her own conversion rates, each pull-up three converted into a catch-and-shoot three is worth 0.90 additional expected points. At her 2026 volume of 7.9 three-point attempts per game, moving from a 58% off-dribble mix to the guard-average 21% reallocates about 2.9 attempts per game, worth roughly 2.6 expected points per game. This is an upper bound: it assumes her .503 survives the added volume and that defenses do not adjust, and neither assumption holds at the limit. Discount it by half and it remains one of the largest single levers available to any offense in the league.

## Discussion

The natural objection is that the mix is imposed rather than chosen: primary creators inherit difficult shots, and defenses guard Clark unlike anyone else. The data support neither version at the magnitude required.

Start with the inheritance argument. End-of-quarter heaves are already excluded, and genuine shot-clock-forced attempts arrive a handful of times a week, not 378 times in three seasons. Broken-play inheritance cannot explain a 37-point gap in mix share against the position average.

The defensive-attention argument carries more weight and still falls short. Coverage certainly shapes what is available. But the same attention produced 279 catch-and-shoot attempts in this sample, 42% of her threes, which she converted at .503. The looks exist. She takes them, takes them exceptionally well, and takes the other kind more.

Which brings the discussion to the most informative piece of evidence available: her own account. In September 2024, at the end of her rookie season, Clark told 60 Minutes that she prefers shooting off the dribble to catch-and-shoot, adding that with how defenses play her, "I don't get a lotta catch and shoot-threes." Set against her actual distribution, the statement is half true at most. Relative to other guards, she does see fewer catch-and-shoot chances, and there is a chicken-and-egg problem in scoring that fact: a guard who lives off the dribble leaves her offense fewer chances to create those looks for her. But 279 of them arrived anyway, she converted them at .503, and the stated preference matches the observed mix almost exactly. This is revealed preference in the textbook sense: she takes the shot she likes, and the shot she likes is worth 0.61 points.

None of this is an argument that she should stop shooting off the dribble entirely. Her pull-up remains above the league baseline, and some off-dribble volume is the cost of initiating an offense. The argument is narrower and, I think, harder to escape: the highest-value shot in the league currently belongs to a player who prefers a different shot. There is precedent for what happens when that changes. Stephen Curry was already an elite shooter under Mark Jackson; the historic version arrived when Steve Kerr's motion offense moved him off the ball and let the screens do the creating. The parallel is not that Clark is Curry. It is that Curry's leap came from reallocation, not transformation.

## Conclusion

The topline percentages that fuel the Clark discourse are pooling two different shooters: one of the best catch-and-shoot players the league has measured, and a high-volume pull-up shooter who is merely above average. Her efficiency problem is real, but it lives in the allocation between the two, not in the shooting itself. None of it requires her to become a different player. The best shot in the league already belongs to her. The open question is how often she agrees to take it.
