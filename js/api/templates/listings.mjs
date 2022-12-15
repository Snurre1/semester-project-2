export function postTemplate(postData) {
  const listing = document.createElement("div");
  listing.classList.add("row", "border", "border-dark", "m-5", "p-4");
  const Container = document.createElement("div");
  Container.classList.add("container", "bg-light", "text-center");
  listing.append(Container);
  const titleContainer = document.createElement("div");
  titleContainer.classList.add("container");
  Container.append(titleContainer);
  const titleBracket = document.createElement("h4");
  titleBracket.innerText = `Title: ${postData.title}`;
  titleContainer.append(titleBracket);
  if (postData.media) {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("container", "w-50");
    Container.append(imageContainer);
    const image = document.createElement("img");
    image.classList.add("img-thumbnail");
    image.src = `${postData.media[0]}`;
    image.alt = `${postData.title}`;
    imageContainer.append(image);
  }
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("container");
  Container.append(descriptionContainer);
  const description = document.createElement("p");
  description.innerText = `Description of the item: ${postData.description}`;
  descriptionContainer.append(description);
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("container");
  Container.append(buttonsContainer);
  const buttonOne = document.createElement("a");
  buttonOne.classList.add("btn", "btn-primary", "m-2");
  buttonOne.innerText = "Make a bid";
  buttonOne.href = `/html/listings/listing.html?id=${postData.id}`;
  buttonsContainer.append(buttonOne);
  const buttonTwo = document.createElement("a");
  buttonTwo.classList.add("btn", "btn-primary", "m-2");
  buttonTwo.innerText = "View bids";
  buttonsContainer.append(buttonTwo);
  return listing;
}

export function renderListingsTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));
}
