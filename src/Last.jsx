const Last = ({canapeProp}) => {
    const publishedCanapes = canapeProp.filter((canape) => {
        return canape.isPublished;
    });

    const lastCanapes = publishedCanapes.slice(-5);

    return (
        <section>
            
            <h2>Les derniers canapes :</h2>
            {lastCanapes.map((canape) => {
                return (
                    <article>
                        <h3>{canape.title}</h3>
                        <p>Price: {canape.price}</p>
                        <p>Rating: {canape.rating}</p>
                    </article>
                );
            })}
        </section>
    )
};

export default Last;