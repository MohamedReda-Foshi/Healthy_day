import React from "react";

function Text1() {
  return (
    <div>
      <div className="py-16">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 items-center lg:gap-12 mx-auto  ">
          <div className="   md:5/12 lg:w-5/12">
            <img src="/resize.jpg" alt="" />
          </div>

          <div className="  md:7/12  bg-white  dark:bg-stone-900 border-collapse">
            <h1 className="text-4xl font-bold    py-4 uppercase">
              Nuxt development developers
            </h1>
            <p className="mb-1  line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              id fugit eius corrupti ipsa, minus fugiat. Culpa inventore illum
              temporibus cum unde quod,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text1;
