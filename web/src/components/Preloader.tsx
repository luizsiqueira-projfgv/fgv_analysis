import React from "react"

export const Preloader = () => {
    return (
        <div className="preloader flex-column justify-content-center align-items-center">
            <img className="animation__shake" src="/src/assets/fgv-logo2.svg" alt="logo FGV" height="720" width="360"/>
        </div>
    )
}