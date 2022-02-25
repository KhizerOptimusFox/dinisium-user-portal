import React, { Fragment } from "react";
import Route from "../../../Constants/browserRoutes";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const OpenSubscriptionItem = ({
  item: {
    id,
    ito_name,
    ito_token,
    threshold,
    current,
    threshold_type,
    start_date,
    end_date,
    description,
    term_sheets,
  },
}) => {
  return (
    <Fragment>
      <td>
        <p className="mb-0">{ito_name}</p>
      </td>
      <td>
        <p className="mb-0">{ito_token}</p>
      </td>
      <td>
        <p className="mb-0">$ {threshold}</p>
      </td>
      <td>
        <p className="mb-0">$ {current}</p>
      </td>
      <td>
        <span className="pro-date mb-0">
          <i className="far fa-calendar"></i>{" "}
          <Moment format="DD MMM YYYY">{start_date}</Moment> {"-"}
          <Moment format="DD MMM YYYY">{end_date}</Moment>
        </span>
      </td>
      <td>
        <Link
          className="dls-btn bg-semi-black text-white"
          // to={`${Route.SUBSCRIPTION_PARTICIPANT_BTN}${id}`}
          to={{
            pathname: `${Route.SUBSCRIPTION_PARTICIPANT_BTN}${id}`,
            state: {
              id,
              ito_token,
              threshold,
              current,
              threshold_type,
              ito_name,
              description,
              start_date,
              end_date,
              term_sheets,
            },
          }}
        >
          Participate
        </Link>
      </td>
      <td></td>
    </Fragment>
  );
};

export default OpenSubscriptionItem;
