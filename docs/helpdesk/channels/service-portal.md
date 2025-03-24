---
id: service-portal
title: Service Portal
sidebar_label: Service Portal
description: Documentation for Service Portal
status: 
whatsPending: 
---

# Service Portal

The Service Portal module enables administrators to customize the service portal's design, features, and functionality, ensuring a smooth user experience for end users. It serves as a self-service interface where users can raise tickets, track progress, access the knowledge base, and interact with the support team efficiently.

### Portal Homepage & Navigation

- **Branding Elements** – The portal features a company logo, banner text, and banner image (if configured by the admin).
- **Search Bar** – Users can type queries or requests directly in the search field for AI-driven assistance.
- **Main Portal Title** – Displays the name of the service portal (e.g., Rezolve.ai Portal).

![Service Portal Homepage](/img/Helpdesk/Service_Portal_Home.jpg)

### Service Cards for User Actions

- **Service Cards** – End users see predefined cards configured by admins. In this case, an "Incident Offers" card is available.
- **Card Details** – Each card has an icon, title, and description, allowing users to understand its purpose quickly.
- **Card Click Action** – Clicking the card will either:
  - Redirect the user to a Static Link (if configured).
  - Open an Offer for resolving incidents or service requests.
  - Navigate through an Intent Hierarchy for structured issue resolution.

### Recent Tickets & Service Catalog

- **Recent Tickets Section**
  - Displays a list of previously raised tickets by the user.
  - Provides quick access to ongoing or past issues for reference.
- **Browse Service Catalog Button**
  - Allows users to explore available services and request assistance.
  - This feature ensures users can quickly find solutions without manually searching for support options.

The end-user portal is designed to be intuitive, offering easy navigation, quick access to past tickets, and AI-driven self-service. The admin-configured settings ensure a smooth and efficient service experience for employees or customers.

## Browse Service Catalog - Functional Overview

The Service Catalog is an organized collection of service requests that users can browse and select based on their needs. Under the Browse Service Catalog menu, there are three key sections:

![Browse Service Catalog](/img/Helpdesk/Browse_Service_Catalog.jpg)

### 1. Favorites 

- This section allows users to bookmark frequently used services for quick access.
- Marking an offer as a favorite helps reduce search time and improves efficiency.
- Users can easily access their most-used services without navigating through multiple categories.

### 2. Offers Within Intents 

- This section categorizes service offers into structured intents based on user needs.
- Each intent groups relevant service requests to simplify navigation.
- Examples of intents in the provided image:
  - Incidents (ITSM): Likely includes incident-related requests.
  - Requests: A general category for various service requests.
  - IT: Services related to IT support, such as software installations or system access.
  - CSM: Possibly related to Customer Service Management.

**Key Benefit**: Organizing offers into intents ensures users can quickly find the right service request category without searching manually.

![Browse Service Catalog](/img/Helpdesk/Browse_Service_Catalog.jpg)

### 3. Others (Offers Without Intents) 

- This section contains unmapped services that are not yet assigned to an intent.
- The offers listed here may be newly created or not categorized properly.
- Administrators can later map these services to relevant intents for better organization.

**Key Benefit**: This acts as a temporary holding section for offers that need further classification, ensuring no service request is lost.

### Overall Benefits of the Browse Service Catalog Menu:

- **Enhanced Navigation** – Categorization into Favorites, Intents, and Others improves user experience.
- **Faster Access** – Users can quickly locate frequently used or relevant service requests.
- **Better Organization** – Offers are neatly arranged, and unassigned ones can be categorized later.

## Main Page Configuration

The Service Portal Configuration page allows administrators to customize the self-service portal for end-users in an ITSM system. This page provides options to configure branding, UI elements, and available service request options.

![Banner Text Configuration](/img/Helpdesk/Banner_Text_Config.jpg)

### Key Configuration Elements

1. **Company Logo**
   - Allows uploading a custom logo for the service portal.
   - Supported formats: PNG, JPG, GIF (up to 5MB).
   - Provides preview and clear options.

2. **Banner Image**
   - Enables uploading a header image for the service portal.
   - Enhances the visual appearance of the portal.

3. **Banner Text**
   - Displays a tagline or message beneath the banner.
   - Example: "By Actionable Science Labs" (customizable).

![Intent Hierarchy](/img/Helpdesk/Intent_Hierarchy.jpg)

## Cards Configuration (Service Options)

### Intent Groups Configuration

Cards represent different types of service requests or ticket categories that users can raise from the portal.

1. **Title**
   - Name of the service request type (e.g., Incident Request).

2. **Description**
   - A brief explanation of the service (e.g., Request related to IT incidents).

3. **Type**
   - Defines the request type (e.g., Intent Hierarchy).

4. **Intent**
   - Specifies the intent category (e.g., Incidents).

5. **Choose an Icon**
   - Provides a set of icons to visually represent the service.
   - Also allows custom icon uploads.


## Static Link Configuration

The Static Link configuration allows administrators to add external or internal links to the Service Portal. These links provide quick access to third-party services, knowledge base articles, or external resources.

### Key Configuration Elements

1. **Title**
   - Name of the link (e.g., Google).
   - Appears as the clickable text on the portal.

2. **Description**
   - A brief explanation of the link (e.g., 3rd party Link).
   - Helps users understand the purpose of the link.

3. **Type**
   - Set to Static Link, meaning it redirects to a predefined URL.

4. **URL Link**
   - Defines the external or internal web address (e.g., https://www.google.com/).
   - Clicking on this card will open the link in a new tab.

5. **Add to Root Level**
   - A toggle switch to add this link to the main service portal menu.
   - If enabled, the link will be more prominently displayed.

6. **Intent**
   - Classifies the link under an intent category (e.g., Incidents).
   - Helps in organizing links based on service areas.

7. **Choose an Icon**
   - Allows selecting a visual icon for better identification.
   - Option to upload a custom icon.

### Use Cases for Static Links

- Quick access to frequently used external tools (e.g., Google, IT documentation).
- Linking knowledge base articles or troubleshooting guides.
- Redirecting users to external ITSM-related resources.
- Enhancing the user experience by organizing useful links.



### Actions Available

- **Reset**: Clears all changes and restores default settings.
- **Save**: Confirms and applies the configuration updates.

## Offer Configuration in Service Portal

The Offer Configuration feature in the Service Portal allows admins to define and display specific tasks, services, or requests that users can avail.



### Key Configuration Elements

1. **Title**
   - The name of the offer (e.g., Task).
   - This will appear as the clickable card in the portal.

2. **Description**
   - A short description of the offer (e.g., Task).
   - Helps users understand what the offer is about.

3. **Type**
   - Set to Offer, indicating that this card represents a service or request available to users.

4. **Offer Selection**
   - Defines the specific service or task (e.g., Task).
   - The offer could be related to incident management, service requests, approvals, etc.

5. **Choose an Icon**
   - Allows selecting an icon to visually represent the offer.
   - Custom icons can be uploaded for branding.

6. **Recent Tickets Toggle**
   - When enabled, recent tickets submitted by the user will be displayed in the portal.
   - The label for this section is customizable (e.g., SUBMITTED TICKETS).

### Use Cases for Offers

- Display available IT services and requests (e.g., Reset Password, Access Request, Hardware Issue).
- Provide a structured way for users to submit specific types of requests.
- Improve visibility of frequently used services/tasks.
- Offer quick access to common user needs in ITSM & Service Management.

## Additional Service Portal Features

- **Rezolve Features (Toggle ON/OFF)** – Enables additional portal features.
- **Recent Tickets Display** – Shows users their most recent service requests.
- **Recent Tickets Label** – Customize the label for recent ticket display.
- **Show Browse Service Catalog (Toggle ON/OFF)** – Allows users to browse available service options.

## Conclusion

The Service Portal Configuration module provides a structured way to enhance the service experience for end users. With flexible customization options like branding, service offerings, ticket visibility, and navigation settings, admins can create an efficient and user-friendly IT service portal.
