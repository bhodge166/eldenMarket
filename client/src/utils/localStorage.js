export const getItemIds = () => {
  const savedItemIds = localStorage.getItem("saved_items")
    ? JSON.parse(localStorage.getItem("saved_items"))
    : [];

  return savedItemIds;
};

export const saveItemsIds = (itemIdArr) => {
  if (itemIdArr.length) {
    localStorage.setItem("saved_items", JSON.stringify(itemIdArr));
  } else {
    localStorage.removeItem("saved_items");
  }
};

export const removeItemId = (id) => {
  const savedItemIds = localStorage.getItem("saved_items")
    ? JSON.parse(localStorage.getItem("saved_items"))
    : null;

  if (!savedItemIds) {
    return false;
  }

  const updatedSavedItemIds = savedItemIds?.filter(
    (savedItemId) => savedItemId !== id
  );
  localStorage.setItem("saved_items", JSON.stringify(updatedSavedItemIds));

  return true;
};
