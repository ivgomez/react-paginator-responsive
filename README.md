# React Paginator

_React Paginator Responsive Component_

## Development Environments

- [Storybook](http://localhost:6006)

### Installation

**npm**

```bash
npm i react-paginator-responsive
```

### Example

```
import { Paginator } from "react-paginator-responsive";

function App() {

  return (
    <Paginator page={1} pageSize={10} pageGroupSize={7} totalItems={120} />
  );
  
}

export default App;

```

### Custom Styles

```
import { Paginator } from "react-paginator-responsive";

function App() {

  const styles = {
    hideBackNextButtonText: false,
    backAndNextTextButtonColor: "black",
    paginatorButtonColor: "green",
    paginatorButtonBackgroundColor: "#FFF8DC",
    paginatorButtonSelectedColor: "red",
    paginatorButtonHoverColor: "#F0F8FF",
    lateralMargin: "0",
  };

  return (
    <Paginator
      page={1}
      pageSize={10}
      pageGroupSize={7}
      totalItems={120}
      styles={styles}
    />
  );
}

export default App;
```

## Documentation

_In progress..._
