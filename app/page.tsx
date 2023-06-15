import { Hero, CustomFilter, SearchBar, CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCardProps, FilterProps, HomeProps } from "@/types";
import { fetchCars } from "@/utils";

const Home = async ({ searchParams }: HomeProps) => {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>
          {!isDataEmpty ? (
            <section>
              <div>
                {allCars?.map((car: CarCardProps) => (
                  <CarCard car={car} />
                ))}
              </div>
              <ShowMore />
            </section>
          ) : (
            <div>
              <h2></h2>
              <p></p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
