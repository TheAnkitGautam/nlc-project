import CSS from './Rules.module.css';
import Rules from './Rules';
import { GoogleLogin } from 'react-google-login';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const clientId = "417511021538-rg3ch2imncc0ujmikjv3n0b6eiunee9d.apps.googleusercontent.com";

const onLoginFailure = (res) => {
    console.log(res);
}

const rules = [
    {
        id: "1",
        title: "Title",
        rules: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
        ]
    },
    {
        id: "2",
        title: "Title",
        rules: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
        ]
    }
]

const RulesPage = () => {

    const [check, setCheck] = useState(false);
    const navigate = useNavigate();
    
    const onLoginSuccess = ({ profileObj }) => {
        console.log(profileObj);
        navigate('/public/register');
    }

    return (
        <div className={CSS.wrapper}>

            <h2 className={CSS.title}>Rules / नियम</h2>

            {
                rules.map((rule) => {
                    return <Rules key={rule.id} props={rule} />
                })
            }

            <div className={CSS.buttons}>

                <div className={CSS.checkbox}>
                    <label htmlFor="accept">
                        <input type="checkbox"
                            name="accept"
                            id='accept'
                            checked={check}
                            onChange={(e) => setCheck(e.target.checked)}
                            required />
                        I accept the rules
                    </label>
                </div>


                <GoogleLogin
                    clientId={clientId}
                    buttonText="Continue to Register"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    disabled={!check}
                />


            </div>
        </div>
    )
}

export default RulesPage;
