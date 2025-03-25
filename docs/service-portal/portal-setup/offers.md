---
id: offers
title: Portal Offers
sidebar_label: Offers
description: Documentation for Portal Offers
status: 
whatsPending: 
---

# Portal Offers

## Service Portal Home Interface

Based on the configuration, here's how the end-user interface appears in the Service Portal:

### 1️⃣ Portal Homepage & Navigation

- **Branding Elements** - The portal features a company logo, banner text, and banner image (if configured by the admin).
- **Search Bar** - Users can type queries or requests directly in the search field for AI-driven assistance.
- **Main Portal Title** - Displays the name of the service portal (e.g., Rezolve.ai Portal).

### 2️⃣ Service Cards for User Actions

- **Service Cards** - End users see predefined cards configured by admins. In this case, an "Incident Offers" card is available.
- **Card Details** - Each card has an icon, title, and description, allowing users to understand its purpose quickly.
- **Card Click Action** - Clicking the card will either:
  - Redirect the user to a Static Link (if configured).
  - Open an Offer for resolving incidents or service requests.
  - Navigate through an Intent Hierarchy for structured issue resolution.

### 3️⃣ Recent Tickets & Service Catalog

- **Recent Tickets Section**
  - Displays a list of previously raised tickets by the user.
  - Provides quick access to ongoing or past issues for reference.
- **Browse Service Catalog Button**
  - Allows users to explore available services and request assistance.
  - This feature ensures users can quickly find solutions without manually searching for support options.

The end-user portal is designed to be intuitive, offering easy navigation, quick access to past tickets, and AI-driven self-service. The admin-configured settings ensure a smooth and efficient service experience for employees or customers.

![Service Portal Home](/img/Helpdesk/Service_Portal_Home.jpg)


## Browse Service Catalog - Functional Overview

The Service Catalog is an organized collection of service requests that users can browse and select based on their needs. Under the Browse Service Catalog menu, there are three key sections:

### 1. Favorites ⭐

- This section allows users to bookmark frequently used services for quick access.
- Marking an offer as a favorite helps reduce search time and improves efficiency.
- Users can easily access their most-used services without navigating through multiple categories.

### 2. Offers Within Intents 📂

- This section categorizes service offers into structured intents based on user needs.
- Each intent groups relevant service requests to simplify navigation.
- Examples of intents:
  - Incidents (ITSM): Likely includes incident-related requests.
  - Requests: A general category for various service requests.
  - IT: Services related to IT support, such as software installations or system access.
  - CSM: Possibly related to Customer Service Management.

**Key Benefit:** Organizing offers into intents ensures users can quickly find the right service request category without searching manually.

### 3. Others (Offers Without Intents) 📁

- This section contains unmapped services that are not yet assigned to an intent.
- The offers listed here may be newly created or not categorized properly.
- Administrators can later map these services to relevant intents for better organization.

**Key Benefit:** This acts as a temporary holding section for offers that need further classification, ensuring no service request is lost.

### Overall Benefits of the Browse Service Catalog Menu:

✅ **Enhanced Navigation** - Categorization into Favorites, Intents, and Others improves user experience.

✅ **Faster Access** - Users can quickly locate frequently used or relevant service requests.

✅ **Better Organization** - Offers are neatly arranged, and unassigned ones can be categorized later.
