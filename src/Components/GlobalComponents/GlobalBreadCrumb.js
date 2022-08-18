import { Fragment } from "react";
import Link from "next/link";
// import RightDoubleArrow from "./RightDoubleArrow";
import { routesList } from "../../common";

export const GlobalBreadCrumb = ({ data }) => {
  return (
    <>
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href={routesList.homePage} passHref>
              <a>
                <i className="bi bi-house-door"></i>Home
              </a>
            </Link>
          </li>
          {data &&
            data.map((breadcrumb, index) => {
              if (data.length === index + 1) {
                return (
                  <Fragment key={index.toString()}>
                    <li className="breadcrumb-item active">
                      {breadcrumb.label}
                    </li>
                  </Fragment>
                );
              } else {
                return (
                  <Fragment key={index.toString()}>
                    <li className="breadcrumb-item">
                      <Link href={breadcrumb.url} passHref>
                        <a className="clickable">{breadcrumb.label}</a>
                      </Link>
                    </li>
                  </Fragment>
                );
              }
            })}
        </ol>
      </div>
    </>
  );
};
