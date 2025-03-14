---
title: 'Existing Mailbox   Modern auth enabled Outlook'
sidebar_position: 1
---


# Existing Mailbox - Modern auth enabled Outlook

IF MODERN AUTH IS ENABLED FOR YOUR OUTLOOK
Additional Requirements:
1. IMAP Enabled
2. Enable Graph APIs
3. Support Account for Rezolve
4. MFA Disabled
If you are not sure if your Outlook is configured with Modern Auth enabled, follow these steps to verify.
1. Login to your Office 365 Admin Console
2. Click Show All from the menu on the left
3. Select Settings, then choose Org Settings
4. Under Service Tab, look for Modern Auth
Based on the message displayed, you will know whether the modern authentication is forced or the tenant is still using basic authentication.
MODERN AUTH ENABLED BASIC AUTH ENABLED
This document contains proprietary information owned by Rezolve.ai and must not be distributed
outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
If Modern Auth is enabled, Rezolve will require that you create a support account in your domain that has Teams access. This account will be
required to access the mailbox token. We will also use this account when you report an issue that we need to investigate, to verifying a new
enhancement and/or to verify any implementation of your request. You manage and maintain this account’s access to your environment.
VERIFYING IMAP SETTINGS OF SHARED MAILBOX
1. Scroll down and click Edit under Exchange settings
2. Select mailbox features from the menu on the left and make sure IMAP is Enabled
This document contains proprietary information owned by Rezolve.ai and must not be distributed
outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
SUPPORT ACCOUNT
If Modern Auth is enabled, Rezolve will require that you create a support account in your domain that has Outlook web and Teams access.
This account will be required to access the mailbox token. We will also use this account when you report an issue that we need to
investigate, to verifying a new enhancement and/or to verify any implementation of your request. You manage and maintain this
account’s access to your environment.
DISABLE MFA IN FOR A USER IN OFFICE 365
1. Go to Microsoft 365 Admin Center
2. Under Users, select Active Users
3. Click on Multi-factor authentication (If not visible for you, you may have to click on the … or More option first)
4. Search for the mailbox in the user list and select the checkbox next to the display name
5. The Quick Steps menu will now show on the right, click on Disable and confirm to Disable
6. Repeat step 4 and 5 for the Rezolve Support account
This document contains proprietary information owned by Rezolve.ai and must not be distributed
outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
SETTING UP MODERN AUTH MAILBOX
Graph API Permissions Required for Modern Auth Mailbox:
1. IMAP\_AccessAsUser.All
2. Offline\_access
3. User.Read
Instructions Part A – Enabling Graph API
1. Open your Azure Portal
2. Click on the View button for Manage Azure Active Directory
This document contains proprietary information owned by Rezolve.ai and must not be distributed
outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
3. Click on App Registration
4. Search and Open the Rezolve SSO application you created
This document contains proprietary information owned by Rezolve.ai and must not be distributed
outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
5. The App Overview page will open, look for API Permissions in the left-hand side menu and click on it
6. Select Add a Permission on the main part of the page
1.
7. Select Microsoft Graph
2.
click Register
3.
5.
6.
5.
This document contains proprietary information owned by Rezolve.ai and must not be distributed
outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
8. Click on Delegate permissions option
7.
8.
9. Type IMAP in the search box, select IMAP.AccessAsUser.All and click Add Permissions
10. Click Add a Permission &gt; Microsoft Graph &gt; Delegate permissions again
11. Type offline in the search box, this time select offline\_access and click Add Permissions
12. Click Add a Permission &gt; Microsoft Graph &gt; Delegate permissions again
13. Type user in the search box, this time select User.Read and click Add Permissions
Here is an example:
This 9do. cum ent contains proprietary information owned by Rezolve.ai and must not be distributed
outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
14. Confirm that the screen looks similar to below with your listed permissions, Admin Consent Req set to Yes and Granted for has
a green check
10.
Instructions Part B – Adding App Owner
15. From the menu on the left select Owner
This document contains proprietary information owned by Rezolve.ai and must not be distr ibuted
outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
16. Click Add Owner
17. Search for the Rezolve Support Account, click on it and then click Select
• Account cannot have MFA enabled
• Account must be added as a member to the mailbox (we will show you how in part D) and in the allowed
users list for Rezolve SSO app
This document contains proprietary information owned by Rezolve.ai and must not be distributed
outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
Instructions Part C – Adding Client Secret to app
18. Look for Certificates & secrets in the left hand side menu and select it
19. Then select New client secret on the main part of the page
This document contains proprietary information owned by Rezolve.ai and must not be distributed
outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
20. Enter a description i.e. RezolveAIBot and click Add
11.
This document contains proprietary information owned by Rezolve.ai and must not be distributed
outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
21. Copy the Value and Secret ID and save them somewhere
22. Select Overview in the left-hand side menu
23. Copy the Application (client) ID and save with Client Secret ID
24. Select Manifest in the left hand side menu
25. Click on Download
This document contains proprietary information owned by Rezolve.ai and must not be distributed
outside without autho rization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
26. Send the Application (client) ID, Client Secret ID, Client Secret Value and the downloaded Manifest to Rezolve
Instructions Part D – Adding Support Account to SSO Allowed list
27. F rom the menu on the left, click on Enterprise application
This docu ment contains proprietary information owned by Rezolve.ai and must not be distributed
outside w ithout authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
12.
28. Search for Rezolve SSO app and select it
29. Under Manage on the left, select Users and groups , select + Add user/group
29. Under Users, click on None Selected
Instructions Part E – Adding Support Account as Mailbox Member
30. Search for the Rezolve Support Account and click on it in search results
31. Click Select
This document contains proprietary information owned by Rezolve.ai and must not be distributed
outside without au thorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
32. Click Assign
Instructions Part E – Adding Support as Member of the Mailbox
33. Go to Microsoft 365 Admin Center
34. Under Teams & groups, select Shared mailboxes
35. Search for the monitored mailbox you created and click on the mailbox name
36. In the menu that opens, scroll down to Members and click Edit
14.
This docu ment contains proprietary information owned by Rezolve.ai and must not be distributed
outside without authorization.
15.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
37. Click + Add Member
38. Search for the Rezolve Support account (same account you added as owner to SSO app) and click Add
39. Notify Rezolve that you have completed setup on your side. Provide the with the support credentials if they do not have
them so that they may complete the setup.
16.
This document contains proprietary information owned by Rezolve.ai and must not be distributed
outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai

![Page 1 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page1_4.png)

![Page 1 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page1_5.jpeg)

![Page 1 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page1_6.jpeg)

![Page 2 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page2_4.png)

![Page 2 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page2_5.png)

![Page 3 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page3_4.png)

![Page 3 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page3_5.png)

![Page 4 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page4_4.png)

![Page 5 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page5_4.png)

![Page 5 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page5_5.png)

![Page 6 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page6_4.png)

![Page 6 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page6_5.png)

![Page 7 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page7_4.png)

![Page 7 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page7_5.png)

![Page 8 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page8_4.png)

![Page 8 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page8_5.png)

![Page 9 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page9_4.png)

![Page 9 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page9_5.png)

![Page 10 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page10_4.png)

![Page 10 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page10_5.png)

![Page 11 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page11_4.png)

![Page 12 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page12_4.png)

![Page 12 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page12_5.png)

![Page 13 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page13_4.png)

![Page 13 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page13_5.png)

![Page 14 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page14_4.png)

![Page 14 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page14_5.png)

![Page 14 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page14_6.png)

![Page 15 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page15_4.png)

![Page 15 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page15_5.png)

![Page 16 Image](/img/reference/images/Existing-Mailbox---Modern-auth-enabled-Outlook_page16_4.png)