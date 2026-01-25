import Header from "@/app/components/Header";
import GridList from "@/app/components/servieces/GridList";
import GridListSm from "@/app/components/servieces/GridListSm";
import MediaSection from "@/app/components/servieces/MediaSection";
import Title from "@/app/components/Title";
import React from "react";

const data = {
  heading: "Protetyka",
  paragraph: "Opis protetyki",
};

const Protetyka = () => {
  return (
    <>
      <Header objectFit="center-50%" imageUrl="/photos/v_14.avif">
        Protetyka
      </Header>
      <MediaSection
        data={{
          header: "Protetyka – odbudowa funkcji i estetyki uśmiechu",
          content:
            "Protetyka stomatologiczna zajmuje się odbudową braków zębowych oraz rekonstrukcją zębów uszkodzonych. Jej celem jest przywrócenie prawidłowej funkcji żucia, mowy oraz estetyki uśmiechu. Odpowiednio dobrane uzupełnienia protetyczne poprawiają komfort codziennego życia i zapobiegają dalszym problemom w jamie ustnej. Każde leczenie planujemy indywidualnie, z uwzględnieniem potrzeb i oczekiwań pacjenta.",
          imgUrl: "https://dummyimage.com/720x600",
        }}
        bg="bg-white"
      />
      <div className="px-15 py-10 bg-white ">
        <GridListSm
          reverse
          bg="bg-primary/10"
          title={"Przykłady leczenia protetycznego"}
          description={"\u00A0"}
          gridElements={[
            {
              title: "Korony protetyczne",
              content:
                "Odbudowują zniszczone zęby, przywracając ich naturalny kształt, funkcję i estetykę.",
            },
            {
              title: "Mosty protetyczne",
              content:
                "Uzupełniają braki zębowe, opierając się na sąsiednich zębach lub implantach.",
            },
            {
              title: "Protezy szkieletowe",
              content:
                "Trwałe i stabilniejsze protezy częściowe, zapewniające lepsze rozłożenie sił żucia.",
            },
            {
              title: "Odbudowy na implantach",
              content:
                "Uzupełnienia protetyczne osadzane na implantach, gwarantujące wysoki komfort i stabilność.",
            },
          ]}
        />
      </div>
      <MediaSection
        reverse
        data={{
          header: "Naturalny wygląd i codzienny komfort",
          content:
            "Nowoczesna protetyka pozwala uzyskać naturalny wygląd uzupełnień, które doskonale harmonizują z resztą uzębienia. Stosujemy wysokiej jakości materiały oraz precyzyjne techniki wykonania, dzięki czemu prace protetyczne są trwałe i wygodne w użytkowaniu. Odpowiednio dopasowane uzupełnienia poprawiają estetykę uśmiechu, komfort jedzenia oraz pewność siebie pacjenta.",
          imgUrl: "https://dummyimage.com/720x600",
        }}
        bg="bg-white"
      />
    </>
  );
};

export default Protetyka;
