import Header from "@/app/components/Header";
import Cards from "@/app/components/servieces/Cards";
import MediaSection from "@/app/components/servieces/MediaSection";
import Steps from "@/app/components/servieces/Steps";
import Title from "@/app/components/Title";
import React from "react";

const data = {
  heading: "Implantologia",
  paragraph: "Opis implantologii",
};
const Implantologia = () => {
  return (
    <>
      <Header objectFit="center-50%" imageUrl="/photos/v_14.avif">
        Implantologia
      </Header>
      <MediaSection
        data={{
          header: "Implantologia – trwałe rozwiązanie braków zębowych",
          content:
            "Implantologia to nowoczesna i skuteczna metoda uzupełniania braków zębowych, która pozwala przywrócić pełną funkcję oraz estetykę uśmiechu. Implanty stomatologiczne zastępują naturalny korzeń zęba, zapewniając stabilność i komfort porównywalny z naturalnym uzębieniem. Dzięki precyzyjnemu planowaniu oraz sprawdzonym technologiom leczenie jest bezpieczne, przewidywalne i daje długotrwałe efekty.",
          imgUrl: "/photos/a_5.avif",
        }}
        bg="bg-white"
      />

      <Steps
        bg="bg-white"
        stepElements={[
          {
            title: "Konsultacja i diagnostyka",
            content:
              "Przeprowadzamy szczegółowy wywiad oraz badania diagnostyczne, aby ocenić warunki kostne i zaplanować leczenie.",
          },
          {
            title: "Indywidualny plan leczenia",
            content:
              "Na podstawie wyników badań dobieramy najlepsze rozwiązanie implantologiczne dopasowane do potrzeb pacjenta.",
          },
          {
            title: "Wszczepienie implantu",
            content:
              "Implant zostaje precyzyjnie umieszczony w kości w warunkach zapewniających pełne bezpieczeństwo i komfort.",
          },
          {
            title: "Okres gojenia",
            content:
              "Następuje proces integracji implantu z kością, który jest kluczowy dla trwałości całego leczenia.",
          },
        ]}
        finishElement={{
          title: "Odbudowa protetyczna",
          content:
            "Na implancie osadzana jest estetyczna korona, która przywraca pełną funkcję i naturalny wygląd zęba.",
        }}
        imageUrl="/photos/a_9.avif"
      />
      <Cards
        bg="bg-primary/10"
        title={"Dlaczego warto wybrać implanty stomatologiczne?"}
        cardElements={[
          {
            title: "Trwałość i stabilność",
            content:
              "Implanty są rozwiązaniem długoterminowym, które zapewnia wysoką wytrzymałość oraz stabilność podczas codziennego użytkowania",
          },
          {
            title: "Naturalna estetyka",
            content:
              "Korony na implantach doskonale odwzorowują naturalne zęby pod względem kształtu i koloru.",
          },
          {
            title: "Komfort użytkowania",
            content:
              "Implanty nie przesuwają się i nie wymagają podparcia na sąsiednich zębach, co znacząco zwiększa komfort pacjenta.",
          },
        ]}
      />
      <MediaSection
        reverse
        data={{
          header: "Pewność uśmiechu i komfort na lata",
          content:
            "Leczenie implantologiczne pozwala odzyskać nie tylko pełną funkcję żucia, ale również pewność siebie i swobodę uśmiechu. Implanty stanowią stabilne i estetyczne rozwiązanie, które nie różni się od naturalnych zębów. Dzięki indywidualnemu podejściu oraz nowoczesnym metodom leczenia pacjenci mogą cieszyć się komfortem, trwałością i naturalnym wyglądem przez wiele lat.",
          imgUrl: "/photos/a_12.avif",
        }}
        bg="bg-white"
      />
    </>
  );
};

export default Implantologia;
