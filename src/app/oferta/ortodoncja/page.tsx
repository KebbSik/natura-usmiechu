import Header from "@/app/components/Header";
import Cards from "@/app/components/servieces/Cards";
import MediaSection from "@/app/components/servieces/MediaSection";
import Steps from "@/app/components/servieces/Steps";
import Title from "@/app/components/Title";
import React from "react";

const data = {
  heading: "Ortodoncja",
  paragraph: "Opis ortodoncji",
};

const Ortodoncja = () => {
  return (
    <>
      <Header objectFit="center-50%" imageUrl="/photos/v_14.avif">
        Ortodoncja
      </Header>
      <MediaSection
        reverse
        data={{
          header: "Ortodoncja – zdrowy i harmonijny uśmiech",
          content:
            "Ortodoncja zajmuje się diagnozowaniem oraz leczeniem wad zgryzu i nieprawidłowego ustawienia zębów. Prawidłowe leczenie ortodontyczne wpływa nie tylko na estetykę uśmiechu, ale również na zdrowie jamy ustnej, komfort żucia oraz prawidłową wymowę. Dzięki nowoczesnym metodom i indywidualnemu podejściu możliwe jest skuteczne leczenie zarówno u dzieci, jak i dorosłych pacjentów.",
          imgUrl: "/photos/a_11.avif",
        }}
        bg="bg-white"
      />{" "}
      <Cards
        bg="bg-primary/10"
        title={"Korzyści leczenia ortodontycznego"}
        cardElements={[
          {
            title: "Zdrowie i funkcjonalność",
            content:
              "Prawidłowe ustawienie zębów ułatwia higienę jamy ustnej i zmniejsza ryzyko próchnicy oraz chorób dziąseł.",
          },
          {
            title: "Estetyka uśmiechu",
            content:
              "Leczenie ortodontyczne poprawia proporcje twarzy i pozwala uzyskać naturalny, estetyczny uśmiech",
          },
          {
            title: "Indywidualne rozwiązania",
            content:
              "Dobieramy metodę leczenia w oparciu o potrzeby, wiek i oczekiwania pacjenta.",
          },
        ]}
      />
      <Steps
        bg="bg-white"
        stepElements={[
          {
            title: "Konsultacja ortodontyczna",
            content:
              "Przeprowadzamy dokładną diagnostykę i analizę zgryzu, aby określić potrzeby leczenia.",
          },
          {
            title: "Plan leczenia",
            content:
              "Tworzymy indywidualny plan leczenia, dostosowany do rodzaju wady i oczekiwań pacjenta",
          },
          {
            title: "Założenie aparatu",
            content:
              "Dobieramy i zakładamy odpowiedni aparat ortodontyczny, zapewniając komfort i bezpieczeństwo.",
          },
          {
            title: "Wizyty kontrolne",
            content:
              "Regularne kontrole pozwalają monitorować postępy i wprowadzać niezbędne korekty.",
          },
        ]}
        finishElement={{
          title: "Retencja",
          content:
            "Po zakończeniu leczenia stosujemy aparaty retencyjne, aby utrwalić osiągnięte efekty.",
        }}
        imageUrl="/photos/a_13.avif"
      />
      <MediaSection
        data={{
          header: "Efekty, które procentują na lata",
          content:
            "Leczenie ortodontyczne to inwestycja w zdrowie i estetykę uśmiechu na długie lata. Odpowiednio wyprostowane zęby ułatwiają utrzymanie higieny jamy ustnej, poprawiają funkcję żucia oraz zwiększają pewność siebie. Dzięki kompleksowej opiece i nowoczesnym metodom leczenia pacjenci mogą cieszyć się trwałymi, naturalnymi efektami.",
          imgUrl: "/photos/a_7.avif",
        }}
        bg="bg-white"
      />
    </>
  );
};

export default Ortodoncja;
