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