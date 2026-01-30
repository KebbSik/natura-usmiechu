import Header from "@/app/components/Header";
import MediaSection from "@/app/components/servieces/MediaSection";
import Title from "@/app/components/Title";
import React from "react";

const data = {
  heading: "Periodontologia",
  paragraph: "Opis periodontologii",
};

const Periodontologia = () => {
  return (
    <>
      <Header objectFit="center-50%" imageUrl="/photos/v_14.avif">
        Periodontologia
      </Header>
      <MediaSection
        data={{
          header: "Periodontologia – zdrowe dziąsła i stabilne zęby",
          content:
            "Periodontologia zajmuje się diagnozowaniem i leczeniem chorób dziąseł oraz tkanek otaczających zęby. Nieleczone stany zapalne mogą prowadzić do rozchwiania zębów, a nawet ich utraty. Wczesna diagnostyka oraz odpowiednio dobrane leczenie pozwalają zahamować rozwój choroby i przywrócić zdrowie przyzębia. Dbamy o komfort pacjenta oraz skuteczność terapii na każdym etapie leczenia.",
          imgUrl: "/photos/a_14.avif",
        }}
        bg="bg-white"
      />
      <div className="px-6 py-10 bg-primary/10 ">
        <MediaSection
          reverse
          data={{
            header: "Skuteczne leczenie i profilaktyka chorób przyzębia",
            content:
              "Leczenie periodontologiczne skupia się na usunięciu stanu zapalnego oraz odbudowie zdrowych warunków w jamie ustnej. Wykonujemy zabiegi takie jak skaling, kiretaż oraz specjalistyczne procedury wspierające regenerację tkanek. Równie istotna jest profilaktyka i edukacja pacjenta, które pomagają utrzymać zdrowe dziąsła i zapobiegać nawrotom choroby.",
            imgUrl: "/photos/v_26.avif",
          }}
          bg="bg-white"
        />
      </div>
    </>
  );
};

export default Periodontologia;
