## TypeScript React MVC (Example Implementation)
### Architecture Diagram
![architecture](./documentation/architecture.png)
#### Overview
Generally speaking all high-level views (pages, sub-views) have two siblings *a controller and a state*.
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