## TypeScript React MVC (Example Implementation)
#### Purpose
The purpose of this repository is to illustrate a scalable frontend/React pattern of development. This pattern is horizontally scalable and easy sihlos your dependency tree while maintaining the ability to pass down high-level services and information (Application Configurations and Services).
### Architecture Diagram
![architecture](./documentation/architecture.png)
### Architecture Overview
Generally speaking all high-level views (pages, sub-views) have two siblings _a controller and a state_.
* _View_ - A view should access values in the state and invoke functions on the controller. 
* _Controller_ - A controller can access and mutate the state and perform business logic with use of services.
* _State_ - A state is purely a value-store (although with MobX computed values are allowed). No business logic (array reductions, service calls, etc) should ever exist in state.
##### Example:
```
├── controllers
│   └── HomeController.ts
├── states
│   └── HomeState.ts
└── views
    └── HomeView.tsx
```
#### Controllers
Controllers handle all the business logic in your application (validating forms, fetching backend data, pulling/pushing data from stores, etc.). It's generally good practice to have utility-layers for reusable functionality.  Clean Code holds that functions should be meaningfully named and should do one and one thing only. Just because you have a high-level handler, do not make the pitfall of adding too much functionality in the high-level function [example](https://github.com/ashapir0/typescript-react-mvc/blob/master/src/controllers/HomeController.ts). In this example, you could easily write all of this logic in the high-level ```fetchStories``` function.  However, separating them out (and eventually moving them to utility layers) is good practice.
#### States
States are pure value-stores and should never encapsulate any sort of mutation logic. Computed values are still a passthrough representation of the state and are therefore allowed.
#### Views
Views invoke high-level controller functions and access the state to display values to the user. No business logic should exist in views. Lifecycle events or otherwise (click, typing, etc.) can invoke the controller.
#### Registries / DI
The use of registries and dependency injection aides greatly in scaling while keeping your code explicit and modular.
### SOLID Adherance
##### S (Single Responsibility Principle)
> "A class should only have a single responsibility, that is, only changes to one part of the software's specification should be able to affect the specification of the class."

The soul of this pattern (and all clean code) begins with a strong respect for this principle. A class (and functions) should have one and only one purpose (and should have only one reason to change). This is why we do not perform business logic in our state, or make external calls in our controllers. If a backend endpoint was to change, we only have to change our service layer.
##### O (Open-closed Principle)
> "Software entities ... should be open for extension, but closed for modification."

A quick glance at the architecture diagram will reveal a clean chain of extension in all of the layers (controllers, state, views). Dependencies are required by most of these classes and therefore are accessible. However no modification of an general-use is allowed (modifying the base Controller).
##### L (Liskov Substitution Principle)
> "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."

Liskov does not really apply to the general-case implemented here as its geared more towards entities.
##### I (Interface Segregation Principle)
> "Many client-specific interfaces are better than one general-purpose interface"

The spirit of the ISP states that an end-use-case should not need to depend on general interface methods. There are no built-in methods in this pattern except for React's render method (which can be subsituted with another framework). Therefore, this pattern adheres to ISP.
##### D (Dependency Inversion Principle)
> "One should "depend upon abstractions, \[not\] concretions"

While this applies generally more towards business-logic, (repository layer interface instead of access on implementation specific like Mongo or Postgres). If you wanted to, you could have your controllers be interfaces with this pattern.  However, in my humble opinion I think that ventures a bit into the realm of over-engineering.

#### References
[SOLID](https://en.wikipedia.org/w/index.php?title=SOLID&oldid=899311582})