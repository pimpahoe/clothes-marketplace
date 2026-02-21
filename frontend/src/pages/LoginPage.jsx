import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="container">
        <div className="login-card">
          <h1>LOGIN</h1>
          <p>Sign in with Telegram to start buying and selling</p>
          
          <div className="telegram-login">
            <p className="note">
              Secure authentication via Telegram.<br/>
              We do not access your private messages.
            </p>
            
            <div className="telegram-widget-placeholder">
              <button className="btn-telegram">
                LOGIN WITH TELEGRAM
              </button>
              <p className="coming-soon">Widget will be integrated after bot creation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;