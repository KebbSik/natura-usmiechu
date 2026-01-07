const testimonials = [
  {
    title: "Dostępność",
    text: "Skontaktuj się z nami a dopasujemy dogodny dla Ciebie termin wizyty",
    bgImage: "/icons/vector_clock.svg",
  },
  {
    title: "Jakość",
    text: "Leczymy na najwyższym poziomie z zastosowaniem nowoczesnej techniki",
    bgImage: "/icons/vector_badge.svg",
  },
  {
    title: "Oferta",
    text: "Oferujemy szerokich wachlarz usług stomatologicznych",
    bgImage: "/icons/vector_star.svg",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container ">
        <div className="flex flex-col gap-5">
          <header className="mb-8 h-1/2">
            <h2>Dlaczego Natura Uśmiechu ?</h2>
            <p className="text-muted mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis.
            </p>
          </header>

          <ul
            className="
            flex gap-4 mx-8 md:mx-0 overflow-x-auto
            h-1/2
            snap-x snap-mandatory
            md:grid 
            md:grid-cols-3
            md:overflow-visible
            pb-4
          "
          >
            {testimonials.map((item, index) => (
              <li
                key={index}
                className="
                testimonial-card
                snap-center
                min-w-[75%]
                max-w-80
                md:max-w-100
                p-4
                md:p-6
                relative

                bg-no-repeat
                bg-[position:calc(100%-15px)_calc(100%-15px)]
                bg-[length:90px_90px]
              "
                style={{ backgroundImage: `url(${item.bgImage})` }}
              >
                <h4 className="font-medium">{item.title}</h4>
                <hr className="mt-3 mb-6 border-t border-primary" />
                <p className="mb-4 ">“{item.text}”</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
