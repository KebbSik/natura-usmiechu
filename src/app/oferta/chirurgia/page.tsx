import Header from "@/app/components/Header";
import GridList from "@/app/components/servieces/GridList";
import MediaSection from "@/app/components/servieces/MediaSection";
import Title from "@/app/components/Title";
import React from "react";
const data = {
  heading: "Chirurgia",
  paragraph: "Opis chirurgii stomatologicznej",
};
const Chirurgia = () => {
  return (
    <>
      <Header objectFit="center-50%" imageUrl="/photos/v_14.avif">
        Chirurgia
      </Header>
      <MediaSection
        reverse
        data={{
          header: "Chirurgia stomatologiczna – precyzja i bezpieczeństwo",
          content:
            "Chirurgia stomatologiczna obejmuje zabiegi, które wymagają szczególnej precyzji oraz doświadczenia lekarza. Wykonujemy je z zachowaniem najwyższych standardów bezpieczeństwa, dbając o komfort pacjenta na każdym etapie leczenia. Dzięki nowoczesnym technologiom oraz starannemu planowaniu zabiegi chirurgiczne są dziś mniej inwazyjne, przewidywalne i pozwalają na sprawne gojenie oraz szybki powrót do codziennego funkcjonowania.",
          imgUrl: "/photos/a_21.avif",
        }}
        bg="bg-white"
      />
      <div className="px-6 py-10 bg-primary/10 ">
        <MediaSection
          data={{
            header: "Zakres zabiegów chirurgicznych",
            content:
              "W ramach chirurgii stomatologicznej wykonujemy między innymi ekstrakcje zębów, w tym zębów zatrzymanych i ósemek, a także zabiegi przygotowujące jamę ustną do dalszego leczenia. Każdy przypadek analizujemy indywidualnie, dobierając odpowiednią metodę postępowania. Naszym celem jest skuteczne leczenie przy jednoczesnym ograniczeniu dyskomfortu oraz skróceniu czasu rekonwalescencji pacjenta.",
            imgUrl: "/photos/a_16.avif",
          }}
          bg="bg-white"
        />
      </div>
      <MediaSection
        reverse
        data={{
          header: "Komfortowe leczenie i opieka po zabiegu",
          content:
            "Podczas zabiegów chirurgicznych szczególną uwagę przykładamy do skutecznego znieczulenia oraz komfortu pacjenta. Każdy etap leczenia jest dokładnie omawiany, a po zabiegu pacjent otrzymuje jasne zalecenia dotyczące gojenia i dalszej pielęgnacji. Dzięki temu proces rekonwalescencji przebiega spokojnie, a pacjent czuje się bezpiecznie i pod stałą opieką specjalistów.",
          imgUrl: "/photos/a_4.avif",
        }}
        bg="bg-primary/10"
      />
      <div className="px-6 py-10 bg-white ">
        <GridList
          reverse
          bg="bg-primary/10"
          title={"Najczęściej wykonywane zabiegi chirurgii stomatologicznej"}
          description={"\u00A0"}
          gridElements={[
            {
              title: "Usuwanie zębów",
              content:
                "Wykonujemy bezpieczne i precyzyjne ekstrakcje zębów, gdy leczenie zachowawcze nie jest już możliwe.",
            },
            {
              title: "Ekstrakcja ósemek",
              content:
                "Chirurgiczne usuwanie zębów mądrości, w tym zębów zatrzymanych i częściowo wyrzniętych.",
            },
            {
              title: "Resekcja wierzchołka korzenia",
              content:
                "Zabieg polegający na usunięciu zmian zapalnych w okolicy wierzchołka korzenia zęba.",
            },
            {
              title: "Chirurgiczne leczenie stanów zapalnych",
              content:
                "Interwencje chirurgiczne w przypadku ropni, torbieli i innych zmian zapalnych jamy ustnej.",
            },
            {
              title: "Odsłanianie zębów zatrzymanych",
              content:
                "Zabieg umożliwiający dalsze leczenie ortodontyczne zębów, które nie wyrznęły się prawidłowo.",
            },
            {
              title: "Przygotowanie do leczenia implantologicznego",
              content:
                "Zabiegi chirurgiczne przygotowujące kość i tkanki do bezpiecznego wszczepienia implantów.",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Chirurgia;
