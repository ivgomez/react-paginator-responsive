# React Paginator

_React Paginator Responsive Component_

## Development Environments

- [Demo](https://ivgomez.github.io/paginator-front-test)
- [Storybook](https://60b1c76e3474f6004126eacc-bsktjyzmmc.chromatic.com/?path=/story/paginator--paginator)

### Installation

**npm**

```bash
npm i react-paginator-responsive
```

### Example

<p align="center">
  <img width="80%" src="https://github.com/ivgomez/react-paginator-responsive/blob/main/docs/images/paginatorGif.gif">
</p>


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
    lateralMargin: "0 2rem",
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

## Props

| Name              | Type         | Description                                          |
| ----------------- | ------------ | ---------------------------------------------------- |
| **page**          | number       | current page.                                        |
| **pageSize**      | number       | Items displayed by page.                             |
| **pageGroupSize** | number       | Buttons page size displayed in the paginator.        |
| **items**         | object array | Data.                                                |
| **callback**      | function     | Function to call the endpoint with a new page value. |
| **styles**        | object       | Custom styles.                                       |

## Custom Styles Props

| Name                                       | Type    | Description                                                                                                        |
| ------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------ |
| **pageSizehideBackNextButtonText**         | boolean | Show or hide the text of the previous and next buttons. By default is shown with a true value.                     |
| **backAndNextTextButtonColor**             | string  | Text color of the previous and next buttons.                                                                       |
| **paginatorButtonColor**                   | string  | Text Color of the page buttons list.                                                                               |
| **paginatorButtonBackgroundColor**         | string  | Backgound color of the page buttons list.                                                                          |
| **paginatorButtonSelectedColor**           | string  | Text color of the page button after be selected.                                                                   |
| **paginatorButtonHoverColor**              | string  | Background color of the page buttons list on hover.                                                                |
| **lateralMargin**                          | string  | lateral margin of the paginator component. Default value: `0px 0px 0px 0px`                                        |
| **iconColor**                              | string  | Icon color. You can use hex, rgb and rgba values to set it.                                                        |
| **disabledColor**                          | string  | Color for disable selector applied to icons and previous and next buttons. Use hex, rgb and rgba values to set it. |
| **PaginatorInfoColor**                     | string  | Color applied to the paginator info section. Use hex, rgb and rgba values to set it.                               |
| **paginatorButtonSelectedBackgroundColor** | string  | Color applied to the background of the selected page button. Use hex, rgb and rgba values to set it.               |
| **hidePaginatorInfo**                      | boolean | Hide or show the pagination section info. Boolean value.                                                           |
| **centerPaginator**                        | boolean | Center the paginator and the pagination section info. Boolean value.                                               |
