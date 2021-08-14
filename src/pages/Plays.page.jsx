import React from "react";
import PlaysFilters from "../components/playsFilters/playFilters.component";
import Poster from "../components/Poster/poster.component";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Place in Pune</h2>
            <div className="flex flex-wrap ">
              <div className="w-1/2 my-3  md:w-1/3  lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                  title="Theater Play"
                  subtitle="Telugu"
                />
              </div>
              <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-ulxltxlwjn-portrait.jpg"
                  title="Theater Fun"
                  subtitle="Marathi"
                />
              </div>
              <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-ulxltxlwjn-portrait.jpg"
                  title="Theater Fun"
                  subtitle="Punjabi"
                />
              </div>
              <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311042-wmtzbczsdj-portrait.jpg"
                  title="Theater Story"
                  subtitle="Hindi"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/12 ">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div className="">
              <PlaysFilters
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilters
                title="Language"
                tags={["Tamil", "Telugu", "English"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
