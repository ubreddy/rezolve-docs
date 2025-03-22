---
id: card
title: Card Components
sidebar_label: Card Components
description: Documentation for Card Components
---

# Card Components

The Card component allows you to create Adaptive Cards using Microsoft's Adaptive Card standard to organize, display, and capture information. These cards make up the majority of the bot's UI.


![Card Components](../../../static/img/Creator%20Studio/Flows_Components.jpg)



## Form Cards

The Form Card allows you to create a basic adaptive card just using Slots as inputs. When selected, you will see an option to select all the slots you'd like to use, and Creator Studio will automatically organize them into a very basic card.


![Form Card](../../../static/img/Creator%20Studio/Form_Card.jpg)


## Display Cards

The Display Card allows you to display a message to an end-user. The data to be displayed on the Adaptive Card is specified in the Content field during the card creation process. Display cards cannot be used to capture inputs. Upon executing a Display Card, the user will see card appear and then the bot will immediately move on to the next step in the flow. These cards are ideal for quick messages when there is no expectation for the user to respond.


![Display Card](../../../static/img/Creator%20Studio/Display_Card.jpg)


## Choice Cards

The Choice Card allows you to capture user inputs. This is the most common type of card used today. When a Choice Card is executed by the bot, the flow will halt until the end-user clicks on a Submit Action or sends the bot a message. These cards may contain various input fields and/or buttons, offering a variety of ways for users to interact. Unlike Form Cards, these are highly customizable, which is why they are used almost exclusively throughout the product.

![Choice Card](../../../static/img/Creator%20Studio/Choice_Card.jpg)
