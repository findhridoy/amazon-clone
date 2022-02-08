import { Button } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import React, { useEffect, useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../Context/GlobalContext";
import ads1 from "../Images/ads/blog-ads.png";
import Layout from "../Layout/Layout";

const ShippingForm = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);

  // use context
  const { getShippingAddress } = useGlobalContext();

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // country dropdown validation
  useEffect(() => {
    if (country === "" || country === " ") {
      setError(true);
    } else {
      setError(false);
    }
  }, [country]);

  // submit data
  const onSubmit = (data) => {
    const allData = { ...data, country };
    setLoading(true);
    getShippingAddress(allData);
    setLoading(false);
  };

  return (
    <Layout>
      <section className="shippingForm">
        <div className="container">
          <div className="shippingForm__container">
            <form
              className="shippingFrom__form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="shippingForm__title">
                Plase enter your shipping address
              </h3>
              <span className="form__group">
                <label className="form__label">Contry/Region</label>
                <CountryDropdown
                  value={country}
                  onChange={(val) => setCountry(val)}
                />
                {Object.keys(errors).length > 0 && error && (
                  <span className="form__error">
                    <ErrorOutlineIcon className="form__error--icon" />
                    Eelect your country
                  </span>
                )}
              </span>

              <span className="form__group">
                <label className="form__label">Full name</label>
                <input
                  className="form__control"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="form__error">
                    <ErrorOutlineIcon className="form__error--icon" />
                    Enter your fullname
                  </span>
                )}
              </span>

              <span className="form__group">
                <label className="form__label">Phone number</label>
                <input
                  className="form__control"
                  type="number"
                  {...register("phoneNumber", { required: true })}
                />
                {errors.phoneNumber && (
                  <span className="form__error">
                    <ErrorOutlineIcon className="form__error--icon" />
                    Enter your phone number
                  </span>
                )}
              </span>

              <span className="form__group">
                <label className="form__label">Address</label>
                <input
                  className="form__control"
                  type="text"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <span className="form__error">
                    <ErrorOutlineIcon className="form__error--icon" />
                    Enter your address
                  </span>
                )}
              </span>

              <div className="form__divided">
                <span className="form__group">
                  <label className="form__label">City</label>
                  <input
                    className="form__control"
                    type="text"
                    {...register("city", { required: true })}
                  />
                  {errors.city && (
                    <span className="form__error">
                      <ErrorOutlineIcon className="form__error--icon" />
                      Enter your city
                    </span>
                  )}
                </span>

                <span className="form__group">
                  <label className="form__label">ZIP Code</label>
                  <input
                    className="form__control"
                    type="number"
                    {...register("zipCode", { required: true })}
                  />
                  {errors.zipCode && (
                    <span className="form__error">
                      <ErrorOutlineIcon className="form__error--icon" />
                      Enter your zip code
                    </span>
                  )}
                </span>
              </div>

              <div className="form__button">
                <Button type="submit" variant="contained" disabled={loading}>
                  Use this address
                </Button>
              </div>
            </form>
            <div className="shippingFrom__ads">
              <img src={ads1} alt="ads img" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ShippingForm;
