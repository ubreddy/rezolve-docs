---
slug: june-2025-release
title: June Release
date: 2025-06-03
authors: rezolve
tags: [release, features]
---

**Release Date:** June 3, 2025

This release brings several new features and improvements including dashboard chart tooltips for better context, Knowledge Gaps data fixes, and updated UI components for conversation messages with improved readability, alignment, and consistency across platforms.

&nbsp;

<!-- truncate -->

# June 2025 Release

We're excited to announce our June 2025 release with several new features and improvements!

## Release Date: 3rd June

### 1: Dashboard -  Admin should be able to optionally add a tooltip to describe the chart

#### Overview
This feature enhances the dashboard charts by allowing administrators to add optional tooltip text that provides additional context or explanation for charts. When enabled, a tooltip icon appears on the chart, displaying the explanatory text when users hover over it.

#### New Capabilities
- Administrators can now add optional tooltip text when creating or editing charts
- If tooltip text is provided, a tooltip icon will appear on the chart, displaying the text on hover
- If tooltip text is left blank, no tooltip icon will appear, ensuring a clean UI without unnecessary indicators
- Tooltips help users better understand chart data and context without cluttering the interface

#### Problem Addressed
Users previously lacked contextual information about charts in the dashboard, making it difficult to understand the purpose, data sources, or interpretation of certain visualizations. This feature addresses the need for providing additional explanatory information without cluttering the chart interface.

#### Visual Reference

![Chart with tooltip option - Step 1](/img/Release/dri6066_a.png)

![Chart with tooltip option - Step 2](/img/Release/dri6066_b.png)

![Chart with tooltip display](/img/Release/dri6066_c.png)






### 2: Data was missing in knowledge Gaps

#### Overview
An issue was identified where Knowledge Gap data was not appearing as expected in the platform. This impacted reporting and visibility into knowledge article performance and gaps.

#### Root Cause Analysis
The issue stemmed from missing or unprocessed data in the backend pipeline responsible for aggregating and displaying knowledge gap insights. The system failed to surface the required data, resulting in blank or incomplete views.

#### Problem Addressed
This release fixes the data processing pipeline to ensure complete and accurate Knowledge Gap data is properly collected, processed, and displayed. The fix restores full visibility into knowledge article performance metrics and gap analysis capabilities.

#### Visual Reference

![Knowledge Gap Data](/img/Release/kg_1.png)





### 3: UI component for conversation messages update

#### Overview
The UI component for conversation messages has been updated to improve readability, alignment, and consistency across platforms. This includes adjustments to spacing, font usage, timestamp placement, and message bubble behavior.

#### New Capabilities
The updated conversation UI component provides:
- Improved text readability with optimized font styles and sizes
- Better visual alignment of message bubbles and content
- Consistent timestamp placement across all platforms
- Enhanced spacing between messages for clearer conversation flow
- Standardized message bubble behavior for a more intuitive user experience

#### Problem Addressed
Previous inconsistencies in the conversation UI created readability issues and visual discrepancies across different platforms. This update addresses these issues by implementing a standardized design that maintains visual coherence while improving the overall user experience.

#### Visual Reference

![Conversation UI Update - Details](/img/Release/convo1.png)

![Conversation Message UI Component Update](/img/Release/convo2.png)
