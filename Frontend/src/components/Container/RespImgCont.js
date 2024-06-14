// this container can display a responsive promo image and a product section

function RespImgCont(props) {
    return (
        <section className="sm:flex sm:flex-row sm:w-full lg:w-full lg:gap-3 sm:gap-1 justify-between">
           { props.children}
        </section>
    )
}

export default RespImgCont;