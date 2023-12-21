###
Node: v20.10.0


## Project Structure

Here's the overall structure of the application

```
root/
├── features/
├── pages/
├── public/
├── shared/
├── storage/
├── styles/
├── types/
└── utils/

```

### features
Separated folder for each feature module
    ```
    ├── features/
    │   ├── home/
    │   │   ├── components
    │   │   ├── elements
    │   │   ├── layouts
    ```
  #### components
  Create all your components here which are more than a basic building block. This could be a header or a footer component. Most likely those components are built out of multiple elements.

  #### elements
  This directory contains all the basic building blocks for your feature module. For example a button or a headline component.

  #### layouts
  Layouts are used to wrap your Views and provide them with the components which will be displayed by default in a specific layout. For example, you would include the Footer and the Header in a default layout.




### pages
All pages root of project

### shared
The shared directory is place to some common methods such as components reuseable , hooks reuseable, layouts reuseable, services reuseable

### styles
css

### types
Typescript type

### public 
Static files such as translate file, img file

### storage 
Redux toolkit query store & State Management

#### utils
The utils folder can be used for a variety of things, such as reusable library instances, some dummy data, or reusable utility functions.