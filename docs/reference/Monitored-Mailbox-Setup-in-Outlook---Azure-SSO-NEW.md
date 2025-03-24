---
title: 'Monitored Mailbox Setup in Outlook   Azure SSO NEW'
sidebar_position: 1
status: 
whatsPending: 
---


# Monitored Mailbox Setup in Outlook - Azure SSO NEW



Configuring an Outlook
Mailbox for Rezolve.ai
Ticketing to Monitor


MAILBOX REQUIREMENTS
1. Outlook Shared Mailbox
2. IMAP enabled
3. Password available
4. MFA disabled
If Modern Auth is enabled for your Outlook tenant, additional steps must be completed. If you are not sure if your
Outlook is configured with Modern Auth enabled, please follow these steps to verify:
1. Login to your Office 365 Admin Console
2. Click Show All from the menu on the left
3. Select Settings, then choose Org Settings
4. Under Service Tab, look for Modern Auth
Based on the message displayed, you will know whether your setup is modern authentication or basic authentication.
MODERN AUTH ENABLED BASIC AUTH ENABLED

Note: As per Microsoft, “Your shared mailbox can store up to 50GB of data without you assigning a license to it. After
that, you need to assign a license to the mailbox to store more data.”
CREATING THE MAILBOX
1. Go to Microsoft 365 Admin Center
2. Under Teams & groups, select Shared mailboxes
3. Select + Add a shared mailbox

4. Provide your mailbox with a name, the email address will automatically populate, modify any of the other
fields if needed and click on Save changes when ready
VERIFYING IMAP SETTINGS
1. Scroll down and click Edit under Exchange settings

2. Select mailbox features from the menu on the left and make sure IMAP is Enabled
SETTING UP A PASSWORD FOR THE MAILBOX
1. From the main Office 365 menu, go to the Users sub menu and select Active Users

2. Search for the mailbox and select it
3. Click Reset Password
4. Either select “Automatically create a password” or uncheck and manually create the password
5. Unselect “Require this user to change their password when they first sign in”
6. Select “Email the sign-in info to me” and select Reset password

7. Provide Rezolve with the email address and password
DISABLE MFA IN FOR A USER IN OFFICE 365
1. Go to Microsoft 365 Admin Center
2. Under Users, select Active Users
3. Click on Multi-factor authentication (If not visible for you, you may have to click on the … or More option first)

4. Search for the mailbox in the user list and select the checkbox next to the display name
5. The Quick Steps menu will now show on the right, click on Disable and confirm to Disable

IF MODERN AUTH IS ENABLED FOR YOUR OUTLOOK
Additional Requirements:
1. Enable Graph APIs
2. Support Account for Rezolve
3. MFA Disabled
If Modern Auth is enabled, Rezolve will require that you create a support account in your domain that has Teams
access. This account will be required to access the mailbox token. We will also use this account when you report an
issue that we need to investigate, to verifying a new enhancement and/or to verify any implementation of your
request. You manage and maintain this account’s access to your environment.
Enable Graph API
Graph API Permissions Required for Modern Auth Mailbox:
1. IMAP\_AccessAsUser.All
2. Offline\_access
3. User.Read
Instructions Part A – Enabling Graph API
1. Open your Azure Portal
2. Click on the View button for Manage Azure Active Directory

3. Click on App Registration
4. Search and Open the Rezolve SSO application you created

5. The App Overview page will open, look for API Permissions in the left-hand side menu and click on it
6. Select Add a Permission on the main part of the page
1.
7. Select Microsoft Graph
2.
Teams and click Register
3.
5.
6.
5.

8. Click on Delegate permissions option
7.
8.
9. Type IMAP in the search box, select IMAP.AccessAsUser.All and click Add Permissions
10. Click Add a Permission &gt; Microsoft Graph &gt; Delegate permissions again
11. Type offline in the search box, this time select offline\_access and click Add Permissions
12. Click Add a Permission &gt; Microsoft Graph &gt; Delegate permissions again
13. Type user in the search box, this time select User.Read and click Add Permissions
Here is an example:
This 9d.o cu ment contains proprietary information owned by Rezolve.ai and must not
be distributed outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
14. Confirm that the screen looks similar to below with your listed permissions, Admin Consent Req set to Yes
and Granted for has a green check
10.
Instructions Part B – Adding App Owner
15. From the menu on the left select Owner

1150 1 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
16. Click Add Owner
17. Search for the Rezolve Support Account, click on it and then click Select
• Account cannot have MFA enabled
• Account must be added as a member to the mailbox (we will show you how in part D) and
in the allowed users list for Rezolve SSO app

Instructions Part C – Adding Client Secret to app
18. Look for Certificates & secrets in the left hand side menu and select it
19. Then select New client secret on the main part of the page

20. Enter a description i.e. RezolveAIBot and click Add
11.

21. Copy the Value and Secret ID and save them somewhere
22. Select Overview in the left-hand side menu
23. Copy the Application (client) ID and save with Client Secret ID
24. Select Manifest in the left hand side menu
25. Click on Download


26. Send the Application (client) ID, Client Secret ID, Client Secret Value and the downloaded Manifest to
Rezolve
Instructions Part D – Adding Support Account to SSO A llowed list
27. F rom the menu on the left, click on Enterprise application
This doc ument contains proprietary information owned by Rezolve.ai and must not
be distri buted outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
12.
28. Search for Rezolve SSO app and select it
29. Under Manage on the left, select Users and groups , select + Add user/group
29. Under Users, click on None Selected
Instructions Part E – Adding Support Account as Mailbox Member
30. Search for the Rezolve Support Account and click on it in search results
31. Click Select
This document contains proprietary information owned by Rezolve.ai and must not
be distributed o utside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
32. Click Assign
Instructions Part E – Adding Support as Member of the Mailbox
33. Go to Microsoft 365 Admin Center
34. Under Teams & groups, select Shared mailboxes
35. Search for the monitored mailbox you created and click on the mailbox name
36. In the menu that opens, scroll down to Members and click Edit
14.
This doc ument contains proprietary information owned by Rezolve.ai and must not
be distributed outside without authorization.
15.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
37. Click + Add Member
38. Search for the Rezolve Support account (same account you added as owner to SSO app) and click
Add
39. Notify Rezolve that you have completed setup on your side. Provide the with the support credentials if
they do not have them so that they may complete the setup.
16.


![Page 2 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page2_4.png)

![Page 2 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page2_5.jpeg)

![Page 2 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page2_6.jpeg)

![Page 3 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page3_4.png)

![Page 4 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page4_4.png)

![Page 4 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page4_5.png)

![Page 5 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page5_4.png)

![Page 5 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page5_5.png)

![Page 6 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page6_4.png)

![Page 6 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page6_5.png)

![Page 7 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page7_4.png)

![Page 7 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page7_5.png)

![Page 8 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page8_4.png)

![Page 9 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page9_4.png)

![Page 10 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page10_4.png)

![Page 10 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page10_5.png)

![Page 11 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page11_4.png)

![Page 11 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page11_5.png)

![Page 12 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page12_4.png)

![Page 12 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page12_5.png)

![Page 13 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page13_4.png)

![Page 13 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page13_5.png)

![Page 14 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page14_4.png)

![Page 14 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page14_5.png)

![Page 15 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page15_4.png)

![Page 15 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page15_5.png)

![Page 16 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page16_4.png)

![Page 17 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page17_4.png)

![Page 17 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page17_5.png)

![Page 18 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page18_4.png)

![Page 18 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page18_5.png)

![Page 19 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page19_4.png)

![Page 19 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page19_5.png)

![Page 19 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page19_6.png)

![Page 20 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page20_4.png)

![Page 20 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page20_5.png)

![Page 21 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Azure-SSO-NEW_page21_4.png)
