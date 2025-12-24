---
slug: december-2025-release
title: December Release
date: 2025-12-17
authors: rezolve
tags: [release, features]
---

**Release Date:** December 17, 2025

## Executive Summary

This release brings significant enhancements to the Rezolve AI platform, focusing on improved workflow efficiency, visual intelligence capabilities, and better inbox management. Key updates include multi-file attachment support, Vision AI enhancements for image processing, automatic image attachment during ticket triaging, and improved ticket update highlighting to ensure agents never miss important changes.

<!-- truncate -->

### Multi-File Attachment Support in Notes

**Enhancement:** Users can now upload up to 10 files at once when adding notes to a ticket, replacing the previous single-file limitation. This improves workflow efficiency for agents.

---

### Vision AI - Attached Image Support

**Enhancement:** Vision AI now processes images added as attachments, not just copy/pasted images. Users can attach images through the standard attachment workflow and Vision AI will analyze them as expected.

---

### Auto-Attach Images During Ticket Triaging

**Enhancement:** Images shared during ticket triaging conversations are now automatically attached to the created ticket. This ensures relevant visual context is preserved for agents to work on those tickets. Also applies to Live Chat - images shared with agents are displayed in chat and attached to the resulting ticket.

---

### Reset Queue & Assignee on Ticket Clone

**Enhancement:** When cloning a ticket, Queue and Assignee fields are now by default excluded from the clone. This prevents unwanted notifications to agents and ensures cloned tickets start fresh without triggering configured actions. However, users are given an option to copy these fields during the clone process.

---

### Improved Ticket Update Highlighting in Inbox

**Enhancement:** Updated tickets now display with bold text and an "Unread" tag, matching the behavior for new tickets. Previously, only new tickets received visual highlighting — now any ticket update will also be surfaced to ensure agents don't miss important changes.

---

## Release Date: December 24, 2025

### Unified Variable Setting Method

**What changed:** The botHelpers.setSlots() method now works consistently across both Teams Flows and Silent Flows without requiring the conversationData parameter.

**Why it matters:** Previously, developers had to use different methods to set variables - `botHelpers.setSlots(conversationData, {...})` for Teams Flows vs `data["key"] = value` for Silent Flows. This inconsistency prevented the same flow from working in both contexts. Now, a single approach works everywhere.

---

### API to Trigger Silent Flows

**What changed:** A new API endpoint allows external systems (ServiceNow, Jira, Postman, etc.) to trigger Silent Flows by passing a flow name and data payload.

**How it works:** Send a request with flowName and a data object - all values under data become accessible as variables within the flow.

---

### TypeAhead API Integration for Adaptive Cards

**What changed:** Creator Studio now natively supports linking APIs to Adaptive Cards for dynamic TypeAhead search functionality using the Data.Query dataset configuration.

**Why it matters:** Previously, implementing TypeAhead required manual JSON parsing and hard-coding values. Now, APIs can be directly connected to Adaptive Card dropdowns for real-time search results.

**Scope:** Currently supported for Teams and Web bots. Slack/Guest bot support is being tracked separately (PRD-2255).

---

### Direct API Component Support in Silent Flows

**What changed:** API components can now be dragged directly into Silent Flows without needing to wrap them inside Action components.

---

## Support

For questions or issues related to this release, please contact our support team by emailing us at support@rezolve.ai
