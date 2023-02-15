const Collection = (props) => {
return `
    <div class="collection" data-carrousel="collection" data-id="${props.id}">
                <h3 class="collection_title">${props.title}</h3>
            <div class="movie-carousel" >
                <button class="arrow-slider arrow-slider-left" data-carrousel="btn-previous">  </button>
            <button class="arrow-slider arrow-slider-right" data-carrousel="btn-next">   </button>
                <ul class="movie-carousel_list" data-carrousel="list"></ul>
            </div>
    </div>
 `
}

export default Collection