

const WhyChooseUs = () => {

    const statements = [
        {
            id: 1,
            title: "Authentic Nigerian Cuisines",
            icon: "hand-thumbs-up",
            content: "Unlike other restaurants that may claim to offer Nigerian dishes, we stay true to traditional recipes and cooking methods, so you can experience the full flavor and richness of fresh, locally-sourced ingredients, prepared by expert chefs."
        },
        {
            id: 2,
            title: "Fast and Convenient Online Ordering",
            icon: "boxes",
            content: "Our user-friendly online ordering system allows you to browse our menu, customize your order, and pay securely with just a few clicks. Plus, we offer fast delivery to your doorstep, so you can enjoy our delicious dishes without leaving your home."
        },
        {
            id: 3,
            title: "Dedicated Customer Support",
            icon: "gift",
            content: "Our friendly and knowledgeable customer support team is available to answer your questions, address any concerns, and ensure that your order is delivered promptly and accurately. We take pride in providing exceptional customer service, and it shows in the rave reviews from our happy customers."
        },
    ];

  return (
    <section className="py-16">
        <div className="container">
            <header className="section-heading">
                <h3 className="section-heading-title">Why Choose Us?</h3>
            </header>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {statements && statements.map(statement => (
                <div className="wcu-card" key={statement.id}>
                    <div className="icon">
                        <span className={`bi bi-${statement.icon} text-3xl text-main`}></span>
                    </div>
                    <h4 className="uppercase font-semibold">{statement.title}</h4>
                    <div className="body">
                        <p>
                            {statement.content}
                        </p>
                    </div>
                </div>
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs
