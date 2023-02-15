const BannerSliderItem = (props) => {
return `
    <div class="banner-slide" data-banner="slider" data-id"${props.id}">
        <div class="banner-slide_item" data-banner="item">
            <a href="${props.slug}" class="banner-slide_link">
                <img class="banner-slide_cover" src="${props.imageCover}" alt="${props.title}">
                <img class="banner-slide_title" src="${props.imageTitle}" alt="${props.title}" data-banner="img-title" />
                </a>
    </div>
    `
}

export default BannerSliderItem