---
id: testing-flows
title: Testing Flows
sidebar_label: Testing Flows
description: Documentation for Testing Flows
status: 
whatsPending: 
---

# Testing Flows

Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation's Creator Studio includes powerful testing capabilities that allow developers to validate and troubleshoot bot flows during development without requiring publication to production. The Run Bot feature, complemented by a comprehensive Debug Mode, provides immediate feedback on flow functionality, allowing developers to identify and resolve issues quickly while iterating on designs.

These testing tools are essential for efficient bot development, enabling rapid cycles of creation, testing, and refinement while ensuring that only thoroughly tested flows reach end users. By providing insight into the bot's decision-making process and data handling, these features significantly reduce development time and improve the quality of the final product.


![Testing Flow One](/img/Creator%20Studio/testing_flow_one.png)

## Run Bot Functionality

### Accessing Run Bot
The Run Bot feature is easily accessible during flow development:
1. Open the flow you wish to test in Creator Studio
2. Locate the Play (▶️) button in the interface
3. Click the Play button to initiate the testing environment
4. A chat interface appears, allowing interaction with the flow

![Testing Flow Two](/img/Creator%20Studio/testing_flow_two.png)

This straightforward activation process allows developers to quickly switch between development and testing without changing environments or publishing flows.

### Testing Environment
When Run Bot is activated, a testing environment launches that simulates how the flow will behave when published:
- **Chat Interface**: Replicates the user experience with the bot
- **Real-Time Interaction**: Processes inputs and generates responses as in production
- **Adaptive Card Rendering**: Displays cards and interactive elements as users would see them
- **Flow Execution**: Follows the exact logic defined in the flow
- **Data Processing**: Handles variables, slots, and API calls as configured

![Testing Flow Three](/img/Creator%20Studio/testing_flow_three.png)

This environment provides a realistic preview of how the flow will function when deployed, allowing developers to experience the conversation from a user's perspective.

## Key Benefits
The Run Bot feature offers numerous advantages to bot developers:
1. **Immediate Feedback**: Test changes instantly without deployment delays
2. **Isolated Testing**: Experiment without affecting production environments
3. **Conversation Flow Validation**: Verify that dialog paths work as expected
4. **User Experience Assessment**: Evaluate the conversation from the user's perspective
5. **Rapid Iteration**: Make adjustments and retest quickly
6. **Comprehensive Testing**: Test various input scenarios and edge cases
7. **Card Visualization**: Confirm that adaptive cards render correctly

By providing these capabilities within the development environment, Run Bot significantly accelerates the development cycle and improves flow quality.

## Debug Mode
For more in-depth analysis and troubleshooting, Creator Studio offers a powerful Debug Mode that provides visibility into the internal workings of a flow during execution.

### Activating Debug Mode
Debug Mode can be enabled during Run Bot testing:
1. Launch Run Bot for your flow
2. Look for the Debug toggle or option
3. Enable Debug Mode before beginning your test conversation
4. Proceed with testing while Debug information is displayed

![Testing Flow Four](/img/Creator%20Studio/testing_flow_four.png)

### Debug Information Display
When Debug Mode is active, the system provides detailed information about the flow's execution:
- **Component Execution Path**: Shows the sequence of components being processed
- **Variable Values**: Displays current values of slots and variables
- **Decision Points**: Highlights conditional logic and decision outcomes
- **API Responses**: Shows data received from API calls
- **Error Messages**: Identifies when and why errors occur
- **Timing Information**: Indicates processing time for various operations

![Testing Flow Five](/img/Creator%20Studio/testing_flow_five.png)

This information appears alongside the test conversation, providing a synchronized view of both the user experience and the underlying technical execution.

### Detailed Flow Tracing
Debug Mode provides step-by-step tracing through the flow:
1. **Component Highlighting**: Visually indicates which component is currently active
2. **Execution Sequence**: Shows the ordered path through the flow
3. **Data Transformations**: Illustrates how data changes as it moves through components
4. **Condition Evaluation**: Demonstrates how conditional logic is processed
5. **Error Points**: Pinpoints exactly where issues occur


![Testing Flow Six](/img/Creator%20Studio/testing_flow_six.png)

This tracing capability allows developers to follow the exact execution path, understanding how the bot moves from one component to another based on user inputs and internal logic.

### Data Inspection
A particularly valuable aspect of Debug Mode is its ability to show data throughout the flow:
- **Slot Contents**: Current values stored in slots
- **Context Variables**: System and user-defined context information
- **API Payload Examination**: Request and response data for API calls
- **User Input Processing**: How raw input is interpreted and processed
- **Template Rendering**: How dynamic content is assembled

This visibility into data handling helps identify issues with data capture, transformation, or utilization throughout the flow.

## Practical Applications

### Iterative Development
The Run Bot and Debug Mode features support an efficient iterative development process:
1. Develop an initial version of a flow
2. Use Run Bot to test basic functionality
3. Identify issues or improvement opportunities
4. Enable Debug Mode to pinpoint specific problems
5. Make targeted adjustments to the flow
6. Immediately retest to verify fixes
7. Repeat until the flow functions as intended

This rapid cycle significantly reduces development time compared to approaches that require deployment for testing.

### Complex Flow Troubleshooting
For sophisticated flows with multiple branches and conditions, Debug Mode is particularly valuable:
- Trace execution through complex decision trees
- Identify why certain branches are (or aren't) being triggered
- Verify that all conditions are evaluating as expected
- Ensure data is properly maintained throughout different paths
- Confirm that loop structures function correctly

### API Integration Validation
When flows interact with external systems through APIs, Debug Mode provides critical insights:
- Verify that API requests are correctly formatted
- Examine returned data structure and content
- Identify authentication or connection issues
- Validate error handling for API failures
- Confirm proper data mapping from responses to slots

### Performance Optimization
Debug Mode can help identify performance bottlenecks:
- Observe which components take longer to process
- Identify inefficient data handling or repetitive operations
- Spot unnecessary API calls or resource-intensive operations
- Validate caching effectiveness

## Best Practices for Testing with Run Bot and Debug Mode

### Systematic Testing Approach
Develop a structured approach to flow testing:
1. **Happy Path Testing**: First verify that the primary intended conversation flow works
2. **Variation Testing**: Test common variations of expected inputs
3. **Edge Case Testing**: Deliberately test unusual or extreme scenarios
4. **Error Path Testing**: Verify that error handling works appropriately
5. **Integration Testing**: Confirm that connections to other systems function

### Regression Testing
Use Run Bot to perform regression testing after changes:
1. Document expected conversation paths
2. After making changes, use Run Bot to verify all paths still work
3. Pay special attention to areas that might be affected by recent changes
4. Maintain a test script of critical functionality to check regularly

### Collaborative Debugging
Leverage Debug Mode for team problem-solving:
1. When encountering complex issues, capture Debug Mode output
2. Share with team members to collaboratively analyze problems
3. Use for training new team members on flow logic and execution

### Documentation Through Testing
Use Run Bot sessions to create documentation:
1. Capture test conversations that demonstrate key functionality
2. Document expected behavior alongside actual results
3. Create libraries of test cases for future reference
4. Generate user guides based on verified conversation flows


![Testing Flow Seven](/img/Creator%20Studio/testing_flow_seven.png)

## Technical Considerations

### Resource Usage
Debug Mode typically consumes additional system resources:
- Increased memory usage for tracking execution details
- Additional processing for logging and displaying debug information
- Potential for slower execution than production environment

These considerations rarely impact testing of individual flows but may be relevant for complex flows or resource-intensive operations.

### Security Considerations
When testing flows that access sensitive systems:
- Ensure test environments use appropriate credentials
- Consider using mock API responses for sensitive operations
- Be cautious about testing with production data
- Remember that debug logs may contain sensitive information

### Limitations
While powerful, Run Bot and Debug Mode have some limitations:
- May not perfectly replicate all aspects of the production environment
- Some user context variables might differ between testing and production
- Performance characteristics may vary from production deployment
- Some integrations may require special configuration for testing

## Conclusion
The Run Bot and Debug Mode features in Rezolve.ai | Next-Gen ITSM & HR Support | Agentic AI-Powered Automation's Creator Studio provide developers with powerful tools for testing and troubleshooting bot flows during development. By enabling immediate testing without publication and providing detailed visibility into flow execution, these features significantly streamline the development process.

The ability to instantly validate changes, trace execution paths, inspect data handling, and identify issues within the development environment creates a tight feedback loop that accelerates development and improves quality. This capability is particularly valuable for complex flows with multiple branches, conditions, and integrations.

By following best practices for systematic testing and leveraging the detailed insights provided by Debug Mode, developers can efficiently create robust, reliable bot flows that deliver excellent user experiences. These testing capabilities represent a critical component of the Creator Studio environment, enabling the rapid development of sophisticated conversational experiences with confidence.
