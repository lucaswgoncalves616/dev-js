
import styled from "styled-components";

function StyledForm() {
    return(
        <Styled>
            <div className="form-container">
                <h3>Newsletter</h3>

                <div className="form-wrapper">
                    <label htmlFor="input-email">Email</label>
                    <input type="text" name="input-email" id="input-email" className="input-email" placeholder="Enter yout email"/>
                    <button className="btn-send">Subscribe</button>
                </div>

                <div className="sign-up">
                    <p>Don't have an account? <a href="#">Sign up now</a></p>
                </div>
            </div>
        </Styled>
    );
}

const Styled = styled.div`
    .form-container {
        font-family: 'Segoe UI', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f7f7f7;
        color: black;
        border-radius: 6px;
        font-size: 1.1em;

        width: fit-content;
        padding: 20px;
    }

    .form-container h3 {
        font-weight: bold;
    }

    .form-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;

        padding: 12px 0;
    }

    .form-wrapper label {
        font-size: 0.9em;
    }

    .form-wrapper input {
        padding: 10px 14px;
        border-radius: 6px;
        border: 1px solid #ccc;
        
        margin-top: 6px;
    }

    .btn-send {
        background-color: #212121;
        color: white;
        padding: 8px 0;
        border-radius: 8px;
        box-shadow: 1px 1px 3px #575757;

        margin: 18px 0;
    }

    .sign-up a {
        color: #005eff;
    }
`;

export default StyledForm;