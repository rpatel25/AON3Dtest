window.addEventListener('load', loadImg);

function loadImg() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const galleryWrapper = document.querySelector('.gallery__wrapper');

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let arrSize = 9;
            let slicedData = data.slice(0, arrSize);

            slicedData.map(img => {
                let divContainer = document.createElement('div');
                divContainer.classList.add("col-12", "col-lg-4", "gallery-item");
                let imageLink = document.createElement('a');
                imageLink.setAttribute('href', "#");
                let imageDiv = document.createElement('div');
                imageDiv.classList.add("gallery-item__img");
                imageDiv.style.backgroundImage = "url('" + img.url + "')";

                let infoTitle = document.createElement('p');
                infoTitle.classList.add("img__title");
                infoTitle.innerHTML = img.title;
                infoTitle.setAttribute('title', img.title);
                infoTitle.setAttribute('style', 'display: none');
                imageDiv.append(infoTitle);
                
                imageLink.append(imageDiv);
                divContainer.append(imageLink);
                galleryWrapper.append(divContainer);
            });
        });
}