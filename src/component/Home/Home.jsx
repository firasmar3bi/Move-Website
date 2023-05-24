import React from "react";
import style from "./Home.module.css";
export default function Home() {
  return (
    <>
      <header className={style.header}>
        <div
          className={`container d-flex justify-content-center align-items-center flex-column text-center w-100 vh-100`}
        >
          <div className="text-white">
            <h1>Welcome to move world</h1>
            <p className="w-75 m-auto mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              ducimus unde animi deleniti. Sunt vero ipsam autem velit libero
              non fugiat est beatae iure exercitationem vitae in alias magnam
              earum eum eos ut dolor dicta sequi, distinctio nesciunt incidunt?
              Laboriosam incidunt
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
