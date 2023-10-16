import "/src/Component/new.css";
import user_icon from "C:\\Users\\Ahsan-Tamim\\Desktop\\React Login\\React Login\\src\\Component\\assets\\user.png";
import email_icon from "C:\\Users\\Ahsan-Tamim\\Desktop\\React Login\\React Login\\src\\Component\\assets\\email.png";
import password_icon from "C:\\Users\\Ahsan-Tamim\\Desktop\\React Login\\React Login\\src\\Component\\assets\\pass.png";
const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text"> Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" name="" id="" placeholder="Username" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" name="" id="" placeholder="Email " />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" name="" id="" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Lost Password? <span> Click Here!</span>
      </div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};
export default LoginSignup;
