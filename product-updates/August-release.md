---
slug: august-2025-release
title: August Release
authors: rezolve
tags: [release, features]
---


**Release Ticket:** PD-679 - POV Release  
**Scheduled Deployment:** August 13, 2025 at 1:00 PM IST 

## Executive Summary

This is a General Availability release that encompasses significant enhancements to bot integrations, Delta API productization, navigation improvements, and various bug fixes. The release includes 23 related tickets covering both new features and critical fixes that are targeted to enhance the overall platform experience for POV clients.

**Key Highlights:**
- Delta API productization for improved AI query management
- Consistent navigation experience across applications
- Minor enhancements to Bot integration capabilities with flexible field configuration
- Multiple bug fixes and performance improvements

---

## Release Contents

### **Major Features**

#### **1. Bot Integration: User Fields Configuration Enhancement (DRI-3628)**

- **Impact:** High - Eliminates need for custom bot flows
- **Description:** Introduced flexible configuration mechanism for user fields in bot-integrated ticket offers, now each offer may have different user fields configuration.

**Key Features:**
- **Fields hidden from Bot UI:** Useful for backend-controlled fields that shouldn't be shown to bot users
- **Pre-poulate Values, Editable by User:** Pre-populated with AI-deduced values, allowing user edits via bot interface

**Business Value:**
- Eliminates need for separate custom bot flows per offer
- Enhances maintainability by defining behavior at offer level
- Enables consistent and dynamic values across different request types
- Improves bot user experience with reduced manual input

#### **2. Delta API Productization (PRD-2144)**

- **Impact:** High - Bringing Delta API to the product center stage by integrating it with Agent app. 

**Description:** Implemented Delta API productization to enable flexible configuration via the Config App, allowing teams to manage and fine-tune AI Query behavior dynamically. Also integrating it with Bot Conversations, Queries, Dashboards, and Reports.

**Key Components:**
- **Config App Integration:** Added Delta API configuration support with parameters like WebsiteDomain, Escalated, KnowledgeSources, EmbeddingModel, WebSearchDomains, WebSearchOnly, and Triage
- **Reporting Compatibility:** Integrated with Knowledge gaps, Bot Reports, Knowledge Dashboard, Explainability, and Queries/Bot Conversations
- **Multi-channel Support:** Verified functionality across Slack, Teams, and Web channels

**Business Value:**
- Admins can manage Delta API behavior through UI without code changes
- Enhanced explainability and reporting for Delta-based queries
- Support for multichannel experiences

#### **3. Consistent Navigation Menu (DRI-7032) --- This is descoped from this release ---**

- **Impact:** High - User experience improvement

**Description:** Implementation of consistent navigation menu across all modules of agent UI application to provide unified user experience.

**Includes subtask:**
- **Sidebar Menu Functionality (DRI-7139):** Added sidebar menu functionality in mlApp-ui for aiconsole/knowledgemgmt

---

### **Configurations related**

#### **4. Config App V3 Updates (PRD-2158)**

- **Impact:** High - System configuration enhancement. Partial release. 

**Description:** Newly launched Config App with V3 to accommodate AI-Query-Delta functionality along with existing Bot Settings configurations. Gen AI settings are being deployed now to cater Delta API needs, Bot settings will be deployed later.


#### **5. Tenant Registration Changes for POV (PRD-2148)**

- **Impact:** Medium - POV tenant setup. Partial release. 

**Description:** Updates to tenant registration process specifically for POV clients. Sample ticketing dashboards deployment pending. 

#### **6. Auto Import/Copy Template in Bot Studio (DRI-7073)**
- **Impact:** Medium - Development efficiency

**Description:** Implemented functionality to automatically import/copy ticket types updated in Service Catalog to bot studio based on a configurable flag.

#### **7. In-line Images Support for ingested documents (PRD-2147)**
- **Impact:** Medium - Content enhancement

**Description:** Productized in-line images support in uploaded documents (earlier this was available in Demo tenant).


#### **8. Password Expiry Notification Feature (PRD-2146)**
- **Impact:** Low - Demo'able feature

**Description:** Productized password expiry notification feature for that informs the user of upcoming expiry of their Azure password.

---

### **Additional Bot Integration Enhancements**

#### **9. Auto Publish Fields in Pinecone (DRI-7045)**
- **Impact:** Low - Bot training automation

**Description:** Bot Integration with V2: Auto publish all fields in pinecone when user adds/updates triggers.

#### **10. Two Flags Support in Pinecone (DRI-7096)**
- **Impact:** Low - Bot configuration

**Description:** Bot Integrations to support two flags (escalation and websearch) to store in pinecone for enhanced configuration options.

#### **11. Knowledge Dashboard as Landing Page (DRI-7022) --- This is descoped from this release ---**
- **Impact:** High - User experience

**Description:** Made knowledge dashboard the default landing page for improved user experience in allignment with the new metrics that we are tracking around BOt Conversations, Queries, and Knowledge Gaps.

---

### **Critical Bug Fixes**

#### **12. SharePoint Ingestion API Fix (DRI-7099)**
- **Impact:** High - Data ingestion
- **Description:** Fixed ingestion failing through API for SharePoint, ensuring reliable data import.

#### **13. Ticket 360 Template and Button Hiding (DRI-7066) --- This is descoped from this release ---**
- **Impact:** Low - UI cleanup
- **Description:** Hide the ticket 360 template and ticket 360 button from offers list for cleaner interface. Failed - Would be tracked in DRI-7087

#### **14. Data Migration (DRI-7226)**
- **Impact:** Medium - Data integrity
- **Description:** Data from Old V2 screen migrated to V3 screen. For any clients using V2, the present data from Announcements, Review chat, conversations, queries, knowledge gaps should not be lost as the navigation menu now directs to V3 screens for several URLs.

#### **15. Tickets management v2 (subscription) needs to be enabled by default for POV Tenants (DRI-7263)**
- **Impact:** Medium - POV functionality
**Description:** ConfigApp PD - Set Subscription for Tickets management v2 as true for POV Tenants to Enable Ticket Management.

#### **16. Slack Bot Integration Fixes**
- **PRD-2154:** Slack-specific changes
- **PRD-2149:** Slack specific changes in Base flow with Delta

---

### **Additional Bug Fixes**

#### **17. UI and Functional Improvements**
- Minor UI issue fixes **DRI-7359**
- Only live chat request was being considered escalation, Ticket creation was not **DRI-5798**
- some issues with Hierarchy fields and Bot Integrations have been addressed - Failed **DRI-3723**

---

 ### This is descoped from this release
## Known Issues

### Issues Reported
- **DRI-7560:** Existing V1/V2 - Tenant Admin - When user login for the first time then its getting navigated to console dashboard [PROD]
- **DRI-7561:** Dashboard is breaking in newly registered a tenant with POV [Prod]
- **DRI-7563:** Navigation pane auto-collapses when switching screens and opened screen not highlighted in V1/V2 tenants
- **DRI-7565:** v1 tenant knowlegde mngt showing wrong in ticket app
- **DRI-7567:** When being in the V3 dashboard of V2 tenant, Ticket management menu is missing
- **DRI-7568:** Service catalog of V2 Tenant goes to page not found with v3 URL
- **DRI-7569:** V2-Old V2 tenants are incorrectly navigating to console instead of V2
- **DRI-7570:** V1-Cannot create user attributes(Create button in loop)
- **DRI-7571:** Support tenant DW is not accessible
- **DRI-7572:** The attachment icon remains visible to the user when the feedback card is rendered in the web bot
- **DRI-7573:** Generative AI Setting PD missing default settings configuration in ticket
- **DRI-7574:** V1-Bot mgmt reports request download is leading to blank page(Prod)
- **DRI-7576:** Existing V2 - Service protal page is breaking when user na1viagates from SC to Serviceportal [PROD]
- **DRI-7577:** Existing v2 - When user navigates to VAM dashboard form VA dropdown menu - The page is breaking [PROD]
- **DRI-7578:** The trigger keyword is not functioning when used through the "Ask a Question" branch
- **DRI-7579:** Unable to create a ticket via ticket creation branch
- **DRI-7580:** V1-knowledge Insights are not loaded and page is blank
- **DRI-7581:** NEW POV Tenant-Console is missing in URL when redirected to Service catalog
- **DRI-7582:** V1-AdminApp-Workspace-Open exisiting workspace is leading to blank page
- **DRI-7583:** Shows V3 dashboard in V2 Tenant
- **DRI-7585:** Unable to access bot access page
- **DRI-7586:** In V2 tenant getting V1 menus of Knowledge mngmt
- **DRI-7587:** V1-Ticketing-Import menu is navigating to v3 console
- **DRI-7588:** [V2].When the user navigates from the dashboard to the subscription tab, the page is displayed as blank.[Prod]
- **DRI-7589:** Existing V2 - User is having the ASC admin role but using the URL console/admin/settings - The page is not accessible. Also it should not accessible only with Tenant Admin Role with URL[PROD]
- **DRI-7590:** V1/V2 When user click on review conversation from user-management page is breaking
- **DRI-7591:** Queries and conversation should not be visible under the Review Conversation section, as per the previous behaviour
- **DRI-7601:** Console>>Bot conversations>> No data is found in review chat

---

## Support Information

**Primary Contacts:**
- **Release Manager:** Nagajeyanthi, Aganathan
- **Engineering Lead:** Senthil
- **QA Lead:** Jitender

**Environment Details:**
- **Target Environment:** Production
- **Demo video (accessible internally only)** [DRI-7032_Menu_Demo](https://actionablescienceactionable.sharepoint.com/:v:/s/ASCQA/EWpmHCC1OshOtuDF6DPNOfwB52mDVTpjLsJ54pVr_hz8aA?e=1c4CtC)

---

*Last Updated: August 18, 2025*  
*Document Version: 1.0*