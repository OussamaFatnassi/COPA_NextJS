'use client';
import React from "react";
import "./style.css";
import Image from "next/image";

export default function Login() {
  let [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="frame">
      <div className="frame-wrapper">
        <div className="div">
          <div className="group">
            <div className="overlap-group">
              <div className="overlap"
                onClick={() => setActiveTab(1)}
              >
                <div className={activeTab === 0 ? "" : "div-1"}/>
              <div className="text-wrapper center-text unselectable"
                style={{
                  curson: activeTab === 1 ? "pointer" : "default",
                }}>
                SE CONNECTER
                </div>
              </div>
              <div className="overlap"
                onClick={() => setActiveTab(0)}
              >
                <div className={activeTab === 1 ? "" : "div-2"}/>
                <div className="text-wrapper-2 center-text unselectable"
                style={{
                  curson: activeTab === 0 ? "pointer" : "default",
                }}>CRÉER UN COMPTE</div>
              </div>
            </div>
          </div>
          {/* div 3 start */}
        {activeTab === 0 ? (
          <div className="div-3">
            <div className="text-wrapper-3 center-text">S’inscrire avec ...</div>
            <div className="div-4">
              <button className="div-wrapper center-text">
                <div className="div-5">
                  <Image
                    className="google-icon-icons"
                    alt="Google icon icons"
                    src="/img/google-icon-icons-com-62736-2.svg"
                    width={50}
                    height={50}
                  />
                  <div className="text-wrapper-4 center-text">Google</div>
                </div>
              </button>
              <button className="div-wrapper center-text">
                <div className="div-6">
                  <Image
                    className="img"
                    alt="Facebook"
                    src="/img/facebook-1.png"
                    width={50}
                    height={50}
                  />
                  <div className="text-wrapper-5 center-text">Facebook</div>
                </div>
              </button>
              <button className="div-wrapper center-text">
                <div className="div-7">
                  <Image
                    className="img"
                    alt="Social apple mac"
                    src="/img/social-apple-mac-65-1.png"
                    width={50}
                    height={50}
                  />
                  <div className="text-wrapper-6 center-text">Apple</div>
                </div>
              </button>
            </div>
          </div>
        ) : (
          // basic inputs for Adresse e-mailm and Mot de passe
          <div className="div-3">
            <div className="div-4">
              <div className="div-8">
                <label className="text-wrapper-7">Adresse e-mail</label>
                <div className="formulaire-nom-de-l">
                  <input style={{backgroundColor: 'var(--pine-cone)'}} className="text-wrapper-8 center-text" placeholder="Entrez votre adresse e-mail" />
                </div>
              </div>
              <div className="div-8">
                <label className="text-wrapper-7">Mot de passe</label>
                <div className="formulaire-nom-de-l">
                  <input style={{backgroundColor: 'var(--pine-cone)'}} className="text-wrapper-8 center-text" placeholder="Entrez votre mot de passe" />
                </div>
              </div>
              </div>
              <div className="bouton-se-connecter">
                <div className="text-wrapper-10 center-text"
                style={{
                  curson:"pointer"
                }}
                >Se connecter</div>
              </div>
            </div>
          )

          }
          {/* div 3 end */}
          <p className="p">Ou s’inscrire avec une adresse e-mail</p>
          <div className="div-4">
            <div className="div-8">
              <label className="text-wrapper-7">Adresse e-mail</label>
              <div className="formulaire-nom-de-l">
                <input style={{backgroundColor: 'var(--pine-cone)'}} className="text-wrapper-8 center-text" placeholder="Entrez votre adresse e-mail" />
              </div>
            </div>
            <div className="div-8">
              <label className="text-wrapper-7">Prénom</label>
              <div className="formulaire-nom-de-l">
                <input style={{backgroundColor: 'var(--pine-cone)'}} className="text-wrapper-8 center-text" placeholder="Entrez votre prénom" />
              </div>
            </div>
            <div className="div-8">
              <label className="text-wrapper-7">Nom</label>
              <div className="formulaire-nom-de-l">
                <input style={{backgroundColor: 'var(--pine-cone)'}} className="text-wrapper-8 center-text" placeholder="Entrez votre nom" />
              </div>
            </div>
  

            <div className="div-8">
  <label className="text-wrapper-7">Genre</label>
  <div className="formulaire-nom-de-l">
    <select className="custom-input">
      <option value="homme">Homme</option>
      <option value="femme">Femme</option>
      <option value="autre">Autre</option>
    </select>
  </div>
</div>
<div className="div-8">
  <label className="text-wrapper-9">Date de naissance</label>
  <div className="formulaire-nom-de-l">
    <input type="date" className="custom-input" />
  </div>
</div>

          </div>
          
          <div className="bouton-se-connecter">
            <div className="text-wrapper-10 center-text">Rejoindre COPA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
