import React from "react";
import BreadCrumbs from "./BreadCrumbs";

const GenericHeader = ({title}) => {
  return (
    <section className="generic-header py-20">
      <div className="container flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl capitalize font-bold">{title}</h1>
        <BreadCrumbs title={title}/>
      </div>
    </section>
  )
}

export default GenericHeader
