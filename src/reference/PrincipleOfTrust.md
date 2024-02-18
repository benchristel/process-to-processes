The Principle of Trust says that you should trust users not to corrupt their own data (or data shared by their group) as long as you provide adequate "undo" functionality (see the [[PrincipleOfReversibility]]).

Positive example: Pivotal Tracker. Any user can edit anything. There are few validations on state transitions and few required fields (the one I can think of is that stories must be estimated before they can be started).

Negative example: Jira (when misconfigured). The software encourages you to prevent people from doing things that are "against policy", often with very silly consequences when the policy fails to account for reality.

Christin Gorman argues against restricting users here: https://vimeo.com/138774243 (10 minutes in)