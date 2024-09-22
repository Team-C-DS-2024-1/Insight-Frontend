function BookInfo() {
  return (
    <div className="ml-auto mr-auto w-[1200px] mt-[50px]">
      <main className="flex items-center justify-between  gap-[50px]">
        <div>
          <img
            src="src\\img\\borrar.jpg"
            alt=""
            className="w-[1200px] h-auto flex items-center aling-center"
          />
        </div>

        <div>
          <div>
            <header className="text-center flex flex-col gap-[15px] mb-[30px] pb-[40px] border-b border-gray-400">
              <h1 className="text-[45px] font-medium font-Cormorant tracking-normal">THE LAST PHILOSOPHER IN TEXAS</h1>
              <h3 className="text-[22px] text-[#5B5B5B] font-medium font-Cormorant tracking-normal">
                FICTIONS AND SUPERSTITIONS
              </h3>
              <h3 className="text-[22px] text-[#5B5B5B]">BY DANIEL CHACÓN</h3>
            </header>

            <p className="leading-relaxed mb-[20px] text-[17px] font-Raleway tracking-normal">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sem dis,
              ridiculus aenean vivamus litora mi suscipit nulla purus. Cursus
              quam fringilla dui elementum ante cum aptent sed himenaeos,
              commodo fames parturient massa facilisi consequat aliquam ut,
              turpis morbi nec ad justo a felis primis. Vehicula quis penatibus
              eget torquent faucibus pharetra facilisi maecenas class auctor
              nullam curabitur sociosqu ut, turpis gravida cubilia dictumst
              sodales massa conubia dis ridiculus ac nisl parturient sed.
            </p>
            <p className="leading-relaxed text-[17px] tracking-normal font-Raleway">
              Lectus nisi faucibus conubia natoque aptent accumsan libero luctus
              cursus quisque, lobortis urna diam tristique curae ut massa congue
              sagittis, fermentum at parturient a tortor fusce phasellus
              vehicula nulla. Tincidunt risus netus hac dui consequat dignissim
              vulputate libero vivamus, nam sem diam porttitor nostra magna
              suspendisse. Lobortis vivamus metus quam malesuada lectus
              imperdiet facilisi nunc, porttitor cubilia elementum aliquam
              nascetur et varius morbi, quisque est laoreet egestas tempus
              sociis torquent.
            </p>
          </div>

          <div>
            <ul className="mt-[50px] flex items-center gap-[100px]">
              <li >
                <span className="font-bold text-[17px] tracking-normal font-Raleway">Categories:</span> <br />
                GENERAL FICTION
              </li>
              <li>
                <span className="font-bold text-[17px] tracking-normal font-Raleway">ISBN:</span> <br />
                615364944-0
              </li>
              <li>
                <span className="font-bold text-[17px] tracking-normal font-Raleway">Score:</span> <br />
                4.4
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
export default BookInfo;
