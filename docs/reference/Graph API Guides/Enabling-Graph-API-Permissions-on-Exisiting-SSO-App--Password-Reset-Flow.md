---
title: 'Enabling Graph API Permissions on Exisiting SSO App  Password Reset Flow'
sidebar_position: 1
---


# Enabling Graph API Permissions on Exisiting SSO App- Password Reset Flow



Enabling Graph API
Permissions
To Setup Password Reset Flow


REQUIREMENTS
To allow the bot to perform automation for your end user, we need the following:
• Your Azure Communication Services phone number (Optional)
• Your Azure Communication Services Endpoint and Access Key (Optional)
• Rezolve Azure app to have User Administrator Azure AD role and to enable certain Graph API(s). We will guide
you through how to do this in Azure AD.
GRANTING AZURE AD ROLE
Role Required
1. User Administrator
INSTRUCTIONS
1. Open your Azure Admin Portal
2. Depending on your home page, click on either the View button for Manage Azure Active Directory or
Azure Active Directory icon
3. From the menu on the left select Roles and administrators

4. Click on the search box and search User Admin
5. From the list, click on User Administrator
6. Select + Add Assignment
7. Search for the Rezolve SSO app you previously created

8. Click on it and then click Add
8. Azure will return a success message when done.

ENABLE GRAPH API
Graph API Permissions Required
1. User.ReadWrite.All
2. UserAuthenticationMethod.Read.All
TYPE OF PERMISSIONS REQUIRED
1) Application permissions
Instructions Part A
1. Navigate back to Azure Home page, by clicking Home
1. Depending on your home page, click on either the View button for Manage Azure Active Directory or
Azure Active Directory icon
2.

3. Click on App Registration
4. Search and Open the Rezolve SSO application you created

5. The App Overview page will open, look for API Permissions in the left hand side menu and click on it
6. Select Add a Permission on the main part of the page
1.
2.
7. Select Microsoft Graph
Teams and click Register
3.
5.
6.
This document contains proprietary information owned by Rezolve.ai and must not
be5 d. istr ibuted outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
8. Click on the [Application/Delegated Permission] option
7.
8.
9. Type user.Re in the search box, select User.ReadWrite.All and click Add Permissions
10. Click Add a Permission &gt; Microsoft Graph &gt; Application permissions again
11. Type userau in the search box, this time select UserAuthenticationMethod.Read.All and click Add
Permissions
Here is an example:
9.

12. Close the Request API Permissions box so you are back at the Configure permissions screen
13. Select Grant admin consent for …
14. Click Yes to Grant admin consent confirmation
10.
11.
15. Confirm that the screen looks similar to below with your listed permissions, Admin Consent Req set to Yes and
Granted for has a green check
12.
13.

Instructions Part B
1. Look for Certificates & secrets in the left hand side menu and select it
2. Then select New client secret on the main part of the page

3. Enter a description i.e. RezolveAIBot and click Add
14.

5. Copy the Value and Secret ID and save them somewhere
6. Select Overview in the left hand side menu
7. Copy the Application (client) ID and save with Client Secret ID
8. Select Manifest in the left hand side menu
9. Click on Download


10. Send the Application (client) ID, Client Secret ID and the downloaded Manifest to Rezolve


![Page 2 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page2_4.png)

![Page 2 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page2_5.png)

![Page 2 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page2_6.png)

![Page 3 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page3_4.png)

![Page 3 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page3_5.png)

![Page 3 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page3_6.png)

![Page 3 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page3_7.png)

![Page 4 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page4_4.png)

![Page 4 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page4_5.png)

![Page 5 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page5_4.png)

![Page 5 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page5_5.png)

![Page 5 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page5_6.png)

![Page 6 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page6_4.png)

![Page 6 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page6_5.png)

![Page 7 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page7_4.png)

![Page 7 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page7_5.png)

![Page 8 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page8_4.png)

![Page 8 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page8_5.png)

![Page 9 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page9_4.png)

![Page 9 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page9_5.png)

![Page 9 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page9_6.png)

![Page 10 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page10_4.png)

![Page 11 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page11_4.png)

![Page 12 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page12_4.png)

![Page 12 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page12_5.png)

![Page 13 Image](/img/reference/Graph%20API%20Guides/images/Enabling-Graph-API-Permissions-on-Exisiting-SSO-App--Password-Reset-Flow_page13_4.png)