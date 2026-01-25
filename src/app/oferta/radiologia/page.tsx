import Header from "@/app/components/Header";
import Cards from "@/app/components/servieces/Cards";
import MediaSection from "@/app/components/servieces/MediaSection";
import MediaText from "@/app/components/servieces/MediaText";
import Title from "@/app/components/Title";
import React from "react";

const data = {
  heading: "Radiologia",
  paragraph: "Opis radiologii",
};

const Radiologia = () => {
  return (
    <>
      <Header objectFit="center-50%" imageUrl="/photos/v_14.avif">
        Radiologia
      </Header>
      <div className="px-15 py-10 bg-primary/10 ">
        <MediaSection
          data={{
            header: "Radiologia – precyzyjna diagnostyka stomatologiczna",
            content:
              "Radiologia stomatologiczna odgrywa kluczową rolę w prawidłowej diagnostyce i planowaniu leczenia. Badania obrazowe pozwalają dokładnie ocenić stan zębów, kości oraz tkanek otaczających, często jeszcze przed pojawieniem się objawów bólowych. Korzystamy z nowoczesnego sprzętu radiologicznego, który zapewnia wysoką jakość obrazu przy zachowaniu bezpieczeństwa i minimalnej dawki promieniowania dla pacjenta.",
            imgUrl: "https://dummyimage.com/720x600",
          }}
          bg="bg-white"
        />
      </div>
      <Cards
        bg="bg-primary/10"
        title={"Nowoczesna radiologia w akcji"}
        cardElements={[
          {
            title: "Dokładna diagnoza",
            content:
              "Badania RTG umożliwiają wykrycie zmian niewidocznych podczas standardowego badania stomatologicznego.",
          },
          {
            title: "Bezpieczeństwo pacjenta",
            content:
              "Nowoczesne technologie radiologiczne pozwalają ograniczyć dawkę promieniowania do minimum.",
          },
          {
            title: "Lepsze planowanie leczenia",
            content:
              "Precyzyjne obrazy pomagają zaplanować leczenie zachowawcze, chirurgiczne, implantologiczne i ortodontyczne.",
          },
        ]}
      />
      <div className="px-15 py-10  ">
        <MediaText
          bg="bg-primary/10"
          data={{
            header: "Dlaczego diagnostyka radiologiczna jest tak ważna?",
            content:
              "Badania radiologiczne stanowią podstawę skutecznego i bezpiecznego leczenia stomatologicznego. Pozwalają ocenić stan korzeni zębów, kości oraz zmian zapalnych, które nie są widoczne gołym okiem. Dzięki nim możliwe jest szybkie postawienie trafnej diagnozy oraz zaplanowanie leczenia w sposób precyzyjny i przewidywalny. To zwiększa skuteczność terapii i minimalizuje ryzyko powikłań.",
          }}
        />
      </div>
    </>
  );
};

export default Radiologia;
