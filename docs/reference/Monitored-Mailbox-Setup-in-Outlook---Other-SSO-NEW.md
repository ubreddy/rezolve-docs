---
title: 'Monitored Mailbox Setup in Outlook   Other SSO NEW'
sidebar_position: 1
status: 
whatsPending: 
---


# Monitored Mailbox Setup in Outlook - Other SSO NEW



Configuring a Outlook
Mailbox for Rezolve.ai
Ticketing to Monitor


MAILBOX REQUIREMENTS
1. Outlook Shared Mailbox
2. IMAP enabled (same as enabling Basic Auth)
3. Password available
4. MFA disabled
If Modern Auth is enabled for your Outlook tenant, additional steps must be taken. If you are not sure if your Outlook is
configured with Modern Auth enabled, Rezolve will be able to advise.
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
If Modern Auth is enabled for your Outlook tenant, additional steps must be taken. If you are not sure if your Outlook is
configured with Modern Auth enabled, Rezolve will be able to advise.
ENABLE GRAPH API
Graph API Permissions Required for basic MS Teams automation
1. IMAP\_AccessAsUser.All
2. Offline\_access
3. User.Read
TYPE OF PERMISSIONS REQUIRED
1) Application permissions
Instructions Part A
1. Open your Portal
2. Click on the View button for Manage Azure Active Directory

3. Click on App Registration and then select New Registration
4. Enter a name to call this set up i.e BotName GraphAPI for Teams, make sure “Accounts in this
organizational directory only (Actionable Science Inc. only - Single tenant)” is selected and click Register
This document contains proprietary information owned by Rezolve.ai and m ust not
be distributed outside without authorization.
11501 Dublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
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
Instructions Part B
1. From the menu on the left select Owner

1. Click Add Owner
3. Search for the desired owner account (ideally Rezolve Service Account), click on it and then click
Select
• Account cannot have MFA enabled
• Account must be added as a member to the mailbox (we will show you how in part D)

Instructions Part C
1. Look for Certificates & secrets in the left hand side menu and select it
2. Then select New client secret on the main part of the page

3. Enter a description i.e. RezolveAIBot and click Add
11.

5. Copy the Value and Secret ID and save them somewhere
6. Select Overview in the left-hand side menu
7. Copy the Application (client) ID and save with Client Secret ID
8. Select Manifest in the left hand side menu
9. Click on Download


10. Send the Application (client) ID, Client Secret ID and the downloaded Manifest to Rezolve
Instructions Part D
1. Go to Microsoft 365 Admin Center
2. Under Teams & groups, select Shared mailboxes
3. Search for the monitored mailbox you created and click on the mailbox name
12.

4. In the menu that opens, scroll down to Members and click Edit
5. Click + Add Member
6. Search for the same account you added as owner to SSO app and click Add
13.


![Page 2 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page2_4.png)

![Page 3 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page3_4.png)

![Page 3 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page3_5.png)

![Page 4 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page4_4.png)

![Page 4 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page4_5.png)

![Page 5 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page5_4.png)

![Page 5 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page5_5.png)

![Page 6 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page6_4.png)

![Page 6 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page6_5.png)

![Page 6 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page6_6.png)

![Page 7 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page7_4.png)

![Page 8 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page8_4.png)

![Page 8 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page8_5.png)

![Page 9 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page9_4.png)

![Page 9 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page9_5.png)

![Page 10 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page10_4.png)

![Page 10 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page10_5.png)

![Page 11 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page11_4.png)

![Page 11 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page11_5.png)

![Page 12 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page12_4.png)

![Page 12 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page12_5.png)

![Page 13 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page13_4.png)

![Page 13 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page13_5.png)

![Page 14 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page14_4.png)

![Page 15 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page15_4.png)

![Page 15 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page15_5.png)

![Page 16 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page16_4.png)

![Page 17 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page17_4.png)

![Page 17 Image](/img/reference/images/Monitored-Mailbox-Setup-in-Outlook---Other-SSO-NEW_page17_5.png)
