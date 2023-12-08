const Best = ({canapeProp}) => {

    const sortCanapes = canapeProp.sort((a,b) => b.rating - a.rating);
    const bestCanape = sortCanapes[0];

    return (
        <section>
            <h2>Our best sofa!</h2>
                <article>
                    <h4>{bestCanape.title}</h4>
                    <p>Price: {bestCanape.price}</p>
                    <p>Rating: {bestCanape.rating}</p>
                </article>
        </section>
    )
};

export default Best;