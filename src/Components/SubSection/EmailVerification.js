import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { apiUrls, manageUndefined, notificationType, notUndefined, sendPostRequest, showNotification } from '../../common';
import { registerEmailSchema } from '../../Validation/Validation';
import { GlobalInput as Input, GlobalForm, GlobalSubmit } from '../GlobalComponents';

export const EmailVerification = React.forwardRef(({ type, ...rest }, ref) => {
    const [form, setForm] = useState({});
    const [apiEndPoint, setApiEndPoint] = useState(apiUrls.generateOtp);
    const {
        register: registerSignUpEmail,
        formState: { errors: errorSignUpEmail },
        handleSubmit: handleSubmitSignUpEmail,
        reset: resetSignUpEmail,
    } = useForm({
        mode: "all",
        reValidateMode: "onSubmit",
        resolver: yupResolver(registerEmailSchema),
    });

    useEffect(() => {
        
        if (notUndefined(type)) {
      
            switch (type) {
                case apiUrls.generateOtp:
                    setApiEndPoint(apiUrls.generateOtp);
                    break;
                case apiUrls.forgetPasswordSendOtp:
                    setApiEndPoint(apiUrls.forgetPasswordSendOtp);
                    break;
                default:
                    null;
            }
        }
    }, [type])

    const handleInputChange = (event, data) => {
        setForm({ ...form, [data.name]: data.value });
    };

    const handleRegistration = (data, event) => {
        event.preventDefault();
        let newForm = {};
        newForm.email = form?.email;
        sendPostRequest(apiEndPoint, { ...newForm }).then((response) => {
            if (response?.status === false) {
                // showNotification(notificationType.ERROR, response.message);
            } else if (response?.status === true) {
                // showNotification(notificationType.SUCCESS, response.message);
                setForm({});
                rest?.setOuterState(false);
                rest?.setOuterEmailState(form?.email)
            }
        });

    }

    return (
        <>
            <GlobalForm
                id={"registrationFormEmail"}
                onSubmit={handleSubmitSignUpEmail(handleRegistration)}
            >
                <div className="form-group">
                    <label>Email</label>
                    <Input
                        name="email"
                        id="email"
                        className="form-control"
                        type="email"
                        value={form?.email || ""}
                        {...registerSignUpEmail("email")}
                        onChange={(e, data) => {
                            registerSignUpEmail("email").onChange(e),
                                handleInputChange(e, data);
                        }}
                        errorType={manageUndefined(errorSignUpEmail?.email)}
                        errorMessage={manageUndefined(
                            errorSignUpEmail?.email?.message
                        )}
                        placeholder="mail@abc.com" />
                </div>

                <GlobalSubmit className="btn login_signin">
                    Send OTP
                </GlobalSubmit>
            </GlobalForm>
        </>
    )
});
EmailVerification.displayName = "EmailVerification"
