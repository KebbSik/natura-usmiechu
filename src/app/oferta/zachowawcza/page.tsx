import Header from "@/app/components/Header";
import MediaSection from "@/app/components/servieces/MediaSection";
import GridListImg from "@/app/components/servieces/GridListImg";
import MediaText from "@/app/components/servieces/MediaText";

const Zachowawcza = () => {
  return (
    <>
      <Header objectFit="center-50%" imageUrl="/photos/v_14.avif">
        Stomatoligia zachowawcza
      </Header>
      <section>
        <MediaSection
          data={{
            header: "Stomatologia zachowawcza – fundament zdrowego uśmiechu",
            content:
              "Stomatologia zachowawcza koncentruje się na zapobieganiu oraz leczeniu próchnicy i innych uszkodzeń twardych tkanek zęba. Jej głównym celem jest zachowanie naturalnych zębów pacjenta w jak najlepszym stanie przez długie lata. Dzięki wczesnej diagnostyce i nowoczesnym metodom leczenia możliwe jest skuteczne zatrzymanie rozwoju choroby, przy jednoczesnym zachowaniu estetyki i pełnej funkcji zębów.",
            imgUrl: "/photos/a_1.avif",
          }}
          bg="bg-white"
        />

        <div
          className="px-6 py-10 
          bg-linear-to-b
        from-white
          to-primary/10 "
        >
          <GridListImg
            bg="bg-linear-to-t
        from-white
          to-primary/10"
            title={"Dbamy o zdrowe zęby pod każdym kątem"}
            imageUrl={"/photos/a_23.avif"}
            gridElements={[
              {
                title: "Leczenie próchnicy",
                content:
                  "Skutecznie usuwamy zmiany próchnicowe i odbudowujemy ząb w sposób bezpieczny oraz możliwie najmniej inwazyjny.",
              },
              {
                title: "Wypełnienia estetyczne",
                content:
                  "Stosujemy nowoczesne materiały kompozytowe, które idealnie dopasowują się do naturalnego koloru zębów.",
              },
              {
                title: "Diagnostyka zmian",
                content:
                  "Wczesne wykrycie problemów pozwala uniknąć bardziej skomplikowanego leczenia w przyszłości.",
              },
              {
                title: "Profilaktyka i kontrola",
                content:
                  "Regularne wizyty kontrolne pomagają utrzymać zdrowie jamy ustnej i zapobiegać rozwojowi próchnicy.",
              },
            ]}
          />
        </div>

        <div className="px-6 py-10 bg-primary/10 ">
          <MediaText
            bg="bg-white"
            data={{
              header: "Dlaczego leczenie zachowawcze ma kluczowe znaczenie?",
              content:
                "Wczesne leczenie zachowawcze pozwala uniknąć poważniejszych problemów stomatologicznych w przyszłości. Nieleczona próchnica może prowadzić do bólu, stanów zapalnych, a nawet konieczności leczenia kanałowego lub usunięcia zęba. Regularne kontrole i szybka reakcja sprawiają, że leczenie jest krótsze, mniej inwazyjne i bardziej komfortowe dla pacjenta, a naturalne zęby mogą służyć przez wiele lat.",
            }}
          />
        </div>
        <MediaSection
          reverse
          data={{
            header: "Komfortowe leczenie w przyjaznej atmosferze",
            content:
              "Podczas leczenia szczególną uwagę zwracamy na komfort i poczucie bezpieczeństwa pacjenta. Każdy etap terapii jest dokładnie omawiany, a plan leczenia dopasowany do indywidualnych potrzeb. Korzystamy z nowoczesnych metod znieczulenia oraz sprawdzonych technologii, dzięki czemu leczenie przebiega sprawnie, bezboleśnie i w spokojnej atmosferze.",
            imgUrl: "/photos/a_15.avif",
          }}
          bg="bg-primary/10"
        />
      </section>
    </>
  );
};

export default Zachowawcza;
