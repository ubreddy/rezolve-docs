---
title: 'ServiceNow Integration with Rezolve.ai Chatbot NEW'
sidebar_position: 1
status: 
whatsPending: 
---


# ServiceNow Integration with Rezolve.ai Chatbot NEW



ServiceNow Integration
with Rezolve.ai Chatbot


For standard ticketing integration, the following is required:
• Service Account with API access enabled for Rezolve.ai
• An Agent Account for Rezolve.ai
In this document we will guide your ServiceNow Administrator through completing this.
SETTING UP A SERVICE ACCOUNT WITH API ACCESS
1. Log into ServiceNow using your administrative 3. Select Application Registry
credentials
2 . In the Search of the main menu type “oauth”
4. Select New on the Application Registries page

5. From the “What kind of OAuth application?” 6. In the name field put RezolveChatbot
screen, select fist option of Create an OAuth API
endpoint for external clients
7 . Click Submit
8. Using the Application Registry Search, look for Rezolve

9. Click on RezolveChatBot
10. Toggle the Client Secret to visible by clicking the padlock
11. Note down the Client ID and Client Secret. You will need to provide this to the Rezolve team to complete
configuration.
12. Click Update

CREATING AN AGENT ACCOUNT FOR REZOLVE.AI
1. In the Search of the main menu type “user” 3. On the Users page, click New
2. Under the Users and Groups menu, click Users
4. Fill out the User ID, First Name, Last Name and
mark account as Active in the form
5. Generate the password and copy it.
6. You will need to provide this to the ACS the User
ID and generated password.
7. Click Submit

8. On the Users page, search for the Rezolve Agent
9. Click on the Rezolve Agent
10. Scroll down to the tab menu and select the Roles tab

11. Click Edit
12. Under Collection, in the search box type “itil”

13. Select itil and click the right pointing arrow to add it to the Rezolve agent
14. Click Save

GIVING REZOLVE BOT ACCESS TO TICKET NOTES
(Optional – Only if Requested by ACS if not currently enabled)
1. Click on your profile icon in the top right-hand corner and select Elevate Roles
2. On the Elevate Roles pop-up, make sure security\_admin is checked and click OK

3. In the Search of the main menu type, “acl” 4. Select Access Control (ACL)
6. On the Access Control screen, go to the Names field and search for “sys\_journal” and select Journal Entry
[sys\_journal\_field]

11501 D ublin Blvd STE 200, Dublin, CA 94568 info@rezolve.ai | www.rezolve.ai
7. Scroll down and expand Required Roles section
8. Double click in the Insert New Role box type “itil”
9. Select itil from the dropdown 10. Click Check icon
.
11. Click Submit


![Page 2 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page2_4.png)

![Page 2 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page2_5.png)

![Page 2 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page2_6.png)

![Page 3 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page3_4.png)

![Page 3 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page3_5.png)

![Page 3 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page3_6.png)

![Page 3 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page3_7.png)

![Page 4 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page4_4.png)

![Page 4 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page4_5.jpeg)

![Page 5 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page5_5.jpeg)

![Page 5 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page5_7.png)

![Page 5 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page5_9.png)

![Page 6 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page6_4.png)

![Page 6 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page6_5.png)

![Page 6 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page6_6.png)

![Page 7 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page7_4.png)

![Page 7 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page7_5.png)

![Page 8 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page8_4.png)

![Page 8 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page8_5.jpeg)

![Page 9 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page9_4.png)

![Page 9 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page9_5.jpeg)

![Page 10 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page10_4.jpeg)

![Page 10 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page10_5.png)

![Page 10 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page10_6.jpeg)

![Page 11 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page11_4.jpeg)

![Page 11 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page11_5.png)

![Page 11 Image](/img/reference/images/ServiceNow-Integration-with-Rezolve.ai-Chatbot-NEW_page11_6.jpeg)
