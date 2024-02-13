import React from 'react'
import { Link } from 'react-router-dom';
import { JobTitle } from './JobTitle';
import { PageNum } from './PageNum';
import { Contact } from './Contact';

export const ProjectTitle = () => {
  return (
    <div className="  ">
      {" "}
      <section className=" lg:fixed ">
        <div className="mb-5">
          <Link className=" font-semibold text-3x text-[30px]" to="/">
            Benjamin.
          </Link>
        </div>
        <JobTitle />

        <PageNum />

        <div className="mt-5">
          <Contact />
        </div>
      </section>
    </div>
  );
}
