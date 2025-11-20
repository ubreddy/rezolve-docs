---
slug: september-2025-release
title: September Release
date: 2025-09-06
authors: rezolve
tags: [release, features]
---

**Release Ticket:** Dashboard Release - PD-719
**Scheduled Deployment:** September 6, 2025 at 10:00 AM IST

# Release Document

**Release Version:** V1.0 (includes phase 1 and phase 2 deliverables)
**Release Date:** September 4, 2025
**Status:** Scheduled
**Priority:** High

## Executive Summary

This release introduces significant enhancements to the dashboard functionality, focusing on improved user experience, advanced analytics capabilities, and multi-entity dashboard support. The release encompasses 12 tickets, delivering improvements to data visualization, filtering, and reporting capabilities.

## Release Components

### 1. Multi-Entity Dashboard Platform

#### DRI-7382: Multi Entity Dashboard
- **Description:** Dashboard framework supporting multiple entities with advanced relationship mapping
- **Key Features:**
  - Support for multiple entities within single dashboard, while respecting the relationship between entities through foreign key mapping
  - Dashboard-level and section-level filtering capabilities
  - Cross-entity data visualization and analysis
  - Cross filters working across entities
- **Impact:** Provides unified view across different data entities, enabling comprehensive business intelligence

### 2. User Analytics & Metrics Enhancement

#### DRI-7431: Unique Users and Repeat Users Tracking
- **Description:** Implementation of advanced user metrics including unique users, repeat users, and average entities per user
- **Key Features:**
  - Metric chart with unique, repeat, and average per item calculations
- **Impact:** Enables user behavior analysis and engagement tracking

### 3. Advanced Chart Functionality

#### DRI-7584: Number Chart Percentage Enhancement
- **Description:** Enhanced percentage calculation capabilities with customizable exhaustive sets
- **Key Features:**
  - Editable exhaustive set for percentage calculations
  - Count and percentage display options
  - Dynamic toggle between absolute and percentage values
  - Improved denominator control for percentage metrics
- **Impact:** Provides more control on definition of percentage-based analytics

#### DRI-7195: Quick Filters Implementation
- **Description:** Quick filter feature for dashboards and individual charts
- **Key Features:**
  - Dashboard-level quick filters
  - Chart-specific filtering capabilities
  - Enhanced user experience with intuitive filter controls
- **Impact:** Improves dashboard usability and experience across data exploration capabilities

#### DRI-7147: Cross-Filter Integration
- **Description:** Extension of cross-filtering functionality to data charts and summary charts
- **Key Features:**
  - Cross-filter application extended to all chart types including Data and Summary charts
- **Impact:** Improves the interactivity of dashboard experience

### 4. User Experience Enhancements

#### DRI-7421: Dashboard UX Upliftment
- **Description:** Frontend redesign aligned with modern design principles
- **Key Features:**
  - Updated visual design with improved color palettes
  - Refined chart styling (pie charts, bar charts, data tables)
  - Enhanced data table functionality with fixed headers
  - Improved hover effects and visual feedback
- **Impact:** Modernizes dashboard appearance and improves user interaction

#### DRI-7197: Cognitive Load Reduction
- **Description:** Strategic UX improvements to reduce dashboard complexity and cognitive overhead
- **Key Features:**
  - Collapsible configuration options
  - Consolidated download and subscription controls
  - Hover-based detail reveals
  - Streamlined navigation and action grouping
- **Impact:** Improves dashboard usability and reduces user cognitive burden

#### DRI-7160: Data List Actions Enhancement
- **Description:** Customizable action capabilities for data list charts
- **Key Features:**
  - Configurable buttons, links, and icons in data rows
  - Dynamic URL generation with variable substitution
  - Overlay and new tab opening options
  - Integration with Service Catalog custom actions
- **Impact:** Provides customizable action capabilities from data visualizations

### 5. Data Quality & Filtering

#### DRI-6337: (Client specific) Geographic and Linguistic Filtering
- **Description:** Enhanced filtering capabilities based on region and language attributes using custom fields
- **Key Features:**
  - Region, Language, and Market filtering from user attributes
- **Impact:** Enables regional and linguistic analysis for global operations

### 6. Reporting Improvements

#### DRI-7060: Dashboard Report Enhancement
- **Description:** Improvements to "download report" functionality
- **Key Features:**
  - Multi-CSV export for different ticket types
  - Connected data set export as per foreign key mapping
  - Improved column mapping and labeling
- **Impact:** Provides more accurate and organized data exports

### 7. Data Quality Fixes

#### DRI-7262: Query Type Classification Fix
- **Description:** Resolution of excessive "Others" classification in query type mapping
- **Key Features:**
  - Meaningful conversation categorization
- **Impact:** Provides more accurate insights into conversation types and topics

## Technical Requirements

### System Components Affected
- **Dashboard UI:** Major frontend enhancements and new component implementations
- **Backend Services:** API enhancements for multi-entity support and advanced filtering
- **Database:** Schema updates for new entity relationships and metadata storage
- **Reporting Engine:** Enhanced export capabilities and cross-filtering logic

## Conclusion

This release represents a significant advancement in dashboard capabilities, introducing multi-entity support, enhanced user analytics, and comprehensive UX improvements. The release addresses both functional requirements and user experience enhancements, positioning the platform for advanced business intelligence and data visualization needs.

The combination of technical enhancements and user-focused improvements ensures that the platform will provide more valuable insights while maintaining ease of use and accessibility for all user types.
