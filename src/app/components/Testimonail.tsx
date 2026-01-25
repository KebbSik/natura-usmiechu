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
    // <section className="section-padding  ">
    <section
      className="
      section-padding 
      relative 
      bg-linear-to-b
    from-white
      via-primary/10
      to-white
    text-black/70
      "
    >
      <div className="container relative z-5">
        <div className="flex flex-col gap-5">
          <header
            className="
            mb-8 h-1/2 
            
            "
          >
            <h2 className="text-primary">Dlaczego Natura Uśmiechu ?</h2>
            <p className="text-muted mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis.
            </p>
          </header>

          <ul
            className="
            flex gap-4 
            flex-wrap
            justify-center
            md:grid
            md:grid-cols-3
            pb-4
          "
          >
            {testimonials.map((item, index) => (
              <li
                key={index}
                className="
                mx-auto
                testimonial-card
                min-w-[75%]
                max-w-80
                md:max-w-100
                p-4
                md:p-6
                relative
                shadow-md
                shadow-primary/40
                bg-no-repeat
                bg-[position:calc(100%-15px)_calc(100%-15px)]
                bg-[length:90px_90px]
              "
                style={{ backgroundImage: `url(${item.bgImage})` }}
              >
                <h4 className="font-medium text-primary">{item.title}</h4>
                <hr className="mt-3 mb-6 border-t border-primary" />
                <p className="mb-4 ">“{item.text}”</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <svg
        viewBox="100 0 1084 195"
        className="absolute inset-0 w-full h-full text-primary/20"
        fill="none"
      >
        <path
          d="M3.80469 81.4293C3.80469 81.4293 183.697 187.5 379.786 187.5C575.874 187.5 741.205 7.5 925.292 7.5C1109.38 7.5 1280.8 81.4293 1280.8 81.4293"
          stroke="currentColor"
          strokeWidth="5"
        />
      </svg>
    </section>
  );
};

export default Testimonials;
