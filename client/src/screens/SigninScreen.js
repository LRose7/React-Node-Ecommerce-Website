import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { detailsUser } from '../actions/userActions';


function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();


    useEffect(() => {

        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return  <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h3>Sign in</h3>
                </li>
                <li>
                    <label for="email">
                        Email:
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
                </li>
                <li>
                    <label for="password">
                        Password:
                    </label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button type="submit" className="button primary">Sign in</button>
                </li>
                <li>
                    New to Fine Desks?
                </li>
                <li>
                    <NavLink to="/register" className="button secondary text-center">Create your Fine Desks account</NavLink>
                </li>
            </ul>

        </form>

    </div>
}

export default SigninScreen;