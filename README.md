# @kencrocken/colorful-loader

A colorful loader component for React. Check out the [storybook](https://kencrocken.github.io/colorful-loader/).

## Installation

```sh
npm i @kencrocken/colorful-loader
```

## Usage

#### With defaults

```ts
import { ColorfulLoader } from "colorfulLoader";

const Example = () => {
  return (
      <ColorfulLoader />
  );
};

export default Example;
```

#### Defaults

- **colors**  
  The default colors that the component will cycle through.
  The default colors are:

  ```ts
  [
    '#FFE629',
    '#18A6D1',
    '#CCC205',
    '#54D3D3',
    '#9776C1',
    '#ED4545',
    '#FF9100',
    '#65B730',
    '#FF6136',
    '#AD7745',
    '#FF71A0'
  ];
  ```

- **animationSteps**  
  The number of keyframes in the animation. The default is **11** steps (not including the starting and finishing steps).

- **animationDuration**  
  The length of the animation. The default is **5** seconds.

#### Customized

```ts
import { ColorfulLoader } from "colorfulLoader";

const Example = () => {
  const colors = ["#FF0000", "#00FF00", "#0000FF"];
  const duration = 1;
  const steps = 30;
  return (
      <ColorfulLoader
        colors={colors}
        animationDuration={duration}
        animationSteps={steps}
      />
  );
};

export default Example;
```

## Testing

This project uses Vitest for testing. Run the following command to execute the tests:

```sh
npm run test
```

## Building

This project uses Vite for building. Run the following command to build the project:

```sh
npm run build
```

## Storybook

This project uses Storybook for developing UI components in isolation. You can run Storybook with the following command:

```sh
npm run storybook
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the ISC license.
