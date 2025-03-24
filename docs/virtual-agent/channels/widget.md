---
id: widget
title: Using Virtual Agent Widget
sidebar_label: Virtual Agent Widget
description: Documentation for Using Virtual Agent Widget
status: 
whatsPending: 
---

# Using Virtual Agent Widget

The Widget provides a compact, embeddable chat interface that can be added to any web page without disrupting the main content.

## Features

• **Minimizable Interface**: Starts as a chat button that expands when clicked

• **Non-intrusive Design**: Occupies minimal screen space when not in active use

• **Context Awareness**: Can capture page information to provide contextual support

• **Multi-page Persistence**: Maintains conversation as users navigate across website pages

• **Customizable Appearance**: Adjustable colors, size, and position

## Implementation

The Widget implementation focuses on lightweight integration:

1. **Embed Code**: Simple HTML/JavaScript snippet for easy addition to any page
2. **Shadow DOM**: Isolates widget styling from host page to prevent conflicts
3. **Responsive Positioning**: Adjusts position and size based on viewport
4. **Page Metadata Capture**: Can extract page information to understand user context
5. **Lazy Loading**: Loads resources only when needed to minimize performance impact

## User Experience

The Widget presents as a non-intrusive floating button:

• Initially appears as a small chat icon in a corner of the screen
• Expands to a chat window when clicked
• Can be minimized to return to browsing
• Provides notification indicators for new messages
• Offers the same core functionality as the full AIBOT in a compact format

