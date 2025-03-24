---
title: 'Enabling Graph API Permissions Creating a New App NEW'
sidebar_position: 1
status: 
whatsPending: 
---


# Enabling Graph API Permissions Creating a New App NEW



Enabling Graph API
Permissions


REGISTER APP IN AZURE AD
To allow the bot to perform automations for your end-user, we need to enable certain Graph API(s). We will guide you
through how to do this in Azure AD.
ENABLE GRAPH API
Graph API Permissions Required for basic MS Teams automation
1. Team.ReadBasic.All
2. TeamMember.ReadWrite.All
3. Directory.Read.All
TYPE OF PERMISSIONS REQUIRED
1) Application permissions
Instructions Part A
1. Open your Portal
2. Click on the View button for Manage Azure Active Directory

3. Click on App Registration and then select New Registration
5.
4. Enter a name to call this set up i.e BotName GraphAPI for Teams, make sure “Accounts in this
organizational directory only (Actionable Science Inc. only - Single tenant)” is selected and click Register

5. The App Overview page will open, look for Api Permissions in the left hand side menu and click on it
6. Select Add a Permisson on the main part of the page
7. Select Microsoft Graph
1.
2.
Teams and click Register
3.
5.
6.
6.

8. Click on Application Permission option
7.
8.
9. Type Team in the search box, select Team.ReadBasic.All and click Add Permissions
9.

10. Click Add a Permission > Microsoft Graph > 12. Click Add a Permission > Microsoft Graph >
Application permissions again Application permissions again
11. Type Team in the search box, this time select 13. Type direct in the search box, this time select
TeamMember.ReadWrite.All and click Add Directory.Read.All and click Add Permissions
Permissions
1 0.
•
11.
•
14. Close the Request API Permissions box so you are back at the Configure premissions screen
15. Select Grant admin consent for …
1 2.
13.

16. Click Yes to Grant admin consent confirmation
14.
15. Confirm that the screen looks similar to below with your listed permissions, Admin Consent Req set to Yes and
Granted for has a green check
16.
17.

Instructions Part B
1. Look for Certificates & secrets in the left hand side menu and select it
2. Then select New client secret on the main part of the page

3. Enter a description i.e. RezolveAIBot and click Add
18.

5. Copy the Value and Secret ID and save them somewhere
6. Select Overview in the left hand side menu
7. Copy the Application (client) ID and save with Client Secret ID
8. Send the Application (client) ID, Client Secret ID and the the downloaded Manifest to Rezolve

9. Select Manifest in the left hand side menu
10. Click on Download
11. Send the Application (client) ID, Client Secret ID and the downloaded Manifest to Rezolve


![Page 2 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page2_4.png)

![Page 3 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page3_4.png)

![Page 3 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page3_5.png)

![Page 4 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page4_4.png)

![Page 4 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page4_5.png)

![Page 5 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page5_4.png)

![Page 5 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page5_5.png)

![Page 6 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page6_4.png)

![Page 6 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page6_5.png)

![Page 6 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page6_6.png)

![Page 7 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page7_4.png)

![Page 7 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page7_5.png)

![Page 8 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page8_4.png)

![Page 9 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page9_4.png)

![Page 10 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page10_4.png)

![Page 10 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page10_5.png)

![Page 11 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-Creating-a-New-App-NEW_page11_4.png)
