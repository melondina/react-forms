// import { useState } from 'react';
// import _ from './Form.module.css';

// export const Form = () => {
//     const [email, setEmail] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [emailDirty, setEmailDirty] = useState(false);
//     const [password, setPassword] = useState(false);
//     const [passwordError, setPasswordError] = useState(false);
//     const [passwordDirty, setPasswordDirty] = useState(false);
//     const [checkErrorForm, setCheckErrorForm] = useState(false);
//     const [save, setSave] = useState(false);


//     const validEmail = (value) => {
//         setEmailError(/^.+@.+\..+$/.test(value))
//     }

//     const validPassword = (value) => {
//         setPasswordError(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/.test(value))
//     }

//     const handleEmail = ({target}) => {
//         setEmail(target.value);
//         validEmail(target.value);
//     };

//     const handlePassword = ({target}) => {
//         setPassword(target.value);
//         validPassword(target.value);
//     };

//     const handleSave = ({target}) => {
//         setSave(target.checked);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!emailError || !passwordError) {
//             setCheckErrorForm(true);
//             return;
//         }
//         console.log({email, password, save})
//     }

//     return (
//         <form className={_.form} onSubmit={handleSubmit}>
//             <div className={_.wrap}>
//                 <label className={_.label}
//                 htmlFor='email'>
//                     Email
//                 </label>
//                 <input className={_.input} type='text'
//                 id='email' name='email'
//                 value={email}
//                 onChange={handleEmail}
//                 onBlur={() => {
//                     setEmailDirty(true);
//                 }}
//                 />
//                 {!emailError && emailDirty && <p className={_.error}>
//                     Сообщение об ошибке </p>}
//             </div>
//             <div className={_.wrap}>
//                 <label className={_.label}
//                 htmlFor='password'>
//                     Password
//                 </label>
//                 <input className={_.input} type='text'
//                 id='password' name='password'
//                 value={password}
//                 onChange={handlePassword}
//                 onBlur={() => {
//                     setPasswordDirty(true);
//                 }}
//                 />
//                 {!passwordError && passwordDirty && <p className={_.error}>
//                     Сообщение об ошибке
//                 </p>}
//             </div>
//             <div className={_.wrapCheckbox}>
//                 <input className={_.checkbox} type='checkbox'
//                     id='save' name='save' checked={save}
//                         onChange={handleSave}
//                     />
//                 <label className={_.labelCheckbox}
//                 htmlFor='save'>
//                     Save the password
//                 </label>
//             </div>
//             <button className={_.submit} type='submit'>
//                 Войти
//             </button>
//             {checkErrorForm && (!passwordError || !emailError) && (
//                 <p className={_.errorSubmit}>Error</p>
//             )}
//         </form>
//     );
// }

import _ from './Form.module.css';
import { useForm } from 'react-hook-form';

export const Form = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form className={_.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={_.wrap}>
                <label className={_.label}
                htmlFor='email'>
                    Email
                </label>
                <input 
                className={_.input}
                aria-invalid={!!errors.email}
                type='text'
                id='email'
                {...register('email', {
                    required: 'Введите в это поле',
                    pattern: {
                        value: /^.+@.+\..+$/,
                        message: 'Неверный email'
                    }
                })}
                />
                {errors.email && <p className={_.error}>
                    {errors.email.message} </p>}
            </div>
            <div className={_.wrap}>
                <label className={_.label}
                htmlFor='password'>
                    Password
                </label>
                <input className={_.input} type='text'
                id='password'
                {...register('password', {
                    required: 'Введите в это поле',
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
                        message: 'Неверный password'
                    }
                })}

                />
                {errors.password && <p className={_.error}>
                    {errors.password.message}
                </p>}
            </div>
            <div className={_.wrapCheckbox}>
                <input className={_.checkbox} type='checkbox'
                    id='save'
                    {...register('save')}

                    />
                <label className={_.labelCheckbox}
                htmlFor='save'>
                    Save the password
                </label>
            </div>
            <button className={_.submit} type='submit'>
                Войти
            </button>
            
                {/* <p className={_.errorSubmit}>Error</p> */}
           
        </form>
    );
}



