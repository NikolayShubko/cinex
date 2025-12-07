import { useState } from "react";
import Input from "../../Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import s from "./SignUpForm.module.scss";
import Button from "../../Button/Button";
import SubsribePlans from "../../SubscribePlans/SubscribePlans";
import Icon from "../../Icon/Icon";
import { SignUpFormValues } from "../../../types/forms";
import { useRegisterMutation } from "../../../store/api/auth/authApiSlice";
const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, formState, setValue, watch } =
    useForm<SignUpFormValues>({
      defaultValues: {
        plan: "basic",
        cardInfo: {
          expiryDate: "",
          cardNumber: "",
          firstName: "",
          lastName: "",
          CVV: null,
        },
        device: "TV",
      },
    });
  const [registerUser, { isLoading }] = useRegisterMutation();
  const onSubmit: SubmitHandler<SignUpFormValues> = (
    data: SignUpFormValues
  ) => {
    registerUser(data);
  };

  return (
    <div className={s.form_holder}>
      <h2 className={s.header}>
        Step {step >= 4 ? step - 3 : step} of {step >= 4 ? 2 : 3}
      </h2>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div>
            <h3 className={s.form_header}>
              Enter your details to get started!
            </h3>

            <Input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              error={
                formState.touchedFields.password
                  ? formState.errors.email?.message
                  : undefined
              }
              label="Your e-mail"
              variant="white"
            />
            <Input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              error={
                formState.touchedFields.password
                  ? formState.errors.password?.message
                  : undefined
              }
              label="Password"
              variant="white"
            />

            <Button
              size="wide"
              onClick={() => setStep(2)}
              className={s.form_button_next}
              variant={
                watch("email") === "" || watch("password") === ""
                  ? "disabled"
                  : "primary"
              }
              disabled={watch("email") === "" || watch("password") === ""}
            >
              Next
            </Button>
          </div>
        )}
        {step === 2 && (
          <div className={s.subscribeplans_container}>
            <h3 className={s.form_header}>Choose your plan</h3>
            <div className={s.subscribeplans_banner}>
              <SubsribePlans
                variant="basic"
                handleClick={() => {
                  setValue("plan", "basic");
                  setStep(3);
                }}
                bannerPosition="left"
              />
              <SubsribePlans
                variant="premium"
                handleClick={() => {
                  setValue("plan", "premium");
                  setStep(3);
                }}
                bannerPosition="center"
              />
              <SubsribePlans
                variant="standard"
                handleClick={() => {
                  setValue("plan", "standard");
                  setStep(3);
                }}
                bannerPosition="right"
              />
            </div>
          </div>
        )}
        {step === 3 && (
          <>
            <div hidden={watch("payMethod") === "creditCard"}>
              <h3 className={s.form_header}>Choose how to pay</h3>
              <p>
                Your payment details are protected, and you can modify your
                payment method whenever you need.
              </p>
              <div className={s.form_paymentmethods}>
                <Button
                  size="wide"
                  variant="white"
                  onClick={() => setValue("payMethod", "creditCard")}
                >
                  Credit or Debit Card
                </Button>
                <Button size="wide" variant="white">
                  Paypal
                </Button>
              </div>
            </div>
            <div hidden={!(watch("payMethod") === "creditCard")}>
              <h3 className={s.form_header}>
                Set up your credit or debit card
              </h3>
              <div className={s.form_paymentmethods_creditcard}>
                <Input
                  {...register("cardInfo.cardNumber", { required: true })}
                  type="text"
                  id="cardNumber"
                  error={
                    formState.touchedFields.cardInfo?.cardNumber
                      ? formState.errors.cardInfo?.cardNumber?.message
                      : undefined
                  }
                  label="Card Number"
                  variant="white"
                />
                <div className={s.form_paymentmethods_creditcard_row}>
                  <Input
                    {...register("cardInfo.expiryDate", { required: true })}
                    type="date"
                    id="expiryDate"
                    error={
                      formState.touchedFields.cardInfo?.expiryDate
                        ? formState.errors.cardInfo?.expiryDate?.message
                        : undefined
                    }
                    label="Expiry Date"
                    variant="white"
                  />
                  <Input
                    {...register("cardInfo.CVV", {
                      required: true,
                      valueAsNumber: true,
                    })}
                    type="number"
                    id="CVV"
                    error={
                      formState.touchedFields.cardInfo?.CVV
                        ? formState.errors.cardInfo?.CVV?.message
                        : undefined
                    }
                    label="CVV"
                    variant="white"
                  />
                </div>
                <Input
                  {...register("cardInfo.firstName", { required: true })}
                  type="text"
                  id="firstName"
                  error={
                    formState.touchedFields.cardInfo?.firstName
                      ? formState.errors.cardInfo?.firstName?.message
                      : undefined
                  }
                  label="First Name"
                  variant="white"
                />
                <Input
                  {...register("cardInfo.lastName", { required: true })}
                  type="text"
                  id="lastName"
                  error={
                    formState.touchedFields.cardInfo?.lastName
                      ? formState.errors.cardInfo?.lastName?.message
                      : undefined
                  }
                  label="Last Name"
                  variant="white"
                />
                <Button
                  size="wide"
                  className={s.form_button_next}
                  onClick={() => setStep(4)}
                  variant={
                    Object.values(watch("cardInfo")).some((v) => !v)
                      ? "disabled"
                      : "primary"
                  }
                  disabled={Object.values(watch("cardInfo")).some((v) => !v)}
                >
                  Next
                </Button>
              </div>
            </div>
          </>
        )}
        {step === 4 && (
          <div>
            <h3 className={s.form_header}>
              What devices will you be watching on?
            </h3>
            <div className={s.form_button_devices}>
              <Button
                size="wide"
                variant="white"
                onClick={() => {
                  setValue("device", "TV");
                  setStep(5);
                }}
              >
                TV
              </Button>
              <Button
                size="wide"
                variant="white"
                onClick={() => {
                  setValue("device", "Phone");
                  setStep(5);
                }}
              >
                Phone
              </Button>
              <Button
                size="wide"
                variant="white"
                onClick={() => {
                  setValue("device", "Computer");
                  setStep(5);
                }}
              >
                Computer
              </Button>
              <Button
                size="wide"
                variant="white"
                onClick={() => {
                  setValue("device", "Gaming Console");
                  setStep(5);
                }}
              >
                Gaming Console
              </Button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div>
            <h3 className={s.form_header}>Create your account name</h3>
            <div className={s.form_username}>
              <Icon
                iconName="user"
                width={83}
                height={83}
                className={s.form_username_image}
              />
              <Input
                {...register("username", { required: true })}
                type="text"
                name="username"
                id="username"
                error={
                  formState.touchedFields.username
                    ? formState.errors.username?.message
                    : undefined
                }
                label="Username"
                variant="white"
              />
            </div>
            <Button type="submit" size="wide" variant="primary">
              Create Account
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
