export const getPaginatorInfo = (
  pageSize: number,
  lastPage: number,
  currentPage: number,
  items: number[],
  totalItems: number
) => {
  let itemsDisplayed = 1;
  let totalizer = pageSize;
  let multiplier = currentPage;

  if (
    (items?.length === pageSize && currentPage !== 1) ||
    currentPage === lastPage
  ) {
    multiplier = currentPage - 1;
    itemsDisplayed = pageSize * multiplier + 1;
    totalizer = currentPage * pageSize;
  }
  if (items?.length < pageSize) {
    totalizer = (currentPage - 1) * pageSize + items.length;
  }
  return `${itemsDisplayed}-${totalizer} of ${totalItems} items`;
};
