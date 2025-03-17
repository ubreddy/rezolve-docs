---
title: 'Live Agent In Teams Pre Req   Enabling Graph API Permissions on Existing SSO App '
sidebar_position: 1
---


# Live Agent In Teams Pre-Req  - Enabling Graph API Permissions on Existing SSO App 



Enabling Graph API
Permissions
Prerequisite Instructions for Live Agent
Chat in Teams


REGISTER APP IN AZURE AD
To enable Live Agent in Teams app, we need to enable certain Graph API(s). We will guide you through how to do
this in Azure AD.
ENABLE GRAPH API
Graph API Permissions Required :
• ChannelMember.ReadWrite.All
• Directory.Read.All
• GroupMember.ReadWrite.All
• Team.Create
• TeamMember.ReadWrite.All
• Wser.Read.All
• Email
• Offline\_access
• Openid
• profile
TYPE OF PERMISSIONS REQUIRED
1) Application permissions
2) Delegated Permissions
Instructions Part A
1. Open your Portal
2. Click on the View button for Manage Azure Active Directory

3. Click on App Registration
4. Search and Open the Rezolve SSO application you previously created

5. The App Overview page will open, look for API Permissions in the left hand side menu and click on it
6. Select Add a Permission on the main part of the page
1.
2.
7. Select Microsoft Graph
Teams and click Register
3.
5.
6.
5.

8. Click on Application Permission option
7.
8.
16. Type Channel in the search box, select ChannelMember.ReadWrite.All and click Add Permissions
17. Click Add a Permission &gt; Microsoft Graph &gt; Application permissions again
18. Type directory in the search box, this time select "Directory.Read.All" and click Add Permissions
19. Repeat these steps to add these additional Application permissions:
• GroupMember.ReadWrite.All
• Team.Create
• TeamMember.ReadWrite.All
• User.Read.All
Here is an example:
This
9 d.
o cu ment contains proprietary information owned by Rezolve.ai and must not
be distributed outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
13. Click Add a Permission &gt; Microsoft Graph
14. This time choose Delegated permissions
15. Type email in the search box, select email and click Add Permissions
16. Click Add a Permission &gt; Microsoft Graph &gt; Delegated permissions again
17. Type offline\_ in the search box, this time select offline\_access and click Add Permissions
18. Repeat these steps to add these additional Delegated permissions:
• openid
• profile
10.
19. Close the Request API Permissions box so you are back at the Configure permissions screen
20. Select Grant admin consent for …

1151011 .D u blin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
21. Click Yes to Grant admin consent confirmation
1 2.
22. Confirm that the screen looks similar to below with your listed permissions, Admin Consent Req set to Yes
and Granted for has a green check
13.
1 4.

Instructions Part B
1. From the menu on the Left, select Authentication
2. Add the following authentication redirect URL by clicking Add URI and enter the URL provided to you by
Rezolve
Ie. https://$tenantname.virtualpeople.ai/virtualagent/morselfinal
If you do not see the above screen, follow these additional steps:
a. Click + Add Platform
b. From the Configuration platforms options, select Web

11501 Dublin3 B.l vSdc SrToEl l2 d00o, wDunb lain ,l iCttAle 9,4 c56h8e ck both boxes as shown under “Implicit grant and hybrinidfo f@lorewzos”lv e.ai | www.rezolve.ai
c. Under Redirect URIs, enter the Redirect URL provided by Rezolve
Ie. https://$tenantname.virtualpeople.ai/virtualagent/morselfinal
d. Click Configure
3. Scroll down a little, check both boxes as shown below (found under “Implicit grant and hybrid flows”)
4. Click Save

Instructions Part C
1. Look for Certificates & secrets in the left hand side menu and select it
2. Then select New client secret on the main part of the page

3. Enter a description i.e. RezolveAIBot and click Add
15.

5. Copy the Value and Secret ID and save them somewhere
6. Select Overview in the left hand side menu
7. Copy the Application (client) ID and save with Client Secret ID
8. Select Manifest in the left hand side menu
9. Click on Download


10. Send the Application (client) ID, Client Secret ID and the downloaded Manifest to Rezolve


![Page 2 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page2_4.png)

![Page 3 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page3_4.png)

![Page 3 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page3_5.png)

![Page 4 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page4_4.png)

![Page 4 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page4_5.png)

![Page 5 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page5_4.png)

![Page 5 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page5_5.png)

![Page 6 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page6_4.png)

![Page 6 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page6_5.png)

![Page 7 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page7_4.png)

![Page 7 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page7_5.png)

![Page 8 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page8_4.png)

![Page 8 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page8_5.png)

![Page 8 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page8_6.png)

![Page 9 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page9_4.png)

![Page 9 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page9_5.png)

![Page 9 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page9_6.png)

![Page 10 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page10_4.png)

![Page 11 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page11_4.png)

![Page 12 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page12_4.png)

![Page 12 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page12_5.png)

![Page 13 Image](/img/reference/Graph%20API%20Guides/images/Live-Agent-In-Teams-Pre-Req----Enabling-Graph-API-Permissions-on-Existing-SSO-App-_page13_4.png)