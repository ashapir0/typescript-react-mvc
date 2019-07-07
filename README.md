## TypeScript React MVC (Example Implementation)
#### Purpose
The purpose of this repository is to illustrate a scalable frontend/React pattern of development. This pattern is horizontally scalable and easy sihlos your dependency tree while maintaining the ability to pass down high-level services and information (Application Configurations and Services).
### Architecture Diagram
![architecture](./documentation/architecture.png)
#### Overview
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
Controllers handle all the business logic in your application (validating forms, fetching backend data, pulling/pushing data from stores, etc.).
#### Registries / DI
The use of registries and dependency injection 
#### SOLID Adherance
##### S (Single Responsibility Principle)
> "A class should only have a single responsibility, that is, only changes to one part of the software's specification should be able to affect the specification of the class."

The soul of this pattern (and all clean code) begins with a strong respect for this principle. A class (and functions) should have one and only one purpose (and should have only one reason to change). This is why we do not perform business logic in our state, or make external calls in our controllers. If a backend endpoint was to change, we only have to change our service layer.
##### O (Open-closed Principle)
> "Software entities ... should be open for extension, but closed for modification."

A quick glance at the architecture diagram will reveal a clean chain of extension in all of the layers (controllers, state, views). Dependencies are required by most of these classes and therefore are accessible. However no extension of an end-use is allowed (extending HomeController).
##### L (Liskov Substitution Principle)
> "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."