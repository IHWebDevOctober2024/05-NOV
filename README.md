# Props and destructuring

## Reviewed props

Props are data that is passed from a parent component to a child component.
It's like passing arguments to a function (functional components).
In the paren element we pass the props like they were attributes in an HTML element.

```jsx
<ChildComponent prop1="value1" prop2="value2" />
```

In the child component we can access the props like this:

```jsx
const ChildComponent = (props) => {
  console.log(props.prop1); // value1
  console.log(props.prop2); // value2
};
```

## Destructuring

Today we have learned about destructuring.
We create multiple variables based on an object or array.

### Object destructuring in props

```jsx
const ChildComponent = ({ prop1, prop2 }) => {
  console.log(prop1); // value1
  console.log(prop2); // value2
};
```

## Spread operator

The spread operator is commonly used to create new arrays by combining existing arrays.

```jsx
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3); // [1, 2, 3, 4, 5, 6]
```

We can also add data in the middle of the new array.

```jsx
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, 100, ...arr2];

console.log(arr3); // [1, 2, 3, 100, 4, 5, 6]
```

With objects is very similar.

```jsx
const obj1 = { prop1: "value1", prop2: "value2" };
const obj2 = { prop3: "value3", prop4: "value4" };

const obj3 = { ...obj1, ...obj2 };

console.log(obj3); // { prop1: 'value1', prop2: 'value2', prop3: 'value3', prop4: 'value4' }
```

Or we can modify the object.

```jsx
const obj1 = { prop1: "value1", prop2: "value2" };

const obj2 = { ...obj1, prop2: "new value" };

console.log(obj2); // { prop1: 'value1', prop2: 'new value' }
```
